import { LOCALES, CATEGORIES, ALL_PAIRS } from '@/lib/conversions';
import type { Locale } from '@/lib/conversions';
import { SITE, generateHomeMeta, generateWebSiteSchema } from '@/lib/seo';
import { t } from '@/lib/i18n';
import Link from 'next/link';

export function generateStaticParams() {
  return LOCALES.map(locale => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }) {
  return generateHomeMeta(params.locale as Locale);
}

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebSiteSchema(locale)) }}
      />

      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-brand-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {SITE.tagline[locale]}
          </span>
        </h1>
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
          {SITE.description[locale]}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="text-sm text-[var(--text-tertiary)] bg-[var(--bg-tertiary)] px-3 py-1 rounded-full">
            📊 {ALL_PAIRS.length.toLocaleString()}+ {t('pairs', locale)}
          </span>
          <span className="text-sm text-[var(--text-tertiary)] bg-[var(--bg-tertiary)] px-3 py-1 rounded-full">
            🌍 {LOCALES.length} {t('languages', locale)}
          </span>
          <span className="text-sm text-[var(--text-tertiary)] bg-[var(--bg-tertiary)] px-3 py-1 rounded-full">
            ⚡ {t('instant', locale)}
          </span>
        </div>
      </section>

      {/* Category Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CATEGORIES.map(cat => {
          const pairCount = ALL_PAIRS.filter(p => p.categoryKey === cat.key).length;
          const firstPair = ALL_PAIRS.find(p => p.categoryKey === cat.key)!;
          return (
            <Link
              key={cat.key}
              href={`/${locale}/convert/${firstPair.slug}/`}
              className="card p-6 group cursor-pointer hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{cat.icon}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-brand-500 transition-colors">
                    {cat.name[locale] || cat.name.en}
                  </h3>
                  <p className="text-sm text-[var(--text-tertiary)]">
                    {pairCount} {t('pairs', locale)}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cat.units.slice(0, 5).map(u => (
                      <span key={u.key} className="text-xs bg-[var(--bg-tertiary)] px-2 py-0.5 rounded-full">
                        {u.symbol}
                      </span>
                    ))}
                    {cat.units.length > 5 && (
                      <span className="text-xs bg-[var(--bg-tertiary)] px-2 py-0.5 rounded-full">
                        +{cat.units.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </section>

      {/* How it Works */}
      <section className="mt-20 text-center">
        <h2 className="text-2xl font-bold mb-8">{t('howToUse', locale)}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { icon: '1️⃣', title: t('pickCategory', locale), desc: t('pickCategory', locale) === t('pickCategory', 'en') ? 'Length, weight, temperature & more' : SITE.description[locale] },
            { icon: '2️⃣', title: t('enterValue', locale), desc: t('enterValueDesc', locale) },
            { icon: '3️⃣', title: t('swapUnits', locale), desc: t('swapUnitsDesc', locale) },
          ].map((step, i) => (
            <div key={i} className="card p-6">
              <div className="text-3xl mb-3">{step.icon}</div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-[var(--text-tertiary)]">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}