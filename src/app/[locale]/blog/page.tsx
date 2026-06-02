import { LOCALES } from '@/lib/conversions';
import type { Locale } from '@/lib/conversions';
import { SITE } from '@/lib/seo';
import { BLOG_ARTICLES } from '@/lib/blog-data';
import Link from 'next/link';

// ──── Translation Data ────
const PAGE_TITLE: Record<Locale, string> = {
  en: 'Blog — Unit Conversion Guides & Tips',
  zh: '博客 — 单位换算指南与技巧',
  ja: 'ブログ — 単位変換ガイドとヒント',
  ko: '블로그 — 단위 변환 가이드 및 팁',
  es: 'Blog — Guías y Consejos de Conversión de Unidades',
  pt: 'Blog — Guias e Dicas de Conversão de Unidades',
};

const PAGE_DESCRIPTION: Record<Locale, string> = {
  en: 'Expert guides on unit conversions. Learn temperature, length, weight, volume, and more with detailed articles, formulas, and practical tips.',
  zh: '单位换算专家指南。通过详细文章、公式和实用技巧学习温度、长度、重量、体积等换算。',
  ja: '単位変換のエキスパートガイド。詳細な記事、公式、実用的なヒントで温度、長さ、重さ、体積などを学びます。',
  ko: '단위 변환 전문가 가이드. 상세한 기사, 공식 및 실용적인 팁을 통해 온도, 길이, 무게, 부피 등을 배우세요.',
  es: 'Guías expertas sobre conversiones de unidades. Aprende temperatura, longitud, peso, volumen y más con artículos detallados, fórmulas y consejos prácticos.',
  pt: 'Guias especializados em conversões de unidades. Aprenda temperatura, comprimento, peso, volume e muito mais com artigos detalhados, fórmulas e dicas práticas.',
};

const READ_MORE: Record<Locale, string> = {
  en: 'Read More →',
  zh: '阅读全文 →',
  ja: '続きを読む →',
  ko: '더 읽기 →',
  es: 'Leer más →',
  pt: 'Ler mais →',
};

const BLOG_TITLE: Record<Locale, string> = {
  en: 'Unit Conversion Guides',
  zh: '单位换算指南',
  ja: '単位変換ガイド',
  ko: '단위 변환 가이드',
  es: 'Guías de Conversión de Unidades',
  pt: 'Guias de Conversão de Unidades',
};

const SUBTITLE: Record<Locale, string> = {
  en: 'Expert articles, formulas, and practical tips to help you master unit conversions',
  zh: '专家文章、公式和实用技巧，帮助您掌握单位换算',
  ja: '専門家の記事、公式、実用的なヒントで単位変換をマスター',
  ko: '전문가 기사, 공식 및 실용적인 팁으로 단위 변환 마스터하기',
  es: 'Artículos de expertos, fórmulas y consejos prácticos para dominar las conversiones',
  pt: 'Artigos especializados, fórmulas e dicas práticas para dominar conversões',
};

export function generateStaticParams() {
  return LOCALES.map(locale => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = locale as Locale;
  const title = `${PAGE_TITLE[l]} — ${SITE.name}`;
  const canonical = `${SITE.domain}/${locale}/blog/`;
  return {
    title,
    description: PAGE_DESCRIPTION[l],
    canonical,
    alternates: {
      canonical,
      languages: {
        'x-default': `${SITE.domain}/en/blog/`,
        ...Object.fromEntries(LOCALES.map(l => [l, `${SITE.domain}/${l}/blog/`])),
      },
    },
    openGraph: {
      title,
      description: PAGE_DESCRIPTION[l],
      type: 'website' as const,
      locale: l === 'zh' ? 'zh_CN' : l === 'ja' ? 'ja_JP' : l === 'ko' ? 'ko_KR' : l === 'es' ? 'es_ES' : l === 'pt' ? 'pt_BR' : 'en_US',
      url: canonical,
      siteName: SITE.name,
    },
    twitter: {
      card: 'summary_large_image' as const,
    },
    robots: { index: true, follow: true },
  };
}

export default async function BlogIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = locale as Locale;

  // Sort articles by date (most recent first)
  const sortedArticles = [...BLOG_ARTICLES].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Page Header */}
      <section className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
          <span className="bg-gradient-to-r from-brand-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {BLOG_TITLE[l]}
          </span>
        </h1>
        <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
          {SUBTITLE[l]}
        </p>
      </section>

      {/* Article Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/${locale}/blog/${article.slug}/`}
            className="card p-6 flex flex-col hover:ring-2 hover:ring-brand-500/50 transition-all duration-200 group"
          >
            {/* Date */}
            <time className="text-xs text-[var(--text-tertiary)] mb-2">
              {new Date(article.date).toLocaleDateString(
                l === 'en' ? 'en-US' : l === 'zh' ? 'zh-CN' : l === 'ja' ? 'ja-JP' : l === 'ko' ? 'ko-KR' : l === 'es' ? 'es-ES' : 'pt-BR',
                { year: 'numeric', month: 'long', day: 'numeric' }
              )}
            </time>

            {/* Title */}
            <h2 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-brand-500 transition-colors mb-2 line-clamp-2">
              {article.title[l]}
            </h2>

            {/* Description */}
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 line-clamp-3 flex-1">
              {article.description[l]}
            </p>

            {/* Read More */}
            <span className="text-sm font-medium text-brand-500 group-hover:underline">
              {READ_MORE[l]}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
