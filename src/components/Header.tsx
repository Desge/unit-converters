import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { CATEGORIES } from '@/lib/conversions';
import type { Locale } from '@/lib/conversions';
import { SITE } from '@/lib/seo';

interface Props {
  locale: Locale;
}

export default function Header({ locale }: Props) {
  return (
    <header className="sticky top-0 z-40 bg-[var(--bg-primary)]/80 backdrop-blur-lg border-b border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}/`} className="flex items-center gap-2 font-bold text-xl">
          <span className="text-2xl">🔄</span>
          <span className="bg-gradient-to-r from-brand-500 to-brand-400 bg-clip-text text-transparent">
            {SITE.name}
          </span>
        </Link>

        {/* Nav + Tools */}
        <div className="flex items-center gap-2">
          {/* Category Nav (hidden on mobile) */}
          <nav className="hidden lg:flex items-center gap-1 mr-4">
            {CATEGORIES.map(c => (
              <Link
                key={c.key}
                href={`/${locale}/convert/${c.units[0].key}-to-${c.units[1].key}/`}
                className="px-3 py-1.5 text-sm rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors"
              >
                {c.icon} <span className="hidden xl:inline">{c.name[locale] || c.name.en}</span>
              </Link>
            ))}
          </nav>

          <LanguageSwitcher currentLocale={locale} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
