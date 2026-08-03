import {
  SESSION_COOKIE,
  clearCookie,
  getOidcConfig,
  json,
  parseCookies,
  verifySignedPayload,
} from './_shared.js';

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

    return json({
      authenticated: true,
      user: session.user,
      session: {
        issuedAt: new Date(Number(session.issuedAt) * 1000).toISOString(),
        expiresAt: new Date(Number(session.exp) * 1000).toISOString(),
        authTime: new Date(Number(session.authTime || session.issuedAt) * 1000).toISOString(),
        authenticationContext: session.authenticationContext || null,
      },
    });
  } catch (error) {
    console.error('ja-id.session.failed', error);
    return json({ authenticated: false, error: 'identity_service_unavailable' }, 503);
  }
}
