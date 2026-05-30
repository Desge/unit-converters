import { CATEGORIES, LOCALES } from '@/lib/conversions';
import type { Locale } from '@/lib/conversions';
import { SITE } from '@/lib/seo';

export default function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-secondary)] mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {CATEGORIES.map(c => (
            <div key={c.key}>
              <h4 className="font-semibold text-sm mb-3">{c.icon} {c.name[locale] || c.name.en}</h4>
              <ul className="space-y-1.5">
                {c.units.slice(0, 4).map((u, i) => {
                  const next = c.units[(i + 1) % c.units.length];
                  return (
                    <li key={u.key}>
                      <a
                        href={`/${locale}/convert/${u.key}-to-${next.key}/`}
                        className="text-xs text-[var(--text-tertiary)] hover:text-brand-500 transition-colors"
                      >
                        {u.name[locale] || u.name.en} → {next.name[locale] || next.name.en}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-[var(--text-tertiary)]">
            © 2026 {SITE.name}. {localeLabels[locale] || 'All rights reserved.'}
          </div>
          <div className="flex items-center gap-6 text-sm text-[var(--text-tertiary)]">
            <a href={`/${locale}/`} className="hover:text-brand-500 transition-colors">
              {localeLabels2[locale] || 'Home'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const localeLabels: Record<string, string> = {
  zh: '保留所有权利。',
  ja: '無断複写・転載を禁じます。',
  ko: '모든 권리 보유.',
  es: 'Todos los derechos reservados.',
  pt: 'Todos os direitos reservados.',
  en: 'All rights reserved.',
};

const localeLabels2: Record<string, string> = {
  zh: '首页', ja: 'ホーム', ko: '홈', es: 'Inicio', pt: 'Início', en: 'Home',
};
