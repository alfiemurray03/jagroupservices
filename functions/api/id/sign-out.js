import {
  SESSION_COOKIE,
  clearCookie,
  getMetadata,
  getOidcConfig,
  json,
} from './_shared.js';

const DEFAULT_POST_LOGOUT_REDIRECT_URI = 'https://jagroupservices.co.uk/id/sign-in';

function postLogoutRedirectUri(env) {
  const value = String(env.OIDC_POST_LOGOUT_REDIRECT_URI || DEFAULT_POST_LOGOUT_REDIRECT_URI).trim();
  const url = new URL(value);
  if (url.protocol !== 'https:' && !['localhost', '127.0.0.1'].includes(url.hostname)) {
    throw new Error('OIDC_POST_LOGOUT_REDIRECT_URI must use HTTPS');
  }
  return url.toString();
}

async function federatedSignOut(env) {
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

export async function onRequestGet({ env }) {
  try {
    return await federatedSignOut(env);
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
