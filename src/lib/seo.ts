import { Locale, ConversionPair, CATEGORIES } from './conversions';

// ──── Site Config ────
export const SITE = {
  name: 'UnitConvert',
  domain: 'https://unit.toolconv.com',
  tagline: { en: 'Free Online Unit Converter', zh: '免费在线单位换算器', ja: '無料オンライン単位変換', ko: '무료 온라인 단위 변환기', es: 'Conversor de Unidades Gratis', pt: 'Conversor de Unidades Grátis' },
  description: {
    en: 'Convert between thousands of units instantly. Length, weight, temperature, area, volume, speed, data, time & currency — all in your browser.',
    zh: '即时转换数千种单位。长度、重量、温度、面积、体积、速度、数据、时间和货币 — 全部在浏览器中完成。',
    ja: '数千の単位を即座に変換。長さ、重さ、温度、面積、体積、速度、データ、時間、通貨 — すべてブラウザで。',
    ko: '수천 가지 단위를 즉시 변환하세요. 길이, 무게, 온도, 면적, 부피, 속도, 데이터, 시간, 통화 — 모두 브라우저에서.',
    es: 'Convierte entre miles de unidades al instante. Longitud, peso, temperatura, área, volumen, velocidad, datos, tiempo y moneda — todo en tu navegador.',
    pt: 'Converta entre milhares de unidades instantaneamente. Comprimento, peso, temperatura, área, volume, velocidade, dados, tempo e moeda — tudo no seu navegador.',
  },
};

// Locale display names
export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English', zh: '中文', ja: '日本語', ko: '한국어', es: 'Español', pt: 'Português',
};

// ──── Shared OG Image & Twitter Card ────
const OG_IMAGE = {
  url: `${SITE.domain}/og-image.png`,
  width: 1200,
  height: 630,
  alt: SITE.name,
};

const TWITTER_CARD = {
  card: 'summary_large_image' as const,
  site: '@toolconv',
  images: [OG_IMAGE.url],
};

// ──── Page Metadata ────
export function generateHomeMeta(locale: Locale) {
  const title = `${SITE.name} — ${SITE.tagline[locale]}`;
  const canonical = `${SITE.domain}/${locale}/`;
  return {
    title,
    description: SITE.description[locale],
    canonical,
    alternates: {
      canonical,
      languages: {
        'x-default': `${SITE.domain}/en/`,
        ...Object.fromEntries(['en','zh','ja','ko','es','pt'].map(l => [l, `${SITE.domain}/${l}/`])),
      },
    },
    openGraph: {
      title,
      description: SITE.description[locale],
      type: 'website' as const,
      locale: locale === 'zh' ? 'zh_CN' : locale === 'ja' ? 'ja_JP' : locale === 'ko' ? 'ko_KR' : locale === 'es' ? 'es_ES' : locale === 'pt' ? 'pt_BR' : 'en_US',
      url: canonical,
      siteName: SITE.name,
      images: [OG_IMAGE],
    },
    twitter: TWITTER_CARD,
  };
}

export function generateConverterMeta(pair: ConversionPair, locale: Locale) {
  const fromName = pair.from.name[locale] || pair.from.name.en;
  const toName = pair.to.name[locale] || pair.to.name.en;
  const title = `${fromName} to ${toName} Converter — Free Online | ${SITE.name}`;
  const description = `Convert ${fromName} (${pair.from.symbol}) to ${toName} (${pair.to.symbol}) instantly. Free online ${pair.categoryName[locale] || pair.categoryName.en} converter with formula and conversion table.`;
  const canonical = `${SITE.domain}/${locale}/convert/${pair.slug}/`;
  
  return {
    title,
    description,
    canonical,
    alternates: {
      canonical,
      languages: {
        'x-default': `${SITE.domain}/en/convert/${pair.slug}/`,
        ...Object.fromEntries(
          ['en','zh','ja','ko','es','pt'].map(l => [l, `${SITE.domain}/${l}/convert/${pair.slug}/`])
        ),
      },
    },
    openGraph: {
      title,
      description,
      type: 'website' as const,
      url: canonical,
      siteName: SITE.name,
      images: [OG_IMAGE],
    },
    twitter: TWITTER_CARD,
  };
}

// ──── JSON-LD Schemas ────
export function generateWebSiteSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: `${SITE.domain}/${locale}/`,
    description: SITE.description[locale],
    inLanguage: locale,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE.domain}/${locale}/convert/{query}/`,
      'query-input': 'required name=query',
    },
  };
}

export function generateWebAppSchema(pair: ConversionPair, locale: Locale) {
  const name = `${pair.from.name[locale] || pair.from.name.en} to ${pair.to.name[locale] || pair.to.name.en} Converter`;
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description: `Convert ${pair.from.name.en} to ${pair.to.name.en} online for free.`,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };
}

export function generateBreadcrumbSchema(pair: ConversionPair, locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: SITE.name, item: `${SITE.domain}/${locale}/` },
      { '@type': 'ListItem', position: 2, name: pair.categoryName[locale] || pair.categoryName.en, item: `${SITE.domain}/${locale}/#${pair.categoryKey}` },
      { '@type': 'ListItem', position: 3, name: `${pair.from.name[locale] || pair.from.name.en} to ${pair.to.name[locale] || pair.to.name.en}` },
    ],
  };
}

export function generateFAQSchema(pair: ConversionPair, locale: Locale) {
  const fromName = pair.from.name[locale] || pair.from.name.en;
  const toName = pair.to.name[locale] || pair.to.name.en;
  const fromSym = pair.from.symbol;
  const toSym = pair.to.symbol;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How do you convert ${fromName} to ${toName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `To convert ${fromName} (${fromSym}) to ${toName} (${toSym}), use the formula: ${pair.formula}. Enter your value in the converter above to get instant results.`,
        },
      },
      {
        '@type': 'Question',
        name: `What is 1 ${fromName} in ${toName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Use the free converter on this page — just type 1 and see the exact ${toName} equivalent instantly.`,
        },
      },
    ],
  };
}

/** HowTo schema — step-by-step guide for using the converter */
export function generateHowToSchema(name: string, description: string, steps: { name: string; text: string }[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((s) => ({
      '@type': 'HowToStep',
      name: s.name,
      text: s.text,
    })),
  };
}
