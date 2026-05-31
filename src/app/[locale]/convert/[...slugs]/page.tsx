import { LOCALES, ALL_PAIRS, findPair, CATEGORIES } from '@/lib/conversions';
import type { Locale } from '@/lib/conversions';
import { generateConverterMeta, generateWebAppSchema, generateBreadcrumbSchema, generateFAQSchema, generateHowToSchema } from '@/lib/seo';
import ConverterTool from '@/components/ConverterTool';

// Generate all locale × conversion pair combinations
export function generateStaticParams() {
  const params: { locale: string; slugs: string[] }[] = [];
  for (const locale of LOCALES) {
    for (const pair of ALL_PAIRS) {
      params.push({ locale, slugs: [pair.slug] });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: { locale: string; slugs: string[] } }) {
  const slug = params.slugs[0];
  const pair = findPair(slug);
  if (!pair) return {};
  return generateConverterMeta(pair, params.locale as Locale);
}

export default function ConverterPage({ params }: { params: { locale: string; slugs: string[] } }) {
  const locale = params.locale as Locale;
  const slug = params.slugs[0];
  const pair = findPair(slug);
  const category = CATEGORIES.find(c => c.key === pair?.categoryKey);

  if (!pair || !category) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">
          {locale === 'zh' ? '未找到换算' : 'Conversion Not Found'}
        </h1>
        <p className="text-[var(--text-secondary)]">
          {locale === 'zh' ? '请检查网址是否正确' : 'Please check the URL and try again.'}
        </p>
      </div>
    );
  }

  const fromName = pair.from.name[locale] || pair.from.name.en;
  const toName = pair.to.name[locale] || pair.to.name.en;
  const catName = category.name[locale] || category.name.en;

  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebAppSchema(pair, locale)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(pair, locale)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(pair, locale)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateHowToSchema(
          `${fromName} → ${toName} Converter`,
          `Follow these simple steps to convert ${fromName} to ${toName} using our free online converter.`,
          [
            { name: 'Enter Value', text: `Type the ${fromName} value you want to convert in the input field.` },
            { name: 'Select Units', text: `Choose ${fromName} as the source unit and ${toName} as the target unit from the dropdowns.` },
            { name: 'Get Result', text: `The converted ${toName} value appears instantly, along with the conversion formula and table.` },
          ]
        )) }}
      />

      {/* Breadcrumb */}
      <div className="max-w-3xl mx-auto px-4 pt-6">
        <nav className="flex items-center gap-2 text-sm text-[var(--text-tertiary)]" aria-label="Breadcrumb">
          <a href={`/${locale}/`} className="hover:text-brand-500 transition-colors">
            {locale === 'zh' ? '首页' : locale === 'ja' ? 'ホーム' : locale === 'ko' ? '홈' : locale === 'es' ? 'Inicio' : locale === 'pt' ? 'Início' : 'Home'}
          </a>
          <span>/</span>
          <a href={`/${locale}/#${pair.categoryKey}`} className="hover:text-brand-500 transition-colors">
            {catName}
          </a>
          <span>/</span>
          <span className="text-[var(--text-primary)] font-medium truncate max-w-[200px]">
            {fromName} → {toName}
          </span>
        </nav>
      </div>

      {/* H1 */}
      <div className="max-w-3xl mx-auto px-4 pt-6 pb-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-center">
          {fromName} <span className="text-brand-500">to</span> {toName}
          <span className="block text-lg font-normal text-[var(--text-tertiary)] mt-1">
            {locale === 'zh' ? '在线换算器' : locale === 'ja' ? 'オンライン変換' : locale === 'ko' ? '온라인 변환기' : locale === 'es' ? 'Conversor en línea' : locale === 'pt' ? 'Conversor online' : 'Online Converter'}
          </span>
        </h1>
      </div>

      {/* Converter Tool */}
      <ConverterTool pair={pair} locale={locale} />

      {/* Related Conversions (same category) */}
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <div className="card p-6">
          <h3 className="font-semibold text-lg mb-4">
            {locale === 'zh' ? '更多' : 'More'} {catName} {locale === 'zh' ? '换算' : 'Conversions'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {ALL_PAIRS
              .filter(p => p.categoryKey === pair.categoryKey && p.slug !== pair.slug)
              .slice(0, 24)
              .map(p => (
                <a
                  key={p.slug}
                  href={`/${locale}/convert/${p.slug}/`}
                  className="text-sm px-3 py-1.5 bg-[var(--bg-tertiary)] hover:bg-brand-100 dark:hover:bg-brand-900/20 rounded-lg hover:text-brand-600 dark:hover:text-brand-400 transition-all"
                >
                  {(p.from.name[locale] || p.from.name.en)} → {(p.to.name[locale] || p.to.name.en)}
                </a>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
