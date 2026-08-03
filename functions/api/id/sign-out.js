import {
  SESSION_COOKIE,
  clearCookie,
  getMetadata,
  getOidcConfig,
  json,
  parseCookies,
  verifySignedPayload,
} from './_shared.js';
import { closeConnectedSession } from './_connected-sessions.js';

const DEFAULT_POST_LOGOUT_REDIRECT_URI = 'https://jagroupservices.co.uk/id/sign-in';

function postLogoutRedirectUri(env) {
  const value = String(env.OIDC_POST_LOGOUT_REDIRECT_URI || DEFAULT_POST_LOGOUT_REDIRECT_URI).trim();
  const url = new URL(value);
  if (url.protocol !== 'https:' && !['localhost', '127.0.0.1'].includes(url.hostname)) {
    throw new Error('OIDC_POST_LOGOUT_REDIRECT_URI must use HTTPS');
  }
  return url.toString();
}

async function currentSession(request, env) {
  try {
    const config = getOidcConfig(env);
    const value = parseCookies(request)[SESSION_COOKIE];
    return verifySignedPayload(value, config.signingSecret);
  } catch {
    return null;
  }
}

async function closeCentralSession(request, env) {
  const session = await currentSession(request, env);
  if (!session?.sessionReference) return;
  try {
    await closeConnectedSession(env, session.sessionReference, 'Customer signed out of the JA Group Services ID Dashboard.');
  } catch (error) {
    console.error('ja-id.central-session.close.failed', error);
  }
}

async function federatedSignOut(request, env) {
  await closeCentralSession(request, env);
  const config = getOidcConfig(env);
  const metadata = await getMetadata(config);
  const endpoint = String(metadata.end_session_endpoint || '').trim();
  if (!endpoint) throw new Error('Microsoft identity metadata does not include an end-session endpoint');

  const logoutUrl = new URL(endpoint);
  logoutUrl.searchParams.set('post_logout_redirect_uri', postLogoutRedirectUri(env));

  return new Response(null, {
    status: 302,
    headers: {
      location: logoutUrl.toString(),
      'set-cookie': clearCookie(SESSION_COOKIE),
      'cache-control': 'no-store',
      'referrer-policy': 'no-referrer',
    },
  });
}

export async function onRequestGet({ request, env }) {
  try {
    return await federatedSignOut(request, env);
  } catch (error) {
    console.error('ja-id.federated-sign-out.failed', error);
    return new Response(null, {
      status: 302,
      headers: {
        location: '/id/sign-in?auth_error=sign_out',
        'set-cookie': clearCookie(SESSION_COOKIE),
        'cache-control': 'no-store',
      },
    });
  }
}

export async function onRequestPost({ request, env }) {
  const requestUrl = new URL(request.url);
  const origin = request.headers.get('origin');
  if (origin && origin !== requestUrl.origin) {
    return json({ error: 'invalid_origin' }, 403);
  }

  await closeCentralSession(request, env);

  try {
    const config = getOidcConfig(env);
    const metadata = await getMetadata(config);
    const endpoint = String(metadata.end_session_endpoint || '').trim();
    if (!endpoint) throw new Error('Microsoft identity metadata does not include an end-session endpoint');
    const logoutUrl = new URL(endpoint);
    logoutUrl.searchParams.set('post_logout_redirect_uri', postLogoutRedirectUri(env));

    return json(
      { signedOut: true, logoutUrl: logoutUrl.toString() },
      200,
      { 'set-cookie': clearCookie(SESSION_COOKIE) },
    );
  } catch (error) {
    console.error('ja-id.sign-out-url.failed', error);
    return json(
      { signedOut: true, logoutUrl: '/id/sign-in?auth_error=sign_out' },
      200,
      { 'set-cookie': clearCookie(SESSION_COOKIE) },
    );
  }
}
