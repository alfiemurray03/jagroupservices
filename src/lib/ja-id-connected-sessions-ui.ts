type ConnectedSession = {
  id: string;
  platformCode?: string;
  platformName?: string;
  status: string;
  current?: boolean;
  device?: {
    category?: string | null;
    name?: string | null;
    browser?: string | null;
    operatingSystem?: string | null;
  };
  location?: {
    countryCode?: string | null;
    countryName?: string | null;
    region?: string | null;
    city?: string | null;
  };
  startedAt?: string | null;
  lastSeenAt?: string | null;
  expiresAt?: string | null;
  revocationRequestedAt?: string | null;
};

type SessionsPayload = {
  success?: boolean;
  sessions?: ConnectedSession[];
  error?: string;
};

let installed = false;
let observer: MutationObserver | null = null;

function escapeHtml(value: unknown) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character] || character);
}

function formatDate(value?: string | null) {
  if (!value) return 'Not reported';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Not reported';
  return new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium', timeStyle: 'short' }).format(date);
}

function locationLabel(session: ConnectedSession) {
  const location = session.location || {};
  return [location.city, location.region, location.countryName || location.countryCode].filter(Boolean).join(', ') || 'Approximate location unavailable';
}

function deviceLabel(session: ConnectedSession) {
  const device = session.device || {};
  return device.name || [device.browser, device.operatingSystem].filter(Boolean).join(' on ') || device.category || 'Unrecognised device';
}

function statusLabel(status: string) {
  return String(status || 'unknown').replaceAll('_', ' ').replace(/^./, (letter) => letter.toUpperCase());
}

function iconFor(session: ConnectedSession) {
  const category = session.device?.category;
  if (category === 'mobile') return '📱';
  if (category === 'tablet') return '▤';
  return '🖥️';
}

function findPlaceholder() {
  return [...document.querySelectorAll('div')].find((element) =>
    element.textContent?.includes('Coming next: every connected JA session'),
  ) as HTMLDivElement | undefined;
}

function sessionCard(session: ConnectedSession) {
  const active = session.status === 'active';
  const pending = session.status === 'revocation_required';
  const action = session.current
    ? '<a class="ja-id-session-action secondary" href="/api/id/sign-out">Sign out</a>'
    : active
      ? `<button class="ja-id-session-action danger" type="button" data-ja-session-revoke="${escapeHtml(session.id)}">Sign out device</button>`
      : '';
  const badgeClass = active ? 'active' : pending ? 'pending' : 'closed';
  const current = session.current ? '<span class="ja-id-current-badge">This device</span>' : '';
  return `<article class="ja-id-session-card" data-session-id="${escapeHtml(session.id)}">
    <div class="ja-id-session-icon" aria-hidden="true">${iconFor(session)}</div>
    <div class="ja-id-session-copy">
      <div class="ja-id-session-heading"><h3>${escapeHtml(session.platformName || session.platformCode || 'JA Group Services service')}</h3>${current}<span class="ja-id-session-status ${badgeClass}">${escapeHtml(statusLabel(session.status))}</span></div>
      <p class="ja-id-session-device">${escapeHtml(deviceLabel(session))}</p>
      <dl class="ja-id-session-facts">
        <div><dt>Location</dt><dd>${escapeHtml(locationLabel(session))}</dd></div>
        <div><dt>Last active</dt><dd>${escapeHtml(formatDate(session.lastSeenAt))}</dd></div>
        <div><dt>Signed in</dt><dd>${escapeHtml(formatDate(session.startedAt))}</dd></div>
        <div><dt>Expires</dt><dd>${escapeHtml(formatDate(session.expiresAt))}</dd></div>
      </dl>
    </div>
    <div class="ja-id-session-card-action">${action}</div>
  </article>`;
}

async function fetchSessions() {
  const response = await fetch('/api/id/sessions', {
    credentials: 'include',
    cache: 'no-store',
    headers: { accept: 'application/json' },
  });
  const data = await response.json() as SessionsPayload;
  if (!response.ok || data.success === false) throw new Error(data.error || 'Your connected sessions could not be loaded.');
  return data.sessions || [];
}

function shellMarkup() {
  return `<section class="ja-id-connected-sessions" data-ja-id-connected-sessions>
    <div class="ja-id-sessions-toolbar">
      <div><p class="ja-id-sessions-eyebrow">Central session register</p><h3>Every signed-in JA service</h3><p>Review devices using your JA Group Services ID and end access you no longer recognise.</p></div>
      <div class="ja-id-sessions-actions">
        <button type="button" class="ja-id-session-action secondary" data-ja-sessions-refresh>Refresh</button>
        <button type="button" class="ja-id-session-action secondary" data-ja-sessions-revoke-others>Sign out other sessions</button>
        <button type="button" class="ja-id-session-action danger" data-ja-sessions-revoke-all>Sign out everywhere</button>
      </div>
    </div>
    <div class="ja-id-sessions-notice" data-ja-sessions-notice role="status">Loading your connected sessions…</div>
    <div class="ja-id-session-list" data-ja-session-list></div>
    <p class="ja-id-session-footnote">Approximate locations are based on the service connection and may not show your exact position. Head Office can also revoke sessions during account recovery or security investigations.</p>
  </section>`;
}

