const SIGN_OUT_LABELS = new Set([
  'sign out',
  'sign out this session',
]);

function normaliseLabel(value: string | null | undefined) {
  return String(value || '').replace(/\s+/g, ' ').trim().toLowerCase();
}

/**
 * Existing JA Group Services ID pages use React button handlers that clear the
 * local session. Capture those explicit sign-out controls before React handles
 * them and perform a top-level OIDC logout navigation instead. A top-level
 * navigation is required so Microsoft can clear its own authentication cookie.
 */
export function installJAIDFederatedSignOut() {
  document.addEventListener('click', event => {
    if (!window.location.pathname.startsWith('/id')) return;

    const target = event.target;
    if (!(target instanceof Element)) return;
    const button = target.closest('button');
    if (!button || !SIGN_OUT_LABELS.has(normaliseLabel(button.textContent))) return;

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    window.location.assign('/api/id/sign-out');
  }, true);
}
