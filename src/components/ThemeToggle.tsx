import { useEffect, useState } from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';

type ThemePreference = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'ja-group-services-theme';

function systemPrefersDark(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function applyTheme(preference: ThemePreference) {
  const isDark = preference === 'dark' || (preference === 'system' && systemPrefersDark());
  document.documentElement.classList.toggle('dark', isDark);
  document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
}

function readPreference(): ThemePreference {
  if (typeof window === 'undefined') return 'system';

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark' || stored === 'system') return stored;
  return 'system';
}

const icons = {
  light: Sun,
  dark: Moon,
  system: Monitor,
};

const labels: Record<ThemePreference, string> = {
  light: 'Light',
  dark: 'Dark',
  system: 'System',
};

interface ThemeToggleProps {
  className?: string;
  expanded?: boolean;
}

export default function ThemeToggle({ className = '', expanded = false }: ThemeToggleProps) {
  const [preference, setPreference] = useState<ThemePreference>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = readPreference();
    setPreference(saved);
    applyTheme(saved);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (preference !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateFromSystem = () => applyTheme('system');
    mediaQuery.addEventListener('change', updateFromSystem);
    return () => mediaQuery.removeEventListener('change', updateFromSystem);
  }, [preference]);

  const selectPreference = (next: ThemePreference) => {
    setPreference(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  };

  const cyclePreference = () => {
    const order: ThemePreference[] = ['light', 'dark', 'system'];
    const next = order[(order.indexOf(preference) + 1) % order.length];
    selectPreference(next);
  };

  if (!mounted) {
    return <span className={`block h-9 w-9 ${className}`} aria-hidden="true" />;
  }

  if (expanded) {
    return (
      <div className={`flex flex-wrap items-center gap-2 ${className}`} aria-label="Website appearance">
        {(['light', 'dark', 'system'] as ThemePreference[]).map((option) => {
          const Icon = icons[option];
          const selected = preference === option;

          return (
            <button
              key={option}
              type="button"
              onClick={() => selectPreference(option)}
              aria-pressed={selected}
              aria-label={`Use ${labels[option].toLowerCase()} appearance`}
              className={`flex min-h-10 items-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold transition-all ${
                selected
                  ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                  : 'border-border bg-muted text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              <Icon className="h-4 w-4" />
              {labels[option]}
            </button>
          );
        })}
      </div>
    );
  }

  const Icon = icons[preference];

  return (
    <button
      type="button"
      onClick={cyclePreference}
      aria-label={`Appearance: ${labels[preference]}. Select to change.`}
      title={`Appearance: ${labels[preference]}`}
      className={`flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-muted text-muted-foreground transition-all hover:bg-secondary hover:text-foreground ${className}`}
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
