import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';

import { useLanguage } from '@/components/LanguageProvider';
import ThemeToggle from '@/components/ThemeToggle';
import { t } from '@/lib/translations';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navigationLinkClass =
  'rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-all duration-150 hover:bg-muted hover:text-foreground';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language } = useLanguage();

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4 md:h-[72px]">
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-2.5"
            aria-label="JA Group Services Ltd — home"
          >
            <img
              src="/media/pages-unknown-ja-group-services-ltd-a68f987b.jpg"
              alt="JA Group Services Ltd"
              className="h-12 w-auto max-w-[180px] shrink-0 object-contain md:h-14 md:max-w-[210px]"
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

          <div className="flex items-center gap-2 xl:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
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
        <div id="mobile-menu" className="border-t border-border bg-card px-4 py-4 xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1" aria-label="Mobile navigation">
            <a
              href="tel:02038342790"
              className="mb-2 flex min-h-12 items-center gap-2 rounded-xl bg-muted px-4 py-3 text-sm font-semibold text-foreground"
            >
              <Phone className="h-4 w-4 text-primary" />
              020 3834 2790
            </a>

            <Link to="/" onClick={closeMobileMenu} className="flex min-h-12 items-center rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-muted">Home</Link>
            <Link to="/about-us" onClick={closeMobileMenu} className="flex min-h-12 items-center rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-muted">About</Link>

            <div className="rounded-2xl border border-border bg-muted/40 p-3">
              <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Operating Brands</p>
              <a href="https://profilecentre.jagroupservices.co.uk/" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu} className="block rounded-xl px-3 py-2.5 text-sm text-foreground hover:bg-muted">Profile Centre</a>
              <a href="https://planyx.jagroupservices.co.uk/" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu} className="block rounded-xl px-3 py-2.5 text-sm text-foreground hover:bg-muted">Planyx</a>
              <a href="https://jadomainhub.jagroupservices.co.uk/" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu} className="block rounded-xl px-3 py-2.5 text-sm text-foreground hover:bg-muted">JA Domain Hub</a>
            </div>

            <div className="mt-1 rounded-2xl border border-border bg-muted/40 p-3">
              <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Divisions</p>
              <Link to="/about-our-divisions" onClick={closeMobileMenu} className="block rounded-xl px-3 py-2.5 text-sm text-foreground hover:bg-muted">About Our Divisions</Link>
              <Link to="/our-group-structure" onClick={closeMobileMenu} className="block rounded-xl px-3 py-2.5 text-sm text-foreground hover:bg-muted">Our Group Structure</Link>
            </div>

            <Link to="/partner-with-us" onClick={closeMobileMenu} className="mt-1 flex min-h-12 items-center rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-muted">Partner With Us</Link>
            <Link to="/contactus" onClick={closeMobileMenu} className="flex min-h-12 items-center rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-muted">{t('header.contact', language)}</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
