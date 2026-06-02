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
      { key: 'sqmm',   name: { en:'Sq Millimeter', zh:'平方毫米', ja:'平方ミリメートル', ko:'제곱밀리미터', es:'Milímetro cuadrado', pt:'Milímetro quadrado' }, symbol:'mm²', system:'metric' },
      { key: 'sqcm',   name: { en:'Sq Centimeter', zh:'平方厘米', ja:'平方センチメートル', ko:'제곱센티미터', es:'Centímetro cuadrado', pt:'Centímetro quadrado' }, symbol:'cm²', system:'metric' },
      { key: 'sqm',    name: { en:'Sq Meter', zh:'平方米', ja:'平方メートル', ko:'제곱미터', es:'Metro cuadrado', pt:'Metro quadrado' }, symbol:'m²', system:'metric' },
      { key: 'sqkm',   name: { en:'Sq Kilometer', zh:'平方公里', ja:'平方キロメートル', ko:'제곱킬로미터', es:'Kilómetro cuadrado', pt:'Quilômetro quadrado' }, symbol:'km²', system:'metric' },
      { key: 'sqinch', name: { en:'Sq Inch', zh:'平方英寸', ja:'平方インチ', ko:'제곱인치', es:'Pulgada cuadrada', pt:'Polegada quadrada' }, symbol:'in²', system:'imperial' },
      { key: 'sqft',   name: { en:'Sq Foot', zh:'平方英尺', ja:'平方フィート', ko:'제곱피트', es:'Pie cuadrado', pt:'Pé quadrado' }, symbol:'ft²', system:'imperial' },
      { key: 'sqyard', name: { en:'Sq Yard', zh:'平方码', ja:'平方ヤード', ko:'제곱야드', es:'Yarda cuadrada', pt:'Jarda quadrada' }, symbol:'yd²', system:'imperial' },
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
      { key: 'mps',   name: { en:'Meter/sec', zh:'米/秒', ja:'メートル毎秒', ko:'미터/초', es:'Metro por segundo', pt:'Metro por segundo' }, symbol:'m/s', system:'metric' },
      { key: 'kmh',   name: { en:'Km/hour', zh:'千米/小时', ja:'キロ毎時', ko:'km/h', es:'Kilómetro por hora', pt:'Quilômetro por hora' }, symbol:'km/h', system:'metric' },
      { key: 'mph',   name: { en:'Mile/hour', zh:'英里/小时', ja:'マイル毎時', ko:'마일/시', es:'Milla por hora', pt:'Milha por hora' }, symbol:'mph', system:'imperial' },
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
      { key: 'kb',   name: { en:'Kibibyte', zh:'千字节', ja:'キビバイト', ko:'키비바이트', es:'Kibibyte', pt:'Kibibyte' }, symbol:'KiB', system:'other' },
      { key: 'mb',   name: { en:'Mebibyte', zh:'兆字节', ja:'メビバイト', ko:'메비바이트', es:'Mebibyte', pt:'Mebibyte' }, symbol:'MiB', system:'other' },
      { key: 'gb',   name: { en:'Gibibyte', zh:'吉字节', ja:'ギビバイト', ko:'기비바이트', es:'Gibibyte', pt:'Gibibyte' }, symbol:'GiB', system:'other' },
      { key: 'tb',   name: { en:'Tebibyte', zh:'太字节', ja:'テビバイト', ko:'테비바이트', es:'Tebibyte', pt:'Tebibyte' }, symbol:'TiB', system:'other' },
      { key: 'pb',   name: { en:'Pebibyte', zh:'拍字节', ja:'ペビバイト', ko:'페비바이트', es:'Pebibyte', pt:'Pebibyte' }, symbol:'PiB', system:'other' },
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
  {
    key: 'pressure',
    name: { en: 'Pressure', zh: '压力', ja: '圧力', ko: '압력', es: 'Presión', pt: 'Pressão' },
    icon: '🔧',
    baseUnit: 'pa',
    units: [
      { key: 'pa',   name: { en:'Pascal', zh:'帕斯卡', ja:'パスカル', ko:'파스칼', es:'Pascal', pt:'Pascal' }, symbol:'Pa', system:'metric' },
      { key: 'kpa',  name: { en:'Kilopascal', zh:'千帕', ja:'キロパスカル', ko:'킬로파스칼', es:'Kilopascal', pt:'Kilopascal' }, symbol:'kPa', system:'metric' },
      { key: 'mpa',  name: { en:'Megapascal', zh:'兆帕', ja:'メガパスカル', ko:'메가파스칼', es:'Megapascal', pt:'Megapascal' }, symbol:'MPa', system:'metric' },
      { key: 'bar',  name: { en:'Bar', zh:'巴', ja:'バール', ko:'바', es:'Bar', pt:'Bar' }, symbol:'bar', system:'metric' },
      { key: 'mbar', name: { en:'Millibar', zh:'毫巴', ja:'ミリバール', ko:'밀리바', es:'Milibar', pt:'Milibar' }, symbol:'mbar', system:'metric' },
      { key: 'psi',  name: { en:'PSI', zh:'磅力/平方英寸', ja:'PSI', ko:'PSI', es:'PSI', pt:'PSI' }, symbol:'psi', system:'imperial' },
      { key: 'atm',  name: { en:'Atmosphere', zh:'标准大气压', ja:'標準大気圧', ko:'표준 대기압', es:'Atmósfera', pt:'Atmosfera' }, symbol:'atm', system:'other' },
      { key: 'mmhg', name: { en:'mmHg', zh:'毫米汞柱', ja:'ミリ水銀柱', ko:'mmHg', es:'mmHg', pt:'mmHg' }, symbol:'mmHg', system:'other' },
      { key: 'torr', name: { en:'Torr', zh:'托', ja:'トル', ko:'토르', es:'Torr', pt:'Torr' }, symbol:'Torr', system:'other' },
    ]
  },
  {
    key: 'energy',
    name: { en: 'Energy', zh: '能量', ja: 'エネルギー', ko: '에너지', es: 'Energía', pt: 'Energia' },
    icon: '⚡',
    baseUnit: 'j',
    units: [
      { key: 'j',    name: { en:'Joule', zh:'焦耳', ja:'ジュール', ko:'줄', es:'Joule', pt:'Joule' }, symbol:'J', system:'metric' },
      { key: 'kj',   name: { en:'Kilojoule', zh:'千焦', ja:'キロジュール', ko:'킬로줄', es:'Kilojoule', pt:'Kilojoule' }, symbol:'kJ', system:'metric' },
      { key: 'cal',  name: { en:'Calorie', zh:'卡路里', ja:'カロリー', ko:'칼로리', es:'Caloría', pt:'Caloria' }, symbol:'cal', system:'metric' },
      { key: 'kcal', name: { en:'Kilocalorie', zh:'千卡', ja:'キロカロリー', ko:'킬로칼로리', es:'Kilocaloría', pt:'Quilocaloria' }, symbol:'kcal', system:'metric' },
      { key: 'wh',   name: { en:'Watt-hour', zh:'瓦时', ja:'ワット時', ko:'와트시', es:'Watio-hora', pt:'Watt-hora' }, symbol:'Wh', system:'metric' },
      { key: 'kwh',  name: { en:'Kilowatt-hour', zh:'千瓦时', ja:'キロワット時', ko:'킬로와트시', es:'Kilowatio-hora', pt:'Quilowatt-hora' }, symbol:'kWh', system:'metric' },
      { key: 'btu',  name: { en:'BTU', zh:'英热单位', ja:'BTU', ko:'BTU', es:'BTU', pt:'BTU' }, symbol:'BTU', system:'imperial' },
      { key: 'ftlb', name: { en:'Foot-pound', zh:'英尺磅力', ja:'フィートポンド', ko:'피트파운드', es:'Pie-libra', pt:'Pé-libra' }, symbol:'ft·lb', system:'imperial' },
      { key: 'ev',   name: { en:'Electronvolt', zh:'电子伏特', ja:'電子ボルト', ko:'전자볼트', es:'Electronvoltio', pt:'Electronvolt' }, symbol:'eV', system:'other' },
    ]
  },
  {
    key: 'power',
    name: { en: 'Power', zh: '功率', ja: '功率', ko: '전력', es: 'Potencia', pt: 'Potência' },
    icon: '💡',
    baseUnit: 'w',
    units: [
      { key: 'w',    name: { en:'Watt', zh:'瓦特', ja:'ワット', ko:'와트', es:'Vatio', pt:'Watt' }, symbol:'W', system:'metric' },
      { key: 'kw',   name: { en:'Kilowatt', zh:'千瓦', ja:'キロワット', ko:'킬로와트', es:'Kilovatio', pt:'Quilowatt' }, symbol:'kW', system:'metric' },
      { key: 'mw',   name: { en:'Megawatt', zh:'兆瓦', ja:'メガワット', ko:'메가와트', es:'Megavatio', pt:'Megawatt' }, symbol:'MW', system:'metric' },
      { key: 'hp',   name: { en:'Horsepower', zh:'马力', ja:'馬力', ko:'마력', es:'Caballo de fuerza', pt:'Cavalo-vapor' }, symbol:'hp', system:'imperial' },
      { key: 'btuh', name: { en:'BTU/hour', zh:'英热单位/时', ja:'BTU/時', ko:'BTU/시', es:'BTU/hora', pt:'BTU/hora' }, symbol:'BTU/h', system:'imperial' },
    ]
  },
  {
    key: 'angle',
    name: { en: 'Angle', zh: '角度', ja: '角度', ko: '각도', es: 'Ángulo', pt: 'Ângulo' },
    icon: '📐',
    baseUnit: 'deg',
    units: [
      { key: 'deg', name: { en:'Degree', zh:'度', ja:'度', ko:'도', es:'Grado', pt:'Grau' }, symbol:'°', system:'other' },
      { key: 'rad', name: { en:'Radian', zh:'弧度', ja:'ラジアン', ko:'라디안', es:'Radián', pt:'Radiano' }, symbol:'rad', system:'other' },
      { key: 'grad', name: { en:'Gradian', zh:'梯度', ja:'グラジアン', ko:'그라디안', es:'Gradián', pt:'Grado centesimal' }, symbol:'grad', system:'other' },
      { key: 'moa', name: { en:'Minute of Arc', zh:'角分', ja:'角分', ko:'각분', es:'Minuto de arco', pt:'Minuto de arco' }, symbol:'′', system:'other' },
    ]
  },
  {
    key: 'frequency',
    name: { en: 'Frequency', zh: '频率', ja: '周波数', ko: '주파수', es: 'Frecuencia', pt: 'Frequência' },
    icon: '📡',
    baseUnit: 'hz',
    units: [
      { key: 'hz',  name: { en:'Hertz', zh:'赫兹', ja:'ヘルツ', ko:'헤르츠', es:'Hertz', pt:'Hertz' }, symbol:'Hz', system:'metric' },
      { key: 'khz', name: { en:'Kilohertz', zh:'千赫', ja:'キロヘルツ', ko:'킬로헤르츠', es:'Kilohertz', pt:'Kilohertz' }, symbol:'kHz', system:'metric' },
      { key: 'mhz', name: { en:'Megahertz', zh:'兆赫', ja:'メガヘルツ', ko:'메가헤르츠', es:'Megahertz', pt:'Megahertz' }, symbol:'MHz', system:'metric' },
      { key: 'ghz', name: { en:'Gigahertz', zh:'吉赫', ja:'ギガヘルツ', ko:'기가헤르츠', es:'Gigahertz', pt:'Gigahertz' }, symbol:'GHz', system:'metric' },
      { key: 'rpm', name: { en:'RPM', zh:'转/分', ja:'RPM', ko:'RPM', es:'RPM', pt:'RPM' }, symbol:'rpm', system:'other' },
    ]
  },
  {
    key: 'fuel',
    name: { en: 'Fuel Consumption', zh: '燃油消耗', ja: '燃費', ko: '연비', es: 'Consumo de Combustible', pt: 'Consumo de Combustível' },
    icon: '🚗',
    baseUnit: 'kmpl',
    units: [
      { key: 'kmpl',  name: { en:'Km/Liter', zh:'千米/升', ja:'km/L', ko:'km/L', es:'Km/Litro', pt:'Km/Litro' }, symbol:'km/L', system:'metric' },
      { key: 'l100km', name: { en:'L/100km', zh:'升/百公里', ja:'L/100km', ko:'L/100km', es:'L/100km', pt:'L/100km' }, symbol:'L/100km', system:'metric' },
      { key: 'mpg_us', name: { en:'MPG (US)', zh:'英里/加仑(美)', ja:'マイル/ガロン(米)', ko:'MPG(미국)', es:'MPG (EE.UU.)', pt:'MPG (EUA)' }, symbol:'mpg', system:'imperial' },
      { key: 'mpg_uk', name: { en:'MPG (UK)', zh:'英里/加仑(英)', ja:'マイル/ガロン(英)', ko:'MPG(영국)', es:'MPG (Reino Unido)', pt:'MPG (Reino Unido)' }, symbol:'mpg', system:'imperial' },
      { key: 'mpl',   name: { en:'Mile/Liter', zh:'英里/升', ja:'マイル/リットル', ko:'마일/리터', es:'Milla/Litro', pt:'Milha/Litro' }, symbol:'mi/L', system:'imperial' },
    ]
  },
  {
    key: 'force',
    name: { en: 'Force', zh: '力', ja: '力', ko: '힘', es: 'Fuerza', pt: 'Força' },
    icon: '🔧',
    baseUnit: 'n',
    units: [
      { key: 'n',   name: { en:'Newton', zh:'牛顿', ja:'ニュートン', ko:'뉴턴', es:'Newton', pt:'Newton' }, symbol:'N', system:'metric' },
      { key: 'kn',  name: { en:'Kilonewton', zh:'千牛', ja:'キロニュートン', ko:'킬로뉴턴', es:'Kilonewton', pt:'Kilonewton' }, symbol:'kN', system:'metric' },
      { key: 'mn',  name: { en:'Meganewton', zh:'兆牛', ja:'メガニュートン', ko:'메가뉴턴', es:'Meganewton', pt:'Meganewton' }, symbol:'MN', system:'metric' },
      { key: 'lbf', name: { en:'Pound-force', zh:'磅力', ja:'ポンド力', ko:'파운드포스', es:'Libra-fuerza', pt:'Libra-força' }, symbol:'lbf', system:'imperial' },
      { key: 'kgf', name: { en:'Kilogram-force', zh:'千克力', ja:'キログラム力', ko:'킬로그램포스', es:'Kilogramo-fuerza', pt:'Quilograma-força' }, symbol:'kgf', system:'metric' },
      { key: 'dyn', name: { en:'Dyne', zh:'达因', ja:'ダイン', ko:'다인', es:'Dina', pt:'Dina' }, symbol:'dyn', system:'metric' },
    ]
  },
  {
    key: 'torque',
    name: { en: 'Torque', zh: '扭矩', ja: 'トルク', ko: '토크', es: 'Par de fuerza', pt: 'Torque' },
    icon: '🔄',
    baseUnit: 'nm',
    units: [
      { key: 'nm',    name: { en:'Newton-meter', zh:'牛·米', ja:'ニュートンメートル', ko:'뉴턴미터', es:'Newton-metro', pt:'Newton-metro' }, symbol:'N·m', system:'metric' },
      { key: 'knm',   name: { en:'Kilonewton-meter', zh:'千牛·米', ja:'キロニュートンメートル', ko:'킬로뉴턴미터', es:'Kilonewton-metro', pt:'Kilonewton-metro' }, symbol:'kN·m', system:'metric' },
      { key: 'ftlb',  name: { en:'Foot-pound', zh:'英尺·磅', ja:'フィートポンド', ko:'피트파운드', es:'Pie-libra', pt:'Pé-libra' }, symbol:'ft·lb', system:'imperial' },
      { key: 'inlb',  name: { en:'Inch-pound', zh:'英寸·磅', ja:'インチポンド', ko:'인치파운드', es:'Pulgada-libra', pt:'Polegada-libra' }, symbol:'in·lb', system:'imperial' },
      { key: 'kgfm',  name: { en:'Kilogram-meter', zh:'千克力·米', ja:'キログラムメートル', ko:'킬로그램미터', es:'Kilogramo-metro', pt:'Quilograma-metro' }, symbol:'kgf·m', system:'metric' },
    ]
  },
  {
    key: 'density',
    name: { en: 'Density', zh: '密度', ja: '密度', ko: '밀도', es: 'Densidad', pt: 'Densidade' },
    icon: '🧲',
    baseUnit: 'kgm3',
    units: [
      { key: 'kgm3',  name: { en:'Kg/m³', zh:'千克/立方米', ja:'kg/m³', ko:'kg/m³', es:'Kg/m³', pt:'Kg/m³' }, symbol:'kg/m³', system:'metric' },
      { key: 'gcm3',  name: { en:'G/cm³', zh:'克/立方厘米', ja:'g/cm³', ko:'g/cm³', es:'G/cm³', pt:'G/cm³' }, symbol:'g/cm³', system:'metric' },
      { key: 'gml',   name: { en:'G/mL', zh:'克/毫升', ja:'g/mL', ko:'g/mL', es:'G/mL', pt:'G/mL' }, symbol:'g/mL', system:'metric' },
      { key: 'lbft3', name: { en:'Lb/ft³', zh:'磅/立方英尺', ja:'lb/ft³', ko:'lb/ft³', es:'Lb/pie³', pt:'Lb/pé³' }, symbol:'lb/ft³', system:'imperial' },
      { key: 'lbin3', name: { en:'Lb/in³', zh:'磅/立方英寸', ja:'lb/in³', ko:'lb/in³', es:'Lb/pulgada³', pt:'Lb/polegada³' }, symbol:'lb/in³', system:'imperial' },
      { key: 'mgl',   name: { en:'Mg/L', zh:'毫克/升', ja:'mg/L', ko:'mg/L', es:'Mg/L', pt:'Mg/L' }, symbol:'mg/L', system:'metric' },
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
  // Pressure → base: pascal
  pressure: { pa:1, kpa:1000, mpa:1000000, bar:100000, mbar:100, psi:6894.76, atm:101325, mmhg:133.322, torr:133.322 },
  // Energy → base: joule
  energy: { j:1, kj:1000, cal:4.184, kcal:4184, wh:3600, kwh:3600000, btu:1055.06, ftlb:1.35582, ev:1.602176634e-19 },
  // Power → base: watt
  power: { w:1, kw:1000, mw:1000000, hp:745.7, btuh:0.29307107 },
  // Angle → base: degree
  angle: { deg:1, rad:57.2957795, grad:0.9, moa:0.0166667 },
  // Frequency → base: hertz
  frequency: { hz:1, khz:1000, mhz:1000000, ghz:1000000000, rpm:0.0166667 },
  // Fuel Consumption → special (L/100km is inverse, like temperature)
  // NOT in CONVERSION_FACTORS — handled in convert() like temperature
  // Force → base: newton
  force: { n:1, kn:1000, mn:1000000, lbf:4.44822, kgf:9.80665, dyn:0.00001 },
  // Torque → base: newton-meter
  torque: { nm:1, knm:1000, ftlb:1.35582, inlb:0.112985, kgfm:9.80665 },
  // Density → base: kg/m³
  density: { kgm3:1, gcm3:1000, gml:1000, lbft3:16.0185, lbin3:27679.9, mgl:0.001 },
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

  if (categoryKey === 'fuel') {
    // Fuel conversions involving L/100km are inverse
    // km/L ↔ km/L: simple ratio via intermediate
    // All units convert to km/L first, then to target
    // km/L → L/100km: 100 / val
    // L/100km → km/L: 100 / val
    const toKmpl: Record<string, number> = { kmpl: 1, mpg_us: 0.425144, mpg_uk: 0.354006, mpl: 1.60934 };
    const fromKmpl = from === 'l100km' || to === 'l100km';
    if (from === 'l100km' && to === 'l100km') return { desc: '1:1', descReverse: '1:1' };
    if (from === 'l100km') {
      const ratio = toKmpl[to];
      if (ratio) return { desc: `100 ÷ val × ${ratio}`, descReverse: `val ÷ ${ratio} ÷ 100` };
    }
    if (to === 'l100km') {
      const ratio = toKmpl[from];
      if (ratio) return { desc: `100 ÷ (val × ${ratio})`, descReverse: `100 ÷ val ÷ ${ratio}` };
    }
    // Both are linear (km/L, mpg, mi/L)
    const fFrom = toKmpl[from];
    const fTo = toKmpl[to];
    if (fFrom && fTo) {
      const ratio = fFrom / fTo;
      if (ratio === 1) return { desc: '1:1', descReverse: '1:1' };
      return { desc: `× ${ratio}`, descReverse: `× ${1/ratio}` };
    }
    return { desc: '—', descReverse: '—' };
  }

  const factors = CONVERSION_FACTORS[categoryKey];
  if (!factors) return { desc: '—', descReverse: '—' };
  // ratio = how many "to" units per 1 "from" unit
  // convert() does: val * factors[from] / factors[to]
  // so the multiplier shown to user is factors[from] / factors[to]
  const ratio = factors[from] / factors[to];
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

// O(1) lookup map instead of Array.find O(n)
const PAIR_MAP = new Map<string, ConversionPair>(ALL_PAIRS.map(p => [p.slug, p]));

export function findPair(slug: string): ConversionPair | undefined {
  return PAIR_MAP.get(slug);
}

export function findCategory(key: string): ConversionCategory | undefined {
  return CATEGORIES.find(c => c.key === key);
}

export function getPairsByCategory(categoryKey: string): ConversionPair[] {
  return ALL_PAIRS.filter(p => p.categoryKey === categoryKey);
}
