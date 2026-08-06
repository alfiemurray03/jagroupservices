import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, CircleUserRound, Menu, Phone, X } from 'lucide-react';

import CustomerWebsitesMenu, { MobileCustomerWebsitesMenu } from '@/components/CustomerWebsitesMenu';
import { useLanguage } from '@/components/LanguageProvider';
import ThemeToggle from '@/components/ThemeToggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DARK_THEME_LOGO } from '@/lib/site-logos';
import { t } from '@/lib/translations';

const navigationLinkClass =
  'whitespace-nowrap rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-150 hover:bg-muted hover:text-foreground';

type HeaderIdentityUser = { name?: string; email?: string };
type HeaderSessionResponse = { authenticated?: boolean; user?: HeaderIdentityUser };

function DesktopMenuItem({ to, title, description }: { to: string; title: string; description: string }) {
  return (
    <DropdownMenuItem asChild className="rounded-xl p-3 focus:bg-muted">
      <Link to={to} className="cursor-pointer">
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-xs text-muted-foreground">{description}</div>
        </div>
      </Link>
    </DropdownMenuItem>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [identityUser, setIdentityUser] = useState<HeaderIdentityUser | null>(null);
  const { language } = useLanguage();
  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/id/session', {
      credentials: 'include',
      cache: 'no-store',
      headers: { Accept: 'application/json' },
      signal: controller.signal,
    })
      .then((response) => response.json() as Promise<HeaderSessionResponse>)
      .then((data) => setIdentityUser(data.authenticated && data.user ? data.user : null))
      .catch((error) => {
        if (error instanceof DOMException && error.name === 'AbortError') return;
        setIdentityUser(null);
      });
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMobileMenu();
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [mobileMenuOpen]);

  const signedIn = Boolean(identityUser);
  const accountDestination = signedIn ? '/id/dashboard' : '/id/sign-in';
  const accountLabel = identityUser?.name?.trim() || 'Sign in';
  const accountAccessibleLabel = signedIn
    ? `Open the JA Group Services ID Dashboard for ${accountLabel}`
    : 'Sign in to JA Group Services ID';

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 2xl:px-7">
        <div className="flex h-16 items-center justify-between gap-3 md:h-[76px]">
          <Link to="/" className="group flex min-w-0 shrink-0 items-center" aria-label="JA Group Services Ltd — home" onClick={closeMobileMenu}>
            <img src="/images/ja-group-services-light.webp" alt="JA Group Services Ltd" className="site-logo-light h-11 w-auto max-w-[190px] shrink-0 object-contain sm:h-12 sm:max-w-[220px] md:h-14 2xl:max-w-[225px]" />
            <img src={DARK_THEME_LOGO} alt="JA Group Services Ltd" className="site-logo-dark h-[58px] w-auto max-w-[190px] shrink-0 object-contain sm:h-16 sm:max-w-[220px] md:h-[68px] 2xl:max-w-[225px]" />
          </Link>

          <nav className="hidden min-w-0 items-center justify-center gap-0.5 2xl:flex" aria-label="Main navigation">
            <Link to="/" className={navigationLinkClass}>Home</Link>
            <Link to="/about-our-divisions" className={navigationLinkClass}>Brands</Link>
            <Link to="/services" className={navigationLinkClass}>Services</Link>

            <DropdownMenu>
              <DropdownMenuTrigger className={`${navigationLinkClass} flex items-center gap-1 outline-none`}>
                Company <ChevronDown className="h-3.5 w-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[310px] rounded-2xl border-border bg-popover p-1.5 text-popover-foreground shadow-xl">
                <DesktopMenuItem to="/about-us" title="About Us" description="Who we are and how we operate" />
                <DesktopMenuItem to="/meet-the-team" title="Meet the Team" description="Company leadership and responsibilities" />
                <DesktopMenuItem to="/our-group-structure" title="Company and Brand Structure" description="Legal company, master brand and services" />
                <DesktopMenuItem to="/governance" title="Governance" description="Authority, oversight and accountability" />
                <DesktopMenuItem to="/corporate-information" title="Stakeholder Centre" description="Suppliers, investors and shareholders" />
                <DesktopMenuItem to="/announcements" title="Announcements" description="Official corporate newsroom" />
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className={`${navigationLinkClass} flex items-center gap-1 outline-none`}>
                Work With Us <ChevronDown className="h-3.5 w-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[320px] rounded-2xl border-border bg-popover p-1.5 text-popover-foreground shadow-xl">
                <DesktopMenuItem to="/partner-with-us" title="Partners and Suppliers" description="Commercial, technology and supplier relationships" />
                <DesktopMenuItem to="/affiliate-partners" title="Affiliate Partners — Coming Soon" description="Planned programme for approved promoters" />
                <DesktopMenuItem to="/careers" title="Careers and Vacancies — Coming Soon" description="Future opportunities and recruitment information" />
                <DesktopMenuItem to="/corporate-information#investors" title="Corporate and Investor Enquiries" description="Information for investors and future shareholders" />
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className={`${navigationLinkClass} flex items-center gap-1 outline-none`}>
                Support <ChevronDown className="h-3.5 w-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[310px] rounded-2xl border-border bg-popover p-1.5 text-popover-foreground shadow-xl">
                <DesktopMenuItem to="/customer-support" title="Customer Support Centre" description="Accounts, billing and service support" />
                <DesktopMenuItem to="/privacy-centre" title="Privacy Centre" description="Personal data rights and DPO contact" />
                <DesktopMenuItem to="/security" title="Security and Disclosure" description="Report vulnerabilities and security concerns" />
                <DesktopMenuItem to="/accessibility-statement" title="Accessibility" description="Accessibility objectives and feedback" />
                <DesktopMenuItem to="/safeguarding" title="Safeguarding and Trust" description="Raise welfare and safety concerns" />
                <DesktopMenuItem to="/complaints-policy" title="Complaints & Refunds" description="Formal complaint and refund process" />
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/contactus" className={navigationLinkClass}>{t('header.contact', language)}</Link>
          </nav>

          <div className="hidden shrink-0 items-center gap-2 2xl:flex">
            <Link
              to={accountDestination}
              title={signedIn ? accountLabel : undefined}
              aria-label={accountAccessibleLabel}
              className="inline-flex min-h-10 min-w-0 shrink-0 items-center gap-2 whitespace-nowrap rounded-xl bg-primary px-3.5 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
            >
              <CircleUserRound className="h-4 w-4 shrink-0" />
              <span className="max-w-[9rem] truncate xl:max-w-[11rem] 2xl:max-w-[13rem]">{accountLabel}</span>
            </Link>
            <a href="tel:02038342790" className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl border border-border bg-muted px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              <Phone className="h-4 w-4 text-primary" />
              <span>020 3834 2790</span>
            </a>
            <ThemeToggle />
            <CustomerWebsitesMenu />
          </div>

          <div className="flex shrink-0 items-center gap-2 2xl:hidden">
            <Link to={accountDestination} onClick={closeMobileMenu} title={signedIn ? accountLabel : undefined} className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition hover:bg-primary/90" aria-label={accountAccessibleLabel}>
              <CircleUserRound className="h-5 w-5" />
            </Link>
            <ThemeToggle />
            <button type="button" onClick={() => setMobileMenuOpen((open) => !open)} className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen} aria-controls="mobile-menu">
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-menu" className="absolute left-0 right-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-border bg-card shadow-2xl 2xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Mobile navigation">
            <Link to={accountDestination} onClick={closeMobileMenu} title={signedIn ? accountLabel : undefined} className="mb-2 flex min-h-12 min-w-0 items-center gap-3 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground" aria-label={accountAccessibleLabel}>
              <CircleUserRound className="h-5 w-5 shrink-0" />
              <span className="truncate">{signedIn ? accountLabel : 'Sign in to JA Group Services ID'}</span>
            </Link>
            <a href="tel:02038342790" className="mb-2 flex min-h-12 items-center gap-2 rounded-xl border border-border bg-muted px-4 py-3 text-sm font-semibold text-foreground"><Phone className="h-4 w-4 text-primary" />020 3834 2790</a>

            <MobileLink to="/" onClick={closeMobileMenu}>Home</MobileLink>
            <MobileLink to="/about-our-divisions" onClick={closeMobileMenu}>Sousa Murray Brands</MobileLink>
            <MobileLink to="/services" onClick={closeMobileMenu}>Our Services</MobileLink>

            <MobileGroup title="Company">
              <MobileLink to="/about-us" onClick={closeMobileMenu}>About Us</MobileLink>
              <MobileLink to="/meet-the-team" onClick={closeMobileMenu}>Meet the Team</MobileLink>
              <MobileLink to="/our-group-structure" onClick={closeMobileMenu}>Company and Brand Structure</MobileLink>
              <MobileLink to="/governance" onClick={closeMobileMenu}>Governance</MobileLink>
              <MobileLink to="/corporate-information" onClick={closeMobileMenu}>Stakeholder Centre</MobileLink>
              <MobileLink to="/announcements" onClick={closeMobileMenu}>Announcements</MobileLink>
            </MobileGroup>

            <MobileGroup title="Work With Us">
              <MobileLink to="/partner-with-us" onClick={closeMobileMenu}>Partners and Suppliers</MobileLink>
              <MobileLink to="/affiliate-partners" onClick={closeMobileMenu}>Affiliate Partners — Coming Soon</MobileLink>
              <MobileLink to="/careers" onClick={closeMobileMenu}>Careers and Vacancies — Coming Soon</MobileLink>
              <MobileLink to="/corporate-information#investors" onClick={closeMobileMenu}>Investor Information</MobileLink>
            </MobileGroup>

            <MobileGroup title="Support and Trust">
              <MobileLink to="/customer-support" onClick={closeMobileMenu}>Customer Support Centre</MobileLink>
              <MobileLink to="/privacy-centre" onClick={closeMobileMenu}>Privacy Centre</MobileLink>
              <MobileLink to="/security" onClick={closeMobileMenu}>Security and Disclosure</MobileLink>
              <MobileLink to="/accessibility-statement" onClick={closeMobileMenu}>Accessibility Statement</MobileLink>
              <MobileLink to="/safeguarding" onClick={closeMobileMenu}>Safeguarding and Trust</MobileLink>
              <MobileLink to="/complaints-policy" onClick={closeMobileMenu}>Complaints & Refunds Policy</MobileLink>
            </MobileGroup>

            <MobileCustomerWebsitesMenu onNavigate={closeMobileMenu} />
            <MobileLink to="/contactus" onClick={closeMobileMenu}>{t('header.contact', language)}</MobileLink>
          </nav>
        </div>
      )}
    </header>
  );
}

function MobileGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-1 rounded-2xl border border-border bg-muted/40 p-2">
      <p className="px-2 pb-1.5 pt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{title}</p>
      {children}
    </div>
  );
}

function MobileLink({ to, onClick, children }: { to: string; onClick: () => void; children: React.ReactNode }) {
  return <Link to={to} onClick={onClick} className="flex min-h-12 items-center rounded-xl px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted">{children}</Link>;
}
