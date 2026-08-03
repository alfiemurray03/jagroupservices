import {
  FLOW_COOKIE,
  FLOW_MAX_AGE_SECONDS,
  cookie,
  getMetadata,
  getOidcConfig,
  pkceChallenge,
  randomToken,
  redirect,
  signPayload,
} from './_shared.js';

export async function onRequestGet({ env }) {
  try {
    const config = getOidcConfig(env);
    const metadata = await getMetadata(config);
    const state = randomToken(32);
    const nonce = randomToken(32);
    const verifier = randomToken(48);
    const challenge = await pkceChallenge(verifier);
    const expiresAt = Math.floor(Date.now() / 1000) + FLOW_MAX_AGE_SECONDS;

    const flow = await signPayload(
      {
        state,
        nonce,
        verifier,
        redirectUri: config.redirectUri,
        returnTo: '/id/dashboard',
        exp: expiresAt,
      },
      config.signingSecret,
    );

    const authorisationUrl = new URL(metadata.authorization_endpoint);
    authorisationUrl.search = new URLSearchParams({
      client_id: config.clientId,
      response_type: 'code',
      redirect_uri: config.redirectUri,
      response_mode: 'query',
      scope: 'openid profile email',
      state,
      nonce,
      code_challenge: challenge,
      code_challenge_method: 'S256',
    }).toString();

    return redirect(authorisationUrl.toString(), {
      'set-cookie': cookie(FLOW_COOKIE, flow, FLOW_MAX_AGE_SECONDS),
    });
  } catch (error) {
    console.error('ja-id.sign-in.failed', error);
    return redirect('/id/sign-in?auth_error=configuration');
  }
}
