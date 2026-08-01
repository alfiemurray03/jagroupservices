import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

import { useLanguage } from '@/components/LanguageProvider';
import { t } from '@/lib/translations';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger } from
'@/components/ui/dropdown-menu';

// Updated: 2026-02-25 - Clean production header
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/40 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex h-24 md:h-28 lg:h-32 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/media/pages-unknown-ja-group-services-ltd-a68f987b.jpg"
              alt="JA Group Services Ltd"
              className="h-20 md:h-24 lg:h-28 w-auto" />

          </Link>

          {/* Phone Number - Desktop Only */}
          <a
            href="tel:02038342790"
            className="hidden md:flex items-center gap-2 text-[#0A1F44] hover:text-primary transition-colors font-medium">

            <Phone className="h-5 w-5" />
            <span className="text-sm lg:text-base">020 3834 2790</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors px-4 py-2 text-sm font-medium">
              Home
            </Link>

            <Link
              to="/about-us"
              className="text-foreground hover:text-primary transition-colors px-4 py-2 text-sm font-medium">
              About
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors px-4 py-2 text-sm font-medium bg-transparent border-none outline-none">
                Operating Brands
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[260px] bg-white/95 backdrop-blur-md border-white/20">
                <DropdownMenuItem asChild>
                  <a
                    href="https://profilecentre.jagroupservices.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer">
                    <div>
                      <div className="font-medium">Profile Centre</div>
                      <div className="text-xs text-muted-foreground">Digital profile platform</div>
                    </div>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="https://planyx.jagroupservices.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer">
                    <div>
                      <div className="font-medium">Planyx</div>
                      <div className="text-xs text-muted-foreground">Experience and itinerary planning</div>
                    </div>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="https://jadomainhub.jagroupservices.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer">
                    <div>
                      <div className="font-medium">JA Domain Hub</div>
                      <div className="text-xs text-muted-foreground">Domain support & GoDaddy reseller</div>
                    </div>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors px-4 py-2 text-sm font-medium bg-transparent border-none outline-none">
                Divisions
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[220px] bg-white/95 backdrop-blur-md border-white/20">
                <DropdownMenuItem asChild>
                  <Link to="/about-our-divisions" className="cursor-pointer">
                    <div>
                      <div className="font-medium">About Our Divisions</div>
                      <div className="text-xs text-muted-foreground">Overview of our operating brands</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/our-group-structure" className="cursor-pointer">
                    <div>
                      <div className="font-medium">Our Group Structure</div>
                      <div className="text-xs text-muted-foreground">Company and brand structure</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/partner-with-us"
              className="text-foreground hover:text-primary transition-colors px-4 py-2 text-sm font-medium">
              Partner With Us
            </Link>

            <Link
              to="/contactus"
              className="text-foreground hover:text-primary transition-colors px-4 py-2 text-sm font-medium">
              {t('header.contact', language)}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu">

            {mobileMenuOpen ?
            <X className="h-6 w-6" /> :

            <Menu className="h-6 w-6" />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen &&
        <div className="lg:hidden py-4 border-t border-border">
            {/* Phone Number - Mobile */}
            <a
            href="tel:02038342790"
            className="flex items-center gap-2 text-[#0A1F44] hover:text-primary transition-colors font-medium py-3 border-b border-border mb-4">

              <Phone className="h-5 w-5" />
              <span className="text-base">020 3834 2790</span>
            </a>

            <nav className="flex flex-col space-y-4">
              <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>

              <Link
              to="/about-us"
              className="text-foreground hover:text-primary transition-colors py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>

              <div className="space-y-2">
                <div className="text-foreground text-sm font-medium py-2">Operating Brands</div>
                <div className="pl-4 space-y-2">
                  <a
                  href="https://profilecentre.jagroupservices.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-foreground transition-colors py-2 text-sm"
                  onClick={() => setMobileMenuOpen(false)}>
                    Profile Centre
                  </a>
                  <a
                  href="https://planyx.jagroupservices.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-foreground transition-colors py-2 text-sm"
                  onClick={() => setMobileMenuOpen(false)}>
                    Planyx
                  </a>
                  <a
                  href="https://jadomainhub.jagroupservices.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-foreground transition-colors py-2 text-sm"
                  onClick={() => setMobileMenuOpen(false)}>
                    JA Domain Hub
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-foreground text-sm font-medium py-2">Divisions</div>
                <div className="pl-4 space-y-2">
                  <Link
                  to="/about-our-divisions"
                  className="block text-muted-foreground hover:text-foreground transition-colors py-2 text-sm"
                  onClick={() => setMobileMenuOpen(false)}>
                    About Our Divisions
                  </Link>
                  <Link
                  to="/our-group-structure"
                  className="block text-muted-foreground hover:text-foreground transition-colors py-2 text-sm"
                  onClick={() => setMobileMenuOpen(false)}>
                    Our Group Structure
                  </Link>
                </div>
              </div>

              <Link
              to="/partner-with-us"
              className="text-foreground hover:text-primary transition-colors py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}>
                Partner With Us
              </Link>

              <Link
              to="/contactus"
              className="text-foreground hover:text-primary transition-colors py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}>
                {t('header.contact', language)}
              </Link>
            </nav>
          </div>
        }
      </div>
    </header>);

}
