// Internationalisation configuration for the public website.
// Every public page is maintained in each language listed here.

export const supportedLanguages = ['en', 'cy', 'pt', 'es', 'fr'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

export const languageNames: Record<SupportedLanguage, string> = {
  en: 'English',
  cy: 'Cymraeg',
  pt: 'Português',
  es: 'Español',
  fr: 'Français',
};

export const languageTags: Record<SupportedLanguage, string> = {
  en: 'en-GB',
  cy: 'cy-GB',
  pt: 'pt-PT',
  es: 'es-ES',
  fr: 'fr-FR',
};

export function isValidLanguage(value: string | null | undefined): value is SupportedLanguage {
  return typeof value === 'string' && supportedLanguages.includes(value as SupportedLanguage);
}

export function detectAndSetLanguage(): SupportedLanguage {
  if (typeof window === 'undefined') return 'en';

  const saved = window.localStorage.getItem('user-language');
  if (isValidLanguage(saved)) return saved;

  const browserCandidates = window.navigator.languages?.length
    ? window.navigator.languages
    : [window.navigator.language];

  for (const candidate of browserCandidates) {
    const base = candidate.toLowerCase().split('-')[0];
    if (isValidLanguage(base)) return base;
  }

  return 'en';
}

export function setUserLanguage(language: SupportedLanguage): void {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('user-language', language);
  }
}

export function getCurrentLanguage(): SupportedLanguage {
  return detectAndSetLanguage();
}
