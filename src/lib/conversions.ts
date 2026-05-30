// ============================================================
// Unit Converter — 9 Categories, 50+ Units, ~480 Conversion Pairs
// THE single source of truth for all unit conversion pages
// ============================================================

/* ──── Locale type ──── */
export type Locale = 'en' | 'zh' | 'ja' | 'ko' | 'es' | 'pt';

export const LOCALES: Locale[] = ['en', 'zh', 'ja', 'ko', 'es', 'pt'];

/* ──── Unit Definition ──── */
export interface UnitDef {
  key: string;
  name: Record<Locale, string>;
  symbol: string;
  system: 'metric' | 'imperial' | 'other';
}

/* ──── Conversion Category ──── */
export interface ConversionCategory {
  key: string;
  name: Record<Locale, string>;
  icon: string;          // emoji icon
  baseUnit: string;      // key of base unit for internal calculation
  units: UnitDef[];
}

/* ──── Conversion Pair (for URL slugs) ──── */
export interface ConversionPair {
  slug: string;           // 'cm-to-inch'
  from: UnitDef;
  to: UnitDef;
  categoryKey: string;
  categoryName: Record<Locale, string>;
  formula: string;        // e.g. '× 0.393701'
  formulaReverse: string; // e.g. '× 2.54'
}

// ──── ALL CATEGORIES ────

