import { useEffect, useState } from 'react';
import { Cookie, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import { LanguageSwitcher, useLanguage } from '@/components/LanguageProvider';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { DARK_THEME_LOGO } from '@/lib/site-logos';
import { L, text, uiText } from '@/lib/public-site-content';

const consentKey = 'c2_analytics_consent';

const footerText = {
  description: L(
    'Digital platforms, customer services and accountable operations under one UK company.',
    'Llwyfannau digidol, gwasanaethau cwsmeriaid a gweithrediadau atebol o dan un cwmni yn y DU.',
    'Plataformas digitais, apoio ao cliente e operações responsáveis numa única empresa do Reino Unido.',
    'Plataformas digitales, atención al cliente y operaciones responsables bajo una sola empresa del Reino Unido.',
    'Plateformes numériques, service client et opérations responsables au sein d’une même société britannique.'
  ),
  company: L('Company', 'Cwmni', 'Empresa', 'Empresa', 'Société'),
  customer: L('Customer', 'Cwsmer', 'Cliente', 'Cliente', 'Client'),
  legal: uiText.policies,
  cookieSettings: L('Cookie settings', 'Gosodiadau cwcis', 'Definições de cookies', 'Configuración de cookies', 'Paramètres des cookies'),
  settingsTitle: L('Cookie settings', 'Gosodiadau cwcis', 'Definições de cookies', 'Configuración de cookies', 'Paramètres des cookies'),
  settingsIntro: L('Choose whether optional analytics technologies may be used. Strictly necessary technologies remain active.', 'Dewiswch a ganiateir defnyddio technolegau dadansoddeg dewisol. Mae technolegau hollol angenrheidiol yn parhau’n weithredol.', 'Escolha se podem ser utilizadas tecnologias analíticas opcionais. As tecnologias estritamente necessárias permanecem ativas.', 'Elija si se pueden utilizar tecnologías analíticas opcionales. Las tecnologías estrictamente necesarias permanecen activas.', 'Choisissez si les technologies d’analyse facultatives peuvent être utilisées. Les technologies strictement nécessaires restent actives.'),
  necessary: L('Strictly necessary', 'Hollol angenrheidiol', 'Estritamente necessários', 'Estrictamente necesarias', 'Strictement nécessaires'),
  analytics: L('Analytics', 'Dadansoddeg', 'Análise', 'Analíticas', 'Analyse'),
  alwaysOn: L('Always active', 'Bob amser yn weithredol', 'Sempre ativo', 'Siempre activas', 'Toujours actifs'),
  optional: L('Optional', 'Dewisol', 'Opcional', 'Opcional', 'Facultatif'),
  reject: L('Reject optional', 'Gwrthod dewisol', 'Rejeitar opcionais', 'Rechazar opcionales', 'Refuser les facultatifs'),
  save: L('Save choice', 'Cadw’r dewis', 'Guardar escolha', 'Guardar elección', 'Enregistrer le choix'),
  accept: L('Accept analytics', 'Derbyn dadansoddeg', 'Aceitar análise', 'Aceptar analíticas', 'Accepter l’analyse'),
  rights: L('All rights reserved.', 'Cedwir pob hawl.', 'Todos os direitos reservados.', 'Todos los derechos reservados.', 'Tous droits réservés.'),
};

const linkClass = 'text-sm text-muted-foreground transition-colors hover:text-foreground hover:underline';

export default function Footer() {
  const { language } = useLanguage();
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const open = () => {
      const saved = document.cookie
        .split(';')
        .map((item) => item.trim())
        .find((item) => item.startsWith(`${consentKey}=`))
        ?.slice(consentKey.length + 1) || localStorage.getItem(consentKey);

      if (saved) {
        try {
          setAnalytics(Boolean(JSON.parse(saved).analytics));
        } catch {
          setAnalytics(false);
        }
      }
      setShowSettings(true);
    };

    window.addEventListener('openCookieSettings', open);
    return () => window.removeEventListener('openCookieSettings', open);
  }, []);

  const save = (allowAnalytics: boolean) => {
    const value = JSON.stringify({ analytics: allowAnalytics, timestamp: Date.now() });
    const expiry = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${consentKey}=${value};expires=${expiry};path=/;SameSite=Lax;Secure`;
    localStorage.setItem(consentKey, value);
    setShowSettings(false);
    window.location.reload();
  };

  return (
    <>
      <footer className="print-hidden border-t border-border bg-card text-card-foreground" role="contentinfo">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_repeat(3,minmax(0,1fr))]">
            <div>
              <Link to="/" className="inline-flex items-center" aria-label="JA Group Services Ltd home">
                <img src="/images/ja-group-services-light.webp" alt="JA Group Services Ltd" className="site-logo-light h-14 w-auto max-w-[230px] object-contain" />
                <img src={DARK_THEME_LOGO} alt="JA Group Services Ltd" className="site-logo-dark h-20 w-auto max-w-[280px] object-contain" />
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">{text(footerText.description, language)}</p>
              <div className="mt-5"><LanguageSwitcher /></div>
            </div>

            <FooterGroup title={text(footerText.company, language)}>
              <FooterLink to="/about-us">{text(uiText.about, language)}</FooterLink>
              <FooterLink to="/about-our-divisions">{text(uiText.brands, language)}</FooterLink>
              <FooterLink to="/our-group-structure">{text(uiText.structure, language)}</FooterLink>
              <FooterLink to="/trust-and-governance">{text(uiText.trustCentre, language)}</FooterLink>
              <FooterLink to="/announcements">{text(uiText.announcements, language)}</FooterLink>
              <FooterLink to="/former-services">{text(uiText.formerServices, language)}</FooterLink>
            </FooterGroup>

            <FooterGroup title={text(footerText.customer, language)}>
              <FooterLink to="/help-and-support">{text(uiText.supportCentre, language)}</FooterLink>
              <FooterLink to="/service-status">{text(uiText.serviceStatus, language)}</FooterLink>
              <FooterLink to="/partner-with-us">{text(uiText.partner, language)}</FooterLink>
              <FooterLink to="/contactus">{text(uiText.contact, language)}</FooterLink>
              <FooterLink to="/affiliate-disclosure">{text(uiText.affiliate, language)}</FooterLink>
              <FooterLink to="/sitemap">{text(uiText.sitemap, language)}</FooterLink>
            </FooterGroup>

            <FooterGroup title={text(footerText.legal, language)}>
              <FooterLink to="/terms-of-service">{text(uiText.terms, language)}</FooterLink>
              <FooterLink to="/privacy-policy">{text(uiText.privacy, language)}</FooterLink>
              <FooterLink to="/cookies-policy">{text(uiText.cookies, language)}</FooterLink>
              <FooterLink to="/complaints-policy">{text(uiText.complaints, language)}</FooterLink>
              <FooterLink to="/ip-statement">{text(uiText.intellectualProperty, language)}</FooterLink>
              <FooterLink to="/accessibility-statement">{text(uiText.accessibility, language)}</FooterLink>
              <FooterLink to="/security-and-vulnerability-disclosure">{text(uiText.security, language)}</FooterLink>
              <button type="button" onClick={() => window.dispatchEvent(new CustomEvent('openCookieSettings'))} className={`${linkClass} text-left`}>
                {text(footerText.cookieSettings, language)}
              </button>
            </FooterGroup>
          </div>

          <div className="mt-10 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
            <p>© {new Date().getFullYear()} JA Group Services Ltd. {text(footerText.rights, language)}</p>
            <p className="mt-2">Company No. 16314179 · ICO Registration ZB877370</p>
            <p className="mt-1">Registered Office: 167–169 Great Portland Street, 5th Floor, London, W1W 5PF, United Kingdom</p>
          </div>
        </div>
      </footer>

      {showSettings && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/65 p-4" role="dialog" aria-modal="true" aria-labelledby="cookie-settings-title">
          <div className="w-full max-w-xl rounded-2xl border border-border bg-card text-card-foreground shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10"><Cookie className="h-5 w-5 text-primary" /></div>
                <div>
                  <h2 id="cookie-settings-title" className="text-xl font-bold text-foreground">{text(footerText.settingsTitle, language)}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{text(footerText.settingsIntro, language)}</p>
                </div>
              </div>
              <button type="button" onClick={() => setShowSettings(false)} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-muted-foreground hover:bg-muted" aria-label={text(uiText.close, language)}>
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4 p-5">
              <CookieRow title={text(footerText.necessary, language)} badge={text(footerText.alwaysOn, language)} checked disabled />
              <CookieRow title={text(footerText.analytics, language)} badge={text(footerText.optional, language)} checked={analytics} onCheckedChange={setAnalytics} />
            </div>

            <div className="flex flex-col gap-3 border-t border-border p-5 sm:flex-row">
              <Button variant="outline" onClick={() => save(false)} className="flex-1">{text(footerText.reject, language)}</Button>
              <Button variant="outline" onClick={() => save(analytics)} className="flex-1">{text(footerText.save, language)}</Button>
              <Button onClick={() => save(true)} className="flex-1">{text(footerText.accept, language)}</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function FooterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return <div><h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">{title}</h2><div className="flex flex-col gap-2.5">{children}</div></div>;
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return <Link to={to} className={linkClass}>{children}</Link>;
}

function CookieRow({ title, badge, checked, disabled = false, onCheckedChange }: { title: string; badge: string; checked: boolean; disabled?: boolean; onCheckedChange?: (checked: boolean) => void }) {
  return <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-muted/30 p-4"><div><h3 className="font-semibold text-foreground">{title}</h3><p className="mt-1 text-xs text-muted-foreground">{badge}</p></div><Switch checked={checked} disabled={disabled} onCheckedChange={onCheckedChange} /></div>;
}
