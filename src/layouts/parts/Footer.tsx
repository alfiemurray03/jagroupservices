import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, ExternalLink, Info, Settings as SettingsIcon, Shield, X } from 'lucide-react';

import { LanguageSwitcher, useLanguage } from '@/components/LanguageProvider';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { DARK_THEME_LOGO } from '@/lib/site-logos';
import { t } from '@/lib/translations';

declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (element: HTMLElement | null, force: boolean) => void;
    };
  }
}

const linkClass = 'text-sm text-muted-foreground transition-colors hover:text-foreground';

export default function Footer() {
  const trustpilotRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: true,
    analytics: true,
  });

  useEffect(() => {
    let retryTimer: ReturnType<typeof setTimeout> | undefined;

    const loadTrustpilot = () => {
      if (window.Trustpilot && trustpilotRef.current) {
        window.Trustpilot.loadFromElement(trustpilotRef.current, true);
        return;
      }
      retryTimer = setTimeout(loadTrustpilot, 500);
    };

    loadTrustpilot();
    return () => {
      if (retryTimer) clearTimeout(retryTimer);
    };
  }, []);

  useEffect(() => {
    const getCookie = (name: string): string | null => {
      const prefix = `${name}=`;
      const cookie = document.cookie
        .split(';')
        .map((item) => item.trim())
        .find((item) => item.startsWith(prefix));
      return cookie ? cookie.substring(prefix.length) : null;
    };

    const consentKey = 'c2_analytics_consent';
    const saved = getCookie(consentKey) || window.localStorage.getItem(consentKey);

    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setPreferences({
          necessary: true,
          functional: parsed.analytics !== false,
          analytics: parsed.analytics !== false,
        });
      } catch {
        // Keep the default preferences when an old value cannot be read.
      }
    }

    const openSettings = () => setShowCookieSettings(true);
    window.addEventListener('openCookieSettings', openSettings);
    return () => window.removeEventListener('openCookieSettings', openSettings);
  }, []);

  const saveConsent = (analytics: boolean) => {
    const consentKey = 'c2_analytics_consent';
    const consentData = JSON.stringify({ analytics, timestamp: Date.now() });
    const expiry = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();

    document.cookie = `${consentKey}=${consentData};expires=${expiry};path=/;SameSite=Lax;Secure`;
    window.localStorage.setItem(consentKey, consentData);
    setShowCookieSettings(false);
    window.location.reload();
  };

  const savePreferences = () => saveConsent(preferences.analytics);
  const acceptAll = () => {
    setPreferences({ necessary: true, functional: true, analytics: true });
    saveConsent(true);
  };
  const declineAll = () => {
    setPreferences({ necessary: true, functional: false, analytics: false });
    saveConsent(false);
  };

  return (
    <footer className="border-t border-border bg-card text-card-foreground" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_repeat(3,minmax(0,1fr))]">
          <div>
            <Link to="/" className="mb-4 inline-flex items-center" aria-label="JA Group Services Ltd — home">
              <img
                src="/images/ja-group-services-light.webp"
                alt="JA Group Services Ltd"
                className="site-logo-light h-14 w-auto max-w-[220px] object-contain"
              />
              <img
                src={DARK_THEME_LOGO}
                alt="JA Group Services Ltd"
                className="site-logo-dark h-20 w-auto max-w-[280px] object-contain"
              />
            </Link>
            <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
              Providing structured, accountable and professionally governed operating frameworks for our business divisions and strategic partnerships.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Operating Brands</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://profilecentre.jagroupservices.co.uk/" target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1`}>
                  Profile Centre <ExternalLink className="h-3 w-3" />
                </a>
                <p className="mt-1 text-xs text-muted-foreground">Digital profile platform</p>
              </li>
              <li>
                <a href="https://planyx.jagroupservices.co.uk/" target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1`}>
                  Planyx <ExternalLink className="h-3 w-3" />
                </a>
                <p className="mt-1 text-xs text-muted-foreground">Experience and itinerary planning</p>
              </li>
              <li>
                <a href="https://jadomainhub.jagroupservices.co.uk/" target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1`}>
                  JA Domain Hub <ExternalLink className="h-3 w-3" />
                </a>
                <p className="mt-1 text-xs text-muted-foreground">Domain support &amp; GoDaddy reseller</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Company</h3>
            <ul className="space-y-2.5">
              <li><Link to="/about-us" className={linkClass}>About Us</Link></li>
              <li><Link to="/meet-the-team" className={linkClass}>Meet the Team</Link></li>
              <li><Link to="/our-group-structure" className={linkClass}>Our Group Structure</Link></li>
              <li><Link to="/announcements" className={linkClass}>Announcements</Link></li>
            </ul>

            <h3 className="mb-4 mt-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Partner</h3>
            <ul className="space-y-2.5">
              <li><Link to="/partner-with-us" className={linkClass}>Partner With Us</Link></li>
              <li><Link to="/contactus" className={linkClass}>Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <div className="mb-6 rounded-xl border border-border bg-muted/40 p-3">
              <div
                ref={trustpilotRef}
                className="trustpilot-widget"
                data-locale="en-GB"
                data-template-id="56278e9abfbbba0bdcd568bc"
                data-businessunit-id="69716dd02eea6a1317956e56"
                data-style-height="52px"
                data-style-width="100%"
                data-token="e6a61baf-e09a-4c11-92bd-68a124a65e71"
              >
                <a href="https://uk.trustpilot.com/review/jagroupservices.co.uk" target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Trustpilot
                </a>
              </div>
            </div>

            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t('footer.legal', language)}</h3>
            <ul className="space-y-2.5">
              <li><Link to="/terms-of-service" className={linkClass}>{t('footer.legal.terms', language)}</Link></li>
              <li><Link to="/privacy-policy" className={linkClass}>{t('footer.legal.privacy', language)}</Link></li>
              <li><Link to="/cookies-policy" className={linkClass}>{t('footer.legal.cookies', language)}</Link></li>
              <li><Link to="/complaints-policy" className={linkClass}>Complaints Policy</Link></li>
              <li><Link to="/sitemap" className={linkClass}>Sitemap</Link></li>
              <li>
                <button type="button" onClick={() => setShowCookieSettings(true)} className={`${linkClass} text-left`}>
                  Cookie Settings
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row md:items-end md:justify-between">
          <div>
            <p>© {new Date().getFullYear()} JA Group Services Ltd. All rights reserved.</p>
            <p className="mt-1 text-xs leading-relaxed">
              Company No.{' '}
              <a href="https://find-and-update.company-information.service.gov.uk/company/16314179" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                16314179
              </a>{' '}
              | ICO Registration{' '}
              <a href="https://ico.org.uk/ESDWebPages/Entry/ZB877370" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                ZB877370
              </a>
            </p>
            <p className="mt-1 text-xs leading-relaxed">Registered Address: 167-169 Great Portland Street, 5th Floor, London, W1W 5PF</p>
          </div>
          <LanguageSwitcher />
        </div>
      </div>

      {showCookieSettings && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4" role="dialog" aria-modal="true" aria-labelledby="cookie-settings-title">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card text-card-foreground shadow-2xl">
            <div className="sticky top-0 flex items-center justify-between border-b border-border bg-card px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Cookie className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 id="cookie-settings-title" className="text-xl font-bold text-foreground">Cookie Settings</h2>
                  <p className="text-sm text-muted-foreground">Manage your cookie preferences</p>
                </div>
              </div>
              <button type="button" onClick={() => setShowCookieSettings(false)} className="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground" aria-label="Close cookie settings">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-5 px-6 py-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                We use cookies to enhance your browsing experience and analyze our traffic. You can choose which types of cookies to allow below.
              </p>

              <CookieOption
                icon={<Shield className="h-5 w-5 text-primary" />}
                title="Strictly Necessary Cookies"
                badge="Always Active"
                description="Essential for the website to function properly. These cookies enable core functionality such as security, network management, and accessibility. They cannot be disabled."
                checked
                disabled
              />

              <CookieOption
                icon={<SettingsIcon className="h-5 w-5 text-primary" />}
                title="Functional Cookies"
                badge="Optional"
                description="Enable enhanced functionality and personalization, such as remembering your preferences and settings."
                checked={preferences.functional}
                onCheckedChange={(functional) => setPreferences((current) => ({ ...current, functional }))}
              />

              <CookieOption
                icon={<Info className="h-5 w-5 text-primary" />}
                title="Analytics Cookies"
                badge="Optional"
                description="Help us understand how visitors interact with our website by collecting and reporting information anonymously."
                checked={preferences.analytics}
                onCheckedChange={(analytics) => setPreferences((current) => ({ ...current, analytics }))}
              />
            </div>

            <div className="sticky bottom-0 flex flex-col gap-3 border-t border-border bg-card px-6 py-4 sm:flex-row">
              <Button onClick={declineAll} variant="outline" className="flex-1">Decline All</Button>
              <Button onClick={savePreferences} variant="outline" className="flex-1 border-primary text-primary hover:bg-primary/10">Save Preferences</Button>
              <Button onClick={acceptAll} className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">Accept All</Button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

interface CookieOptionProps {
  icon: React.ReactNode;
  title: string;
  badge: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

function CookieOption({ icon, title, badge, description, checked, disabled = false, onCheckedChange }: CookieOptionProps) {
  return (
    <div className="rounded-2xl border border-border bg-muted/30 p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-1 items-start gap-3">
          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">{icon}</div>
          <div>
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <h3 className="font-semibold text-foreground">{title}</h3>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">{badge}</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
          </div>
        </div>
        <Switch checked={checked} disabled={disabled} onCheckedChange={onCheckedChange} className={disabled ? 'opacity-50' : ''} />
      </div>
    </div>
  );
}
