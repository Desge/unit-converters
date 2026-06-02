import { Locale, ConversionPair, CATEGORIES } from './conversions';

// ──── Site Config ────
export const SITE = {
  name: 'UnitConvert',
  domain: process.env.NEXT_PUBLIC_SITE_URL || 'https://unit.toolconv.com',
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

// ──── OG Image Helpers ────
/**
 * Build OG image URL for a conversion pair. SVG-based, pre-generated at build time.
 * Since SVG is the image type, width/height are fixed at the 1200×630 standard.
 */
const OG_BASE = `${SITE.domain}/og`;

function ogImageForPair(slug: string, fromName: string, toName: string) {
  return {
    url: `${OG_BASE}/pair-${slug}.svg`,
    width: 1200,
    height: 630,
    alt: `${fromName} to ${toName} — Free Online Converter | ${SITE.name}`,
  };
}

function ogImageForCategory(categoryKey: string) {
  return {
    url: `${OG_BASE}/category-${categoryKey}.svg`,
    width: 1200,
    height: 630,
  };
}

function ogImageForHome() {
  return {
    url: `${OG_BASE}/home.svg`,
    width: 1200,
    height: 630,
  };
}

const TWITTER_CARD_PREFIX = {
  card: 'summary_large_image' as const,
  site: '@toolconv',
};

// ──── Page Metadata ────
export function generateHomeMeta(locale: Locale) {
  const title = `${SITE.name} — ${SITE.tagline[locale]}`;
  const canonical = `${SITE.domain}/${locale}/`;
  const ogImg = ogImageForHome();
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
      images: [ogImg],
    },
    twitter: {
      ...TWITTER_CARD_PREFIX,
      images: [ogImg.url],
    },
  };
}

export function generateConverterMeta(pair: ConversionPair, locale: Locale) {
  const fromName = pair.from.name[locale] || pair.from.name.en;
  const toName = pair.to.name[locale] || pair.to.name.en;
  const title = `${fromName} to ${toName} Converter — Free Online | ${SITE.name}`;
  const description = `Convert ${fromName} (${pair.from.symbol}) to ${toName} (${pair.to.symbol}) instantly. Free online ${pair.categoryName[locale] || pair.categoryName.en} converter with formula and conversion table.`;
  const canonical = `${SITE.domain}/${locale}/convert/${pair.slug}/`;
  const ogImg = ogImageForPair(pair.slug, fromName, toName);
  
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
      locale: locale === 'zh' ? 'zh_CN' : locale === 'ja' ? 'ja_JP' : locale === 'ko' ? 'ko_KR' : locale === 'es' ? 'es_ES' : locale === 'pt' ? 'pt_BR' : 'en_US',
      url: canonical,
      siteName: SITE.name,
      images: [ogImg],
    },
    twitter: {
      ...TWITTER_CARD_PREFIX,
      images: [ogImg.url],
    },
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

  // Localized question templates
  const q1Templates: Record<Locale, string> = {
    en: `How do you convert ${fromName} to ${toName}?`,
    zh: `如何将${fromName}换算为${toName}？`,
    ja: `${fromName}を${toName}に変換するには？`,
    ko: `${fromName}을(를) ${toName}(으)로 변환하려면?`,
    es: `¿Cómo convertir ${fromName} a ${toName}?`,
    pt: `Como converter ${fromName} para ${toName}?`,
  };
  const q2Templates: Record<Locale, string> = {
    en: `What is 1 ${fromName} in ${toName}?`,
    zh: `1${fromName}等于多少${toName}？`,
    ja: `1${fromName}は${toName}でいくらですか？`,
    ko: `1 ${fromName}은(는) ${toName}으로 얼마인가요?`,
    es: `¿Cuánto es 1 ${fromName} en ${toName}?`,
    pt: `Quanto é 1 ${fromName} em ${toName}?`,
  };
  const a1Templates: Record<Locale, string> = {
    en: `To convert ${fromName} (${fromSym}) to ${toName} (${toSym}), use the formula: ${pair.formula}. Enter your value in the converter above to get instant results.`,
    zh: `将${fromName}（${fromSym}）换算为${toName}（${toSym}），使用公式：${pair.formula}。在上方的换算器中输入数值即可获得即时结果。`,
    ja: `${fromName}（${fromSym}）を${toName}（${toSym}）に変換するには、公式：${pair.formula} を使います。上記の変換ツールに値を入力すれば即座に結果が得られます。`,
    ko: `${fromName}(${fromSym})을(를) ${toName}(${toSym})으로 변환하려면 공식: ${pair.formula}을(를) 사용하세요. 위 변환기에 값을 입력하면 즉시 결과를 얻을 수 있습니다.`,
    es: `Para convertir ${fromName} (${fromSym}) a ${toName} (${toSym}), usa la fórmula: ${pair.formula}. Ingresa tu valor en el conversor de arriba para obtener resultados instantáneos.`,
    pt: `Para converter ${fromName} (${fromSym}) para ${toName} (${toSym}), use a fórmula: ${pair.formula}. Digite seu valor no conversor acima para obter resultados instantâneos.`,
  };
  const a2Templates: Record<Locale, string> = {
    en: `Use the free converter on this page — just type 1 and see the exact ${toName} equivalent instantly.`,
    zh: `使用本页的免费换算器 — 只需输入 1，即可立即看到精确的${toName}换算结果。`,
    ja: `このページの無料変換ツールを使って — 1と入力するだけで、正確な${toName}の値が即座に表示されます。`,
    ko: `이 페이지의 무료 변환기를 사용하세요 — 1을 입력하면 정확한 ${toName} 값이 즉시 표시됩니다.`,
    es: `Usa el conversor gratuito de esta página — simplemente escribe 1 y verás el equivalente exacto en ${toName} al instante.`,
    pt: `Use o conversor gratuito desta página — basta digitar 1 e ver o equivalente exato em ${toName} instantaneamente.`,
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: q1Templates[locale],
        acceptedAnswer: { '@type': 'Answer', text: a1Templates[locale] },
      },
      {
        '@type': 'Question',
        name: q2Templates[locale],
        acceptedAnswer: { '@type': 'Answer', text: a2Templates[locale] },
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
