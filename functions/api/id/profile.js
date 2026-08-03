import {
  SESSION_COOKIE,
  getOidcConfig,
  json,
  parseCookies,
  verifySignedPayload,
} from './_shared.js';

const DEFAULT_HEAD_OFFICE_URL = 'https://customerops.jagroupservices.co.uk';

function clean(value, max = 1000) {
  return String(value ?? '').trim().slice(0, max);
}

function sameOrigin(request) {
  const origin = request.headers.get('Origin');
  const url = new URL(request.url);
  const fetchSite = request.headers.get('Sec-Fetch-Site');
  if (origin && origin !== url.origin) return false;
  return !fetchSite || ['same-origin', 'same-site', 'none'].includes(fetchSite);
}

function headOfficeOrigin(env) {
  const configured = clean(
    env.HEAD_OFFICE_CUSTOMEROPS_URL || env.CUSTOMEROPS_BASE_URL || DEFAULT_HEAD_OFFICE_URL,
    500,
  ).replace(/\/$/, '');
  const url = new URL(configured);
  if (url.protocol !== 'https:' && !['localhost', '127.0.0.1'].includes(url.hostname)) {
    throw new Error('The Head Office Customer Operations URL must use HTTPS');
  }
  return url.origin;
}

function platformKey(env) {
  const value = clean(env.CUSTOMEROPS_API_KEY || env.HEAD_OFFICE_PLATFORM_KEY, 500);
  if (value.length < 20) throw new Error('Head Office platform access is not configured');
  return value;
}

async function sessionUser(request, env) {
  const config = getOidcConfig(env);
  const value = parseCookies(request)[SESSION_COOKIE];
  const session = await verifySignedPayload(value, config.signingSecret);
  const now = Math.floor(Date.now() / 1000);
  if (!session?.user || Number(session.exp) <= now) return null;
  return { session, user: session.user };
}

async function requestHeadOffice(env, path, init = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12_000);
  try {
    const response = await fetch(`${headOfficeOrigin(env)}${path}`, {
      ...init,
      headers: {
        authorization: `Bearer ${platformKey(env)}`,
        accept: 'application/json',
        ...(init.body ? { 'content-type': 'application/json' } : {}),
        ...(init.headers || {}),
      },
      signal: controller.signal,
    });
    const payload = await response.json().catch(() => null);
    if (!response.ok) {
      const message = payload?.error?.message || payload?.message || 'Head Office rejected the request.';
      const code = payload?.error?.code || payload?.code || `HEAD_OFFICE_HTTP_${response.status}`;
      const error = new Error(message);
      error.code = code;
      error.status = response.status;
      throw error;
    }
    return payload;
  } finally {
    clearTimeout(timeout);
  }
}

async function synchroniseCustomer(env, user) {
  if (!user.tenantId || !user.objectId || !user.email) {
    const error = new Error('Microsoft did not provide the identity details required for the central customer record.');
    error.code = 'IDENTITY_DETAILS_INCOMPLETE';
    error.status = 409;
    throw error;
  }

  return requestHeadOffice(env, '/api/platform/customers/upsert', {
    method: 'POST',
    body: JSON.stringify({
      entraTenantId: user.tenantId,
      entraObjectId: user.objectId,
      platformCustomerId: user.id,
      displayName: user.name,
      email: user.email.toLowerCase(),
      userPrincipalName: user.email,
      accountEnabled: true,
      accountStatus: 'active',
      lastSignInAt: new Date().toISOString(),
      secureRecordUrl: 'https://jagroupservices.co.uk/id/dashboard',
      platformMetadata: {
        platformCode: 'JA_GROUP_SERVICES_ID',
        source: 'central_customer_dashboard',
      },
    }),
  });
}

function profilePath(user) {
  const query = new URLSearchParams({
    tenantId: user.tenantId,
    objectId: user.objectId,
  });
  return `/api/platform/identity/profile?${query.toString()}`;
}

function safeFailure(error) {
  const timedOut = error?.name === 'AbortError';
  const status = timedOut ? 504 : Number(error?.status || 503);
  return json({
    success: false,
    code: timedOut ? 'HEAD_OFFICE_TIMEOUT' : clean(error?.code || 'HEAD_OFFICE_PROFILE_UNAVAILABLE', 120),
    error: timedOut
      ? 'Head Office did not respond within the secure timeout.'
      : clean(error?.message || 'The central customer profile is temporarily unavailable.', 300),
  }, status >= 400 && status <= 599 ? status : 503);
}

export async function onRequestGet({ request, env }) {
  try {
    const identity = await sessionUser(request, env);
    if (!identity) return json({ success: false, error: 'Authentication required.' }, 401);

    await synchroniseCustomer(env, identity.user);
    const profile = await requestHeadOffice(env, profilePath(identity.user));
    return json({ success: true, ...profile });
  } catch (error) {
    console.error('ja-id.profile.read.failed', error);
    return safeFailure(error);
  }
}

export async function onRequestPut({ request, env }) {
  if (!sameOrigin(request)) return json({ success: false, error: 'Request origin was rejected.' }, 403);

  try {
    const identity = await sessionUser(request, env);
    if (!identity) return json({ success: false, error: 'Authentication required.' }, 401);

    const text = await request.text();
    if (text.length > 24_000) return json({ success: false, error: 'The profile update is too large.' }, 413);
    const body = text ? JSON.parse(text) : {};

    const synchronised = await synchroniseCustomer(env, identity.user);
    const profile = await requestHeadOffice(env, '/api/platform/identity/profile', {
      method: 'PUT',
      body: JSON.stringify({
        tenantId: identity.user.tenantId,
        objectId: identity.user.objectId,
        customerNumber: synchronised?.customer?.customerNumber || null,
        profile: body.profile || {},
      }),
    });
    return json({ success: true, ...profile });
  } catch (error) {
    console.error('ja-id.profile.update.failed', error);
    return safeFailure(error);
  }
}
