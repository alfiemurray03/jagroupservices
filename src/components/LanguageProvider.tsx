import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { Check, Globe } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  detectAndSetLanguage,
  languageNames,
  languageTags,
  setUserLanguage,
  supportedLanguages,
  type SupportedLanguage,
} from '@/lib/i18n';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<SupportedLanguage>(() => detectAndSetLanguage());

  const setLanguage = (nextLanguage: SupportedLanguage) => {
    setUserLanguage(nextLanguage);
    setLanguageState(nextLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = languageTags[language];
    document.documentElement.dir = 'ltr';
    document.documentElement.dataset.language = language;
    window.dispatchEvent(new CustomEvent('ja-language-change', { detail: { language } }));
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, isLoading: false }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="min-h-10 gap-2 border-border bg-background text-foreground hover:bg-muted hover:text-foreground"
          aria-label={`Language: ${languageNames[language]}`}
        >
          <Globe className="h-4 w-4" />
          {!compact && <span>{languageNames[language]}</span>}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="max-h-[420px] min-w-[210px] overflow-y-auto border-border bg-popover text-popover-foreground">
        {supportedLanguages.map((item) => (
          <DropdownMenuItem
            key={item}
            onSelect={() => setLanguage(item)}
            className="flex cursor-pointer items-center justify-between gap-4"
          >
            <span>{languageNames[item]}</span>
            {language === item && <Check className="h-4 w-4 text-primary" aria-hidden="true" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
