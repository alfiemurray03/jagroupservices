import { useEffect, useState, type ReactNode } from 'react';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import { LanguageSwitcher, useLanguage } from '@/components/LanguageProvider';
import ThemeToggle from '@/components/ThemeToggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DARK_THEME_LOGO } from '@/lib/site-logos';
import { text, uiText } from '@/lib/public-site-content';

const linkClass =
  'rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onEscape = (event: KeyboardEvent) => event.key === 'Escape' && close();
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, [open]);

  return (
    <header className="print-hidden sticky top-0 z-50 border-b border-border bg-card/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3 md:h-[76px]">
          <Link to="/" onClick={close} className="flex min-w-0 items-center" aria-label="JA Group Services Ltd home">
            <img
              src="/images/ja-group-services-light.webp"
              alt="JA Group Services Ltd"
              className="site-logo-light h-11 w-auto max-w-[190px] object-contain sm:h-12 sm:max-w-[220px] md:h-14 md:max-w-[250px]"
            />
            <img
              src={DARK_THEME_LOGO}
              alt="JA Group Services Ltd"
              className="site-logo-dark h-[58px] w-auto max-w-[190px] object-contain sm:h-16 sm:max-w-[220px] md:h-[68px] md:max-w-[245px]"
            />
          </Link>

          <nav className="hidden items-center gap-1 2xl:flex" aria-label="Main navigation">
            <Link to="/" className={linkClass}>{text(uiText.home, language)}</Link>
            <Link to="/about-us" className={linkClass}>{text(uiText.about, language)}</Link>

            <NavDropdown label={text(uiText.brands, language)}>
              <NavInternal to="/about-our-divisions" title={text(uiText.brands, language)} />
              <NavExternal href="https://profilecentre.jagroupservices.co.uk/" title="Profile Centre" />
              <NavExternal href="https://planyx.jagroupservices.co.uk/" title="Planyx" />
              <NavExternal href="https://jadomainhub.jagroupservices.co.uk/" title="JA Domain Hub" />
            </NavDropdown>

            <NavDropdown label={text(uiText.corporate, language)}>
              <NavInternal to="/our-group-structure" title={text(uiText.structure, language)} />
              <NavInternal to="/trust-and-governance" title={text(uiText.trustCentre, language)} />
              <NavInternal to="/help-and-support" title={text(uiText.supportCentre, language)} />
              <NavInternal to="/service-status" title={text(uiText.serviceStatus, language)} />
              <NavInternal to="/announcements" title={text(uiText.announcements, language)} />
            </NavDropdown>

            <NavDropdown label={text(uiText.policies, language)}>
              <NavInternal to="/terms-of-service" title={text(uiText.terms, language)} />
              <NavInternal to="/privacy-policy" title={text(uiText.privacy, language)} />
              <NavInternal to="/cookies-policy" title={text(uiText.cookies, language)} />
              <NavInternal to="/complaints-policy" title={text(uiText.complaints, language)} />
              <NavInternal to="/ip-statement" title={text(uiText.intellectualProperty, language)} />
              <NavInternal to="/accessibility-statement" title={text(uiText.accessibility, language)} />
              <NavInternal to="/security-and-vulnerability-disclosure" title={text(uiText.security, language)} />
              <NavInternal to="/affiliate-disclosure" title={text(uiText.affiliate, language)} />
            </NavDropdown>

            <Link to="/partner-with-us" className={linkClass}>{text(uiText.partner, language)}</Link>
            <Link to="/contactus" className={linkClass}>{text(uiText.contact, language)}</Link>
          </nav>

          <div className="hidden items-center gap-2 2xl:flex">
            <a href="tel:02038342790" className="flex min-h-10 items-center gap-2 rounded-xl border border-border bg-muted px-3 text-sm font-semibold text-foreground">
              <Phone className="h-4 w-4 text-primary" />
              020 3834 2790
            </a>
            <LanguageSwitcher compact />
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 2xl:hidden">
            <LanguageSwitcher compact />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground hover:bg-muted"
              aria-label={open ? text(uiText.close, language) : text(uiText.menu, language)}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-card shadow-2xl 2xl:hidden">
          <nav className="mx-auto max-w-7xl space-y-2 px-4 py-4 sm:px-6" aria-label="Mobile navigation">
            <MobileLink to="/" onClick={close}>{text(uiText.home, language)}</MobileLink>
            <MobileLink to="/about-us" onClick={close}>{text(uiText.about, language)}</MobileLink>
            <MobileGroup title={text(uiText.brands, language)}>
              <MobileLink to="/about-our-divisions" onClick={close}>{text(uiText.brands, language)}</MobileLink>
              <MobileExternal href="https://profilecentre.jagroupservices.co.uk/" onClick={close}>Profile Centre</MobileExternal>
              <MobileExternal href="https://planyx.jagroupservices.co.uk/" onClick={close}>Planyx</MobileExternal>
              <MobileExternal href="https://jadomainhub.jagroupservices.co.uk/" onClick={close}>JA Domain Hub</MobileExternal>
            </MobileGroup>
            <MobileGroup title={text(uiText.corporate, language)}>
              <MobileLink to="/our-group-structure" onClick={close}>{text(uiText.structure, language)}</MobileLink>
              <MobileLink to="/trust-and-governance" onClick={close}>{text(uiText.trustCentre, language)}</MobileLink>
              <MobileLink to="/help-and-support" onClick={close}>{text(uiText.supportCentre, language)}</MobileLink>
              <MobileLink to="/service-status" onClick={close}>{text(uiText.serviceStatus, language)}</MobileLink>
              <MobileLink to="/announcements" onClick={close}>{text(uiText.announcements, language)}</MobileLink>
            </MobileGroup>
            <MobileGroup title={text(uiText.policies, language)}>
              <MobileLink to="/terms-of-service" onClick={close}>{text(uiText.terms, language)}</MobileLink>
              <MobileLink to="/privacy-policy" onClick={close}>{text(uiText.privacy, language)}</MobileLink>
              <MobileLink to="/cookies-policy" onClick={close}>{text(uiText.cookies, language)}</MobileLink>
              <MobileLink to="/complaints-policy" onClick={close}>{text(uiText.complaints, language)}</MobileLink>
              <MobileLink to="/ip-statement" onClick={close}>{text(uiText.intellectualProperty, language)}</MobileLink>
              <MobileLink to="/accessibility-statement" onClick={close}>{text(uiText.accessibility, language)}</MobileLink>
              <MobileLink to="/security-and-vulnerability-disclosure" onClick={close}>{text(uiText.security, language)}</MobileLink>
              <MobileLink to="/affiliate-disclosure" onClick={close}>{text(uiText.affiliate, language)}</MobileLink>
            </MobileGroup>
            <MobileLink to="/partner-with-us" onClick={close}>{text(uiText.partner, language)}</MobileLink>
            <MobileLink to="/contactus" onClick={close}>{text(uiText.contact, language)}</MobileLink>
            <a href="tel:02038342790" className="flex min-h-12 items-center gap-2 rounded-xl border border-border bg-muted px-4 py-3 font-semibold text-foreground">
              <Phone className="h-4 w-4 text-primary" />
              020 3834 2790
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavDropdown({ label, children }: { label: string; children: ReactNode }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={`${linkClass} flex items-center gap-1 outline-none`}>
        {label}<ChevronDown className="h-3.5 w-3.5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-[70vh] w-[310px] overflow-y-auto rounded-2xl border-border bg-popover p-1.5 text-popover-foreground shadow-xl">
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function NavInternal({ to, title }: { to: string; title: string }) {
  return <DropdownMenuItem asChild className="rounded-xl p-3"><Link to={to} className="cursor-pointer font-medium">{title}</Link></DropdownMenuItem>;
}

function NavExternal({ href, title }: { href: string; title: string }) {
  return <DropdownMenuItem asChild className="rounded-xl p-3"><a href={href} target="_blank" rel="noopener noreferrer" className="cursor-pointer font-medium">{title}</a></DropdownMenuItem>;
}

function MobileGroup({ title, children }: { title: string; children: ReactNode }) {
  return <div className="rounded-2xl border border-border bg-muted/40 p-2"><p className="px-2 pb-1 pt-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">{title}</p>{children}</div>;
}

function MobileLink({ to, onClick, children }: { to: string; onClick: () => void; children: ReactNode }) {
  return <Link to={to} onClick={onClick} className="flex min-h-11 items-center rounded-xl px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted">{children}</Link>;
}

function MobileExternal({ href, onClick, children }: { href: string; onClick: () => void; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className="flex min-h-11 items-center rounded-xl px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted">{children}</a>;
}
