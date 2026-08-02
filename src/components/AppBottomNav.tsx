import { Building2, Headphones, Home, Menu, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useLanguage } from '@/components/LanguageProvider';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { text, uiText } from '@/lib/public-site-content';

export function AppBottomNav() {
  const location = useLocation();
  const { language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { icon: Home, label: text(uiText.home, language), path: '/' },
    { icon: Building2, label: text(uiText.brands, language), path: '/about-our-divisions' },
    { icon: Headphones, label: text(uiText.supportCentre, language), path: '/help-and-support' },
  ];

  const menuItems = [
    { label: text(uiText.about, language), path: '/about-us' },
    { label: text(uiText.structure, language), path: '/our-group-structure' },
    { label: text(uiText.trustCentre, language), path: '/trust-and-governance' },
    { label: text(uiText.serviceStatus, language), path: '/service-status' },
    { label: text(uiText.partner, language), path: '/partner-with-us' },
    { label: text(uiText.policies, language), path: '/terms-of-service' },
    { label: text(uiText.sitemap, language), path: '/sitemap' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="print-hidden fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card text-card-foreground shadow-2xl safe-area-inset-bottom"
      >
        <div className="grid h-20 grid-cols-5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path} className="relative flex flex-col items-center justify-center gap-1 px-1">
                {active && <motion.div layoutId="activePwaTab" className="absolute inset-1 rounded-xl bg-primary/10" />}
                <Icon className={`relative z-10 h-5 w-5 ${active ? 'text-primary' : 'text-muted-foreground'}`} />
                <span className={`relative z-10 max-w-full truncate text-[10px] font-bold ${active ? 'text-primary' : 'text-muted-foreground'}`}>{item.label}</span>
              </Link>
            );
          })}

          <Link to="/contactus" className="relative flex flex-col items-center justify-center gap-1 px-1">
            <Phone className={`h-5 w-5 ${location.pathname === '/contactus' ? 'text-primary' : 'text-muted-foreground'}`} />
            <span className={`max-w-full truncate text-[10px] font-bold ${location.pathname === '/contactus' ? 'text-primary' : 'text-muted-foreground'}`}>{text(uiText.contact, language)}</span>
          </Link>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button type="button" className="flex flex-col items-center justify-center gap-1 px-1 text-muted-foreground">
                <Menu className="h-5 w-5" />
                <span className="text-[10px] font-bold">{text(uiText.menu, language)}</span>
              </button>
            </SheetTrigger>
            <SheetContent side="bottom" className="max-h-[75vh] overflow-y-auto rounded-t-3xl border-border bg-card text-card-foreground">
              <div className="py-5">
                <h2 className="mb-5 px-4 text-xl font-bold text-foreground">{text(uiText.menu, language)}</h2>
                <div className="space-y-1">
                  {menuItems.map((item) => (
                    <Link key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-muted">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.nav>
      <div className="h-24" />
    </>
  );
}
