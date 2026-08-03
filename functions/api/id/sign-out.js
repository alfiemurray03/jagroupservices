import { SESSION_COOKIE, clearCookie, json } from './_shared.js';

export async function onRequestPost({ request }) {
  const requestUrl = new URL(request.url);
  const origin = request.headers.get('origin');
  if (origin && origin !== requestUrl.origin) {
    return json({ error: 'invalid_origin' }, 403);
  }

  return json(
    { signedOut: true },
    200,
    { 'set-cookie': clearCookie(SESSION_COOKIE) },
  );
}