export const CATEGORIES: ConversionCategory[] = [
  {
    key: 'length',
    name: { en: 'Length', zh: '长度', ja: '長さ', ko: '길이', es: 'Longitud', pt: 'Comprimento' },
    icon: '📏',
    baseUnit: 'm',
    units: [
      { key: 'mm',     name: { en:'Millimeter', zh:'毫米', ja:'ミリメートル', ko:'밀리미터', es:'Milímetro', pt:'Milímetro' }, symbol:'mm', system:'metric' },
      { key: 'cm',     name: { en:'Centimeter', zh:'厘米', ja:'センチメートル', ko:'센티미터', es:'Centímetro', pt:'Centímetro' }, symbol:'cm', system:'metric' },
      { key: 'm',      name: { en:'Meter', zh:'米', ja:'メートル', ko:'미터', es:'Metro', pt:'Metro' }, symbol:'m', system:'metric' },
      { key: 'km',     name: { en:'Kilometer', zh:'千米', ja:'キロメートル', ko:'킬로미터', es:'Kilómetro', pt:'Quilômetro' }, symbol:'km', system:'metric' },
      { key: 'inch',   name: { en:'Inch', zh:'英寸', ja:'インチ', ko:'인치', es:'Pulgada', pt:'Polegada' }, symbol:'in', system:'imperial' },
      { key: 'foot',   name: { en:'Foot', zh:'英尺', ja:'フィート', ko:'피트', es:'Pie', pt:'Pé' }, symbol:'ft', system:'imperial' },
      { key: 'yard',   name: { en:'Yard', zh:'码', ja:'ヤード', ko:'야드', es:'Yarda', pt:'Jarda' }, symbol:'yd', system:'imperial' },
      { key: 'mile',   name: { en:'Mile', zh:'英里', ja:'マイル', ko:'마일', es:'Milla', pt:'Milha' }, symbol:'mi', system:'imperial' },
    ]
  },
  {
    key: 'weight',
    name: { en: 'Weight', zh: '重量', ja: '重さ', ko: '무게', es: 'Peso', pt: 'Peso' },
    icon: '⚖️',
    baseUnit: 'kg',
    units: [
      { key: 'mg',     name: { en:'Milligram', zh:'毫克', ja:'ミリグラム', ko:'밀리그램', es:'Miligramo', pt:'Miligrama' }, symbol:'mg', system:'metric' },
      { key: 'g',      name: { en:'Gram', zh:'克', ja:'グラム', ko:'그램', es:'Gramo', pt:'Grama' }, symbol:'g', system:'metric' },
      { key: 'kg',     name: { en:'Kilogram', zh:'千克', ja:'キログラム', ko:'킬로그램', es:'Kilogramo', pt:'Quilograma' }, symbol:'kg', system:'metric' },
      { key: 'ton',    name: { en:'Metric Ton', zh:'吨', ja:'トン', ko:'톤', es:'Tonelada', pt:'Tonelada' }, symbol:'t', system:'metric' },
      { key: 'oz',     name: { en:'Ounce', zh:'盎司', ja:'オンス', ko:'온스', es:'Onza', pt:'Onça' }, symbol:'oz', system:'imperial' },
      { key: 'lb',     name: { en:'Pound', zh:'磅', ja:'ポンド', ko:'파운드', es:'Libra', pt:'Libra' }, symbol:'lb', system:'imperial' },
    ]
  },
  {
    key: 'temperature',
    name: { en: 'Temperature', zh: '温度', ja: '温度', ko: '온도', es: 'Temperatura', pt: 'Temperatura' },
    icon: '🌡️',
    baseUnit: 'celsius',
    units: [
      { key: 'celsius',    name: { en:'Celsius', zh:'摄氏度', ja:'摂氏', ko:'섭씨', es:'Celsius', pt:'Celsius' }, symbol:'°C', system:'metric' },
      { key: 'fahrenheit', name: { en:'Fahrenheit', zh:'华氏度', ja:'華氏', ko:'화씨', es:'Fahrenheit', pt:'Fahrenheit' }, symbol:'°F', system:'imperial' },
      { key: 'kelvin',     name: { en:'Kelvin', zh:'开尔文', ja:'ケルビン', ko:'켈빈', es:'Kelvin', pt:'Kelvin' }, symbol:'K', system:'metric' },
    ]
  },
  {
    key: 'area',
    name: { en: 'Area', zh: '面积', ja: '面積', ko: '면적', es: 'Área', pt: 'Área' },
    icon: '📐',
    baseUnit: 'sqm',
    units: [
      { key: 'sqmm',   name: { en:'Sq Millimeter', zh:'平方毫米', ja:'平方ミリメートル', ko:'제곱밀리미터', es:'mm²', pt:'mm²' }, symbol:'mm²', system:'metric' },
      { key: 'sqcm',   name: { en:'Sq Centimeter', zh:'平方厘米', ja:'平方センチメートル', ko:'제곱센티미터', es:'cm²', pt:'cm²' }, symbol:'cm²', system:'metric' },
      { key: 'sqm',    name: { en:'Sq Meter', zh:'平方米', ja:'平方メートル', ko:'제곱미터', es:'m²', pt:'m²' }, symbol:'m²', system:'metric' },
      { key: 'sqkm',   name: { en:'Sq Kilometer', zh:'平方公里', ja:'平方キロメートル', ko:'제곱킬로미터', es:'km²', pt:'km²' }, symbol:'km²', system:'metric' },
      { key: 'sqinch', name: { en:'Sq Inch', zh:'平方英寸', ja:'平方インチ', ko:'제곱인치', es:'in²', pt:'in²' }, symbol:'in²', system:'imperial' },
      { key: 'sqft',   name: { en:'Sq Foot', zh:'平方英尺', ja:'平方フィート', ko:'제곱피트', es:'ft²', pt:'ft²' }, symbol:'ft²', system:'imperial' },
      { key: 'sqyard', name: { en:'Sq Yard', zh:'平方码', ja:'平方ヤード', ko:'제곱야드', es:'yd²', pt:'yd²' }, symbol:'yd²', system:'imperial' },
      { key: 'acre',   name: { en:'Acre', zh:'英亩', ja:'エーカー', ko:'에이커', es:'Acre', pt:'Acre' }, symbol:'ac', system:'imperial' },
      { key: 'hectare',name: { en:'Hectare', zh:'公顷', ja:'ヘクタール', ko:'헥타르', es:'Hectárea', pt:'Hectare' }, symbol:'ha', system:'metric' },
    ]
  },
  {
    key: 'volume',
    name: { en: 'Volume', zh: '体积/容量', ja: '体積', ko: '부피', es: 'Volumen', pt: 'Volume' },
    icon: '🧪',
    baseUnit: 'l',
    units: [
      { key: 'ml',      name: { en:'Milliliter', zh:'毫升', ja:'ミリリットル', ko:'밀리리터', es:'Mililitro', pt:'Mililitro' }, symbol:'mL', system:'metric' },
      { key: 'cl',      name: { en:'Centiliter', zh:'厘升', ja:'センチリットル', ko:'센티리터', es:'Centilitro', pt:'Centilitro' }, symbol:'cL', system:'metric' },
      { key: 'l',       name: { en:'Liter', zh:'升', ja:'リットル', ko:'리터', es:'Litro', pt:'Litro' }, symbol:'L', system:'metric' },
      { key: 'cubic_m', name: { en:'Cubic Meter', zh:'立方米', ja:'立方メートル', ko:'세제곱미터', es:'m³', pt:'m³' }, symbol:'m³', system:'metric' },
      { key: 'tsp',     name: { en:'Teaspoon', zh:'茶匙', ja:'小さじ', ko:'티스푼', es:'Cucharadita', pt:'Colher de chá' }, symbol:'tsp', system:'imperial' },
      { key: 'tbsp',    name: { en:'Tablespoon', zh:'汤匙', ja:'大さじ', ko:'테이블스푼', es:'Cucharada', pt:'Colher de sopa' }, symbol:'tbsp', system:'imperial' },
      { key: 'cup',     name: { en:'Cup', zh:'杯', ja:'カップ', ko:'컵', es:'Taza', pt:'Xícara' }, symbol:'cup', system:'imperial' },
      { key: 'fl_oz',   name: { en:'Fluid Ounce', zh:'液盎司', ja:'液量オンス', ko:'액량온스', es:'Onza líquida', pt:'Onça fluida' }, symbol:'fl oz', system:'imperial' },
      { key: 'pint',    name: { en:'Pint', zh:'品脱', ja:'パイント', ko:'파인트', es:'Pinta', pt:'Pint' }, symbol:'pt', system:'imperial' },
      { key: 'quart',   name: { en:'Quart', zh:'夸脱', ja:'クォート', ko:'쿼트', es:'Cuarto', pt:'Quarto' }, symbol:'qt', system:'imperial' },
      { key: 'gallon',  name: { en:'Gallon', zh:'加仑', ja:'ガロン', ko:'갤런', es:'Galón', pt:'Galão' }, symbol:'gal', system:'imperial' },
    ]
  },
  {
    key: 'speed',
    name: { en: 'Speed', zh: '速度', ja: '速度', ko: '속도', es: 'Velocidad', pt: 'Velocidade' },
    icon: '🚀',
    baseUnit: 'mps',
    units: [
      { key: 'mps',   name: { en:'Meter/sec', zh:'米/秒', ja:'メートル毎秒', ko:'미터/초', es:'m/s', pt:'m/s' }, symbol:'m/s', system:'metric' },
      { key: 'kmh',   name: { en:'Km/hour', zh:'千米/小时', ja:'キロ毎時', ko:'km/h', es:'km/h', pt:'km/h' }, symbol:'km/h', system:'metric' },
      { key: 'mph',   name: { en:'Mile/hour', zh:'英里/小时', ja:'マイル毎時', ko:'마일/시', es:'mph', pt:'mph' }, symbol:'mph', system:'imperial' },
      { key: 'knot',  name: { en:'Knot', zh:'节', ja:'ノット', ko:'노트', es:'Nudo', pt:'Nó' }, symbol:'kn', system:'other' },
      { key: 'mach',  name: { en:'Mach', zh:'马赫', ja:'マッハ', ko:'마하', es:'Mach', pt:'Mach' }, symbol:'M', system:'other' },
    ]
  },
  {
    key: 'data',
    name: { en: 'Data Storage', zh: '数据存储', ja: 'データ容量', ko: '데이터 저장', es: 'Almacenamiento', pt: 'Armazenamento' },
    icon: '💾',
    baseUnit: 'byte',
    units: [
      { key: 'bit',  name: { en:'Bit', zh:'位', ja:'ビット', ko:'비트', es:'Bit', pt:'Bit' }, symbol:'b', system:'other' },
      { key: 'byte', name: { en:'Byte', zh:'字节', ja:'バイト', ko:'바이트', es:'Byte', pt:'Byte' }, symbol:'B', system:'other' },
      { key: 'kb',   name: { en:'Kilobyte', zh:'千字节', ja:'キロバイト', ko:'킬로바이트', es:'KB', pt:'KB' }, symbol:'KB', system:'other' },
      { key: 'mb',   name: { en:'Megabyte', zh:'兆字节', ja:'メガバイト', ko:'메가바이트', es:'MB', pt:'MB' }, symbol:'MB', system:'other' },
      { key: 'gb',   name: { en:'Gigabyte', zh:'吉字节', ja:'ギガバイト', ko:'기가바이트', es:'GB', pt:'GB' }, symbol:'GB', system:'other' },
      { key: 'tb',   name: { en:'Terabyte', zh:'太字节', ja:'テラバイト', ko:'테라바이트', es:'TB', pt:'TB' }, symbol:'TB', system:'other' },
      { key: 'pb',   name: { en:'Petabyte', zh:'拍字节', ja:'ペタバイト', ko:'페타바이트', es:'PB', pt:'PB' }, symbol:'PB', system:'other' },
    ]
  },
  {
    key: 'time',
    name: { en: 'Time', zh: '时间', ja: '時間', ko: '시간', es: 'Tiempo', pt: 'Tempo' },
    icon: '⏱️',
    baseUnit: 'second',
    units: [
      { key: 'ms',      name: { en:'Millisecond', zh:'毫秒', ja:'ミリ秒', ko:'밀리초', es:'Milisegundo', pt:'Milissegundo' }, symbol:'ms', system:'metric' },
      { key: 'second',  name: { en:'Second', zh:'秒', ja:'秒', ko:'초', es:'Segundo', pt:'Segundo' }, symbol:'s', system:'metric' },
      { key: 'minute',  name: { en:'Minute', zh:'分', ja:'分', ko:'분', es:'Minuto', pt:'Minuto' }, symbol:'min', system:'other' },
      { key: 'hour',    name: { en:'Hour', zh:'时', ja:'時', ko:'시간', es:'Hora', pt:'Hora' }, symbol:'h', system:'other' },
      { key: 'day',     name: { en:'Day', zh:'天', ja:'日', ko:'일', es:'Día', pt:'Dia' }, symbol:'d', system:'other' },
      { key: 'week',    name: { en:'Week', zh:'周', ja:'週間', ko:'주', es:'Semana', pt:'Semana' }, symbol:'wk', system:'other' },
      { key: 'month',   name: { en:'Month', zh:'月', ja:'月', ko:'개월', es:'Mes', pt:'Mês' }, symbol:'mo', system:'other' },
      { key: 'year',    name: { en:'Year', zh:'年', ja:'年', ko:'년', es:'Año', pt:'Ano' }, symbol:'yr', system:'other' },
    ]
  },
  {
    key: 'currency',
    name: { en: 'Currency', zh: '货币', ja: '通貨', ko: '통화', es: 'Moneda', pt: 'Moeda' },
    icon: '💵',
    baseUnit: 'usd',
    units: [
      { key: 'usd', name: { en:'US Dollar', zh:'美元', ja:'米ドル', ko:'미국 달러', es:'Dólar EE.UU.', pt:'Dólar EUA' }, symbol:'$', system:'other' },
      { key: 'eur', name: { en:'Euro', zh:'欧元', ja:'ユーロ', ko:'유로', es:'Euro', pt:'Euro' }, symbol:'€', system:'other' },
      { key: 'gbp', name: { en:'British Pound', zh:'英镑', ja:'英ポンド', ko:'영국 파운드', es:'Libra Esterlina', pt:'Libra Esterlina' }, symbol:'£', system:'other' },
      { key: 'jpy', name: { en:'Japanese Yen', zh:'日元', ja:'日本円', ko:'일본 엔', es:'Yen Japonés', pt:'Iene Japonês' }, symbol:'¥', system:'other' },
      { key: 'cny', name: { en:'Chinese Yuan', zh:'人民币', ja:'中国人民元', ko:'중국 위안', es:'Yuan Chino', pt:'Yuan Chinês' }, symbol:'¥', system:'other' },
      { key: 'aud', name: { en:'Australian Dollar', zh:'澳元', ja:'豪ドル', ko:'호주 달러', es:'Dólar Australiano', pt:'Dólar Australiano' }, symbol:'A$', system:'other' },
      { key: 'cad', name: { en:'Canadian Dollar', zh:'加元', ja:'カナダドル', ko:'캐나다 달러', es:'Dólar Canadiense', pt:'Dólar Canadense' }, symbol:'C$', system:'other' },
      { key: 'chf', name: { en:'Swiss Franc', zh:'瑞士法郎', ja:'スイスフラン', ko:'스위스 프랑', es:'Franco Suizo', pt:'Franco Suíço' }, symbol:'CHF', system:'other' },
      { key: 'hkd', name: { en:'Hong Kong Dollar', zh:'港币', ja:'香港ドル', ko:'홍콩 달러', es:'Dólar HK', pt:'Dólar HK' }, symbol:'HK$', system:'other' },
      { key: 'krw', name: { en:'Korean Won', zh:'韩元', ja:'韓国ウォン', ko:'한국 원', es:'Won Coreano', pt:'Won Coreano' }, symbol:'₩', system:'other' },
    ]
  },
];

