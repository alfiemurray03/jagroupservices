import {
  FLOW_COOKIE,
  SESSION_COOKIE,
  SESSION_MAX_AGE_SECONDS,
  clearCookie,
  cookie,
  getMetadata,
  getOidcConfig,
  normaliseUser,
  parseCookies,
  safeErrorCode,
  signPayload,
  verifyIdToken,
  verifySignedPayload,
} from './_shared.js';

function callbackRedirect(location, cookies = []) {
  const headers = new Headers({
    location,
    'cache-control': 'no-store',
  });
  for (const value of cookies) headers.append('set-cookie', value);
  return new Response(null, { status: 302, headers });
}

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);

  try {
    if (url.searchParams.get('error')) {
      return callbackRedirect('/id?auth_error=access_denied', [clearCookie(FLOW_COOKIE)]);
    }

    const code = String(url.searchParams.get('code') || '');
    const returnedState = String(url.searchParams.get('state') || '');
    if (!code || !returnedState) throw new Error('Microsoft callback state or code is missing');

    const config = getOidcConfig(env);
    const flowCookie = parseCookies(request)[FLOW_COOKIE];
    const flow = await verifySignedPayload(flowCookie, config.signingSecret);
    const now = Math.floor(Date.now() / 1000);

    if (!flow || flow.state !== returnedState || Number(flow.exp) <= now) {
      throw new Error('Microsoft callback state is invalid or expired');
    }
    if (flow.redirectUri !== config.redirectUri) throw new Error('Microsoft callback redirect URI does not match');

    const metadata = await getMetadata(config);
    const tokenResponse = await fetch(metadata.token_endpoint, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: config.clientId,
        client_secret: config.clientSecret,
        grant_type: 'authorization_code',
        code,
        redirect_uri: config.redirectUri,
        code_verifier: String(flow.verifier),
      }),
    });
    const tokens = await tokenResponse.json();
    if (!tokenResponse.ok || !tokens.id_token) {
      console.error('ja-id.token-exchange.failed', { status: tokenResponse.status, error: tokens.error });
      throw new Error('Microsoft token exchange failed');
    }

    const claims = await verifyIdToken(tokens.id_token, metadata, config, flow.nonce);
    const user = normaliseUser(claims);
    const tokenExpiresAt = Number(claims.exp);
    const maxAge = Math.max(60, Math.min(SESSION_MAX_AGE_SECONDS, tokenExpiresAt - now));
    const issuedAt = now;
    const expiresAt = now + maxAge;

    const session = await signPayload(
      {
        user,
        issuedAt,
        exp: expiresAt,
        authTime: Number(claims.auth_time || issuedAt),
        authenticationContext: String(claims.acr || claims.tfp || ''),
      },
      config.signingSecret,
    );

    return callbackRedirect(String(flow.returnTo || '/id'), [
      cookie(SESSION_COOKIE, session, maxAge),
      clearCookie(FLOW_COOKIE),
    ]);
  } catch (error) {
    console.error('ja-id.callback.failed', error);
    return callbackRedirect(`/id?auth_error=${encodeURIComponent(safeErrorCode(error))}`, [clearCookie(FLOW_COOKIE)]);
  }
}
