import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';

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
            <Link to="/about-us" className={navigationLinkClass}>About</Link>

            <DropdownMenu>
              <DropdownMenuTrigger className={`${navigationLinkClass} flex items-center gap-1 outline-none`}>
                Operating Brands
                <ChevronDown className="h-3.5 w-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[280px] rounded-2xl border-border bg-popover p-1.5 text-popover-foreground shadow-xl">
                <DropdownMenuItem asChild className="rounded-xl p-3 focus:bg-muted">
                  <a href="https://profilecentre.jagroupservices.co.uk/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    <div>
                      <div className="font-semibold">Profile Centre</div>
                      <div className="text-xs text-muted-foreground">Digital profile platform</div>
                    </div>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-xl p-3 focus:bg-muted">
                  <a href="https://planyx.jagroupservices.co.uk/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    <div>
                      <div className="font-semibold">Planyx</div>
                      <div className="text-xs text-muted-foreground">Experience and itinerary planning</div>
                    </div>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-xl p-3 focus:bg-muted">
                  <a href="https://jadomainhub.jagroupservices.co.uk/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    <div>
                      <div className="font-semibold">JA Domain Hub</div>
                      <div className="text-xs text-muted-foreground">Domain support &amp; GoDaddy reseller</div>
                    </div>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className={`${navigationLinkClass} flex items-center gap-1 outline-none`}>
                Divisions
                <ChevronDown className="h-3.5 w-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[260px] rounded-2xl border-border bg-popover p-1.5 text-popover-foreground shadow-xl">
                <DropdownMenuItem asChild className="rounded-xl p-3 focus:bg-muted">
                  <Link to="/about-our-divisions" className="cursor-pointer">
                    <div>
                      <div className="font-semibold">About Our Divisions</div>
                      <div className="text-xs text-muted-foreground">Overview of our operating brands</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-xl p-3 focus:bg-muted">
                  <Link to="/our-group-structure" className="cursor-pointer">
                    <div>
                      <div className="font-semibold">Our Group Structure</div>
                      <div className="text-xs text-muted-foreground">Company and brand structure</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/partner-with-us" className={navigationLinkClass}>Partner With Us</Link>
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
            <MobileLink to="/about-us" onClick={closeMobileMenu}>About</MobileLink>

            <MobileGroup title="Operating Brands">
              <MobileExternalLink href="https://profilecentre.jagroupservices.co.uk/" onClick={closeMobileMenu}>Profile Centre</MobileExternalLink>
              <MobileExternalLink href="https://planyx.jagroupservices.co.uk/" onClick={closeMobileMenu}>Planyx</MobileExternalLink>
              <MobileExternalLink href="https://jadomainhub.jagroupservices.co.uk/" onClick={closeMobileMenu}>JA Domain Hub</MobileExternalLink>
            </MobileGroup>

            <MobileGroup title="Divisions">
              <MobileLink to="/about-our-divisions" onClick={closeMobileMenu}>About Our Divisions</MobileLink>
              <MobileLink to="/our-group-structure" onClick={closeMobileMenu}>Our Group Structure</MobileLink>
            </MobileGroup>

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

function MobileExternalLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="flex min-h-12 items-center rounded-xl px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
    >
      {children}
    </a>
  );
}
