const encoder = new TextEncoder();
const decoder = new TextDecoder();

export const FLOW_COOKIE = 'ja_id_oidc_flow';
export const SESSION_COOKIE = 'ja_id_session';
export const FLOW_MAX_AGE_SECONDS = 10 * 60;
export const SESSION_MAX_AGE_SECONDS = 8 * 60 * 60;

function required(value, name) {
  const text = String(value || '').trim();
  if (!text) throw new Error(`${name} is not configured`);
  return text;
}

export function getOidcConfig(env) {
  const clientId = required(env.OIDC_CLIENT_ID, 'OIDC_CLIENT_ID');
  const clientSecret = required(env.OIDC_CLIENT_SECRET, 'OIDC_CLIENT_SECRET');
  const tenantId = required(env.OIDC_TENANT_ID, 'OIDC_TENANT_ID');
  const metadataUrl = required(env.OIDC_METADATA_URL, 'OIDC_METADATA_URL');
  const redirectUri = String(env.OIDC_REDIRECT_URI || 'https://jagroupservices.co.uk/api/id/callback').trim();
  const signingSecret = String(env.JA_ID_SESSION_SECRET || clientSecret).trim();

  for (const [name, value] of [['OIDC_METADATA_URL', metadataUrl], ['OIDC_REDIRECT_URI', redirectUri]]) {
    const parsed = new URL(value);
    if (parsed.protocol !== 'https:') throw new Error(`${name} must use HTTPS`);
  }

  return { clientId, clientSecret, tenantId, metadataUrl, redirectUri, signingSecret };
}

export async function getMetadata(config) {
  const response = await fetch(config.metadataUrl, {
    headers: { accept: 'application/json' },
    cf: { cacheTtl: 300, cacheEverything: true },
  });
  if (!response.ok) throw new Error('Microsoft identity metadata is unavailable');
  const metadata = await response.json();
  if (!metadata.authorization_endpoint || !metadata.token_endpoint || !metadata.jwks_uri || !metadata.issuer) {
    throw new Error('Microsoft identity metadata is incomplete');
  }
  return metadata;
}

export function parseCookies(request) {
  const result = {};
  const header = request.headers.get('cookie') || '';
  for (const part of header.split(';')) {
    const index = part.indexOf('=');
    if (index < 1) continue;
    const key = part.slice(0, index).trim();
    const value = part.slice(index + 1).trim();
    try {
      result[key] = decodeURIComponent(value);
    } catch {
      result[key] = value;
    }
  }
  return result;
}

export function cookie(name, value, maxAge, options = {}) {
  const attributes = [
    `${name}=${encodeURIComponent(value)}`,
    'Path=/',
    `Max-Age=${Math.max(0, Math.floor(maxAge))}`,
    'Secure',
    'HttpOnly',
    `SameSite=${options.sameSite || 'Lax'}`,
  ];
  if (options.domain) attributes.push(`Domain=${options.domain}`);
  return attributes.join('; ');
}

export function clearCookie(name) {
  return cookie(name, '', 0);
}

export function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      'x-content-type-options': 'nosniff',
      ...headers,
    },
  });
}

export function redirect(location, headers = {}) {
  return new Response(null, {
    status: 302,
    headers: {
      location,
      'cache-control': 'no-store',
      ...headers,
    },
  });
}

function base64UrlEncodeBytes(bytes) {
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replaceAll('+', '-').replaceAll('/', '_').replaceAll('=', '');
}

function base64UrlDecodeBytes(value) {
  const normalized = value.replaceAll('-', '+').replaceAll('_', '/');
  const padded = normalized + '='.repeat((4 - (normalized.length % 4)) % 4);
  const binary = atob(padded);
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

function base64UrlEncodeText(value) {
  return base64UrlEncodeBytes(encoder.encode(value));
}

function base64UrlDecodeText(value) {
  return decoder.decode(base64UrlDecodeBytes(value));
}

export function randomToken(size = 32) {
  const bytes = new Uint8Array(size);
  crypto.getRandomValues(bytes);
  return base64UrlEncodeBytes(bytes);
}

export async function pkceChallenge(verifier) {
  const digest = await crypto.subtle.digest('SHA-256', encoder.encode(verifier));
  return base64UrlEncodeBytes(new Uint8Array(digest));
}

async function hmacKey(secret, usages) {
  return crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    usages,
  );
}

