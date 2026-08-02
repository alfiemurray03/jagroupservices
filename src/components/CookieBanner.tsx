import { useEffect, useState } from 'react';
import { Cookie } from 'lucide-react';

import { useLanguage } from '@/components/LanguageProvider';
import { Button } from '@/components/ui/button';
import { L, text } from '@/lib/public-site-content';

const CONSENT_KEY = 'c2_analytics_consent';
const DAYS = 365;

const labels = {
  title: L('Your privacy choices', 'Eich dewisiadau preifatrwydd', 'As suas escolhas de privacidade', 'Sus opciones de privacidad', 'Vos choix de confidentialité'),
  body: L(
    'We use strictly necessary technologies to operate and secure the website. Optional analytics will only load after you agree.',
    'Rydym yn defnyddio technolegau hollol angenrheidiol i weithredu a diogelu’r wefan. Dim ond ar ôl i chi gytuno y bydd dadansoddeg ddewisol yn llwytho.',
    'Utilizamos tecnologias estritamente necessárias para operar e proteger o site. A análise opcional só será carregada depois do seu consentimento.',
    'Utilizamos tecnologías estrictamente necesarias para operar y proteger el sitio. Las analíticas opcionales solo se cargarán después de que acepte.',
    'Nous utilisons des technologies strictement nécessaires au fonctionnement et à la sécurité du site. Les outils d’analyse facultatifs ne sont chargés qu’après votre accord.'
  ),
  reject: L('Reject optional', 'Gwrthod dewisol', 'Rejeitar opcionais', 'Rechazar opcionales', 'Refuser les facultatifs'),
  settings: L('Cookie settings', 'Gosodiadau cwcis', 'Definições de cookies', 'Configuración de cookies', 'Paramètres des cookies'),
  accept: L('Accept analytics', 'Derbyn dadansoddeg', 'Aceitar análise', 'Aceptar analíticas', 'Accepter l’analyse'),
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    _signalsDataLayer?: unknown[];
    __SCC_INIT__?: boolean;
    revokeAnalyticsConsent?: () => void;
    openCookieSettings?: () => void;
  }
}

function setConsent(analytics: boolean) {
  const value = JSON.stringify({ analytics, timestamp: Date.now() });
  const expiry = new Date(Date.now() + DAYS * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${CONSENT_KEY}=${value};expires=${expiry};path=/;SameSite=Lax;Secure`;
  localStorage.setItem(CONSENT_KEY, value);
}

function getConsent(): { analytics: boolean; timestamp: number } | null {
  const cookie = document.cookie
    .split(';')
    .map((item) => item.trim())
    .find((item) => item.startsWith(`${CONSENT_KEY}=`))
    ?.slice(CONSENT_KEY.length + 1);
  const raw = cookie || localStorage.getItem(CONSENT_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw);
    if (typeof parsed.analytics !== 'boolean' || typeof parsed.timestamp !== 'number') return null;
    return parsed;
  } catch {
    return null;
  }
}

function clearConsent() {
  document.cookie = `${CONSENT_KEY}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;SameSite=Lax;Secure`;
  localStorage.removeItem(CONSENT_KEY);
}

async function loadAnalytics() {
  if (window.__SCC_INIT__) return;
  window.__SCC_INIT__ = true;

  try {
    const response = await fetch('/api/config/analytics', { headers: { Accept: 'application/json' } });
    const data = response.ok ? await response.json() : {};
    const gaId = typeof data.gaId === 'string' ? data.gaId.trim() : '';

    if (gaId) {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
      script.async = true;
      document.head.appendChild(script);
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(['js', new Date()]);
      window.dataLayer.push(['config', gaId, { anonymize_ip: true }]);
    }
  } catch (error) {
    console.warn('Optional analytics could not be loaded.', error);
  }
}

export default function CookieBanner() {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getConsent();
    if (!consent || (Date.now() - consent.timestamp) / 86_400_000 > DAYS) {
      clearConsent();
      setVisible(true);
    } else if (consent.analytics) {
      void loadAnalytics();
    }

    window.revokeAnalyticsConsent = () => {
      clearConsent();
      setVisible(true);
    };
    window.openCookieSettings = () => window.dispatchEvent(new CustomEvent('openCookieSettings'));

    return () => {
      delete window.revokeAnalyticsConsent;
      delete window.openCookieSettings;
    };
  }, []);

  const choose = (analytics: boolean) => {
    setConsent(analytics);
    setVisible(false);
    if (analytics) void loadAnalytics();
  };

  if (!visible) return null;

  return (
    <div className="print-hidden fixed inset-x-0 bottom-0 z-[110] p-3 sm:p-5" role="region" aria-label={text(labels.title, language)}>
      <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-card p-4 text-card-foreground shadow-2xl sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-3xl items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Cookie className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="font-bold text-foreground">{text(labels.title, language)}</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text(labels.body, language)}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row lg:shrink-0">
            <Button variant="outline" onClick={() => choose(false)}>{text(labels.reject, language)}</Button>
            <Button variant="outline" onClick={() => window.dispatchEvent(new CustomEvent('openCookieSettings'))}>{text(labels.settings, language)}</Button>
            <Button onClick={() => choose(true)}>{text(labels.accept, language)}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
