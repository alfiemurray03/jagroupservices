const DEFAULT_HEAD_OFFICE_URL = 'https://customerops.jagroupservices.co.uk';

function clean(value, max = 1000) {
  return String(value ?? '').trim().slice(0, max);
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

export async function requestHeadOffice(env, path, init = {}, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), Number(options.timeoutMs || 12_000));
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
    if (options.allow404 && response.status === 404) return { response, payload };
    if (!response.ok) {
      const error = new Error(payload?.error?.message || payload?.message || 'Head Office rejected the request.');
      error.code = payload?.error?.code || payload?.code || `HEAD_OFFICE_HTTP_${response.status}`;
      error.status = response.status;
      throw error;
    }
    return options.withResponse ? { response, payload } : payload;
  } finally {
    clearTimeout(timeout);
  }
}

export async function synchroniseCustomer(env, user) {
  if (!user?.tenantId || !user?.objectId || !user?.email) {
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

function browserName(userAgent) {
  if (/Edg\//i.test(userAgent)) return 'Microsoft Edge';
  if (/OPR\//i.test(userAgent)) return 'Opera';
  if (/Firefox\//i.test(userAgent)) return 'Mozilla Firefox';
  if (/CriOS\//i.test(userAgent)) return 'Google Chrome';
  if (/Chrome\//i.test(userAgent)) return 'Google Chrome';
  if (/Safari\//i.test(userAgent) && !/Chrome|Chromium|CriOS/i.test(userAgent)) return 'Safari';
  return 'Web browser';
}

function operatingSystem(userAgent) {
  if (/Windows NT 10\.0/i.test(userAgent)) return 'Windows';
  if (/Windows/i.test(userAgent)) return 'Windows';
  if (/iPhone|iPad|iPod/i.test(userAgent)) return 'iOS or iPadOS';
  if (/Android/i.test(userAgent)) return 'Android';
  if (/Mac OS X/i.test(userAgent)) return 'macOS';
  if (/Linux/i.test(userAgent)) return 'Linux';
  return 'Unknown operating system';
}

function deviceCategory(userAgent) {
  if (/iPad|Tablet/i.test(userAgent)) return 'tablet';
  if (/Mobi|iPhone|Android/i.test(userAgent)) return 'mobile';
  return 'computer';
}

function describeRequest(request) {
  const userAgent = clean(request.headers.get('user-agent'), 500);
  const browser = browserName(userAgent);
  const os = operatingSystem(userAgent);
  const category = deviceCategory(userAgent);
  const cf = request.cf || {};
  return {
    device: {
      category,
      name: `${browser} on ${os}`,
      browser,
      operatingSystem: os,
      userAgentSummary: `${browser} · ${os} · ${category}`,
    },
    location: {
      countryCode: clean(cf.country, 8),
      countryName: clean(cf.country, 100),
      region: clean(cf.region, 120),
      city: clean(cf.city, 120),
    },
  };
}

export async function registerConnectedSession(request, env, user, sessionReference, issuedAt, expiresAt) {
  await synchroniseCustomer(env, user);
  const client = describeRequest(request);
  return requestHeadOffice(env, '/api/platform/sessions', {
    method: 'POST',
    body: JSON.stringify({
      customer: {
        tenantId: user.tenantId,
        objectId: user.objectId,
        platformCustomerId: user.id,
      },
      session: {
        externalSessionId: sessionReference,
        status: 'active',
        startedAt: issuedAt,
        lastSeenAt: new Date().toISOString(),
        expiresAt,
        ...client,
        metadata: {
          service: 'JA Group Services ID Dashboard',
          authenticationProvider: user.identityProvider || 'Microsoft Entra External ID',
        },
      },
    }),
  });
}

export async function connectedSessionDecision(env, sessionReference) {
  if (!sessionReference) return null;
  const result = await requestHeadOffice(
    env,
    `/api/platform/sessions/${encodeURIComponent(sessionReference)}`,
    { method: 'GET' },
    { allow404: true },
  );
  if (result?.response) return result.response.status === 404 ? null : result.payload;
  return result;
}

export async function closeConnectedSession(env, sessionReference, reason) {
  if (!sessionReference) return null;
  const result = await requestHeadOffice(
    env,
    `/api/platform/sessions/${encodeURIComponent(sessionReference)}`,
    { method: 'DELETE', body: JSON.stringify({ reason: clean(reason, 500) }) },
    { allow404: true },
  );
  return result?.response ? result.payload : result;
}

function identityQuery(user) {
  return new URLSearchParams({ tenantId: user.tenantId, objectId: user.objectId }).toString();
}

export function listConnectedSessions(env, user) {
  return requestHeadOffice(env, `/api/platform/identity/sessions?${identityQuery(user)}`);
}

export function revokeConnectedSession(env, user, centralSessionId, reason) {
  return requestHeadOffice(env, `/api/platform/identity/sessions/${encodeURIComponent(centralSessionId)}`, {
    method: 'POST',
    body: JSON.stringify({
      tenantId: user.tenantId,
      objectId: user.objectId,
      reason: clean(reason, 500),
    }),
  });
}

export function revokeConnectedSessions(env, user, action, currentSessionReference = null) {
  return requestHeadOffice(env, '/api/platform/identity/sessions', {
    method: 'POST',
    body: JSON.stringify({
      tenantId: user.tenantId,
      objectId: user.objectId,
      action,
      currentSessionReference,
      reason: action === 'revoke_others'
        ? 'Customer signed out every other connected JA Group Services session.'
        : 'Customer signed out every connected JA Group Services session.',
    }),
  });
}