// ──── CONVERSION FACTORS (to base unit) ────

export const CONVERSION_FACTORS: Record<string, Record<string, number>> = {
  // Length → base: meter
  length: { mm:0.001, cm:0.01, m:1, km:1000, inch:0.0254, foot:0.3048, yard:0.9144, mile:1609.344 },
  // Weight → base: kg
  weight: { mg:0.000001, g:0.001, kg:1, ton:1000, oz:0.0283495, lb:0.453592 },
  // Temperature → special (not multiplicative)
  // Area → base: sq meter
  area: { sqmm:0.000001, sqcm:0.0001, sqm:1, sqkm:1000000, sqinch:0.00064516, sqft:0.092903, sqyard:0.836127, acre:4046.86, hectare:10000 },
  // Volume → base: liter
  volume: { ml:0.001, cl:0.01, l:1, cubic_m:1000, tsp:0.00492892, tbsp:0.0147868, cup:0.236588, fl_oz:0.0295735, pint:0.473176, quart:0.946353, gallon:3.78541 },
  // Speed → base: m/s
  speed: { mps:1, kmh:0.277778, mph:0.44704, knot:0.514444, mach:343 },
  // Data → base: byte (binary 1024)
  data: { bit:0.125, byte:1, kb:1024, mb:1048576, gb:1073741824, tb:1099511627776, pb:1.125899906842624e15 },
  // Time → base: second
  time: { ms:0.001, second:1, minute:60, hour:3600, day:86400, week:604800, month:2629800, year:31557600 },
  // Currency → base: usd (placeholder — requires live API)
  currency: { usd:1, eur:1.08, gbp:1.26, jpy:0.0067, cny:0.14, aud:0.65, cad:0.73, chf:1.11, hkd:0.128, krw:0.00075 },
};

