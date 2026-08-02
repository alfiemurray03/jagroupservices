import { useEffect, useState } from 'react';
import { Building2, ExternalLink, LockKeyhole } from 'lucide-react';

type LaunchGateConfig = {
  enabled?: boolean;
  mode?: 'prelaunch' | 'maintenance' | 'temporarily_unavailable' | 'private_preview';
  title?: string;
  message?: string;
  ctaLabel?: string;
  ctaHref?: string;
  background?: string;
  accent?: string;
  textColour?: string;
  showCompanyDetails?: boolean;
  allowSearchEngines?: boolean;
};

type ControlResponse = {
  config?: { siteControls?: { launchGate?: LaunchGateConfig } };
  branch?: { siteControls?: { launchGate?: LaunchGateConfig } };
};

const DEFAULT_GATE: Required<LaunchGateConfig> = {
  enabled: false,
  mode: 'prelaunch',
  title: 'JA Group Services',
  message: 'This website is not currently open to the public.',
  ctaLabel: 'Contact JA Group Services',
  ctaHref: 'mailto:contact@jagroupservices.co.uk',
  background: '#081426',
  accent: '#2563eb',
  textColour: '#ffffff',
  showCompanyDetails: true,
  allowSearchEngines: false,
};

function modeLabel(mode: LaunchGateConfig['mode']) {
  if (mode === 'maintenance') return 'Planned website maintenance';
  if (mode === 'temporarily_unavailable') return 'Website temporarily unavailable';
  if (mode === 'private_preview') return 'Private preview';
  return 'Website launch gate';
}

export default function HeadOfficeLaunchGate() {
  const [gate, setGate] = useState<Required<LaunchGateConfig>>(DEFAULT_GATE);
  const hiddenForAdministration = typeof window !== 'undefined' && window.location.pathname.startsWith('/admin');

  useEffect(() => {
    if (hiddenForAdministration) return;
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 8000);

    fetch('/api/customer-service/config', {
      credentials: 'include',
      cache: 'no-store',
      signal: controller.signal,
      headers: { Accept: 'application/json' },
    })
      .then(response => response.ok ? response.json() : Promise.reject(new Error('Control response unavailable')))
      .then((data: ControlResponse) => {
        const supplied = data.config?.siteControls?.launchGate || data.branch?.siteControls?.launchGate;
        if (!supplied?.enabled) return;
        setGate({ ...DEFAULT_GATE, ...supplied, enabled: true });
      })
      .catch(() => {
        // Deliberately fail open. A Head Office or network outage must not take
        // the public JA Group Services website offline.
      })
      .finally(() => window.clearTimeout(timer));

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [hiddenForAdministration]);

  useEffect(() => {
    if (!gate.enabled) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const existingRobots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const previousRobots = existingRobots?.content;
    let robots = existingRobots;
    if (!gate.allowSearchEngines) {
      if (!robots) {
        robots = document.createElement('meta');
        robots.name = 'robots';
        document.head.appendChild(robots);
      }
      robots.content = 'noindex,nofollow,noarchive';
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      if (!gate.allowSearchEngines && robots) {
        if (previousRobots == null) robots.remove();
        else robots.content = previousRobots;
      }
    };
  }, [gate]);

  if (hiddenForAdministration || !gate.enabled) return null;

  return (
    <section
      role="dialog"
      aria-modal="true"
      aria-label="JA Group Services website launch gate"
      className="fixed inset-0 z-[10000] overflow-y-auto"
      style={{ background: gate.background, color: gate.textColour }}
    >
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-8 sm:px-10 lg:px-14">
        <header className="flex items-center justify-between gap-5 border-b border-white/15 pb-6">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10">
              <Building2 className="h-6 w-6" />
            </span>
            <div>
              <strong className="block text-base">JA Group Services Ltd</strong>
              <span className="block text-xs opacity-70">Official company website</span>
            </div>
          </div>
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold">
            Head Office controlled
          </span>
        </header>

        <main className="flex flex-1 items-center py-14">
          <div className="max-w-3xl">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em]"
              style={{ backgroundColor: gate.accent, color: '#ffffff' }}
            >
              <LockKeyhole className="h-3.5 w-3.5" />
              {modeLabel(gate.mode)}
            </div>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {gate.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 opacity-80 sm:text-lg">
              {gate.message}
            </p>
            {gate.ctaLabel && gate.ctaHref && (
              <a
                href={gate.ctaHref}
                className="mt-9 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white shadow-xl transition hover:brightness-110"
                style={{ backgroundColor: gate.accent }}
              >
                {gate.ctaLabel}
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </main>

        <footer className="border-t border-white/15 pt-6 text-xs leading-6 opacity-70">
          {gate.showCompanyDetails ? (
            <p>JA Group Services Ltd · Company No. 16314179 · Registered in England and Wales · Registered Office: 167–169 Great Portland Street, 5th Floor, London, W1W 5PF, United Kingdom.</p>
          ) : (
            <p>JA Group Services Ltd · Head Office controlled website status</p>
          )}
        </footer>
      </div>
    </section>
  );
}
