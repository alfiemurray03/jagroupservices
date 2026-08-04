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
const consentKey = 'c2_analytics_consent';

interface ConsentPreferences {
  necessary: true;
  functional: boolean;
  analytics: boolean;
}

export default function Footer() {
  const trustpilotRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true,
    functional: false,
    analytics: false,
  });

  useEffect(() => {
    if (!preferences.functional) return;

    let retryTimer: ReturnType<typeof setTimeout> | undefined;
    let attempts = 0;

    const loadTrustpilot = () => {
      if (window.Trustpilot && trustpilotRef.current) {
        window.Trustpilot.loadFromElement(trustpilotRef.current, true);
        return;
      }

      attempts += 1;
      if (attempts < 20) retryTimer = setTimeout(loadTrustpilot, 500);
    };

    loadTrustpilot();
    return () => {
      if (retryTimer) clearTimeout(retryTimer);
    };
  }, [preferences.functional]);

  useEffect(() => {
    const getCookie = (name: string): string | null => {
      const prefix = `${name}=`;
      const cookie = document.cookie
        .split(';')
        .map((item) => item.trim())
        .find((item) => item.startsWith(prefix));

      if (!cookie) return null;
      const value = cookie.substring(prefix.length);

      try {
        return decodeURIComponent(value);
      } catch {
        return value;
      }
    };

    const saved = getCookie(consentKey) || window.localStorage.getItem(consentKey);

    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setPreferences({
          necessary: true,
          functional: parsed.functional === true,
          analytics: parsed.analytics === true,
        });
      } catch {
        // Keep optional categories disabled if an old value cannot be read.
      }
    }

    const openSettings = () => setShowCookieSettings(true);
    window.addEventListener('openCookieSettings', openSettings);
    return () => window.removeEventListener('openCookieSettings', openSettings);
  }, []);

  const saveConsent = (nextPreferences: ConsentPreferences) => {
    const consentData = JSON.stringify({
      functional: nextPreferences.functional,
      analytics: nextPreferences.analytics,
      timestamp: Date.now(),
    });
    const expiry = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();

    document.cookie = `${consentKey}=${encodeURIComponent(consentData)};expires=${expiry};path=/;SameSite=Lax;Secure`;
    window.localStorage.setItem(consentKey, consentData);
    setPreferences(nextPreferences);
    setShowCookieSettings(false);
    window.location.reload();
  };

  const savePreferences = () => saveConsent(preferences);
  const acceptAll = () =>
    saveConsent({ necessary: true, functional: true, analytics: true });
  const declineAll = () =>
    saveConsent({ necessary: true, functional: false, analytics: false });

  return (
    <footer className="border-t border-border bg-card text-card-foreground" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_repeat(4,minmax(0,1fr))]">
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
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
              Developing, operating and supporting practical digital platforms, managed websites and customer services.
            </p>

            <div className="rounded-xl border border-border bg-muted/40 p-3">
              {preferences.functional ? (
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
              ) : (
                <button type="button" onClick={() => setShowCookieSettings(true)} className={`${linkClass} text-left`}>
                  Enable functional cookies to display Trustpilot
                </button>
              )}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Services</h3>
            <ul className="space-y-2.5">
              <li><Link to="/services" className={linkClass}>Our Services</Link></li>
              <li><Link to="/services" className={linkClass}>Managed Websites</Link></li>
              <li><Link to="/services" className={linkClass}>Digital Platforms</Link></li>
              <li>
                <a href="https://profilecentre.jagroupservices.co.uk/" target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1`}>
                  Profile Centre <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="https://planyx.jagroupservices.co.uk/" target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1`}>
                  Planyx <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="https://aptenvo.jagroupservices.co.uk/" target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1`}>
                  Aptenvo <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="https://jadomainhub.jagroupservices.co.uk/" target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1`}>
                  JA Domain Hub <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Company</h3>
            <ul className="space-y-2.5">
              <li><Link to="/about-us" className={linkClass}>About Us</Link></li>
              <li><Link to="/meet-the-team" className={linkClass}>Meet the Team</Link></li>
              <li><Link to="/about-our-divisions" className={linkClass}>Divisions and Platforms</Link></li>
              <li><Link to="/our-group-structure" className={linkClass}>Our Group Structure</Link></li>
              <li><Link to="/governance" className={linkClass}>Governance</Link></li>
              <li><Link to="/announcements" className={linkClass}>Announcements</Link></li>
              <li><Link to="/partner-with-us" className={linkClass}>Partner With Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Support and Trust</h3>
            <ul className="space-y-2.5">
              <li><Link to="/customer-support" className={linkClass}>Customer Support</Link></li>
              <li><Link to="/privacy-centre" className={linkClass}>Privacy Centre</Link></li>
              <li><Link to="/security" className={linkClass}>Security and Disclosure</Link></li>
              <li><Link to="/accessibility-statement" className={linkClass}>Accessibility</Link></li>
              <li><Link to="/safeguarding" className={linkClass}>Safeguarding and Trust</Link></li>
              <li><Link to="/complaints-policy" className={linkClass}>Complaints</Link></li>
              <li><Link to="/contactus" className={linkClass}>Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t('footer.legal', language)}</h3>
            <ul className="space-y-2.5">
              <li><Link to="/terms-of-service" className={linkClass}>{t('footer.legal.terms', language)}</Link></li>
              <li><Link to="/privacy-policy" className={linkClass}>{t('footer.legal.privacy', language)}</Link></li>
              <li><Link to="/cookies-policy" className={linkClass}>{t('footer.legal.cookies', language)}</Link></li>
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
              Registered in England and Wales. Company No.{' '}
              <a href="https://find-and-update.company-information.service.gov.uk/company/16314179" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                16314179
              </a>{' '}
              | ICO Registration{' '}
              <a href="https://ico.org.uk/ESDWebPages/Entry/ZB877370" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                ZB877370
              </a>
            </p>
            <p className="mt-1 text-xs leading-relaxed">Registered Office: 167-169 Great Portland Street, 5th Floor, London, W1W 5PF</p>
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
                  <p className="text-sm text-muted-foreground">Manage optional website technologies</p>
                </div>
              </div>
              <button type="button" onClick={() => setShowCookieSettings(false)} className="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground" aria-label="Close cookie settings">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-5 px-6 py-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Optional services remain disabled unless you choose to enable them. You can change these preferences later through the footer.
              </p>

              <CookieOption
                icon={<Shield className="h-5 w-5 text-primary" />}
                title="Strictly Necessary Cookies"
                badge="Always Active"
                description="Required for core website operation, security, consent storage and accessibility preferences. They cannot be disabled through this panel."
                checked
                disabled
              />

              <CookieOption
                icon={<SettingsIcon className="h-5 w-5 text-primary" />}
                title="Functional Cookies"
                badge="Optional"
                description="Allow optional third-party functionality, including the Trustpilot review widget displayed in the website footer."
                checked={preferences.functional}
                onCheckedChange={(functional) => setPreferences((current) => ({ ...current, functional }))}
              />

              <CookieOption
                icon={<Info className="h-5 w-5 text-primary" />}
                title="Analytics Cookies"
                badge="Optional"
                description="Allow Google Analytics to measure website visits and interactions so that we can understand and improve website performance."
                checked={preferences.analytics}
                onCheckedChange={(analytics) => setPreferences((current) => ({ ...current, analytics }))}
              />
            </div>

            <div className="sticky bottom-0 flex flex-col gap-3 border-t border-border bg-card px-6 py-4 sm:flex-row">
              <Button onClick={declineAll} variant="outline" className="flex-1">Decline Optional</Button>
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