async function renderSessions(shell: HTMLElement) {
  const notice = shell.querySelector<HTMLElement>('[data-ja-sessions-notice]');
  const list = shell.querySelector<HTMLElement>('[data-ja-session-list]');
  if (!notice || !list) return;
  notice.hidden = false;
  notice.className = 'ja-id-sessions-notice';
  notice.textContent = 'Loading your connected sessions…';
  try {
    const sessions = await fetchSessions();
    list.innerHTML = sessions.length
      ? sessions.map(sessionCard).join('')
      : '<div class="ja-id-session-empty"><strong>No connected sessions were reported</strong><span>Your current session will appear after the secure register completes its first check.</span></div>';
    notice.textContent = `${sessions.filter((session) => session.status === 'active').length} active session${sessions.filter((session) => session.status === 'active').length === 1 ? '' : 's'} across ${new Set(sessions.map((session) => session.platformCode || session.platformName)).size} connected service${new Set(sessions.map((session) => session.platformCode || session.platformName)).size === 1 ? '' : 's'}.`;
  } catch (error) {
    notice.className = 'ja-id-sessions-notice error';
    notice.textContent = error instanceof Error ? error.message : 'Your sessions could not be loaded.';
    list.innerHTML = '';
  }
}

async function postAction(path: string, body: object) {
  const response = await fetch(path, {
    method: 'POST',
    credentials: 'include',
    headers: { accept: 'application/json', 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await response.json() as SessionsPayload;
  if (!response.ok || data.success === false) throw new Error(data.error || 'The session action could not be completed.');
  return data;
}

function setBusy(shell: HTMLElement, busy: boolean) {
  shell.querySelectorAll<HTMLButtonElement>('button').forEach((button) => { button.disabled = busy; });
}

async function handleClick(event: Event) {
  const target = event.target as HTMLElement;
  const shell = target.closest<HTMLElement>('[data-ja-id-connected-sessions]');
  if (!shell) return;

  const refresh = target.closest('[data-ja-sessions-refresh]');
  if (refresh) { await renderSessions(shell); return; }

  const revoke = target.closest<HTMLElement>('[data-ja-session-revoke]');
  if (revoke) {
    const id = revoke.dataset.jaSessionRevoke;
    if (!id || !window.confirm('Sign this device out of the connected JA service?')) return;
    setBusy(shell, true);
    try { await postAction(`/api/id/sessions/${encodeURIComponent(id)}`, {}); await renderSessions(shell); }
    catch (error) { window.alert(error instanceof Error ? error.message : 'The session could not be revoked.'); }
    finally { setBusy(shell, false); }
    return;
  }

  if (target.closest('[data-ja-sessions-revoke-others]')) {
    if (!window.confirm('Sign out every other connected JA session while keeping this browser open?')) return;
    setBusy(shell, true);
    try { await postAction('/api/id/sessions', { action: 'revoke_others' }); await renderSessions(shell); }
    catch (error) { window.alert(error instanceof Error ? error.message : 'The other sessions could not be revoked.'); }
    finally { setBusy(shell, false); }
    return;
  }

  if (target.closest('[data-ja-sessions-revoke-all]')) {
    if (!window.confirm('Sign out everywhere, including this browser? You will need to sign in again.')) return;
    setBusy(shell, true);
    try { await postAction('/api/id/sessions', { action: 'revoke_all' }); }
    catch (error) {
      setBusy(shell, false);
      window.alert(error instanceof Error ? error.message : 'Your sessions could not be revoked.');
      return;
    }
    window.location.assign('/api/id/sign-out');
  }
}

function enhance() {
  if (!location.pathname.startsWith('/id/dashboard')) return;
  if (document.querySelector('[data-ja-id-connected-sessions]')) return;
  const placeholder = findPlaceholder();
  if (!placeholder) return;
  placeholder.outerHTML = shellMarkup();
  const shell = document.querySelector<HTMLElement>('[data-ja-id-connected-sessions]');
  if (shell) void renderSessions(shell);
}

export function installJAIDConnectedSessionsUI() {
  if (installed || typeof window === 'undefined') return;
  installed = true;
  document.addEventListener('click', (event) => { void handleClick(event); });
  const start = () => {
    enhance();
    observer = new MutationObserver(enhance);
    observer.observe(document.body, { childList: true, subtree: true });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
}