// ──── FORMULA DESCRIPTIONS ────

export function getFormula(from: string, to: string, categoryKey: string): { desc: string; descReverse: string } {
  if (categoryKey === 'temperature') {
    const formulas: Record<string, { desc: string; descReverse: string }> = {
      celsius_fahrenheit: { desc: '(°C × 9/5) + 32', descReverse: '(°F − 32) × 5/9' },
      celsius_kelvin:     { desc: '°C + 273.15', descReverse: 'K − 273.15' },
      fahrenheit_kelvin:  { desc: '(°F − 32) × 5/9 + 273.15', descReverse: '(K − 273.15) × 9/5 + 32' },
    };
    const key1 = `${from}_${to}`;
    const key2 = `${to}_${from}`;
    if (formulas[key1]) return formulas[key1];
    if (formulas[key2]) {
      const f = formulas[key2];
      return { desc: f.descReverse, descReverse: f.desc };
    }
    return { desc: '—', descReverse: '—' };
  }

  const factors = CONVERSION_FACTORS[categoryKey];
  if (!factors) return { desc: '—', descReverse: '—' };
  const ratio = factors[to] / factors[from];
  if (ratio === 1) return { desc: '1:1', descReverse: '1:1' };

  if (ratio >= 1000 || ratio <= 0.001) {
    return { desc: `× ${ratio.toExponential(4)}`, descReverse: `× ${(1/ratio).toExponential(4)}` };
  }
  return { desc: `× ${ratio}`, descReverse: `× ${1/ratio}` };
}

