'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { CATEGORIES } from '@/lib/conversions';
import type { Locale } from '@/lib/conversions';
import { SITE } from '@/lib/seo';
import { t } from '@/lib/i18n';

interface Props {
  locale: Locale;
}

export default function Header({ locale }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBookmarkTip, setShowBookmarkTip] = useState(false);
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0);
  }, []);

  const handleBookmarkClick = () => {
    setShowBookmarkTip(true);
    setTimeout(() => setShowBookmarkTip(false), 3000);
  };

  return (
    <header className="sticky top-0 z-40 bg-[var(--bg-primary)]/80 backdrop-blur-lg border-b border-[var(--border-color)]">
      {/* Top row: Logo + tools */}
      <div className="max-w-6xl mx-auto px-4 h-12 flex items-center justify-between">
        <Link href={`/${locale}/`} className="flex items-center gap-2 font-bold text-lg shrink-0">
          <span className="text-xl">🔄</span>
          <span className="bg-gradient-to-r from-brand-500 to-brand-400 bg-clip-text text-transparent hidden sm:inline">
            {SITE.name}
          </span>
        </Link>

        <div className="flex items-center gap-1 shrink-0">
          {/* Bookmark button */}
          <div className="relative">
            <button
              className="p-2 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              onClick={handleBookmarkClick}
              aria-label={t('bookmark', locale)}
              title={t('bookmark', locale)}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
            {showBookmarkTip && (
              <div className="absolute right-0 top-full mt-2 px-3 py-2 bg-brand-500 text-white text-xs font-medium rounded-lg shadow-lg whitespace-nowrap animate-fade-in z-50">
                {isMac ? t('bookmarkTipMac', locale) : t('bookmarkTip', locale)}
                <div className="absolute -top-1 right-4 w-2 h-2 bg-brand-500 rotate-45" />
              </div>
            )}
          </div>
          <LanguageSwitcher currentLocale={locale} />
          <ThemeToggle />
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Desktop: Category nav row with flex-wrap */}
      <div className="hidden lg:block border-t border-[var(--border-color)]/50">
        <nav className="max-w-6xl mx-auto px-4 py-1.5 flex items-center gap-x-1 gap-y-1 flex-wrap">
          {CATEGORIES.map(c => (
            <Link
              key={c.key}
              href={`/${locale}/convert/${c.units[0].key}-to-${c.units[1].key}/`}
              className="flex items-center gap-1.5 px-2.5 py-1 text-sm rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors whitespace-nowrap"
            >
              <span>{c.icon}</span>
              <span>{c.name[locale] || c.name.en}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
          <nav className="max-w-6xl mx-auto px-4 py-3 grid grid-cols-4 sm:grid-cols-7 gap-1.5">
            {CATEGORIES.map(c => (
              <Link
                key={c.key}
                href={`/${locale}/convert/${c.units[0].key}-to-${c.units[1].key}/`}
                className="flex flex-col items-center gap-0.5 p-2 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-xl">{c.icon}</span>
                <span className="text-[10px] text-center leading-tight line-clamp-2">{c.name[locale] || c.name.en}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
