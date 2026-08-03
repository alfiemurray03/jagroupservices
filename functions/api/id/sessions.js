import {
  SESSION_COOKIE,
  getOidcConfig,
  json,
  parseCookies,
  verifySignedPayload,
} from './_shared.js';
import {
  listConnectedSessions,
  revokeConnectedSessions,
} from './_connected-sessions.js';

function sameOrigin(request) {
  const origin = request.headers.get('Origin');
  const url = new URL(request.url);
  const fetchSite = request.headers.get('Sec-Fetch-Site');
  if (origin && origin !== url.origin) return false;
  return !fetchSite || ['same-origin', 'same-site', 'none'].includes(fetchSite);
}

async function localSession(request, env) {
  const config = getOidcConfig(env);
  const value = parseCookies(request)[SESSION_COOKIE];
  const session = await verifySignedPayload(value, config.signingSecret);
  const now = Math.floor(Date.now() / 1000);
  if (!session?.user || Number(session.exp) <= now) return null;
  return session;
}

function safeError(error) {
  const status = Number(error?.status || (error?.name === 'AbortError' ? 504 : 503));
  return json({
    success: false,
    code: String(error?.code || 'CONNECTED_SESSIONS_UNAVAILABLE').slice(0, 120),
    error: String(error?.message || 'Connected sessions are temporarily unavailable.').slice(0, 300),
  }, status >= 400 && status <= 599 ? status : 503);
}

function markCurrent(payload, session) {
  return {
    ...payload,
    sessions: (payload?.sessions || []).map(item => ({
      ...item,
      current: Boolean(session.centralSessionId && item.id === session.centralSessionId),
    })),
  };
}

export async function onRequestGet({ request, env }) {
  try {
    const session = await localSession(request, env);
    if (!session) return json({ success: false, error: 'Authentication required.' }, 401);
    const payload = await listConnectedSessions(env, session.user);
    return json({ success: true, ...markCurrent(payload, session) });
  } catch (error) {
    console.error('ja-id.sessions.read.failed', error);
    return safeError(error);
  }
}

export async function onRequestPost({ request, env }) {
  if (!sameOrigin(request)) return json({ success: false, error: 'Request origin was rejected.' }, 403);
  try {
    const session = await localSession(request, env);
    if (!session) return json({ success: false, error: 'Authentication required.' }, 401);
    const text = await request.text();
    if (text.length > 8_000) return json({ success: false, error: 'The session request is too large.' }, 413);
    const body = text ? JSON.parse(text) : {};
    const action = String(body.action || '').trim().toLowerCase();
    if (!['revoke_all', 'revoke_others'].includes(action)) {
      return json({ success: false, error: 'Select a valid session action.' }, 400);
    }
    const payload = await revokeConnectedSessions(
      env,
      session.user,
      action,
      action === 'revoke_others' ? session.sessionReference : null,
    );
    return json({ success: true, action, ...markCurrent(payload, session) });
  } catch (error) {
    console.error('ja-id.sessions.update.failed', error);
    return safeError(error);
  }
}