// ──── GENERATE ALL PAIRS ────

export function generateAllPairs(): ConversionPair[] {
  const pairs: ConversionPair[] = [];
  for (const cat of CATEGORIES) {
    const units = cat.units;
    for (let i = 0; i < units.length; i++) {
      for (let j = 0; j < units.length; j++) {
        if (i === j) continue;
        const from = units[i];
        const to = units[j];
        const slug = `${from.key}-to-${to.key}`;
        const formulas = getFormula(from.key, to.key, cat.key);
        pairs.push({
          slug,
          from,
          to,
          categoryKey: cat.key,
          categoryName: cat.name,
          formula: formulas.desc,
          formulaReverse: formulas.descReverse,
        });
      }
    }
  }
  return pairs;
}

// Cache for performance
export const ALL_PAIRS: ConversionPair[] = generateAllPairs();

// ──── LOOKUP HELPERS ────

export function findPair(slug: string): ConversionPair | undefined {
  return ALL_PAIRS.find(p => p.slug === slug);
}

export function findCategory(key: string): ConversionCategory | undefined {
  return CATEGORIES.find(c => c.key === key);
}

export function getPairsByCategory(categoryKey: string): ConversionPair[] {
  return ALL_PAIRS.filter(p => p.categoryKey === categoryKey);
}