export async function signPayload(payload, secret) {
  const encoded = base64UrlEncodeText(JSON.stringify(payload));
  const key = await hmacKey(secret, ['sign']);
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(encoded));
  return `${encoded}.${base64UrlEncodeBytes(new Uint8Array(signature))}`;
}

export async function verifySignedPayload(value, secret) {
  if (!value || typeof value !== 'string') return null;
  const [encoded, signature, extra] = value.split('.');
  if (!encoded || !signature || extra) return null;

  try {
    const key = await hmacKey(secret, ['verify']);
    const valid = await crypto.subtle.verify(
      'HMAC',
      key,
      base64UrlDecodeBytes(signature),
      encoder.encode(encoded),
    );
    if (!valid) return null;
    return JSON.parse(base64UrlDecodeText(encoded));
  } catch {
    return null;
  }
}

function decodeJwtPart(value) {
  return JSON.parse(base64UrlDecodeText(value));
}

export async function verifyIdToken(idToken, metadata, config, expectedNonce) {
  const parts = String(idToken || '').split('.');
  if (parts.length !== 3) throw new Error('Microsoft returned an invalid identity token');

  const header = decodeJwtPart(parts[0]);
  const claims = decodeJwtPart(parts[1]);
  if (header.alg !== 'RS256' || !header.kid) throw new Error('Unsupported Microsoft identity token');

  const keysResponse = await fetch(metadata.jwks_uri, {
    headers: { accept: 'application/json' },
    cf: { cacheTtl: 300, cacheEverything: true },
  });
  if (!keysResponse.ok) throw new Error('Microsoft signing keys are unavailable');
  const keys = await keysResponse.json();
  const jwk = keys.keys?.find((candidate) => candidate.kid === header.kid && candidate.kty === 'RSA');
  if (!jwk) throw new Error('Microsoft signing key was not found');

  const publicKey = await crypto.subtle.importKey(
    'jwk',
    jwk,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['verify'],
  );
  const validSignature = await crypto.subtle.verify(
    'RSASSA-PKCS1-v1_5',
    publicKey,
    base64UrlDecodeBytes(parts[2]),
    encoder.encode(`${parts[0]}.${parts[1]}`),
  );

  const now = Math.floor(Date.now() / 1000);
  const audienceValid = claims.aud === config.clientId || (Array.isArray(claims.aud) && claims.aud.includes(config.clientId));
  const issuerValid = claims.iss === metadata.issuer;
  const tenantValid = !claims.tid || claims.tid === config.tenantId;
  const timeValid = Number(claims.exp) > now && (!claims.nbf || Number(claims.nbf) <= now + 60);
  const nonceValid = claims.nonce === expectedNonce;

  if (!validSignature || !audienceValid || !issuerValid || !tenantValid || !timeValid || !nonceValid) {
    throw new Error('Microsoft identity token validation failed');
  }
  return claims;
}

export function normaliseUser(claims) {
  const email = String(
    claims.email ||
    claims.preferred_username ||
    (Array.isArray(claims.emails) ? claims.emails[0] : '') ||
    '',
  ).trim();
  const subject = String(claims.sub || '').trim();
  if (!subject) throw new Error('Microsoft identity did not include a subject identifier');

  return {
    id: subject,
    objectId: String(claims.oid || subject),
    tenantId: String(claims.tid || ''),
    name: String(claims.name || email || 'JA Group Services customer').trim(),
    email,
    identityProvider: String(claims.idp || 'Microsoft Entra External ID'),
  };
}

export function safeErrorCode(error) {
  const message = error instanceof Error ? error.message : String(error || 'Authentication failed');
  if (message.includes('not configured')) return 'configuration';
  if (message.includes('metadata')) return 'metadata';
  if (message.includes('token')) return 'token';
  if (message.includes('state')) return 'state';
  return 'authentication';
}
