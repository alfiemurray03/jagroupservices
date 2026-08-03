import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

const COOKIE_CONSENT_KEY = 'c2_analytics_consent';
const COOKIE_CONSENT_EXPIRES_DAYS = 365;

function setCookie(name: string, value: string, days: number) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/;SameSite=Lax;Secure`;
}

function getCookie(name: string): string | null {
  const nameEQ = `${name}=`;
  const cookies = document.cookie.split(';');

  for (let index = 0; index < cookies.length; index += 1) {
    let cookie = cookies[index];
    while (cookie.charAt(0) === ' ') cookie = cookie.substring(1);

    if (cookie.indexOf(nameEQ) === 0) {
      const value = cookie.substring(nameEQ.length);
      try {
        return decodeURIComponent(value);
      } catch {
        return value;
      }
    }
  }

  return null;
}

function deleteCookie(name: string) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;SameSite=Lax;Secure`;
}

interface CookieConsent {
  functional: boolean;
  analytics: boolean;
  timestamp: number;
}

declare global {
  interface Window {
    _signalsDataLayer?: unknown[];
    revokeAnalyticsConsent?: () => void;
    openCookieSettings?: () => void;
    __SCC_INIT__?: boolean;
  }
}

// First-party usage tracking is activated only after analytics consent.
function initC2Tracking(): void {
  if (typeof window === 'undefined' || window.__SCC_INIT__) return;
  window.__SCC_INIT__ = true;
  window._signalsDataLayer = window._signalsDataLayer || [];

  const track = (eid: string, type: string, label: string, props?: Record<string, unknown>) => {
    window._signalsDataLayer!.push({
      schema: 'add_event',
      version: 'v1',
      data: {
        eid,
        type,
        event_label: label,
        custom_properties: {
          ...props,
          timestamp: new Date().toISOString(),
          source: 'airo-app-builder',
        },
      },
    });
  };

  const getSection = (element: HTMLElement): string => {
    if (element.closest('header')) return 'header';
    if (element.closest('footer')) return 'footer';
    if (element.closest('nav')) return 'nav';
    if (element.closest('main')) return 'main';
    return 'page';
  };

  const getDevice = (): string => {
    const width = window.innerWidth;
    return width < 768 ? 'mobile' : width < 1024 ? 'tablet' : 'desktop';
  };

  track('airo.website.session', 'session', 'start', {
    page_path: location.pathname,
    referrer: document.referrer,
  });
  track('airo.website.pageview', 'pageview', document.title, {
    page_path: location.pathname,
    referrer: document.referrer,
  });

  document.addEventListener('click', (event) => {
    const element = (event.target as HTMLElement)?.closest('a, button, [role="button"]') as HTMLElement;
    if (!element) return;

    const text = element.textContent?.trim()?.substring(0, 100) || '';
    const href = (element as HTMLAnchorElement).href || '';
    const type = element.tagName.toLowerCase() === 'a' ? 'link' : 'button';

    let isExternal: boolean | undefined;
    if (href) {
      try {
        isExternal = new URL(href, location.origin).origin !== location.origin;
      } catch {
        // Treat malformed URLs as internal and continue tracking safely.
      }
    }

    track('airo.website.click', 'click', text || type, {
      element_type: type,
      element_text: text,
      element_id: element.id || undefined,
      section: getSection(element),
      page_path: location.pathname,
      page_title: document.title,
      href: href || undefined,
      is_external: href ? isExternal : undefined,
      device: getDevice(),
      viewport_width: window.innerWidth,
    });
  }, true);

  let lastUrl = location.href;
  const trackPage = () => {
    if (location.href !== lastUrl) {
      track('airo.website.pageview', 'pageview', document.title, {
        page_path: location.pathname,
        referrer: lastUrl,
      });
      lastUrl = location.href;
    }
  };

  window.addEventListener('popstate', trackPage);
  const push = history.pushState;
  const replace = history.replaceState;
  history.pushState = (...args) => {
    push.apply(history, args);
    setTimeout(trackPage, 0);
  };
  history.replaceState = (...args) => {
    replace.apply(history, args);
    setTimeout(trackPage, 0);
  };

  const hostname = location.hostname;
  const url = hostname === 'localhost' || hostname.includes('dev-airoapp')
    ? 'https://img1.dev-wsimg.com/signals/js/clients/scc-c2/scc-c2.js'
    : hostname.includes('test-airoapp')
      ? 'https://img1.test-wsimg.com/signals/js/clients/scc-c2/scc-c2.min.js'
      : 'https://img1.wsimg.com/signals/js/clients/scc-c2/scc-c2.min.js';
  const script = document.createElement('script');
  script.src = url;
  script.async = true;
  document.head.appendChild(script);
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(function checkConsent() {
    if (typeof window === 'undefined') return;

    const cookieData = getCookie(COOKIE_CONSENT_KEY);
    const localStorageData = localStorage.getItem(COOKIE_CONSENT_KEY);
    const consentData = cookieData || localStorageData;

    if (!consentData) {
      setShowBanner(true);
      setIsLoaded(true);
      return;
    }

    try {
      const parsed = JSON.parse(consentData);
      const consent: CookieConsent = {
        functional: parsed.functional === true,
        analytics: parsed.analytics === true,
        timestamp: typeof parsed.timestamp === 'number' ? parsed.timestamp : 0,
      };
      const daysSinceConsent = (Date.now() - consent.timestamp) / (1000 * 60 * 60 * 24);

      if (!consent.timestamp || daysSinceConsent > COOKIE_CONSENT_EXPIRES_DAYS) {
        deleteCookie(COOKIE_CONSENT_KEY);
        localStorage.removeItem(COOKIE_CONSENT_KEY);
        setShowBanner(true);
      } else if (consent.analytics) {
        initC2Tracking();
      }
    } catch {
      deleteCookie(COOKIE_CONSENT_KEY);
      localStorage.removeItem(COOKIE_CONSENT_KEY);
      setShowBanner(true);
    }

    setIsLoaded(true);
  }, []);

  function saveConsent(functional: boolean, analytics: boolean) {
    const consentData = JSON.stringify({ functional, analytics, timestamp: Date.now() });
    setCookie(COOKIE_CONSENT_KEY, consentData, COOKIE_CONSENT_EXPIRES_DAYS);
    localStorage.setItem(COOKIE_CONSENT_KEY, consentData);
    setShowBanner(false);
    window.location.reload();
  }

  function revokeConsent() {
    if (typeof window === 'undefined') return;
    deleteCookie(COOKIE_CONSENT_KEY);
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    window.location.reload();
  }

  function openSettings() {
    if (typeof window === 'undefined') return;
    window.dispatchEvent(new CustomEvent('openCookieSettings'));
  }

  useEffect(function exposeConsentFunctions() {
    if (typeof window === 'undefined') return;
    window.revokeAnalyticsConsent = revokeConsent;
    window.openCookieSettings = openSettings;

    return () => {
      delete window.revokeAnalyticsConsent;
      delete window.openCookieSettings;
    };
  }, []);

  if (!isLoaded || !showBanner) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0A1F44]/95 shadow-lg backdrop-blur-sm"
      role="alertdialog"
      aria-live="polite"
      aria-label="Cookie consent banner"
      aria-describedby="cookie-banner-description"
    >
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex-1">
            <p id="cookie-banner-description" className="text-sm leading-relaxed text-white">
              We use essential technologies to operate this website. With your permission, we also use optional functional services such as Trustpilot and analytics services to understand website use.{' '}
              <a href="/cookies-policy" className="underline hover:text-white/80">Cookie Policy</a>
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <Button size="sm" variant="outline" onClick={() => saveConsent(false, false)} className="whitespace-nowrap border-white/20 text-white hover:bg-white/10">
              Decline Optional
            </Button>
            <Button size="sm" variant="outline" onClick={openSettings} className="whitespace-nowrap border-white/20 text-white hover:bg-white/10">
              Settings
            </Button>
            <Button size="sm" onClick={() => saveConsent(true, true)} className="whitespace-nowrap bg-[#2563EB] text-white hover:bg-[#2563EB]/90" autoFocus>
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
