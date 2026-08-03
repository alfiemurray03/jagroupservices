import {
  SESSION_COOKIE,
  getOidcConfig,
  json,
  parseCookies,
  verifySignedPayload,
} from '../_shared.js';
import { revokeConnectedSession } from '../_connected-sessions.js';

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

export async function onRequestPost({ request, env, params }) {
  if (!sameOrigin(request)) return json({ success: false, error: 'Request origin was rejected.' }, 403);
  try {
    const session = await localSession(request, env);
    if (!session) return json({ success: false, error: 'Authentication required.' }, 401);
    const centralSessionId = String(params.id || '').trim().slice(0, 100);
    if (!centralSessionId) return json({ success: false, error: 'The session reference is missing.' }, 400);
    if (session.centralSessionId && centralSessionId === session.centralSessionId) {
      return json({
        success: false,
        current: true,
        error: 'Use Sign out to end the current browser session safely through Microsoft.',
      }, 409);
    }
    const payload = await revokeConnectedSession(
      env,
      session.user,
      centralSessionId,
      'Customer requested sign-out from this connected device.',
    );
    return json({ success: true, ...payload });
  } catch (error) {
    console.error('ja-id.session.revoke.failed', error);
    const status = Number(error?.status || (error?.name === 'AbortError' ? 504 : 503));
    return json({
      success: false,
      code: String(error?.code || 'SESSION_REVOCATION_FAILED').slice(0, 120),
      error: String(error?.message || 'The selected session could not be revoked.').slice(0, 300),
    }, status >= 400 && status <= 599 ? status : 503);
  }
}
