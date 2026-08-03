import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';

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
  'rounded-xl px-3.5 py-2 text-sm font-medium text-muted-foreground transition-all duration-150 hover:bg-muted hover:text-foreground';

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
  const { language } = useLanguage();

  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMobileMenu();
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [mobileMenuOpen]);

  return (
    <header className="relative sticky top-0 z-50 border-b border-border bg-card/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3 md:h-[76px]">
          <Link
            to="/"
            className="group flex min-w-0 shrink items-center"
            aria-label="JA Group Services Ltd — home"
            onClick={closeMobileMenu}
          >
            <img
              src="/images/ja-group-services-light.webp"
              alt="JA Group Services Ltd"
              className="site-logo-light h-11 w-auto max-w-[190px] shrink-0 object-contain sm:h-12 sm:max-w-[220px] md:h-14 md:max-w-[250px]"
            />
            <img
              src={DARK_THEME_LOGO}
              alt="JA Group Services Ltd"
              className="site-logo-dark h-[58px] w-auto max-w-[190px] shrink-0 object-contain sm:h-16 sm:max-w-[220px] md:h-[68px] md:max-w-[245px]"
            />
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
            <Link to="/" className={navigationLinkClass}>Home</Link>
            <Link to="/services" className={navigationLinkClass}>Services</Link>

            <DropdownMenu>
              <DropdownMenuTrigger className={`${navigationLinkClass} flex items-center gap-1 outline-none`}>
                Company
                <ChevronDown className="h-3.5 w-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[290px] rounded-2xl border-border bg-popover p-1.5 text-popover-foreground shadow-xl">
                <DesktopMenuItem to="/about-us" title="About Us" description="Who we are and how we operate" />
                <DesktopMenuItem to="/meet-the-team" title="Meet the Team" description="Meet our company leadership" />
                <DesktopMenuItem to="/about-our-divisions" title="Divisions and Platforms" description="Overview of our operating services" />
                <DesktopMenuItem to="/our-group-structure" title="Our Group Structure" description="Company and brand structure" />
                <DesktopMenuItem to="/governance" title="Governance" description="Authority, oversight and accountability" />
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className={`${navigationLinkClass} flex items-center gap-1 outline-none`}>
                Support
                <ChevronDown className="h-3.5 w-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[300px] rounded-2xl border-border bg-popover p-1.5 text-popover-foreground shadow-xl">
                <DesktopMenuItem to="/customer-support" title="Customer Support Centre" description="Accounts, billing and service support" />
                <DesktopMenuItem to="/privacy-centre" title="Privacy Centre" description="Personal data rights and DPO contact" />
                <DesktopMenuItem to="/security" title="Security and Disclosure" description="Report vulnerabilities and security concerns" />
                <DesktopMenuItem to="/accessibility-statement" title="Accessibility" description="Accessibility objectives and feedback" />
                <DesktopMenuItem to="/safeguarding" title="Safeguarding and Trust" description="Raise welfare and safety concerns" />
                <DesktopMenuItem to="/complaints-policy" title="Complaints" description="Read our formal complaints process" />
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/partner-with-us" className={navigationLinkClass}>Partner</Link>
            <Link to="/contactus" className={navigationLinkClass}>{t('header.contact', language)}</Link>
          </nav>

          <div className="hidden items-center gap-2.5 xl:flex">
            <a
              href="tel:02038342790"
              className="flex items-center gap-2 rounded-xl border border-border bg-muted px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <Phone className="h-4 w-4 text-primary" />
              <span>020 3834 2790</span>
            </a>
            <ThemeToggle />
            <CustomerWebsitesMenu />
          </div>

          <div className="flex shrink-0 items-center gap-2 xl:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute left-0 right-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-border bg-card shadow-2xl xl:hidden"
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Mobile navigation">
            <a
              href="tel:02038342790"
              className="mb-2 flex min-h-12 items-center gap-2 rounded-xl border border-border bg-muted px-4 py-3 text-sm font-semibold text-foreground"
            >
              <Phone className="h-4 w-4 text-primary" />
              020 3834 2790
            </a>

            <MobileLink to="/" onClick={closeMobileMenu}>Home</MobileLink>
            <MobileLink to="/services" onClick={closeMobileMenu}>Our Services</MobileLink>

            <MobileGroup title="Company">
              <MobileLink to="/about-us" onClick={closeMobileMenu}>About Us</MobileLink>
              <MobileLink to="/meet-the-team" onClick={closeMobileMenu}>Meet the Team</MobileLink>
              <MobileLink to="/about-our-divisions" onClick={closeMobileMenu}>Divisions and Platforms</MobileLink>
              <MobileLink to="/our-group-structure" onClick={closeMobileMenu}>Our Group Structure</MobileLink>
              <MobileLink to="/governance" onClick={closeMobileMenu}>Governance</MobileLink>
            </MobileGroup>

            <MobileGroup title="Support and Trust">
              <MobileLink to="/customer-support" onClick={closeMobileMenu}>Customer Support Centre</MobileLink>
              <MobileLink to="/privacy-centre" onClick={closeMobileMenu}>Privacy Centre</MobileLink>
              <MobileLink to="/security" onClick={closeMobileMenu}>Security and Disclosure</MobileLink>
              <MobileLink to="/accessibility-statement" onClick={closeMobileMenu}>Accessibility Statement</MobileLink>
              <MobileLink to="/safeguarding" onClick={closeMobileMenu}>Safeguarding and Trust</MobileLink>
              <MobileLink to="/complaints-policy" onClick={closeMobileMenu}>Complaints Policy</MobileLink>
            </MobileGroup>

            <MobileCustomerWebsitesMenu onNavigate={closeMobileMenu} />

            <MobileLink to="/partner-with-us" onClick={closeMobileMenu}>Partner With Us</MobileLink>
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
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex min-h-12 items-center rounded-xl px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
    >
      {children}
    </Link>
  );
}
