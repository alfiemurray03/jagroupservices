import { motion } from 'motion/react';

import { LanguageSwitcher } from '@/components/LanguageProvider';
import ThemeToggle from '@/components/ThemeToggle';
import { DARK_THEME_LOGO } from '@/lib/site-logos';

interface AppHeaderProps {
  title: string;
}

export function AppHeader({ title }: AppHeaderProps) {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="print-hidden sticky top-0 z-40 border-b border-border bg-card/95 text-card-foreground shadow-lg backdrop-blur-xl safe-area-inset-top"
    >
      <div className="flex min-h-16 items-center justify-between gap-3 px-4 py-2">
        <div className="flex min-w-0 items-center gap-3">
          <img src="/images/ja-group-services-light.webp" alt="JA Group Services Ltd" className="site-logo-light h-10 w-auto max-w-[145px] object-contain" />
          <img src={DARK_THEME_LOGO} alt="JA Group Services Ltd" className="site-logo-dark h-12 w-auto max-w-[155px] object-contain" />
          <div className="hidden min-w-0 sm:block">
            <h1 className="truncate text-sm font-bold text-foreground">{title}</h1>
            <p className="text-[11px] text-muted-foreground">JA Group Services Ltd</p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <LanguageSwitcher compact />
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
