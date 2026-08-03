import {
  SESSION_COOKIE,
  clearCookie,
  cookie,
  getOidcConfig,
  json,
  parseCookies,
  signPayload,
  verifySignedPayload,
} from './_shared.js';
import {
  connectedSessionDecision,
  registerConnectedSession,
} from './_connected-sessions.js';

export async function onRequestGet({ request, env }) {
  try {
    const config = getOidcConfig(env);
    const value = parseCookies(request)[SESSION_COOKIE];
    const session = await verifySignedPayload(value, config.signingSecret);
    const now = Math.floor(Date.now() / 1000);

    if (!session || !session.user || Number(session.exp) <= now) {
      return json(
        { authenticated: false },
        200,
        value ? { 'set-cookie': clearCookie(SESSION_COOKIE) } : {},
      );
    }

    let centralSessionId = session.centralSessionId || null;
    let centralStatus = 'unavailable';
    let replacementCookie = null;

    if (session.sessionReference) {
      try {
        let decision = await connectedSessionDecision(env, session.sessionReference);
        if (!decision?.found) {
          const registered = await registerConnectedSession(
            request,
            env,
            session.user,
            session.sessionReference,
            new Date(Number(session.issuedAt) * 1000).toISOString(),
            new Date(Number(session.exp) * 1000).toISOString(),
          );
          centralSessionId = registered?.session?.id || centralSessionId;
          decision = { found: true, active: true, status: 'active' };
          if (centralSessionId !== session.centralSessionId) {
            const maxAge = Math.max(0, Number(session.exp) - now);
            const updated = await signPayload({ ...session, centralSessionId }, config.signingSecret);
            replacementCookie = cookie(SESSION_COOKIE, updated, maxAge);
          }
        }

        centralStatus = decision?.status || 'unknown';
        if (decision?.revoke || decision?.active === false) {
          return json(
            { authenticated: false, revoked: true, reason: 'connected_session_revoked' },
            200,
            { 'set-cookie': clearCookie(SESSION_COOKIE) },
          );
        }
      } catch (error) {
        // Central session checks fail open during a short Head Office outage so an
        // operational-control failure cannot lock every valid customer out.
        console.error('ja-id.central-session.check.failed', error);
      }
    }

    return json({
      authenticated: true,
      user: session.user,
      session: {
        id: centralSessionId,
        reference: session.sessionReference || null,
        centralStatus,
        issuedAt: new Date(Number(session.issuedAt) * 1000).toISOString(),
        expiresAt: new Date(Number(session.exp) * 1000).toISOString(),
        authTime: new Date(Number(session.authTime || session.issuedAt) * 1000).toISOString(),
        authenticationContext: session.authenticationContext || null,
      },
    }, 200, replacementCookie ? { 'set-cookie': replacementCookie } : {});
  } catch (error) {
    console.error('ja-id.session.failed', error);
    return json({ authenticated: false, error: 'identity_service_unavailable' }, 503);
  }
}
