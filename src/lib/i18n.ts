import type { Locale } from './conversions';

// ──── UI Strings ────
export const UI = {
  // Header
  home: { en: 'Home', zh: '首页', ja: 'ホーム', ko: '홈', es: 'Inicio', pt: 'Início' },
  bookmark: { en: 'Bookmark', zh: '收藏本站', ja: 'ブックマーク', ko: '즐겨찾기', es: 'Marcador', pt: 'Favorito' },
  bookmarkTip: { en: 'Press Ctrl+D to bookmark this site', zh: '按 Ctrl+D 收藏本站', ja: 'Ctrl+D でブックマーク', ko: 'Ctrl+D로 즐겨찾기 추가', es: 'Presiona Ctrl+D para marcar', pt: 'Pressione Ctrl+D para favoritar' },
  bookmarkTipMac: { en: 'Press ⌘+D to bookmark this site', zh: '按 ⌘+D 收藏本站', ja: '⌘+D でブックマーク', ko: '⌘+D로 즐겨찾기 추가', es: 'Presiona ⌘+D para marcar', pt: 'Pressione ⌘+D para favoritar' },

  // Converter Tool
  enterValue: { en: 'Enter Value', zh: '输入数值', ja: '値を入力', ko: '값 입력', es: 'Ingresar valor', pt: 'Digite o valor' },
  from: { en: 'From', zh: '从', ja: '変換元', ko: '변환 전', es: 'De', pt: 'De' },
  to: { en: 'To', zh: '到', ja: '変換先', ko: '변환 후', es: 'A', pt: 'Para' },
  result: { en: 'Result', zh: '换算结果', ja: '変換結果', ko: '변환 결과', es: 'Resultado', pt: 'Resultado' },
  commonConversions: { en: 'Common Conversions', zh: '常用换算', ja: 'よく使う変換', ko: '자주 사용하는 변환', es: 'Conversiones comunes', pt: 'Conversões comuns' },
  moreConverters: { en: 'More Converters', zh: '更多换算器', ja: '他の変換ツール', ko: '더 많은 변환기', es: 'Más conversores', pt: 'Mais conversores' },
  allConversions: { en: 'All Conversions', zh: '全部换算结果', ja: 'すべての変換結果', ko: '모든 변환 결과', es: 'Todas las conversiones', pt: 'Todas as conversões' },
  loadingRates: { en: 'Loading live rates...', zh: '正在获取实时汇率...', ja: 'リアルタイムレート取得中...', ko: '실시간 환율 로딩 중...', es: 'Cargando tasas en vivo...', pt: 'Carregando taxas ao vivo...' },
  liveRates: { en: 'Live rates', zh: '实时汇率', ja: 'リアルタイムレート', ko: '실시간 환율', es: 'Tasas en vivo', pt: 'Taxas ao vivo' },
  fallbackRates: { en: 'Using approximate rates', zh: '使用近似汇率', ja: '近似レートを使用', ko: '근사 환율 사용', es: 'Usando tasas aproximadas', pt: 'Usando taxas aproximadas' },

  // Homepage
  pairs: { en: 'pairs', zh: '组换算', ja: '変換ペア', ko: '변환 쌍', es: 'pares', pt: 'pares' },
  languages: { en: 'languages', zh: '种语言', ja: '言語', ko: '개 언어', es: 'idiomas', pt: 'idiomas' },
  instant: { en: 'Instant', zh: '即时计算', ja: '即時計算', ko: '즉시 계산', es: 'Instantáneo', pt: 'Instantâneo' },
  howToUse: { en: 'How to Use', zh: '如何使用', ja: '使い方', ko: '사용 방법', es: 'Cómo usar', pt: 'Como usar' },
  pickCategory: { en: 'Pick a Category', zh: '选择类别', ja: 'カテゴリを選択', ko: '카테고리 선택', es: 'Elegir categoría', pt: 'Escolher categoria' },
  enterValueDesc: { en: 'Type a number, get instant results', zh: '输入数字，即时获得换算结果', ja: '数字を入力すると即座に変換結果が表示', ko: '숫자를 입력하면 즉시 변환 결과 표시', es: 'Escribe un número, obtén resultados instantáneos', pt: 'Digite um número, obtenha resultados instantâneos' },
  swapUnits: { en: 'Swap Units', zh: '自由切换单位', ja: '単位を切り替え', ko: '단위 전환', es: 'Cambiar unidades', pt: 'Trocar unidades' },
  swapUnitsDesc: { en: 'Switch between any units instantly', zh: '下拉菜单切换任意单位', ja: 'ドロップダウンで任意の単位に切替', ko: '드롭다운으로 모든 단위 전환', es: 'Cambia entre cualquier unidad al instante', pt: 'Alterne entre quaisquer unidades instantaneamente' },

  // Breadcrumb
  onlineConverter: { en: 'Online Converter', zh: '在线换算器', ja: 'オンライン変換', ko: '온라인 변환기', es: 'Conversor en línea', pt: 'Conversor online' },
  more: { en: 'More', zh: '更多', ja: 'もっと', ko: '더 많은', es: 'Más', pt: 'Mais' },
  conversions: { en: 'Conversions', zh: '换算', ja: '変換', ko: '변환', es: 'Conversiones', pt: 'Conversões' },

  // Footer
  alsoTry: { en: 'Also try:', zh: '试试这些：', ja: 'こちらも：', ko: '이것도 시도:', es: 'Prueba también:', pt: 'Experimente também:' },
} as const;

// ──── Helper Functions ────

/** Get UI string by key and locale */
export function t(key: keyof typeof UI, locale: Locale): string {
  return UI[key][locale] || UI[key].en;
}

/** Format number according to locale */
export function formatNumber(value: number, locale: Locale, options?: Intl.NumberFormatOptions): string {
  const localeMap: Record<Locale, string> = {
    en: 'en-US', zh: 'zh-CN', ja: 'ja-JP', ko: 'ko-KR', es: 'es-ES', pt: 'pt-BR',
  };
  return new Intl.NumberFormat(localeMap[locale], options).format(value);
}

/** Format number for display in converter (smart decimal) */
export function formatResult(value: number, locale: Locale): string {
  if (Math.abs(value) < 0.000001 && value !== 0) {
    return value.toExponential(6);
  }
  if (Math.abs(value) >= 1e6) {
    return value.toExponential(6);
  }
  return formatNumber(value, locale, { maximumFractionDigits: 10 });
}
