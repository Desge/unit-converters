'use client';

import { useState, useEffect } from 'react';
import { LOCALE_NAMES } from '@/lib/seo';
import { LOCALES } from '@/lib/conversions';
import type { Locale } from '@/lib/conversions';

interface Props {
  currentLocale: Locale;
}

export default function LanguageSwitcher({ currentLocale }: Props) {
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Extract path after /locale/ from current URL
    // e.g. /en/convert/cm-to-inch/ → /convert/cm-to-inch/
    const pathname = window.location.pathname;
    const parts = pathname.split('/').filter(Boolean); // ['en', 'convert', 'cm-to-inch']
    if (parts.length > 1) {
      setCurrentPath('/' + parts.slice(1).join('/') + (pathname.endsWith('/') ? '/' : ''));
    } else {
      setCurrentPath('/');
    }
  }, []);

  function switchTo(locale: Locale) {
    // 保存用户偏好到 localStorage + cookie
    //   - localStorage: 客户端 JS 语言检测使用
    //   - cookie: Cloudflare Pages 边缘 Worker 使用（免去客户端重定向）
    try {
      localStorage.setItem('locale', locale);
      document.cookie = `locale=${locale};path=/;max-age=31536000;SameSite=Lax`;
    } catch { /* ignore */ }
    window.location.href = `/${locale}${currentPath}`;
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors text-sm font-medium text-[var(--text-primary)]">
        <span>{LOCALE_NAMES[currentLocale].split(' ')[0]}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--text-tertiary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`absolute right-0 top-full mt-1 py-2 w-40 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl shadow-[var(--shadow-lg)] transition-all z-50 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {LOCALES.map(locale => (
          <button
            key={locale}
            onClick={() => switchTo(locale)}
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-[var(--bg-tertiary)] transition-colors ${
              locale === currentLocale ? 'font-bold text-brand-500' : ''
            }`}
          >
            {LOCALE_NAMES[locale]}
          </button>
        ))}
      </div>
    </div>
  );
}
