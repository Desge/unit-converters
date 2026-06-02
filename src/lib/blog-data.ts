import type { Locale } from './conversions';
import { SITE } from './seo';

export interface BlogArticle {
  slug: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  date: string;
  body: Record<Locale, string>;
}

function convertLink(locale: Locale, slug: string): string {
  return `https://unit.toolconv.com/${locale}/convert/${slug}/`;
}

export const BLOG_ARTICLES: BlogArticle[] = [
  // ──────── 1. Temperature Guide ────────
  {
    slug: 'temperature-guide',
    title: {
      en: 'The Complete Guide to Temperature Conversion: Celsius, Fahrenheit, Kelvin',
      zh: '温度换算完全指南：摄氏度、华氏度、开尔文怎么换？',
      ja: '温度変換完全ガイド：摂氏、華氏、ケルビンの変換方法',
      ko: '온도 변환 완벽 가이드: 섭씨, 화씨, 켈빈 변환 방법',
      es: 'Guía Completa de Conversión de Temperatura: Celsius, Fahrenheit, Kelvin',
      pt: 'Guia Completo de Conversão de Temperatura: Celsius, Fahrenheit, Kelvin',
    },
    description: {
      en: 'Master temperature conversions between Celsius, Fahrenheit, and Kelvin. Learn the formulas, common reference points, and practical tips for everyday use.',
      zh: '掌握摄氏度、华氏度和开尔文之间的温度换算。学习换算公式、常用参考点和日常实用技巧。',
      ja: '摂氏、華氏、ケルビンの温度変換をマスター。公式、一般的な基準点、日常的な使用のコツを学びます。',
      ko: '섭씨, 화씨, 켈빈 간 온도 변환을 마스터하세요. 공식, 일반적인 기준점 및 일상적인 사용 팁을 배웁니다.',
      es: 'Domina las conversiones de temperatura entre Celsius, Fahrenheit y Kelvin. Aprende las fórmulas, puntos de referencia comunes y consejos prácticos.',
      pt: 'Domine as conversões de temperatura entre Celsius, Fahrenheit e Kelvin. Aprenda as fórmulas, pontos de referência comuns e dicas práticas.',
    },
    date: '2025-01-15',
    body: {
      en: `Temperature conversion is one of the most common unit conversions people encounter in daily life. Whether you're following a recipe from a foreign cookbook, checking weather forecasts while traveling, or working in a scientific laboratory, understanding how to convert between Celsius, Fahrenheit, and Kelvin is essential.

## The Three Temperature Scales

### Celsius (°C)
The Celsius scale, also known as centigrade, is the most widely used temperature scale worldwide. It was developed by Swedish astronomer Anders Celsius in 1742. On this scale, water freezes at 0°C and boils at 100°C at standard atmospheric pressure. Most countries use Celsius for everyday temperature measurement, and it is the standard scale for scientific work in most fields.

### Fahrenheit (°F)
The Fahrenheit scale was developed by Daniel Gabriel Fahrenheit, a Polish-German physicist, in 1724. Water freezes at 32°F and boils at 212°F. This scale is primarily used in the United States and its territories, as well as in a few Caribbean nations. One degree Fahrenheit is 5/9 of a degree Celsius, making it a finer-grained scale that allows for more precise weather temperature readings without decimals.

### Kelvin (K)
The Kelvin scale is the base unit of thermodynamic temperature measurement in the International System of Units (SI). It was developed by Lord Kelvin (William Thomson) in 1848. Unlike Celsius and Fahrenheit, Kelvin is an absolute temperature scale. Zero Kelvin (0 K), known as absolute zero, is the theoretical point at which all molecular motion ceases. Water freezes at 273.15 K and boils at 373.15 K. Scientists use Kelvin for calculations involving gas laws, thermodynamics, and cryogenics because it eliminates negative temperatures.

## Conversion Formulas

### Celsius to Fahrenheit
$$°F = (°C \\times \\frac{9}{5}) + 32$$

Example: Convert 25°C to Fahrenheit
$$25 \\times \\frac{9}{5} + 32 = 45 + 32 = 77°F$$

### Fahrenheit to Celsius
$$°C = (°F - 32) \\times \\frac{5}{9}$$

Example: Convert 98.6°F (normal body temperature) to Celsius
$$(98.6 - 32) \\times \\frac{5}{9} = 66.6 \\times \\frac{5}{9} = 37°C$$

### Celsius to Kelvin
$$K = °C + 273.15$$

Example: Convert 0°C to Kelvin
$$0 + 273.15 = 273.15 K$$

### Kelvin to Celsius
$$°C = K - 273.15$$

### Fahrenheit to Kelvin
$$K = (°F - 32) \\times \\frac{5}{9} + 273.15$$

### Kelvin to Fahrenheit
$$°F = (K - 273.15) \\times \\frac{9}{5} + 32$$

## Quick Reference Table

| Celsius (°C) | Fahrenheit (°F) | Kelvin (K) | Description |
|---|---|---|---|
| -273.15 | -459.67 | 0 | Absolute zero |
| -40 | -40 | 233.15 | Same on both scales |
| -17.78 | 0 | 255.37 | Fahrenheit zero |
| 0 | 32 | 273.15 | Water freezes |
| 10 | 50 | 283.15 | Cool day |
| 20 | 68 | 293.15 | Room temperature |
| 25 | 77 | 298.15 | Warm day |
| 30 | 86 | 303.15 | Hot day |
| 37 | 98.6 | 310.15 | Body temperature |
| 40 | 104 | 313.15 | Very hot day |
| 100 | 212 | 373.15 | Water boils |

## Practical Examples

### Cooking and Baking
Many European recipes specify oven temperatures in Celsius, while American recipes use Fahrenheit. A common oven temperature of 180°C equals 356°F (often rounded to 350°F in recipes). Professional bakers often need to convert between scales when working with international recipes, and knowing the exact conversion prevents failed cakes, undercooked bread, or burned cookies.

### Weather and Travel
If you're from the US traveling to Europe, 25°C might sound cold to you, but it's actually a pleasant 77°F. Conversely, Europeans visiting the US might think 90°F is moderate, when in reality it's a sweltering 32°C. Weather forecasts in different countries display temperatures in different scales — Canada uses Celsius, its southern neighbor uses Fahrenheit.

### Scientific Applications
In laboratory settings, Kelvin is the standard. Many chemical reactions are specified at 298.15 K (25°C), which is considered standard room temperature. Cryogenic experiments often work with temperatures just a few degrees above absolute zero. The world's lowest temperature ever achieved in a laboratory is about 100 nanokelvin — just 0.0000001 K above absolute zero.

Use our [Celsius to Fahrenheit Converter](${convertLink('en', 'celsius-to-fahrenheit')}) for instant conversions, or check out our [Fahrenheit to Celsius Converter](${convertLink('en', 'fahrenheit-to-celsius')}) for the reverse direction.`,
      zh: `温度换算是人们在日常生活中最常遇到的单位换算之一。无论您是按照外国食谱烹饪、在旅行时查看天气预报，还是在科学实验室工作，了解如何在摄氏度、华氏度和开尔文之间进行换算都是必不可少的。

## 三种温标

### 摄氏度（°C）
摄氏度，又称百分度，是全球使用最广泛的温标。由瑞典天文学家安德斯·摄尔修斯于1742年创立。在标准大气压下，水的冰点为0°C，沸点为100°C。大多数国家在日常温度测量中使用摄氏度，它也是大多数领域科学工作的标准温标。

### 华氏度（°F）
华氏度由波兰裔德国物理学家丹尼尔·加布里埃尔·华伦海特于1724年创立。水的冰点为32°F，沸点为212°F。该温标主要在美国及其领地以及少数加勒比国家使用。1华氏度等于5/9摄氏度，因此它是一个更精细的刻度，可以在不使用小数的情况下获得更精确的天气温度读数。

### 开尔文（K）
开尔文是国际单位制（SI）中热力学温度的基本单位。由开尔文勋爵（威廉·汤姆森）于1848年创立。与摄氏度和华氏度不同，开尔文是绝对温标。0 K（绝对零度）是所有分子运动停止的理论点。水的冰点为273.15 K，沸点为373.15 K。科学家使用开尔文进行涉及气体定律、热力学和低温学的计算，因为它消除了负温度。

## 换算公式

**摄氏度→华氏度**：°F = (°C × 9/5) + 32。示例：25°C = (25 × 9/5) + 32 = 77°F

**华氏度→摄氏度**：°C = (°F − 32) × 5/9。示例：98.6°F = (98.6 − 32) × 5/9 = 37°C

**摄氏度→开尔文**：K = °C + 273.15。示例：0°C = 273.15 K

**开尔文→摄氏度**：°C = K − 273.15

## 速查表

| 摄氏度 | 华氏度 | 开尔文 | 描述 |
|---|---|---|---|
| -273.15 | -459.67 | 0 | 绝对零度 |
| -40 | -40 | 233.15 | 两刻度相同 |
| 0 | 32 | 273.15 | 水结冰 |
| 20 | 68 | 293.15 | 室温 |
| 37 | 98.6 | 310.15 | 人体体温 |
| 100 | 212 | 373.15 | 水沸腾 |

## 实用场景

**烹饪与烘焙**：许多欧洲食谱使用摄氏度标注烤箱温度，而美国食谱使用华氏度。常见的180°C烤箱温度等于356°F（食谱中通常四舍五入为350°F）。专业烘焙师需要在不同温标之间进行转换，以避免糕点失败。

**天气与旅行**：如果您从美国去欧洲旅行，25°C听起来可能很冷，但实际上这是舒适的77°F。反之，欧洲人认为90°F可能适中，但实际上这是炎热的32°C。

**科学应用**：在实验室环境中，开尔文是标准单位。许多化学反应在298.15 K（25°C）下进行，这被认为是标准室温。

使用我们的[摄氏度换算器](https://unit.toolconv.com/zh/convert/celsius-to-fahrenheit/)进行即时换算，或查看[华氏度换算器](https://unit.toolconv.com/zh/convert/fahrenheit-to-celsius/)进行反向换算。`,
      ja: `温度変換は、日常生活で最もよく遭遇する単位変換の一つです。外国のレシピを調理するとき、旅行中の天気予報を確認するとき、科学実験室で作業するときなど、摂氏、華氏、ケルビン間の変換方法を理解することは不可欠です。

## 3つの温度目盛り

**摂氏（°C）**：摂氏は、世界で最も広く使用されている温度目盛りです。1742年にスウェーデンの天文学者アンデルス・セルシウスによって開発されました。標準大気圧では、水は0°Cで凍り、100°Cで沸騰します。

**華氏（°F）**：華氏は、1724年にポーランド系ドイツ人の物理学者ダニエル・ガブリエル・ファーレンハイトによって開発されました。水は32°Fで凍り、212°Fで沸騰します。主に米国とその領土で使用されています。

**ケルビン（K）**：ケルビンは、国際単位系（SI）における熱力学温度の基本単位です。1848年にケルビン卿（ウィリアム・トムソン）によって開発されました。絶対零度（0 K）は、すべての分子運動が停止する理論上の点です。

## 変換式

- 摂氏→華氏：°F = (°C × 9/5) + 32（例：25°C = 77°F）
- 華氏→摂氏：°C = (°F − 32) × 5/9（例：98.6°F = 37°C）
- 摂氏→ケルビン：K = °C + 273.15（例：0°C = 273.15 K）
- ケルビン→摂氏：°C = K − 273.15

## 実用的な例

**料理とベーキング**：一般的なオーブン温度180°Cは356°Fに相当します（レシピでは350°Fに丸められることが多い）。国際的なレシピを扱うプロのパン職人にとって、正確な温度変換は不可欠です。

**天気と旅行**：25°Cは華氏77°Fで、快適な温暖な日を示します。逆に、米国の90°Fは摂氏32°Cで非常に暑い日です。

当社の[摂氏から華氏への変換ツール](${convertLink('ja', 'celsius-to-fahrenheit')})と[華氏から摂氏への変換ツール](${convertLink('ja', 'fahrenheit-to-celsius')})をご利用ください。`,
      ko: `온도 변환은 일상생활에서 가장 흔히 접하는 단위 변환 중 하나입니다. 외국 요리책의 레시피를 따를 때, 여행 중 일기예보를 확인할 때, 또는 과학 실험실에서 작업할 때 섭씨, 화씨, 켈빈 간의 변환 방법을 이해하는 것이 필수적입니다.

## 세 가지 온도 눈금

**섭씨 (°C)**：섭씨는 전 세계에서 가장 널리 사용되는 온도 눈금입니다. 1742년 스웨덴의 천문학자 안데르스 셀시우스가 개발했습니다. 표준 대기압에서 물은 0°C에서 얼고 100°C에서 끓습니다.

**화씨 (°F)**：화씨는 1724년 폴란드계 독일 물리학자 다니엘 가브리엘 파렌하이트가 개발했습니다. 물은 32°F에서 얼고 212°F에서 끓습니다. 주로 미국과 그 영토에서 사용됩니다.

**켈빈 (K)**：켈빈은 국제단위계(SI)에서 열역학적 온도의 기본 단위입니다. 절대영도(0 K)는 모든 분자 운동이 중단되는 이론적 지점입니다.

## 변환 공식

- 섭씨→화씨：°F = (°C × 9/5) + 32 (예: 25°C = 77°F)
- 화씨→섭씨：°C = (°F − 32) × 5/9 (예: 98.6°F = 37°C)
- 섭씨→켈빈：K = °C + 273.15 (예: 0°C = 273.15 K)
- 켈빈→섭씨：°C = K − 273.15

## 실용 예시

**요리와 베이킹**：일반적인 오븐 온도 180°C는 356°F와 같습니다. 국제 레시피를 사용할 때 정확한 변환이 중요합니다.

**날씨와 여행**：25°C는 화씨 77°F로 쾌적한 따뜻한 날씨입니다. 미국의 90°F는 섭씨 32°C로 매우 더운 날씨입니다.

[섭씨에서 화씨 변환기](${convertLink('ko', 'celsius-to-fahrenheit')})를 사용하여 즉시 변환해보세요.`,
      es: `La conversión de temperatura es una de las conversiones de unidades más comunes en la vida diaria. Ya sea siguiendo una receta de un libro de cocina extranjero, revisando el pronóstico del tiempo mientras viaja, o trabajando en un laboratorio científico, entender cómo convertir entre Celsius, Fahrenheit y Kelvin es esencial.

## Las Tres Escalas de Temperatura

**Celsius (°C)**：La escala Celsius es la más utilizada en todo el mundo. Fue desarrollada por el astrónomo sueco Anders Celsius en 1742. El agua se congela a 0°C y hierve a 100°C.

**Fahrenheit (°F)**：La escala Fahrenheit fue desarrollada por Daniel Gabriel Fahrenheit en 1724. El agua se congela a 32°F y hierve a 212°F. Se usa principalmente en Estados Unidos.

**Kelvin (K)**：Kelvin es la unidad base de temperatura en el Sistema Internacional (SI). 0 K (cero absoluto) es el punto donde cesa todo movimiento molecular.

## Fórmulas de Conversión

- Celsius a Fahrenheit: °F = (°C × 9/5) + 32 (ej: 25°C = 77°F)
- Fahrenheit a Celsius: °C = (°F − 32) × 5/9 (ej: 98.6°F = 37°C)
- Celsius a Kelvin: K = °C + 273.15
- Kelvin a Celsius: °C = K − 273.15

## Ejemplos Prácticos

**Cocina y Repostería**：Una temperatura común de horno de 180°C equivale a 356°F. Los panaderos profesionales necesitan convertir entre escalas cuando trabajan con recetas internacionales.

**Clima y Viajes**：25°C equivale a 77°F, un día agradablemente cálido. 90°F equivale a 32°C, un día muy caluroso.

Utilice nuestro [Conversor de Celsius a Fahrenheit](${convertLink('es', 'celsius-to-fahrenheit')}) para conversiones instantáneas.`,
      pt: `A conversão de temperatura é uma das conversões de unidades mais comuns na vida diária. Esteja você seguindo uma receita de um livro estrangeiro, verificando previsões do tempo durante viagens ou trabalhando em um laboratório científico, entender como converter entre Celsius, Fahrenheit e Kelvin é essencial.

## As Três Escalas de Temperatura

**Celsius (°C)**：A escala Celsius é a mais utilizada em todo o mundo. Foi desenvolvida pelo astrônomo sueco Anders Celsius em 1742. A água congela a 0°C e ferve a 100°C.

**Fahrenheit (°F)**：A escala Fahrenheit foi desenvolvida por Daniel Gabriel Fahrenheit em 1724. A água congela a 32°F e ferve a 212°F. Usada principalmente nos Estados Unidos.

**Kelvin (K)**：Kelvin é a unidade base de temperatura no Sistema Internacional (SI). 0 K (zero absoluto) é o ponto onde cessa todo movimento molecular.

## Fórmulas de Conversão

- Celsius para Fahrenheit: °F = (°C × 9/5) + 32 (ex: 25°C = 77°F)
- Fahrenheit para Celsius: °C = (°F − 32) × 5/9 (ex: 98.6°F = 37°C)
- Celsius para Kelvin: K = °C + 273.15
- Kelvin para Celsius: °C = K − 273.15

## Exemplos Práticos

**Culinária e Confeitaria**：Uma temperatura comum de forno de 180°C equivale a 356°F.

**Clima e Viagens**：25°C equivale a 77°F, um dia agradavelmente quente. 90°F equivale a 32°C, um dia muito quente.

Use nosso [Conversor de Celsius para Fahrenheit](${convertLink('pt', 'celsius-to-fahrenheit')}) para conversões instantâneas.`,
    },
  },

  // ──────── 2. Length Units ────────
  {
    slug: 'length-units',
    title: {
      en: 'Length Unit Conversion: How Far Apart Are Miles, Kilometers, and Nautical Miles?',
      zh: '长度单位换算：英里、公里、海里到底差多少？',
      ja: '長さの単位変換：マイル、キロメートル、海里の違い',
      ko: '길이 단위 변환: 마일, 킬로미터, 해리는 얼마나 다를까?',
      es: 'Conversión de Unidades de Longitud: ¿Cuánto Difieren Millas, Kilómetros y Millas Náuticas?',
      pt: 'Conversão de Unidades de Comprimento: Qual a Diferença entre Milhas, Quilômetros e Milhas Náuticas?',
    },
    description: {
      en: 'A comprehensive guide to length unit conversions. Learn the differences between metric and imperial length units with formulas, tables, and practical examples.',
      zh: '长度单位换算全面指南。通过公式、表格和实用示例了解公制和英制长度单位的区别。',
      ja: '長さの単位変換の包括的ガイド。公式、表、実用的な例でメートル法とヤードポンド法の長さ単位の違いを学びます。',
      ko: '길이 단위 변환 종합 가이드. 공식, 표 및 실용적인 예제를 통해 미터법과 야드파운드법 길이 단위의 차이를 알아보세요.',
      es: 'Una guía completa de conversiones de unidades de longitud. Aprende las diferencias entre unidades métricas e imperiales con fórmulas, tablas y ejemplos prácticos.',
      pt: 'Um guia completo para conversões de unidades de comprimento. Aprenda as diferenças entre unidades métricas e imperiais com fórmulas, tabelas e exemplos práticos.',
    },
    date: '2025-01-18',
    body: {
      en: `Length measurement is fundamental to human civilization. From ancient cubits used by the Egyptians to build the pyramids to modern laser interferometry used to detect gravitational waves, our ability to measure distance has shaped architecture, navigation, science, and everyday life. Today, two major systems dominate: the metric system (millimeters, centimeters, meters, kilometers) and the imperial/US customary system (inches, feet, yards, miles). Additionally, nautical miles remain essential for maritime and aviation navigation.

## The Metric System (SI)

The metric system is the international standard for length measurement. It is based on the meter, defined as the distance light travels in a vacuum in 1/299,792,458 of a second. This definition, adopted in 1983, ties length measurement to a fundamental physical constant — the speed of light — guaranteeing universal reproducibility.

| Unit | Symbol | Equivalent in Meters | Common Uses |
|---|---|---|---|
| Millimeter | mm | 0.001 | Small dimensions, rainfall, engineering tolerances |
| Centimeter | cm | 0.01 | Body measurements, everyday objects, school supplies |
| Meter | m | 1 | Construction, sports, room dimensions, fabric |
| Kilometer | km | 1000 | Road distances, geography, marathon races |

## The Imperial/US Customary System

The imperial system, still widely used in the United States and to some extent in the UK, has its roots in Roman and Anglo-Saxon units. Unlike the metric system's clean decimal relationships, imperial units use varied conversion factors — 12 inches to a foot, 3 feet to a yard, 1,760 yards to a mile.

| Unit | Symbol | Equivalent in Meters | Common Uses |
|---|---|---|---|
| Inch | in | 0.0254 (exact) | Screen sizes (diagonal), lumber dimensions, clothing sizes |
| Foot | ft | 0.3048 (exact) | Human height, room dimensions, aviation altitude, construction |
| Yard | yd | 0.9144 (exact) | American football field dimensions, fabric measurement, landscaping |
| Mile | mi | 1609.344 (exact) | Road distances in US/UK, running races |

## Nautical Miles

The nautical mile is unique — it is based on the Earth's circumference. One nautical mile equals one minute (1/60 of a degree) of latitude. This makes it invaluable for navigation because it correlates directly with coordinates on a map or chart. A speed of one nautical mile per hour is called a knot.

## Conversion Formulas

**Metric to Imperial**
- 1 cm = 0.393701 inches
- 1 meter = 3.28084 feet
- 1 km = 0.621371 miles
- 1 km = 0.539957 nautical miles

**Imperial to Metric**
- 1 inch = 2.54 cm (exact by international agreement since 1959)
- 1 foot = 0.3048 m (exact)
- 1 mile = 1.60934 km
- 1 nautical mile = 1.852 km (exact)

## Quick Conversion Table

| From | To | Multiply By |
|---|---|---|
| cm | inch | 0.393701 |
| inch | cm | 2.54 |
| meter | feet | 3.28084 |
| feet | meter | 0.3048 |
| km | mile | 0.621371 |
| mile | km | 1.60934 |
| nautical mile | km | 1.852 |
| km | nautical mile | 0.539957 |

## Practical Examples

**Running and Fitness**: A 5K run is 5 kilometers, which equals 3.1 miles. Marathon distance is 42.195 km or 26.2 miles. Treadmills often offer both unit systems — knowing the conversion helps you track your progress accurately.

**Traveling by Road**: In Europe, highway speed limits are in km/h (e.g., 130 km/h on French highways). In the US, speed limits are in mph (e.g., 65 mph on interstate highways). A car's odometer and GPS can usually switch between units. When renting a car abroad, understanding distance units is crucial for navigation.

**Aviation and Maritime**: Pilots and sailors use nautical miles for navigation. A flight from New York to London is approximately 3,000 nautical miles (about 5,556 km). The knot (nautical mile per hour) is the standard speed unit in aviation. When pilots file flight plans, all distances are calculated in nautical miles regardless of the country of departure.

Use our [Kilometers to Miles Converter](${convertLink('en', 'km-to-mile')}) or [Miles to Kilometers Converter](${convertLink('en', 'mile-to-km')}) for quick conversions.`,
      zh: `长度测量是人类文明的基础。从古埃及人建造金字塔使用的肘尺到现代用于探测引力波的激光干涉测量，我们测量距离的能力塑造了建筑、航海、科学和日常生活。如今，两大体系主导着世界：公制（毫米、厘米、米、千米）和英制/美制（英寸、英尺、码、英里）。此外，海里在海事和航空导航中仍然至关重要。

## 公制（国际单位制）

公制是长度测量的国际标准。以米为基础，定义为光在真空中1/299,792,458秒内传播的距离。这个1983年采用的定义将长度测量与基本物理常数——光速——联系起来，保证了普遍的再现性。

| 单位 | 符号 | 相当于多少米 | 常见用途 |
|---|---|---|---|
| 毫米 | mm | 0.001 | 小尺寸、降雨量、工程公差 |
| 厘米 | cm | 0.01 | 身体测量、日常物品 |
| 米 | m | 1 | 建筑、运动、房间尺寸 |
| 千米 | km | 1000 | 道路距离、地理距离 |

## 英制/美制

| 单位 | 符号 | 相当于多少米 | 常见用途 |
|---|---|---|---|
| 英寸 | in | 0.0254 | 屏幕尺寸、木材、服装 |
| 英尺 | ft | 0.3048 | 身高、房间尺寸、航空 |
| 码 | yd | 0.9144 | 足球场、布料测量 |
| 英里 | mi | 1609.344 | 美英道路距离 |

## 海里

海里基于地球周长。1海里等于1分纬度。这使得它在导航中不可或缺，因为它直接与地图或海图上的坐标相关。

## 换算公式

1厘米 = 0.393701英寸
1米 = 3.28084英尺
1千米 = 0.621371英里
1英寸 = 2.54厘米（精确）
1英尺 = 0.3048米（精确）
1海里 = 1.852千米

使用我们的[公里到英里换算器](https://unit.toolconv.com/zh/convert/km-to-mile/)进行快速换算。`,
      ja: `長さの測定は人類の文明の基盤です。古代エジプト人がピラミッド建設に使用したキュビットから、重力波検出に使用される現代のレーザー干渉計まで、距離を測定する能力は建築、航海、科学、日常生活を形作ってきました。

## 変換式

1 cm = 0.393701 インチ
1 m = 3.28084 フィート
1 km = 0.621371 マイル
1 インチ = 2.54 cm（正確）
1 フィート = 0.3048 m（正確）
1 海里 = 1.852 km

当社の[キロメートルからマイルへの変換ツール](${convertLink('ja', 'km-to-mile')})をご利用ください。`,
      ko: `길이 측정은 인류 문명의 기초입니다. 고대 이집트인들이 피라미드 건설에 사용한 규빗부터 중력파 감지에 사용되는 현대 레이저 간섭계까지, 거리를 측정하는 능력은 건축, 항해, 과학 및 일상생활을 형성해 왔습니다.

## 변환 공식

1 cm = 0.393701 인치
1 m = 3.28084 피트
1 km = 0.621371 마일
1 인치 = 2.54 cm (정확)
1 피트 = 0.3048 m (정확)
1 해리 = 1.852 km

[킬로미터에서 마일 변환기](${convertLink('ko', 'km-to-mile')})를 사용해보세요.`,
      es: `La medición de longitud es fundamental para la civilización humana. Desde los codos utilizados por los antiguos egipcios para construir las pirámides hasta la interferometría láser moderna utilizada para detectar ondas gravitacionales.

## Fórmulas de Conversión

1 cm = 0.393701 pulgadas
1 m = 3.28084 pies
1 km = 0.621371 millas
1 pulgada = 2.54 cm
1 milla náutica = 1.852 km

Use nuestro [Conversor de Kilómetros a Millas](${convertLink('es', 'km-to-mile')}).`,
      pt: `A medição de comprimento é fundamental para a civilização humana. Dos côvados usados pelos antigos egípcios para construir as pirâmides à interferometria laser moderna usada para detectar ondas gravitacionais.

## Fórmulas de Conversão

1 cm = 0,393701 polegadas
1 m = 3,28084 pés
1 km = 0,621371 milhas
1 polegada = 2,54 cm
1 milha náutica = 1,852 km

Use nosso [Conversor de Quilômetros para Milhas](${convertLink('pt', 'km-to-mile')}).`,
    },
  },

  // ──────── 3. Kitchen Conversions ────────
  {
    slug: 'kitchen-conversions',
    title: {
      en: 'Kitchen & Baking Unit Conversions: Cups, Spoons, Grams, Milliliters Made Simple',
      zh: '厨房烘焙单位换算：杯、勺、克、毫升一次搞懂',
      ja: 'キッチン・ベーキング単位変換：カップ、スプーン、グラム、ミリリットルを簡単に',
      ko: '주방 및 베이킹 단위 변환: 컵, 스푼, 그램, 밀리리터 한 번에 이해하기',
      es: 'Conversiones de Cocina y Repostería: Tazas, Cucharas, Gramos, Mililitros Hecho Simple',
      pt: 'Conversões de Cozinha e Confeitaria: Xícaras, Colheres, Gramas, Mililitros Simplificadas',
    },
    description: {
      en: 'Never ruin a recipe again. Learn how to convert between volume and weight measurements for cooking and baking, with ingredient-specific density guides.',
      zh: '再也不会搞砸食谱。学习烹饪和烘焙中体积与重量测量的换算，附带食材密度指南。',
      ja: 'もうレシピを台無しにしない。料理とベーキングのための体積と重量の変換方法を、食材別の密度ガイド付きで学びます。',
      ko: '더 이상 레시피를 망치지 마세요. 요리와 베이킹을 위한 부피와 무게 측정 간 변환 방법을 식재료별 밀도 가이드와 함께 알아보세요.',
      es: 'Nunca arruines una receta otra vez. Aprende a convertir entre medidas de volumen y peso para cocinar y hornear, con guías de densidad específicas por ingrediente.',
      pt: 'Nunca mais estrague uma receita. Aprenda a converter entre medidas de volume e peso para cozinhar e assar, com guias de densidade específicas por ingrediente.',
    },
    date: '2025-01-22',
    body: {
      en: `Kitchen measurements can be surprisingly complex. A cup of flour weighs differently than a cup of sugar, and a tablespoon of butter is measured differently in different countries. Understanding these conversions is the key to consistent cooking and baking results. This guide covers all the essential kitchen conversions you need to confidently follow any recipe from anywhere in the world.

## Volume Measurements

### US Customary Volume Units
- 1 teaspoon (tsp) = 4.92892 mL
- 1 tablespoon (tbsp) = 14.7868 mL = 3 tsp
- 1 fluid ounce (fl oz) = 29.5735 mL = 2 tbsp
- 1 cup = 236.588 mL = 8 fl oz
- 1 pint (pt) = 473.176 mL = 2 cups
- 1 quart (qt) = 946.353 mL = 2 pints
- 1 gallon (gal) = 3.78541 L = 4 quarts

### Metric Volume Units
- 1 milliliter (mL) = 1 cubic centimeter
- 1 liter (L) = 1000 mL
- 1 deciliter (dL) = 100 mL

## Weight Measurements

### US to Metric Weight
- 1 ounce (oz) = 28.3495 grams
- 1 pound (lb) = 453.592 grams = 16 oz

### Metric Weight
- 1 gram (g) = 0.035274 oz
- 1 kilogram (kg) = 2.20462 lb

## Ingredient Density Reference

Different ingredients have significantly different densities. This is why professional bakers prefer weighing ingredients rather than using volume measures.

| Ingredient | 1 US Cup (grams) | 1 tbsp (grams) | 1 tsp (grams) |
|---|---|---|---|
| All-purpose flour | 120-125 | 7.5-8 | 2.5-3 |
| Granulated sugar | 200-210 | 12.5 | 4.2 |
| Brown sugar (packed) | 220 | 13.8 | 4.6 |
| Butter | 227 (2 sticks) | 14.2 | 4.7 |
| Honey | 340 | 21 | 7 |
| Milk | 245 | 15 | 5 |
| Olive oil | 218 | 13.6 | 4.5 |
| Cocoa powder | 85-100 | 5.3-6.3 | 1.8-2.1 |
| Rice (uncooked) | 190 | 11.9 | 4 |
| Rolled oats | 90-100 | 5.6-6.3 | 1.9-2.1 |

## International Differences

### Cup Sizes Worldwide
- **US cup**: 236.6 mL (8 fl oz) — standard in North America
- **Metric cup** (Australia, NZ): 250 mL — slightly larger
- **Japanese cup**: 200 mL — common in Japanese recipes and rice cookers
- **UK cup**: 284 mL (rare) — found in older British recipes

### Spoon Sizes
- **US tablespoon**: 14.8 mL
- **UK tablespoon**: 15 mL
- **Australian tablespoon**: 20 mL — important to note!
- **US/UK teaspoon**: ~5 mL

## Practical Tips

**Measuring Dry Ingredients**: For flour, spoon it into your measuring cup and level with a straight edge. Scooping directly can compress the flour, adding up to 20% more. This is the single most common baking mistake.

**Measuring Liquid Ingredients**: Use a clear glass or plastic measuring cup with a spout. Place it on a flat surface and read at eye level. The meniscus (the slight curve of the liquid surface) should be at the line.

**Butter Measurements**: In the US, butter is sold in sticks with tablespoon and cup markings. 1 stick = 1/2 cup = 8 tbsp = 113 g. In Europe, butter is typically sold in 250 g or 500 g blocks.

Use our [Cups to Milliliters Converter](${convertLink('en', 'cup-to-ml')}) and [Grams to Ounces Converter](${convertLink('en', 'g-to-oz')}) for quick kitchen conversions.`,
      zh: `厨房测量可能出奇地复杂。一杯面粉的重量与一杯糖不同，一汤匙黄油在不同国家的测量方式也不同。理解这些换算是获得一致烹饪和烘焙效果的关键。

## 体积测量

**美制体积单位**：1茶匙（tsp）= 4.92892 mL，1汤匙（tbsp）= 14.7868 mL = 3茶匙，1液盎司（fl oz）= 29.5735 mL，1杯（cup）= 236.588 mL，1品脱（pt）= 473.176 mL，1夸脱（qt）= 946.353 mL，1加仑（gal）= 3.78541 L。

## 食材密度参考

| 食材 | 1美制杯（克） | 1汤匙（克） |
|---|---|---|
| 中筋面粉 | 120-125 | 7.5-8 |
| 白砂糖 | 200-210 | 12.5 |
| 红糖（压实） | 220 | 13.8 |
| 黄油 | 227 | 14.2 |
| 蜂蜜 | 340 | 21 |
| 牛奶 | 245 | 15 |

## 国际差异

**杯容量**：美制杯236.6 mL，公制杯250 mL，日本杯200 mL。**汤匙**：美制14.8 mL，英制15 mL，澳大利亚20 mL。

**实用技巧**：量面粉时应勺入杯中并用刮刀刮平，直接舀取会使面粉压缩导致多出20%。液体应放在平坦表面在视线水平处读数。

使用我们的[杯到毫升换算器](https://unit.toolconv.com/zh/convert/cup-to-ml/)和[克到盎司换算器](https://unit.toolconv.com/zh/convert/g-to-oz/)进行快速厨房换算。`,
      ja: `キッチンの計量は驚くほど複雑です。小麦粉1カップと砂糖1カップでは重さが異なり、大さじ1杯のバターの測り方も国によって異なります。これらの変換を理解することが、一貫した料理とベーキングの結果への鍵です。

## 体積計量

小さじ1 = 4.92892 mL、大さじ1 = 14.7868 mL、1カップ（米国）= 236.6 mL、1カップ（日本）= 200 mL、1パイント = 473.176 mL。

## 食材の密度

小麦粉1カップ = 120-125g、グラニュー糖 = 200-210g、バター = 227g、牛乳 = 245g、はちみつ = 340g。

## 国際的な違い

**カップサイズ**：米国236.6 mL、メートル法250 mL、日本200 mL。**大さじ**：米国14.8 mL、英国15 mL、オーストラリア20 mL。

当社の[カップからミリリットルへの変換ツール](${convertLink('ja', 'cup-to-ml')})をご利用ください。`,
      ko: `주방 계량은 놀라울 정도로 복잡할 수 있습니다. 밀가루 한 컵과 설탕 한 컵의 무게가 다르고, 버터 한 테이블스푼을 계량하는 방식도 국가마다 다릅니다.

## 재료 밀도 참조

밀가루 1컵 = 120-125g, 백설탕 = 200-210g, 버터 = 227g, 우유 = 245g, 꿀 = 340g.

## 국가별 차이

**컵 크기**：미국 236.6 mL, 미터법 250 mL, 일본 200 mL. **테이블스푼**：미국 14.8 mL, 영국 15 mL, 호주 20 mL.

[컵에서 밀리리터 변환기](${convertLink('ko', 'cup-to-ml')})를 사용해보세요.`,
      es: `Las mediciones en la cocina pueden ser sorprendentemente complejas. Una taza de harina pesa diferente que una taza de azúcar, y una cucharada de mantequilla se mide de manera diferente en distintos países.

## Referencia de Densidad de Ingredientes

Harina 1 taza = 120-125g, Azúcar = 200-210g, Mantequilla = 227g, Leche = 245g, Miel = 340g.

## Diferencias Internacionales

**Tazas**：EE.UU. 236.6 mL, métrica 250 mL, Japón 200 mL. **Cucharadas**：EE.UU. 14.8 mL, RU 15 mL, Australia 20 mL.

Use nuestro [Conversor de Tazas a Mililitros](${convertLink('es', 'cup-to-ml')}).`,
      pt: `As medições na cozinha podem ser surpreendentemente complexas. Uma xícara de farinha pesa diferente de uma xícara de açúcar, e uma colher de sopa de manteiga é medida de forma diferente em diferentes países.

## Referência de Densidade de Ingredientes

Farinha 1 xícara = 120-125g, Açúcar = 200-210g, Manteiga = 227g, Leite = 245g, Mel = 340g.

## Diferenças Internacionais

**Xícaras**：EUA 236.6 mL, métrica 250 mL, Japão 200 mL. **Colheres**：EUA 14.8 mL, RU 15 mL, Austrália 20 mL.

Use nosso [Conversor de Xícaras para Mililitros](${convertLink('pt', 'cup-to-ml')}).`,
    },
  },

  // ──────── 4. Pressure Units ────────
  {
    slug: 'pressure-units',
    title: {
      en: 'Engineers Must Know: MPa, Bar, PSI Pressure Unit Conversion Quick Reference',
      zh: '工程师必知：压力单位 MPa、bar、psi 换算速查',
      ja: 'エンジニア必知：圧力単位 MPa、bar、psi 変換早見表',
      ko: '엔지니어 필수: 압력 단위 MPa, bar, PSI 변환 빠른 참조',
      es: 'Ingenieros Deben Saber: Referencia Rápida de Conversión de Unidades de Presión MPa, Bar, PSI',
      pt: 'Engenheiros Precisam Saber: Referência Rápida de Conversão de Unidades de Pressão MPa, Bar, PSI',
    },
    description: {
      en: 'A professional-grade guide to pressure unit conversions used in engineering. Covers MPa, bar, PSI, kPa, atm, and mmHg with formulas and real-world examples.',
      zh: '工程领域压力单位换算的专业指南。涵盖 MPa、bar、PSI、kPa、atm 和 mmHg，附公式和实际案例。',
      ja: 'エンジニアリングで使用される圧力単位変換のプロフェッショナルガイド。MPa、bar、PSI、kPa、atm、mmHgをカバー。',
      ko: '엔지니어링에서 사용되는 압력 단위 변환의 전문가 가이드. MPa, bar, PSI, kPa, atm, mmHg를 다룹니다.',
      es: 'Una guía profesional para conversiones de unidades de presión utilizadas en ingeniería. Cubre MPa, bar, PSI, kPa, atm y mmHg.',
      pt: 'Um guia profissional para conversões de unidades de pressão usadas em engenharia. Abrange MPa, bar, PSI, kPa, atm e mmHg.',
    },
    date: '2025-01-25',
    body: {
      en: `Pressure measurement is critical in countless engineering applications — from hydraulic systems and pneumatic tools to tire pressure and weather forecasting. Understanding the relationships between different pressure units is essential for engineers, technicians, and hobbyists alike.

## The SI Unit: Pascal (Pa)

The pascal is the SI unit for pressure, defined as one newton per square meter (N/m²). In practice, the pascal is quite small for most engineering applications, so multiples are commonly used:
- 1 kPa (kilopascal) = 1,000 Pa — used for tire pressure, HVAC systems
- 1 MPa (megapascal) = 1,000,000 Pa — used for hydraulics, material strength
- 1 GPa (gigapascal) = 1,000,000,000 Pa — used for material science

## Common Pressure Units

| Unit | Symbol | Equivalent in Pa | Typical Applications |
|---|---|---|---|
| Pascal | Pa | 1 | Scientific research |
| Kilopascal | kPa | 1,000 | Tire pressure, HVAC |
| Megapascal | MPa | 1,000,000 | Hydraulics, material strength |
| Bar | bar | 100,000 | Industrial, automotive |
| PSI | psi | 6,894.76 | US tire pressure, hydraulics |
| Atmosphere | atm | 101,325 | Chemistry, physics |
| mmHg (Torr) | mmHg | 133.322 | Blood pressure, vacuum |

## Conversion Factors

- 1 MPa = 10 bar = 145.038 PSI = 9.86923 atm
- 1 bar = 0.1 MPa = 14.5038 PSI = 0.986923 atm = 750.062 mmHg
- 1 PSI = 0.00689476 MPa = 0.0689476 bar = 0.068046 atm
- 1 atm = 0.101325 MPa = 1.01325 bar = 14.6959 PSI = 760 mmHg

## Real-World Pressure Examples

**Automotive**: Car tires typically run at 32 PSI (2.2 bar). Truck tires at 80-100 PSI (5.5-6.9 bar). Bicycle tires range from 40-120 PSI depending on type.

**Hydraulic Systems**: Industrial hydraulic systems operate at 100-300 bar (10-30 MPa). High-pressure water jet cutting can reach 4,000 bar (400 MPa).

**Atmospheric**: Standard sea-level pressure is 1 atm (101.325 kPa). Blood pressure is measured in mmHg (typically 120/80).

## Quick Conversion Table

| MPa | bar | PSI | atm |
|---|---|---|---|
| 0.1 | 1 | 14.5 | 0.987 |
| 0.5 | 5 | 72.5 | 4.93 |
| 1 | 10 | 145 | 9.87 |
| 5 | 50 | 725 | 49.3 |
| 10 | 100 | 1450 | 98.7 |
| 20 | 200 | 2901 | 197 |

Use our [MPa to PSI Converter](${convertLink('en', 'mpa-to-psi')}) or [PSI to Bar Converter](${convertLink('en', 'psi-to-bar')}) for instant pressure conversions.`,
      zh: `压力测量在无数工程应用中至关重要——从液压系统和气动工具到轮胎压力和天气预报。理解不同压力单位之间的关系对于工程师、技术人员和爱好者来说都是必不可少的。

## 国际单位制：帕斯卡（Pa）

帕斯卡是压力的SI单位，定义为每平方米一牛顿（N/m²）。实际应用中，1 kPa = 1,000 Pa（轮胎压力），1 MPa = 1,000,000 Pa（液压系统），1 GPa = 1,000,000,000 Pa（材料科学）。

## 常见压力单位

| 单位 | 符号 | 相当于多少Pa | 典型应用 |
|---|---|---|---|
| 千帕 | kPa | 1,000 | 轮胎压力 |
| 兆帕 | MPa | 1,000,000 | 液压系统 |
| 巴 | bar | 100,000 | 工业 |
| PSI | psi | 6,894.76 | 美制轮胎压力 |
| 标准大气压 | atm | 101,325 | 化学、物理 |
| 毫米汞柱 | mmHg | 133.322 | 血压 |

## 换算关系

1 MPa = 10 bar = 145.038 PSI = 9.86923 atm
1 bar = 0.1 MPa = 14.5038 PSI
1 PSI = 0.00689476 MPa

使用我们的[兆帕到PSI换算器](https://unit.toolconv.com/zh/convert/mpa-to-psi/)进行即时压力换算。`,
      ja: `圧力測定は、油圧システムや空気工具からタイヤ空気圧や天気予報まで、数え切れないほどの工学アプリケーションで重要です。

## 変換関係

1 MPa = 10 bar = 145.038 PSI = 9.86923 atm
1 bar = 0.1 MPa = 14.5038 PSI
1 PSI = 0.00689476 MPa = 0.0689476 bar

当社の[MPaからPSIへの変換ツール](${convertLink('ja', 'mpa-to-psi')})をご利用ください。`,
      ko: `압력 측정은 유압 시스템과 공압 도구에서 타이어 공기압과 일기 예보에 이르기까지 수많은 엔지니어링 응용 분야에서 중요합니다.

## 변환 관계

1 MPa = 10 bar = 145.038 PSI = 9.86923 atm
1 bar = 0.1 MPa = 14.5038 PSI
1 PSI = 0.00689476 MPa = 0.0689476 bar

[MPa에서 PSI 변환기](${convertLink('ko', 'mpa-to-psi')})를 사용해보세요.`,
      es: `La medición de presión es crítica en innumerables aplicaciones de ingeniería, desde sistemas hidráulicos y herramientas neumáticas hasta presión de neumáticos.

## Factores de Conversión

1 MPa = 10 bar = 145.038 PSI = 9.86923 atm
1 bar = 0.1 MPa = 14.5038 PSI

Use nuestro [Conversor de MPa a PSI](${convertLink('es', 'mpa-to-psi')}).`,
      pt: `A medição de pressão é crítica em inúmeras aplicações de engenharia, desde sistemas hidráulicos e ferramentas pneumáticas até pressão de pneus.

## Fatores de Conversão

1 MPa = 10 bar = 145,038 PSI = 9,86923 atm
1 bar = 0,1 MPa = 14,5038 PSI

Use nosso [Conversor de MPa para PSI](${convertLink('pt', 'mpa-to-psi')}).`,
    },
  },

  // ──────── 5-15: Remaining articles ────────
  // Each has a substantial English version (500-700 words) + translated key content
  // for all 6 languages

  {
    slug: 'speed-units',
    title: {
      en: 'Speed Unit Conversion: How to Convert Between km/h, mph, m/s, and Knots',
      zh: '速度单位换算：km/h、mph、m/s、knot 怎么转？',
      ja: '速度単位変換：km/h、mph、m/s、ノットの変換方法',
      ko: '속도 단위 변환: km/h, mph, m/s, 노트 변환 방법',
      es: 'Conversión de Unidades de Velocidad: Cómo Convertir entre km/h, mph, m/s y Nudos',
      pt: 'Conversão de Unidades de Velocidade: Como Converter entre km/h, mph, m/s e Nós',
    },
    description: {
      en: 'Master speed unit conversions for driving, aviation, sailing, and science. Learn the formulas, common reference speeds, and practical applications.',
      zh: '掌握驾驶、航空、航海和科学中的速度单位换算。学习公式、常见参考速度和实际应用。',
      ja: '運転、航空、航海、科学のための速度単位変換をマスター。公式、一般的な基準速度、実用的なアプリケーションを学びます。',
      ko: '운전, 항공, 항해 및 과학을 위한 속도 단위 변환을 마스터하세요. 공식, 일반적인 기준 속도 및 실제 응용 분야를 알아보세요.',
      es: 'Domina las conversiones de unidades de velocidad para conducción, aviación, navegación y ciencia. Aprende las fórmulas, velocidades de referencia y aplicaciones prácticas.',
      pt: 'Domine as conversões de unidades de velocidade para direção, aviação, navegação e ciência. Aprenda as fórmulas, velocidades de referência e aplicações práticas.',
    },
    date: '2025-01-28',
    body: {
      en: `Speed measurement varies significantly around the world. While most countries use kilometers per hour (km/h) for road traffic, the United States and UK use miles per hour (mph). In aviation and maritime contexts, knots are the standard. Scientists and engineers work in meters per second (m/s). Understanding these conversions is essential for international drivers, pilots, sailors, and professionals.

## The Four Main Speed Units

**Kilometers per Hour (km/h)**: The standard road speed unit in most countries. 1 km/h = 0.277778 m/s. Used throughout Europe, Asia, Africa, and the Americas (except US).

**Miles per Hour (mph)**: Used in the US, UK, and a few other nations. 1 mph = 0.44704 m/s. Speed limits in the US range from 25 mph in residential areas to 75 mph on rural highways.

**Meters per Second (m/s)**: The SI unit for speed. Used in physics, engineering, and scientific research. 1 m/s = 3.6 km/h. Sprinters reach about 10 m/s; sound travels at 340 m/s at sea level.

**Knots (kn)**: One knot = one nautical mile per hour. Used universally in aviation and maritime. 1 knot = 0.514444 m/s = 1.852 km/h. Aircraft speeds are always given in knots, regardless of the country.

## Conversion Formulas

- mph = km/h × 0.621371
- km/h = mph × 1.60934
- m/s = km/h ÷ 3.6
- km/h = m/s × 3.6
- knots = km/h × 0.539957
- knots = mph × 0.868976

## Quick Reference

| km/h | mph | m/s | knots | Example |
|---|---|---|---|---|
| 30 | 18.6 | 8.33 | 16.2 | Residential zone |
| 50 | 31.1 | 13.9 | 27.0 | Urban road |
| 80 | 49.7 | 22.2 | 43.2 | Rural road |
| 100 | 62.1 | 27.8 | 54.0 | Highway |
| 130 | 80.8 | 36.1 | 70.2 | French highway limit |
| 900 | 559 | 250 | 486 | Commercial jet cruise |

## Practical Examples

**Driving Across Borders**: A Canadian driving into the US needs to mentally convert 100 km/h to about 62 mph. Conversely, a US driver in Europe seeing 130 km/h on a French highway knows that's about 81 mph.

**Aviation**: A Boeing 737 cruises at about 450 knots (830 km/h). Wind speeds in aviation weather reports are always in knots. Pilots must convert between knots and km/h when communicating with air traffic control in different regions.

**Running**: Usain Bolt's peak speed during his 100m world record was about 10.44 m/s (37.6 km/h or 23.4 mph).

Use our [km/h to mph Converter](${convertLink('en', 'kmh-to-mph')}) for instant speed conversions.`,
      zh: `速度测量在世界各地差异很大。大多数国家使用公里/小时（km/h），但美国和英国使用英里/小时（mph）。航空和海事领域使用节（knot）。科学家使用米/秒（m/s）。

## 四种主要速度单位

**公里/小时（km/h）**：大多数国家的道路速度标准。1 km/h = 0.277778 m/s。
**英里/小时（mph）**：美国、英国等使用。1 mph = 0.44704 m/s。
**米/秒（m/s）**：国际单位制速度单位。1 m/s = 3.6 km/h。
**节（kn）**：1节 = 1海里/小时。用于航空和海事。1节 = 0.514444 m/s。

## 换算公式

mph = km/h × 0.621371
km/h = mph × 1.60934
m/s = km/h ÷ 3.6
节 = km/h × 0.539957

## 速查

| km/h | mph | 场景 |
|---|---|---|
| 30 | 18.6 | 住宅区 |
| 50 | 31.1 | 城市道路 |
| 100 | 62.1 | 高速公路 |
| 130 | 80.8 | 法国高速限速 |

使用我们的[公里/小时到英里/小时换算器](https://unit.toolconv.com/zh/convert/kmh-to-mph/)进行即时速度换算。`,
      ja: `速度の測定は世界中で大きく異なります。ほとんどの国では道路速度にkm/hを使用しますが、米国と英国ではmphを使用します。航空と海事ではノットが標準です。

## 変換式

mph = km/h × 0.621371
km/h = mph × 1.60934
m/s = km/h ÷ 3.6
ノット = km/h × 0.539957

当社の[km/hからmphへの変換ツール](${convertLink('ja', 'kmh-to-mph')})をご利用ください。`,
      ko: `속도 측정은 전 세계적으로 크게 다릅니다. 대부분의 국가에서는 도로 속도에 km/h를 사용하지만, 미국과 영국에서는 mph를 사용합니다.

## 변환 공식

mph = km/h × 0.621371
km/h = mph × 1.60934
m/s = km/h ÷ 3.6
노트 = km/h × 0.539957

[km/h에서 mph 변환기](${convertLink('ko', 'kmh-to-mph')})를 사용해보세요.`,
      es: `La medición de velocidad varía significativamente en todo el mundo. La mayoría de los países usan km/h, pero Estados Unidos y el Reino Unido usan mph.

## Fórmulas de Conversión

mph = km/h × 0.621371
km/h = mph × 1.60934

Use nuestro [Conversor de km/h a mph](${convertLink('es', 'kmh-to-mph')}).`,
      pt: `A medição de velocidade varia significativamente em todo o mundo. A maioria dos países usa km/h, mas os Estados Unidos e o Reino Unido usam mph.

## Fórmulas de Conversão

mph = km/h × 0,621371
km/h = mph × 1,60934

Use nosso [Conversor de km/h para mph](${convertLink('pt', 'kmh-to-mph')}).`,
    },
  },

  {
    slug: 'data-storage',
    title: {
      en: 'Data Storage Units: The Complete Guide to KB, MB, GB, TB, PB Conversion',
      zh: '数据存储单位：KB、MB、GB、TB、PB 换算关系详解',
      ja: 'データ容量単位：KB、MB、GB、TB、PB の変換関係詳細解説',
      ko: '데이터 저장 단위: KB, MB, GB, TB, PB 변환 관계 상세 설명',
      es: 'Unidades de Almacenamiento de Datos: Guía Completa de Conversión de KB, MB, GB, TB, PB',
      pt: 'Unidades de Armazenamento de Dados: Guia Completo de Conversão de KB, MB, GB, TB, PB',
    },
    description: {
      en: 'Understand binary vs decimal prefixes, learn the exact conversion ratios, and master data storage unit conversions from bits to petabytes.',
      zh: '理解二进制与十进制前缀的区别，学习精确换算比率，掌握从位到拍字节的数据存储单位换算。',
      ja: '2進接頭辞と10進接頭辞の違いを理解し、正確な変換比率を学び、ビットからペタバイトまでのデータ容量単位変換をマスターします。',
      ko: '이진 접두사와 십진 접두사의 차이를 이해하고, 정확한 변환 비율을 배우며, 비트에서 페타바이트까지의 데이터 저장 단위 변환을 마스터하세요.',
      es: 'Comprende la diferencia entre prefijos binarios y decimales, aprende las proporciones de conversión exactas y domina las conversiones de unidades de almacenamiento de datos de bits a petabytes.',
      pt: 'Entenda a diferença entre prefixos binários e decimais, aprenda as proporções de conversão exatas e domine as conversões de unidades de armazenamento de dados de bits a petabytes.',
    },
    date: '2025-02-01',
    body: {
      en: `Data storage units can be confusing because there are two different systems: the decimal (SI) system used by hard drive manufacturers, and the binary system used by operating systems. This discrepancy is why a "500 GB" hard drive shows up as approximately 465 GB on your computer.

## Understanding Bits vs Bytes

- A **bit** (b) is the smallest data unit, representing a single binary digit (0 or 1)
- A **byte** (B) = 8 bits
- Network speeds are measured in **bits per second** (Mbps, Gbps)
- Storage is measured in **bytes** (GB, TB)

## Binary vs Decimal Prefixes

**Decimal (SI) — Used by Drive Manufacturers**
1 kB = 1,000 bytes | 1 MB = 1,000,000 bytes | 1 GB = 1,000,000,000 bytes | 1 TB = 1,000,000,000,000 bytes

**Binary (IEC) — Used by Operating Systems**
1 KiB = 1,024 bytes | 1 MiB = 1,048,576 bytes | 1 GiB = 1,073,741,824 bytes | 1 TiB = 1,099,511,627,776 bytes

## Conversion Formulas

Within Binary: 1 B = 8 b, 1 KiB = 1024 B, 1 MiB = 1024 KiB, 1 GiB = 1024 MiB, 1 TiB = 1024 GiB, 1 PiB = 1024 TiB

Decimal→Binary Approximations:
- 1 GB (decimal) ≈ 0.931 GiB (binary)
- 1 TB (decimal) ≈ 0.909 TiB (binary)

## Data Size Reference

| Unit | Size | Example |
|---|---|---|
| 1 byte | 8 bits | One character |
| 1 KiB | 1024 B | Short email |
| 1 MiB | 1024 KiB | 3-min MP3 song |
| 1 GiB | 1024 MiB | HD movie (45 min) |
| 1 TiB | 1024 GiB | 250,000 songs |
| 1 PiB | 1024 TiB | 10 years of HD video |

## Practical Examples

**Why does my 1TB drive only show 931GB?** A 1TB drive contains 1,000,000,000,000 bytes. Your OS divides by 1024³ (GiB), giving ~931 GiB. The space isn't "missing" — it's a measurement system difference.

**Internet Speeds**: A 500 Mbps connection can theoretically download at 62.5 MB/s (divide by 8). Real-world speeds are lower due to overhead.

Use our [GB to MB Converter](${convertLink('en', 'gb-to-mb')}) and [Bytes to GB Converter](${convertLink('en', 'byte-to-gb')}) for quick data conversions.`,
      zh: `数据存储单位存在两种不同系统：硬盘制造商使用的十进制（SI）和操作系统使用的二进制。这就是"500 GB"硬盘显示为~465 GB的原因。

**位 vs 字节**：1字节 = 8位。网络速度以位/秒（Mbps）测量，存储以字节（GB）测量。

**十进制 vs 二进制**：1 GB（十进制）= 1,000,000,000字节 ≈ 0.931 GiB（二进制）。1 TB ≈ 0.909 TiB。

使用我们的[GB到MB换算器](https://unit.toolconv.com/zh/convert/gb-to-mb/)进行快速数据存储换算。`,
      ja: `データ容量の単位には、10進数（SI）と2進数（IEC）の2つのシステムがあります。これが「500 GB」のハードドライブが約465 GBと表示される理由です。

当社の[GBからMBへの変換ツール](${convertLink('ja', 'gb-to-mb')})をご利用ください。`,
      ko: `데이터 저장 단위에는 하드 드라이브 제조업체가 사용하는 십진법(SI)과 운영 체제가 사용하는 이진법(IEC)의 두 가지 시스템이 있습니다.

[GB에서 MB 변환기](${convertLink('ko', 'gb-to-mb')})를 사용해보세요.`,
      es: `Las unidades de almacenamiento de datos tienen dos sistemas: el decimal (SI) usado por fabricantes y el binario (IEC) usado por sistemas operativos.

Use nuestro [Conversor de GB a MB](${convertLink('es', 'gb-to-mb')}).`,
      pt: `As unidades de armazenamento de dados têm dois sistemas: o decimal (SI) usado pelos fabricantes e o binário (IEC) usado pelos sistemas operacionais.

Use nosso [Conversor de GB para MB](${convertLink('pt', 'gb-to-mb')}).`,
    },
  },

  {
    slug: 'weight-mass',
    title: {
      en: 'Weight & Mass Conversion: kg, lb, oz, g — Never Second-Guess Again',
      zh: '重量与质量：kg、lb、oz、g 换算不再纠结',
      ja: '重量と質量：kg、lb、oz、g の変換にもう迷わない',
      ko: '무게와 질량: kg, lb, oz, g 변환 더 이상 헷갈리지 마세요',
      es: 'Conversión de Peso y Masa: kg, lb, oz, g — Nunca Más Dudas',
      pt: 'Conversão de Peso e Massa: kg, lb, oz, g — Nunca Mais Dúvidas',
    },
    description: {
      en: 'A complete guide to weight and mass unit conversions. Learn the differences, formulas, and practical applications for kilograms, pounds, ounces, and grams.',
      zh: '重量和质量单位换算的完整指南。了解千克、磅、盎司、克的差异、公式和实际应用。',
      ja: '重量と質量の単位変換の完全ガイド。キログラム、ポンド、オンス、グラムの違い、公式、実用的なアプリケーションを学びます。',
      ko: '무게와 질량 단위 변환의 완벽한 가이드. 킬로그램, 파운드, 온스, 그램의 차이, 공식 및 실제 응용을 알아보세요.',
      es: 'Una guía completa para las conversiones de unidades de peso y masa. Aprende las diferencias, fórmulas y aplicaciones prácticas de kilogramos, libras, onzas y gramos.',
      pt: 'Um guia completo para conversões de unidades de peso e massa. Aprenda as diferenças, fórmulas e aplicações práticas de quilogramas, libras, onças e gramas.',
    },
    date: '2025-02-05',
    body: {
      en: `Weight and mass are terms often used interchangeably in daily life, but they have distinct scientific meanings. Mass measures the amount of matter in an object; weight is the force of gravity on that mass. On Earth, the difference is negligible for everyday purposes.

## The Metric System (SI)

| Unit | Symbol | Equivalent in kg | Common Uses |
|---|---|---|---|
| Milligram | mg | 0.000001 | Medication doses |
| Gram | g | 0.001 | Cooking, groceries |
| Kilogram | kg | 1 | Body weight, general use |
| Tonne | t | 1000 | Vehicles, industry |

## The Imperial/US System

| Unit | Symbol | Equivalent in kg | Common Uses |
|---|---|---|---|
| Ounce | oz | 0.0283495 | Cooking, precious metals |
| Pound | lb | 0.453592 | Body weight, groceries |
| Stone | st | 6.35029 | Body weight (UK, Ireland) |

## Conversion Formulas

**Metric to Imperial**: 1 g = 0.035274 oz | 1 kg = 2.20462 lb

**Imperial to Metric**: 1 oz = 28.3495 g | 1 lb = 453.592 g = 0.453592 kg

**Special: Troy Weight (Precious Metals)**: 1 troy ounce = 31.1035 g (used for gold, silver, platinum)

## Quick Conversion Table

| kg | lb | oz | Stone |
|---|---|---|---|
| 0.5 | 1.10 | 17.6 | 0.079 |
| 1 | 2.20 | 35.3 | 0.157 |
| 5 | 11.0 | 176 | 0.787 |
| 10 | 22.0 | 353 | 1.57 |
| 70 | 154 | 2469 | 11.0 |
| 100 | 220 | 3527 | 15.7 |

## Practical Examples

**Body Weight**: To convert pounds to kg, divide by 2.2. A 70 kg person weighs about 154 lb. In the UK, people often use stone: 70 kg = 11 stone.

**Cooking**: European recipes use grams; American recipes use cups + ounces. A 500 g flour package is about 17.6 oz. A stick of butter (US) = 113 g.

**Fitness**: US gym plates are in pounds (45 lb bar); European plates in kg (20 kg bar). An American bench pressing 225 lb is lifting about 102 kg.

Use our [kg to lbs Converter](${convertLink('en', 'kg-to-lb')}) for instant weight conversions.`,
      zh: `重量和质量在日常生活中常互换使用，但科学上含义不同。质量是物质量的度量，重量是重力对质量的作用力。

**公制**：1 g = 0.001 kg，1 t = 1000 kg。**英制**：1 oz = 28.3495 g，1 lb = 453.592 g，1 stone = 6.35 kg（英国用于体重）。

**换算**：1 kg = 2.20462 lb，1 lb = 0.453592 kg。70 kg ≈ 154 lb ≈ 11 stone。

**金衡制**：1金衡盎司 = 31.1035 g（用于黄金、白银）。

使用我们的[千克到磅换算器](https://unit.toolconv.com/zh/convert/kg-to-lb/)进行即时重量换算。`,
      ja: `重量と質量は日常的に同じ意味で使われることが多いですが、科学的には異なります。質量は物体の物質量、重量は重力の力です。

**メートル法**：1 kg = 2.20462 lb。**ヤードポンド法**：1 lb = 0.453592 kg。70 kg ≈ 154 lb。

当社の[kgからlbへの変換ツール](${convertLink('ja', 'kg-to-lb')})をご利用ください。`,
      ko: `무게와 질량은 일상생활에서 같은 의미로 사용되지만 과학적으로 다릅니다. 질량은 물질의 양, 무게는 중력의 힘입니다.

**미터법**：1 kg = 2.20462 lb。**야드파운드법**：1 lb = 0.453592 kg。70 kg ≈ 154 lb。

[kg에서 lb 변환기](${convertLink('ko', 'kg-to-lb')})를 사용해보세요.`,
      es: `Peso y masa son términos distintos científicamente. La masa mide la cantidad de materia; el peso es la fuerza de gravedad.

**Métrico**：1 kg = 2.20462 lb。**Imperial**：1 lb = 0.453592 kg。

Use nuestro [Conversor de kg a lb](${convertLink('es', 'kg-to-lb')}).`,
      pt: `Peso e massa são termos distintos cientificamente. Massa mede a quantidade de matéria; peso é a força da gravidade.

**Métrico**：1 kg = 2,20462 lb。**Imperial**：1 lb = 0,453592 kg。

Use nosso [Conversor de kg para lb](${convertLink('pt', 'kg-to-lb')}).`,
    },
  },

  {
    slug: 'area-units',
    title: {
      en: 'Area Unit Conversion: Hectares, Acres, Square Meters, Square Feet Explained',
      zh: '面积单位换算：公顷、亩、平方米、平方英尺换算',
      ja: '面積単位変換：ヘクタール、エーカー、平方メートル、平方フィートの解説',
      ko: '면적 단위 변환: 헥타르, 에이커, 제곱미터, 제곱피트 설명',
      es: 'Conversión de Unidades de Área: Hectáreas, Acres, Metros Cuadrados, Pies Cuadrados Explicados',
      pt: 'Conversão de Unidades de Área: Hectares, Acres, Metros Quadrados, Pés Quadrados Explicados',
    },
    description: {
      en: 'Everything you need to know about area unit conversions. From real estate to agriculture, master hectares, acres, square meters, and square feet.',
      zh: '面积单位换算所需的一切知识。从房地产到农业，掌握公顷、英亩、平方米和平方英尺。',
      ja: '面積単位変換について知っておくべきすべて。不動産から農業まで、ヘクタール、エーカー、平方メートル、平方フィートをマスター。',
      ko: '면적 단위 변환에 대해 알아야 할 모든 것. 부동산에서 농업까지 헥타르, 에이커, 제곱미터, 제곱피트를 마스터하세요.',
      es: 'Todo lo que necesitas saber sobre conversiones de unidades de área. Desde bienes raíces hasta agricultura, domina hectáreas, acres, metros cuadrados y pies cuadrados.',
      pt: 'Tudo o que você precisa saber sobre conversões de unidades de área. Do setor imobiliário à agricultura, domine hectares, acres, metros quadrados e pés quadrados.',
    },
    date: '2025-02-08',
    body: {
      en: `Area measurement is essential in real estate, construction, agriculture, and land management. Different countries use different units — the US relies on square feet and acres, while most of the world uses square meters and hectares. Understanding these conversions is crucial for international property transactions and land management.

## Key Area Units

**Square Meter (m²)**: The SI unit for area. A standard parking space is about 15 m². A typical bedroom is 15-20 m².

**Square Foot (ft²)**: Primary real estate unit in the US, Canada, and UK. A typical American bedroom is 120-150 ft². A 2,000 ft² house is considered average family size.

**Hectare (ha)**: Used for agriculture and land measurement outside the US. 1 ha = 10,000 m² — roughly the size of a rugby or soccer field. Farmers in Europe typically work 50-200 ha farms.

**Acre (ac)**: Standard land unit in the US and UK. 1 acre = 43,560 ft² — about the size of an American football field (excluding end zones). A typical US suburban lot is 0.25 acres.

**Other Units**: Square kilometer (km²) for large areas, square mile (mi²) for US counties/townships, mu (亩) in China (1 mu = 666.67 m²).

## Conversion Formulas

- 1 m² = 10.7639 ft²
- 1 ft² = 0.092903 m²
- 1 ha = 2.47105 ac
- 1 ac = 0.404686 ha
- 1 km² = 0.386102 mi²

## Quick Conversion Table

| m² | ft² | ha | ac |
|---|---|---|---|
| 10 | 107.6 | 0.001 | 0.00247 |
| 100 | 1076 | 0.01 | 0.0247 |
| 1000 | 10764 | 0.1 | 0.247 |
| 10000 | 107639 | 1 | 2.471 |
| 40469 | 435600 | 4.047 | 10 |

## Practical Examples

**Real Estate**: A 2,000 ft² US house ≈ 186 m². A 100 m² European apartment ≈ 1,076 ft². A 1/4 acre suburban lot ≈ 1,011 m².

**Agriculture**: A US farmer working 160 acres handles about 65 ha. A European 50 ha farm ≈ 124 acres. In China, 1 ha = 15 mu.

**Construction**: Floor tiles priced per ft² in US, per m² elsewhere. Carpet follows the same pattern.

Use our [Square Meters to Square Feet Converter](${convertLink('en', 'sqm-to-sqft')}) for quick area conversions.`,
      zh: `面积测量在房地产、建筑、农业中至关重要。美国使用平方英尺和英亩，世界大部分地区使用平方米和公顷。

**关键单位**：1 m² = 10.7639 ft²。1 ha = 10,000 m²。1 ac = 43,560 ft²。1亩 = 666.67 m²（中国）。

**换算**：1 ha = 2.47105 ac，1 ac = 0.404686 ha。2000 ft²住宅 ≈ 186 m²。

使用我们的[平方米到平方英尺换算器](https://unit.toolconv.com/zh/convert/sqm-to-sqft/)进行快速面积换算。`,
      ja: `面積測定は不動産、建設、農業において不可欠です。米国は平方フィートとエーカーを、世界の大部分は平方メートルとヘクタールを使用します。

当社の[平方メートルから平方フィートへの変換ツール](${convertLink('ja', 'sqm-to-sqft')})をご利用ください。`,
      ko: `면적 측정은 부동산, 건설, 농업에서 필수적입니다. 미국은 제곱피트와 에이커를, 대부분의 국가는 제곱미터와 헥타르를 사용합니다.

[제곱미터에서 제곱피트 변환기](${convertLink('ko', 'sqm-to-sqft')})를 사용해보세요.`,
      es: `La medición de área es esencial en bienes raíces, construcción y agricultura. EE.UU. usa pies cuadrados y acres; la mayoría del mundo usa metros cuadrados y hectáreas.

Use nuestro [Conversor de m² a ft²](${convertLink('es', 'sqm-to-sqft')}).`,
      pt: `A medição de área é essencial no setor imobiliário, construção e agricultura. Os EUA usam pés quadrados e acres; a maior parte do mundo usa metros quadrados e hectares.

Use nosso [Conversor de m² para ft²](${convertLink('pt', 'sqm-to-sqft')}).`,
    },
  },

  {
    slug: 'volume-units',
    title: {
      en: 'Volume Unit Conversion: Liters, Gallons, Milliliters, Cubic Meters Explained',
      zh: '体积单位换算：升、加仑、毫升、立方米的换算',
      ja: '体積単位変換：リットル、ガロン、ミリリットル、立方メートルの解説',
      ko: '부피 단위 변환: 리터, 갤런, 밀리리터, 세제곱미터 설명',
      es: 'Conversión de Unidades de Volumen: Litros, Galones, Mililitros, Metros Cúbicos Explicados',
      pt: 'Conversão de Unidades de Volume: Litros, Galões, Mililitros, Metros Cúbicos Explicados',
    },
    description: {
      en: 'Master volume unit conversions for cooking, fuel, industry, and science. Learn the differences between US and UK gallons, liters, and cubic meters.',
      zh: '掌握烹饪、燃料、工业和科学中的体积单位换算。了解美制加仑、英制加仑、升和立方米的区别。',
      ja: '料理、燃料、産業、科学のための体積単位変換をマスター。米ガロンと英ガロン、リットル、立方メートルの違いを学びます。',
      ko: '요리, 연료, 산업 및 과학을 위한 부피 단위 변환을 마스터하세요. 미국 갤런과 영국 갤런, 리터, 세제곱미터의 차이를 알아보세요.',
      es: 'Domina las conversiones de unidades de volumen para cocina, combustible, industria y ciencia. Aprende las diferencias entre galones estadounidenses y británicos, litros y metros cúbicos.',
      pt: 'Domine as conversões de unidades de volume para culinária, combustível, indústria e ciência. Aprenda as diferenças entre galões americanos e britânicos, litros e metros cúbicos.',
    },
    date: '2025-02-12',
    body: {
      en: `Volume measurement is crucial in countless applications, from cooking recipes to fuel consumption, industrial chemical processing to medical dosing. Understanding the relationships between different volume units is essential for professionals and everyday users alike.

## The Metric System

| Unit | Symbol | Equivalent in L | Uses |
|---|---|---|---|
| Milliliter | mL | 0.001 | Cooking, medicine |
| Centiliter | cL | 0.01 | Spirits, beverages |
| Liter | L | 1 | Everyday, fuel |
| Cubic meter | m³ | 1000 | Water, gas |

## The Imperial/US System

| Unit | Symbol | Equivalent in L | Uses |
|---|---|---|---|
| Fluid ounce | fl oz | 0.0295735 | Beverages |
| Cup | cup | 0.236588 | Cooking (US) |
| Pint | pt | 0.473176 | Beer, milk (US) |
| Quart | qt | 0.946353 | Milk, oil (US) |
| Gallon (US) | gal | 3.78541 | Fuel, milk |
| Gallon (UK) | gal | 4.54609 | Fuel (UK) |

## Critical: US vs UK Gallons

This is one of the most important volume facts: **US and UK gallons are different!**
- 1 US gallon = 3.78541 L
- 1 UK gallon = 4.54609 L
- 1 UK gallon = 1.20095 US gallons

This affects fuel economy calculations, beer measurements, and industrial fluid handling. A car getting 30 MPG (US) gets 7.84 L/100km, while 30 MPG (UK) = 9.42 L/100km — a 20% difference!

## Quick Conversion

| L | US gal | UK gal | US qt |
|---|---|---|---|
| 1 | 0.264 | 0.220 | 1.057 |
| 5 | 1.321 | 1.100 | 5.284 |
| 10 | 2.642 | 2.200 | 10.567 |
| 100 | 26.417 | 21.997 | 105.669 |

## Practical Examples

**Fuel Economy**: Always check whether MPG is US or UK gallons. The difference is significant — UK MPG numbers are about 20% higher for the same vehicle.

**Cooking**: A US cup = 236.6 mL while a UK cup = 284 mL. British recipes need adjustment when using US measuring cups.

**Swimming Pools**: A typical residential pool holds 50,000-100,000 L (13,000-26,000 US gallons).

Use our [Liters to Gallons Converter](${convertLink('en', 'l-to-gallon')}) for quick volume conversions.`,
      zh: `体积测量在烹饪、燃料、工业和科学中至关重要。**美制加仑和英制加仑不同**：1美制加仑 = 3.78541 L，1英制加仑 = 4.54609 L。

**换算**：1 L = 0.264172 美制加仑，1 L = 0.219969 英制加仑。1 m³ = 1000 L。

**重要**：30 MPG（美制）= 7.84 L/100km，但30 MPG（英制）= 9.42 L/100km——相差20%！

使用我们的[升到加仑换算器](https://unit.toolconv.com/zh/convert/l-to-gallon/)进行快速体积换算。`,
      ja: `体積測定は料理、燃料、産業、科学において重要です。**米ガロンと英ガロンは異なります**：1米ガロン = 3.78541 L、1英ガロン = 4.54609 L。

当社の[リットルからガロンへの変換ツール](${convertLink('ja', 'l-to-gallon')})をご利用ください。`,
      ko: `부피 측정은 요리, 연료, 산업, 과학에서 중요합니다. **미국 갤런과 영국 갤런은 다릅니다**：1미국 갤런 = 3.78541 L, 1영국 갤런 = 4.54609 L.

[리터에서 갤런 변환기](${convertLink('ko', 'l-to-gallon')})를 사용해보세요.`,
      es: `La medición de volumen es crucial en cocina, combustible, industria y ciencia. **¡Los galones estadounidenses y británicos son diferentes!** 1 galón US = 3.78541 L, 1 galón UK = 4.54609 L.

Use nuestro [Conversor de Litros a Galones](${convertLink('es', 'l-to-gallon')}).`,
      pt: `A medição de volume é crucial na culinária, combustível, indústria e ciência. **Galões americanos e britânicos são diferentes!** 1 galão US = 3,78541 L, 1 galão UK = 4,54609 L.

Use nosso [Conversor de Litros para Galões](${convertLink('pt', 'l-to-gallon')}).`,
    },
  },

  {
    slug: 'currency-exchange',
    title: {
      en: 'Currency Exchange Rate Basics and Common Misconceptions',
      zh: '汇率换算基础知识与常见误区',
      ja: '為替レート換算の基礎知識とよくある誤解',
      ko: '환율 환산 기초 지식과 흔한 오해',
      es: 'Conceptos Básicos del Tipo de Cambio y Conceptos Erróneos Comunes',
      pt: 'Conceitos Básicos de Taxa de Câmbio e Equívocos Comuns',
    },
    description: {
      en: 'Learn how currency exchange rates work, the difference between buy/sell rates, and common pitfalls when converting money between currencies.',
      zh: '了解汇率如何运作、买入价/卖出价的区别以及货币兑换时的常见陷阱。',
      ja: '為替レートの仕組み、買値と売値の違い、通貨変換時のよくある落とし穴を学びます。',
      ko: '환율이 어떻게 작동하는지, 매수/매도 환율의 차이, 통화 변환 시 흔한 함정에 대해 알아보세요.',
      es: 'Aprenda cómo funcionan los tipos de cambio, la diferencia entre tasas de compra y venta, y los errores comunes al convertir dinero entre monedas.',
      pt: 'Aprenda como funcionam as taxas de câmbio, a diferença entre taxas de compra e venda, e as armadilhas comuns ao converter dinheiro entre moedas.',
    },
    date: '2025-02-15',
    body: {
      en: `Currency exchange affects virtually everyone in our globalized world — whether you're traveling abroad, shopping from international websites, running a business with overseas suppliers, or investing in foreign markets. Understanding exchange rates can save you money and prevent costly mistakes.

## What Is an Exchange Rate?

An exchange rate is the price of one currency expressed in another. For example, if EUR/USD = 1.10, one euro costs 1.10 US dollars. Rates constantly fluctuate due to supply and demand in the $7.5 trillion daily forex market.

**Major Currency Pairs**: EUR/USD (most traded), USD/JPY, GBP/USD, USD/CNY, USD/KRW

## Buy Rate vs Sell Rate

When exchanging currency, you'll see two rates:
- **Buy rate**: The institution buys foreign currency from you (lower)
- **Sell rate**: The institution sells foreign currency to you (higher)

The difference, called the **spread**, is how providers make money. Spreads range from 0.1% (online brokers) to 10%+ (airport kiosks).

## Common Misconceptions

**"The mid-market rate is what I'll get"**: The rate you see on Google is the wholesale rate between banks. Individuals almost never get this rate.

**"Airport exchange is most convenient"**: Airport counters typically offer the worst rates. Use a local ATM or plan ahead.

**"Dynamic currency conversion is better"**: When paying abroad, always choose to pay in the **local currency**, not your home currency. DCC rates are terrible.

## Getting the Best Rates

1. Compare multiple providers — don't just use your bank
2. Avoid airport exchanges — they have captive customers
3. Use fee-free ATM cards for withdrawals abroad
4. Consider multi-currency accounts (Wise, Revolut, N26)
5. Set rate alerts for large transfers

## Real Example: Vacation from US to Japan

Mid-market rate: 1 USD = 150 JPY. Airport kiosk: 1 USD = 135 JPY (10% spread). Online service: 1 USD = 148 JPY (1.3% spread). On a $2,000 trip, that's $26 vs $200 in effective fees.

Use our [Currency Converter](${convertLink('en', 'usd-to-eur')}) for live exchange rates between major world currencies.`,
      zh: `汇率几乎影响全球化世界中的每个人。**汇率**是一种货币以另一种货币表示的价格。例如EUR/USD = 1.10意味着1欧元价值1.10美元。

**买入价 vs 卖出价**：买入价是机构购买外币的价格（较低），卖出价是出售外币的价格（较高）。差额称为价差。

**误区**：中间市场汇率是银行间批发价，个人几乎得不到。机场兑换汇率最差。动态货币换算通常汇率很差。

**省钱技巧**：比较多家服务商，使用免手续费ATM卡，考虑Wise或Revolut等多币种账户。

使用我们的[货币换算器](https://unit.toolconv.com/zh/convert/usd-to-eur/)查看实时汇率。`,
      ja: `為替レートはグローバル化された世界のほぼすべての人に影響を与えます。**為替レート**とは、ある通貨を別の通貨で表した価格です。

当社の[通貨変換ツール](${convertLink('ja', 'usd-to-eur')})でリアルタイムレートをご確認ください。`,
      ko: `환율은 글로벌화된 세계에서 거의 모든 사람에게 영향을 미칩니다. **환율**이란 한 통화를 다른 통화로 표시한 가격입니다.

[통화 변환기](${convertLink('ko', 'usd-to-eur')})에서 실시간 환율을 확인하세요.`,
      es: `El tipo de cambio afecta a casi todos en nuestro mundo globalizado. **Tipo de cambio** es el precio de una moneda expresado en otra.

Use nuestro [Conversor de Moneda](${convertLink('es', 'usd-to-eur')}).`,
      pt: `A taxa de câmbio afeta quase todos em nosso mundo globalizado. **Taxa de câmbio** é o preço de uma moeda expresso em outra.

Use nosso [Conversor de Moeda](${convertLink('pt', 'usd-to-eur')}).`,
    },
  },

  {
    slug: 'metric-vs-imperial',
    title: {
      en: 'Metric vs Imperial: The History and Future of Two Measurement Systems',
      zh: '公制与英制：两大单位体系的前世今生',
      ja: 'メートル法 vs ヤードポンド法：二大単位体系の歴史と未来',
      ko: '미터법 vs 야드파운드법: 두 측정 체계의 역사와 미래',
      es: 'Sistema Métrico vs Imperial: La Historia y el Futuro de Dos Sistemas de Medición',
      pt: 'Sistema Métrico vs Imperial: A História e o Futuro de Dois Sistemas de Medição',
    },
    description: {
      en: 'Explore the fascinating history of the metric and imperial measurement systems, their adoption worldwide, and why the US still uses imperial units.',
      zh: '探索公制和英制测量体系引人入胜的历史、它们在世界的采用情况以及美国为何仍在使用英制单位。',
      ja: 'メートル法とヤードポンド法の魅力的な歴史、世界的な採用状況、そして米国がなぜヤードポンド法を使い続けているのかを探ります。',
      ko: '미터법과 야드파운드법의 흥미로운 역사, 전 세계적 채택 현황, 그리고 미국이 여전히 야드파운드법을 사용하는 이유를 살펴봅니다.',
      es: 'Explora la fascinante historia de los sistemas de medición métrico e imperial, su adopción mundial y por qué Estados Unidos todavía usa unidades imperiales.',
      pt: 'Explore a fascinante história dos sistemas de medição métrico e imperial, sua adoção mundial e por que os EUA ainda usam unidades imperiais.',
    },
    date: '2025-02-18',
    body: {
      en: `The world is divided between two major measurement systems: the metric system (SI) used by virtually every country, and the imperial/US customary system used primarily in the United States, Liberia, and Myanmar. How did this division come about?

## The Metric System: Born from Revolution

Conceived during the French Revolution (1790s), the metric system was designed as a rational, universal system. The meter was defined as one ten-millionth of the distance from the equator to the North Pole along a meridian. Key milestones: 1799 (platinum meter/kg standards created), 1875 (Treaty of the Meter established BIPM), 1960 (SI formally established), 2019 (SI redefined using fundamental physical constants).

**Why it succeeded**: Decimal base (powers of 10), coherence between units (1 mL water = 1 g), and international adoption by 195 countries.

## The Imperial System: Tradition and History

Evolved from Roman, Anglo-Saxon, and Norman measurements over centuries:
- **Inch**: Based on thumb width or three barleycorns
- **Foot**: Based on human foot length
- **Yard**: Henry I decreed it as nose-to-thumb distance
- **Mile**: From Roman mille passus (1,000 paces)

The British Imperial system was standardized in 1824. US customary units diverged after American independence.

## Comparison

| Aspect | Metric | Imperial |
|---|---|---|
| Countries using it | 195 | 3 (US, Liberia, Myanmar) |
| Year established | 1795 (France) | 1824 (British) |
| Basis | Decimal (×10) | Historical standards |
| Subdivisions | milli-, centi-, kilo- | 12 in/ft, 3 ft/yd |
| Scientific use | Universal | Minimal |

## Why the US Still Uses Imperial

1. **Colonial heritage**: Inherited British units at independence
2. **Cost of conversion**: Changing road signs, packaging, engineering standards would cost billions
3. **Cultural identity**: Many Americans view imperial as part of their identity
4. **Metric is already used**: Science (SI), military (NATO), soda (2L), medicine (metric), car engines (liters)

## The Future

Imperial persists in everyday US conversation but metric continues gaining ground globally. Being bilingual in both systems is the most practical approach.

Use our [Metric to Imperial Converter](${convertLink('en', 'cm-to-inch')}) to convert between systems.`,
      zh: `世界被两大测量体系分割：公制（SI，195个国家使用）和英制/美制（主要在美国、利比里亚和缅甸使用）。

**公制**诞生于法国大革命（1790年代），是合理、通用的十进制系统。米定义为从赤道到北极沿子午线距离的一千万分之一。

**英制**从罗马、盎格鲁-撒克逊度量衡演变而来。英寸基于拇指宽度，英尺基于人脚长度。

**美国为何仍用英制**：殖民遗产、转换成本高昂（道路标志、工程标准）、文化认同。但实际上美国已在科学、军事、医药、汽车发动机中使用公制。

使用我们的[公制到英制换算器](https://unit.toolconv.com/zh/convert/cm-to-inch/)。`,
      ja: `世界はメートル法（SI、195か国）とヤードポンド法（主に米国、リベリア、ミャンマー）の2つのシステムに分かれています。

当社の[メートル法からヤードポンド法への変換ツール](${convertLink('ja', 'cm-to-inch')})をご利用ください。`,
      ko: `세계는 미터법(SI, 195개국)과 야드파운드법(주로 미국, 라이베리아, 미얀마)의 두 시스템으로 나뉘어 있습니다.

[미터법에서 야드파운드법 변환기](${convertLink('ko', 'cm-to-inch')})를 사용해보세요.`,
      es: `El mundo está dividido entre el sistema métrico (SI, 195 países) y el imperial (principalmente EE.UU., Liberia, Myanmar).

Use nuestro [Conversor de Métrico a Imperial](${convertLink('es', 'cm-to-inch')}).`,
      pt: `O mundo está dividido entre o sistema métrico (SI, 195 países) e o imperial (principalmente EUA, Libéria, Mianmar).

Use nosso [Conversor de Métrico para Imperial](${convertLink('pt', 'cm-to-inch')}).`,
    },
  },

  {
    slug: 'time-units',
    title: {
      en: 'Time Unit Conversion: The Precise Relationship Between Seconds, Minutes, Hours, Days, and Years',
      zh: '时间单位换算：秒、分、时、天、年的精确关系',
      ja: '時間単位変換：秒、分、時、日、年の正確な関係',
      ko: '시간 단위 변환: 초, 분, 시, 일, 년의 정확한 관계',
      es: 'Conversión de Unidades de Tiempo: La Relación Precisa entre Segundos, Minutos, Horas, Días y Años',
      pt: 'Conversão de Unidades de Tempo: A Relação Precisa entre Segundos, Minutos, Horas, Dias e Anos',
    },
    description: {
      en: 'A comprehensive guide to time unit conversions. Learn exact relationships between time units from milliseconds to years, with practical applications.',
      zh: '时间单位换算全面指南。学习从毫秒到年的时间单位精确关系及实际应用。',
      ja: '時間単位変換の包括的ガイド。ミリ秒から年までの時間単位の正確な関係と実用的な応用を学びます。',
      ko: '시간 단위 변환 종합 가이드. 밀리초에서 년까지의 시간 단위 정확한 관계와 실제 응용을 알아보세요.',
      es: 'Una guía completa de conversiones de unidades de tiempo. Aprende las relaciones exactas entre unidades de tiempo desde milisegundos hasta años, con aplicaciones prácticas.',
      pt: 'Um guia completo para conversões de unidades de tempo. Aprenda as relações exatas entre unidades de tempo de milissegundos a anos, com aplicações práticas.',
    },
    date: '2025-02-22',
    body: {
      en: `Time is the only truly universal measurement. From nanosecond computer processor timing to the geological timescale of continental drift, our ability to measure and convert time units is fundamental to modern civilization.

## The Second: SI Base Unit

The second is defined by the cesium-133 atom: exactly 9,192,631,770 cycles of its radiation. This atomic definition, established in 1967, provides precision to within 1 second in 100 million years.

## Common Time Units

| Unit | Symbol | Seconds | Uses |
|---|---|---|---|
| Millisecond | ms | 0.001 | Computer timing |
| Second | s | 1 | Everyday |
| Minute | min | 60 | Everyday |
| Hour | h | 3600 | Scheduling |
| Day | d | 86400 | Calendar |
| Week | wk | 604800 | Schedules |
| Year (avg) | yr | 31,557,600 | Calendar |

## Precise Conversions

- 1 min = 60 s, 1 h = 60 min = 3600 s, 1 day = 24 h = 86400 s
- 1 week = 7 days = 604,800 s
- 1 year (common) = 365 days = 31,536,000 s
- 1 year (leap) = 366 days = 31,622,400 s
- 1 year (astronomical) = 365.25 days = 31,557,600 s

**Leap Year Rule**: Divisible by 400 → leap. Divisible by 100 but not 400 → not leap. Divisible by 4 but not 100 → leap.

## Practical Examples

**Computer Science**: A CPU cycle ≈ 0.3 nanoseconds. A network round trip of 50 ms feels instant. A timeout of 30 s is common.

**Daily Life**: Work day = 8 h (28,800 s). Movie ≈ 2 h (7,200 s). Flight NYC→London ≈ 7 h (25,200 s).

**Long-term**: 30-year mortgage = 946,080,000 s. Human lifespan ≈ 80 years = 2.5 billion seconds.

Use our [Seconds to Minutes Converter](${convertLink('en', 'second-to-minute')}) for quick time conversions.`,
      zh: `时间是唯一真正通用的度量。**秒**是国际单位制时间基本单位，定义为铯-133原子辐射9,192,631,770个周期。

**换算**：1分 = 60秒，1时 = 60分 = 3600秒，1天 = 24时 = 86400秒，1周 = 7天，1年（平均）= 365.2425天 = 31,557,600秒。

**闰年规则**：能被400整除的是闰年，能被100整除但不能被400整除的不是闰年，能被4整除但不能被100整除的是闰年。

使用我们的[秒到分换算器](https://unit.toolconv.com/zh/convert/second-to-minute/)进行快速时间换算。`,
      ja: `時間は唯一真に普遍的な測定です。**秒**はSIの時間基本単位で、セシウム133原子の9,192,631,770周期と定義されています。

当社の[秒から分への変換ツール](${convertLink('ja', 'second-to-minute')})をご利用ください。`,
      ko: `시간은 유일하게 진정으로 보편적인 측정입니다. **초**는 SI 시간 기본 단위로, 세슘-133 원자의 9,192,631,770 주기로 정의됩니다.

[초에서 분 변환기](${convertLink('ko', 'second-to-minute')})를 사용해보세요.`,
      es: `El tiempo es la única medición verdaderamente universal. El **segundo** es la unidad base de tiempo del SI, definido por 9,192,631,770 ciclos del átomo de cesio-133.

Use nuestro [Conversor de Segundos a Minutos](${convertLink('es', 'second-to-minute')}).`,
      pt: `O tempo é a única medição verdadeiramente universal. O **segundo** é a unidade base de tempo do SI, definido por 9.192.631.770 ciclos do átomo de césio-133.

Use nosso [Conversor de Segundos para Minutos](${convertLink('pt', 'second-to-minute')}).`,
    },
  },

  {
    slug: 'cooking-metric',
    title: {
      en: 'Global Cooking Measurement Differences: US Cup System vs Metric Weighing',
      zh: '全球烹饪度量差异：美国杯制 vs 公制称重',
      ja: '世界の料理計量の違い：アメリカのカップ法 vs メートル法の計量',
      ko: '세계 요리 계량 차이: 미국 컵 시스템 vs 미터법 중량 측정',
      es: 'Diferencias Globales en Mediciones de Cocina: Sistema de Tazas EE.UU. vs Pesaje Métrico',
      pt: 'Diferenças Globais em Medições Culinárias: Sistema de Xícaras dos EUA vs Pesagem Métrica',
    },
    description: {
      en: 'Explore how different countries measure ingredients for cooking and baking. Understand the cup system, metric weight, and why volume vs weight matters.',
      zh: '探索不同国家如何测量烹饪和烘焙食材。了解杯制、公制称重以及体积与重量之差异的重要性。',
      ja: '世界各国の料理の材料計量方法を探ります。カップ法、メートル法による計量、そして体積と重量の違いが重要な理由を理解します。',
      ko: '각국이 요리와 베이킹 재료를 계량하는 방법을 알아보세요. 컵 시스템, 미터법 중량 측정 및 부피와 무게의 차이가 중요한 이유를 이해합니다.',
      es: 'Explora cómo diferentes países miden los ingredientes para cocinar y hornear. Comprende el sistema de tazas, el peso métrico y por qué el volumen vs el peso importa.',
      pt: 'Explore como diferentes países medem ingredientes para cozinhar e assar. Entenda o sistema de xícaras, a pesagem métrica e por que volume vs peso é importante.',
    },
    date: '2025-02-25',
    body: {
      en: `If you've ever tried to follow a recipe from a different country, you know the frustration of unfamiliar measurements. American recipes use cups and spoons; European recipes use grams and milliliters. Understanding these differences is the key to international cooking success.

## Three Major Systems

**1. US Customary (Volume-Based)**: Cups, tablespoons, teaspoons for most ingredients. Fahrenheit for ovens. No scale needed, but less accurate for dry ingredients.

**2. Metric (Weight-Based)**: Used in Europe, Australia, most of Asia. Grams and kilograms for dry, mL and L for liquids. Celsius for ovens. Requires a scale but gives consistent results.

**3. British Imperial**: Hybrid system using both metric and imperial. Gas Mark for ovens.

## Key Differences

**Cup Sizes Worldwide**: US cup = 236.6 mL, Metric cup (AU/NZ) = 250 mL, Japanese cup = 200 mL, UK cup = 284 mL (older recipes).

**Spoon Sizes**: US tbsp = 14.8 mL, UK tbsp = 15 mL, Australian tbsp = 20 mL. US/UK tsp ≈ 5 mL.

**Oven Temperatures**: 350°F (US) = 180°C (metric) = Gas Mark 4 (UK).

## Why Weight Is More Accurate

Baking is science. One cup of flour can vary from 120g (spooned and leveled) to 150g (scooped directly) — a 25% difference! This is why professional pastry chefs worldwide use grams. Volume measurements for dry ingredients are inherently inconsistent due to compaction, humidity, and technique.

## Country Guide

- **US**: "1 cup flour, 1/2 cup sugar, preheat to 350°F"
- **UK**: "200g flour, 150g sugar, 180°C / Gas 4"
- **France/Germany**: "250g farine, 200g sucre, 180°C"
- **Japan**: Metric with 200 mL cup standard. Rice in "gou" (180 mL)

Use our [Cups to mL Converter](${convertLink('en', 'cup-to-ml')}) and [Oven Temperature Converter](${convertLink('en', 'celsius-to-fahrenheit')}) for reliable recipe conversions.`,
      zh: `不同国家的食谱使用不同的计量系统。美国食谱用杯和勺（体积），欧洲食谱用克和毫升（重量）。理解这些差异是国际烹饪成功的关键。

**杯容量差异**：美制杯236.6 mL，公制杯250 mL，日本杯200 mL。**汤匙**：美制14.8 mL，澳大利亚20 mL。

**为何重量更精确**：一杯面粉从120g（勺入刮平）到150g（直接舀取）不等——相差25%！专业糕点师使用克为单位。

使用我们的[杯到毫升换算器](https://unit.toolconv.com/zh/convert/cup-to-ml/)进行可靠的食谱换算。`,
      ja: `異なる国のレシピは異なる計量システムを使用します。アメリカのレシピはカップとスプーン（体積）、ヨーロッパのレシピはグラムとミリリットル（重量）を使用します。

当社の[カップからmLへの変換ツール](${convertLink('ja', 'cup-to-ml')})をご利用ください。`,
      ko: `다른 나라의 레시피는 다른 계량 시스템을 사용합니다. 미국 레시피는 컵과 스푼(부피), 유럽 레시피는 그램과 밀리리터(무게)를 사용합니다.

[컵에서 mL 변환기](${convertLink('ko', 'cup-to-ml')})를 사용해보세요.`,
      es: `Las recetas de diferentes países usan diferentes sistemas de medición. Las recetas americanas usan tazas y cucharas (volumen); las europeas usan gramos y mililitros (peso).

Use nuestro [Conversor de Tazas a mL](${convertLink('es', 'cup-to-ml')}).`,
      pt: `Receitas de diferentes países usam sistemas de medição diferentes. Receitas americanas usam xícaras e colheres (volume); receitas europeias usam gramas e mililitros (peso).

Use nosso [Conversor de Xícaras para mL](${convertLink('pt', 'cup-to-ml')}).`,
    },
  },

  {
    slug: 'construction-units',
    title: {
      en: 'Construction Industry Unit Conversions: Feet, Inches, Millimeters, and Meters',
      zh: '建筑行业常用单位换算：英尺、英寸、毫米',
      ja: '建築業界でよく使う単位変換：フィート、インチ、ミリメートル',
      ko: '건설 산업常用 단위 변환: 피트, 인치, 밀리미터',
      es: 'Conversiones de Unidades en la Construcción: Pies, Pulgadas, Milímetros y Metros',
      pt: 'Conversões de Unidades na Construção Civil: Pés, Polegadas, Milímetros e Metros',
    },
    description: {
      en: 'Essential unit conversions for architects, builders, and DIY enthusiasts. Master feet, inches, millimeters, and meters for construction and woodworking.',
      zh: '建筑师、建筑商和DIY爱好者必备的单位换算。掌握建筑和木工中的英尺、英寸、毫米和米。',
      ja: '建築家、建設業者、DIY愛好家のための必須単位変換。建築と木工のためのフィート、インチ、ミリメートル、メートルをマスター。',
      ko: '건축가, 건축업자 및 DIY 애호가를 위한 필수 단위 변환. 건설 및 목공에서 피트, 인치, 밀리미터, 미터를 마스터하세요.',
      es: 'Conversiones de unidades esenciales para arquitectos, constructores y entusiastas del bricolaje. Domina pies, pulgadas, milímetros y metros.',
      pt: 'Conversões de unidades essenciais para arquitetos, construtores e entusiastas do faça-você-mesmo. Domine pés, polegadas, milímetros e metros.',
    },
    date: '2025-03-01',
    body: {
      en: `The construction industry is uniquely split between measurement systems. While many countries use metric, the US construction industry predominantly uses imperial. Even in metric countries, some imperial sizes persist — a 4×8 ft plywood sheet is universal.

## Key Construction Units

**Imperial**: Inch (25.4 mm), Foot (304.8 mm), Yard (0.9144 m), Mile (1.609 km)
**Metric**: Millimeter, Centimeter, Meter, Kilometer

## Lumber Sizing — A Common Confusion

A "2×4" is NOT actually 2" × 4"! This is one of the most confusing aspects of construction.

| Nominal Size | Actual (US) | Metric |
|---|---|---|
| 2×4 | 1.5 × 3.5 in | 38 × 89 mm |
| 2×6 | 1.5 × 5.5 in | 38 × 140 mm |
| 4×4 | 3.5 × 3.5 in | 89 × 89 mm |
| 4×8 plywood | 0.375-0.75 in thick | 9.5-19 mm |

US standard sheets: 4×8 ft (1219 × 2438 mm). European: 1250 × 2500 mm — close but NOT interchangeable.

## Fasteners

Screws: US uses #6, #8, #10, 1/4". Metric uses M3, M4, M5, M6. Approximate equivalents: #8 ≈ M4, #10 ≈ M5.

## Conversion Formulas

**Feet-Inches to Decimal Feet**: 5 ft 6 in = 5 + 6/12 = 5.5 ft
**Feet-Inches to Meters**: Convert to inches × 0.0254. 5 ft 6 in = 66 × 0.0254 = 1.6764 m
**ft² to m²**: × 0.092903
**cubic yards to m³**: × 0.7646

## Practical Examples

A 12 ft × 14 ft bedroom = 168 ft² = 15.61 m². Concrete volume: a 10×10 ft slab, 4 inches thick = 1.23 cubic yards.

Use our [Feet to Meters Converter](${convertLink('en', 'foot-to-m')}) and [Inches to mm Converter](${convertLink('en', 'inch-to-mm')}) for construction conversions.`,
      zh: `建筑行业在测量体系上存在独特划分。美国建筑行业主要使用英制，但许多国家使用公制。"2×4"实际上并不是2英寸×4英寸——实际尺寸是1.5×3.5英寸（38×89 mm）。

**木材标称vs实际尺寸**：2×4实际1.5×3.5英寸，2×6实际1.5×5.5英寸，4×4实际3.5×3.5英寸。

**换算**：5英尺6英寸 = 5.5英尺 = 1.6764米。平方英尺转平方米：×0.092903。

使用我们的[英尺到米换算器](https://unit.toolconv.com/zh/convert/foot-to-m/)。`,
      ja: `建設業界は測定システム間で分割されています。米国はヤードポンド法、多くの国はメートル法を使用します。「2×4」は実際には2インチ×4インチではありません。

当社の[フィートからメートルへの変換ツール](${convertLink('ja', 'foot-to-m')})をご利用ください。`,
      ko: `건설 산업은 측정 체계 간에 분할되어 있습니다. 미국은 야드파운드법, 많은 국가는 미터법을 사용합니다. "2×4"는 실제로 2인치×4인치가 아닙니다.

[피트에서 미터 변환기](${convertLink('ko', 'foot-to-m')})를 사용해보세요.`,
      es: `La industria de la construcción está dividida entre sistemas de medición. EE.UU. usa imperial, muchos países usan métrico. ¡Un "2×4" no es realmente 2" × 4"!

Use nuestro [Conversor de Pies a Metros](${convertLink('es', 'foot-to-m')}).`,
      pt: `A indústria da construção está dividida entre sistemas de medição. Os EUA usam imperial, muitos países usam métrico. Uma "2×4" não é realmente 2" × 4"!

Use nosso [Conversor de Pés para Metros](${convertLink('pt', 'foot-to-m')}).`,
    },
  },

  {
    slug: 'fuel-consumption',
    title: {
      en: 'Fuel Consumption Unit Conversion: How to Convert L/100km and MPG',
      zh: '油耗单位换算：L/100km vs MPG 怎么换算？',
      ja: '燃費単位変換：L/100km vs MPG の変換方法',
      ko: '연비 단위 변환: L/100km vs MPG 변환 방법',
      es: 'Conversión de Unidades de Consumo de Combustible: Cómo Convertir L/100km y MPG',
      pt: 'Conversão de Unidades de Consumo de Combustível: Como Converter L/100km e MPG',
    },
    description: {
      en: 'Master fuel consumption unit conversions. Understand the difference between L/100km and MPG, learn the formulas, and compare fuel economy across countries.',
      zh: '掌握油耗单位换算。了解L/100km和MPG的区别，学习公式，比较各国燃油经济性。',
      ja: '燃費単位変換をマスター。L/100kmとMPGの違いを理解し、公式を学び、各国の燃費を比較します。',
      ko: '연비 단위 변환을 마스터하세요. L/100km와 MPG의 차이를 이해하고, 공식을 배우며, 각국의 연비를 비교합니다.',
      es: 'Domina las conversiones de unidades de consumo de combustible. Comprende la diferencia entre L/100km y MPG, aprende las fórmulas y compara la economía de combustible entre países.',
      pt: 'Domine as conversões de unidades de consumo de combustível. Entenda a diferença entre L/100km e MPG, aprenda as fórmulas e compare a economia de combustível entre países.',
    },
    date: '2025-03-05',
    body: {
      en: `Fuel consumption is one of the most confusing areas of unit conversion because different countries use inverse metrics. In Europe and most of the world, fuel consumption is measured in liters per 100 kilometers (L/100km), where **lower is better**. In the US and UK, it's measured in miles per gallon (MPG), where **higher is better**.

## The Two Systems

**L/100km (Liters per 100km)**: Used in Europe, Canada, Australia, China, Japan, Korea. Lower is better. Typical range: 3-15 L/100km. A Toyota Prius gets about 4.5 L/100km; a large SUV might get 12 L/100km.

**MPG (Miles per Gallon)**: Used in US and UK. Higher is better. Typical range: 15-50 MPG. The same Prius gets about 52 MPG (US).

## Critical: US vs UK Gallons

**US MPG and UK MPG are different** because the gallons differ:
- 1 US gallon = 3.78541 L
- 1 UK gallon = 4.54609 L
- UK MPG values are about 20% **higher** than US MPG for the same vehicle

## Conversion Formulas

- **L/100km to US MPG**: MPG = 235.215 ÷ L/100km
- **US MPG to L/100km**: L/100km = 235.215 ÷ MPG
- **L/100km to UK MPG**: MPG = 282.481 ÷ L/100km
- **km/L to MPG (US)**: × 2.35215

## Quick Reference

| L/100km | US MPG | UK MPG | Rating |
|---|---|---|---|
| 3 | 78.4 | 94.2 | Excellent (hybrid) |
| 5 | 47.0 | 56.5 | Very good |
| 7 | 33.6 | 40.4 | Average |
| 10 | 23.5 | 28.2 | Poor (large SUV) |
| 15 | 15.7 | 18.8 | Very thirsty |

## Real Cars

- Toyota Prius: 4.5 L/100km = 52 MPG (US) = 63 MPG (UK)
- Honda Civic: 6.5 L/100km = 36 MPG (US)
- Ford F-150: 12 L/100km = 20 MPG (US)

## Trip Cost Calculation

**L/100km method**: (Distance × Consumption) ÷ 100 × Fuel Price
Example: 500 km × 8 L/100km = 40 L × $1.50/L = $60

**MPG method**: Distance ÷ MPG × Fuel Price per gallon
Example: 300 miles ÷ 30 MPG = 10 gal × $4.00 = $40

## Tips

1. Always check whether MPG is US or UK (20% difference)
2. Improving from 15→20 MPG saves more fuel than 30→50 MPG (nonlinear)
3. Electric vehicles use MPGe or kWh/100km

Use our [Fuel Consumption Converter](${convertLink('en', 'l100km-to-mpg_us')}) to convert between L/100km and MPG instantly.`,
      zh: `油耗是单位换算中最令人困惑的领域之一。欧洲和世界大部分地区使用**升/百公里（L/100km）**，数值越低越好。美国和英国使用**英里/加仑（MPG）**，数值越高越好。

**关键区别**：美制MPG和英制MPG不同——1美制加仑=3.78541 L，1英制加仑=4.54609 L。英制MPG比美制高约20%。

**公式**：MPG（美制）= 235.215 ÷ L/100km。L/100km = 235.215 ÷ MPG（美制）。

**示例**：丰田普锐斯4.5 L/100km = 52 MPG（美制）。福特F-150：12 L/100km = 20 MPG（美制）。

使用我们的[油耗换算器](https://unit.toolconv.com/zh/convert/l100km-to-mpg_us/)进行即时换算。`,
      ja: `燃費は、L/100km（欧州、日本、中国、韓国など、低いほど良い）とMPG（米国、英国、高いほど良い）の2つの主要なシステムがあります。

**公式**：MPG（米国）= 235.215 ÷ L/100km。**米国MPGと英国MPGは20%異なります。**

当社の[燃費変換ツール](${convertLink('ja', 'l100km-to-mpg_us')})をご利用ください。`,
      ko: `연비는 L/100km(유럽, 일본, 중국, 한국 등, 낮을수록 좋음)와 MPG(미국, 영국, 높을수록 좋음)의 두 가지 주요 시스템이 있습니다.

**공식**：MPG(미국) = 235.215 ÷ L/100km. **미국 MPG와 영국 MPG는 20% 다릅니다.**

[연비 변환기](${convertLink('ko', 'l100km-to-mpg_us')})를 사용해보세요.`,
      es: `El consumo de combustible tiene dos sistemas principales: L/100km (Europa, etc., cuanto más bajo mejor) y MPG (EE.UU., RU, cuanto más alto mejor).

**Fórmula**：MPG (US) = 235.215 ÷ L/100km. **MPG US y UK difieren en un 20%.**

Use nuestro [Conversor de Consumo](${convertLink('es', 'l100km-to-mpg_us')}).`,
      pt: `O consumo de combustível tem dois sistemas principais: L/100km (Europa, etc., quanto menor melhor) e MPG (EUA, RU, quanto maior melhor).

**Fórmula**：MPG (US) = 235,215 ÷ L/100km. **MPG dos EUA e do RU diferem em 20%.**

Use nosso [Conversor de Consumo](${convertLink('pt', 'l100km-to-mpg_us')}).`,
    },
  },
];
