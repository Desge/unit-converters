import { LOCALES, CATEGORIES, ALL_PAIRS } from '@/lib/conversions';
import type { Locale } from '@/lib/conversions';
import { SITE, generateWebSiteSchema } from '@/lib/seo';

// ──── Translation Data ────
const pageContent = {
  title: {
    en: 'About Us',
    zh: '关于我们',
    ja: '当サイトについて',
    ko: '회사 소개',
    es: 'Sobre Nosotros',
    pt: 'Sobre Nós',
  } as Record<Locale, string>,
  intro: {
    en: 'Learn more about {siteName} — the free, fast, and privacy-respecting online unit converter.',
    zh: '了解更多关于{siteName}的信息——一个免费、快速且尊重隐私的在线单位换算器。',
    ja: '{siteName}について — 無料で高速、プライバシーを尊重するオンライン単位変換ツール。',
    ko: '{siteName}에 대해 알아보세요 — 무료, 빠르고 개인정보를 존중하는 온라인 단위 변환기입니다.',
    es: 'Conozca más sobre {siteName} — el conversor de unidades en línea gratuito, rápido y que respeta la privacidad.',
    pt: 'Saiba mais sobre o {siteName} — o conversor de unidades online gratuito, rápido e que respeita a privacidade.',
  } as Record<Locale, string>,
  sections: [
    {
      headings: {
        en: 'Our Mission',
        zh: '我们的使命',
        ja: '私たちの使命',
        ko: '저희의 사명',
        es: 'Nuestra Misión',
        pt: 'Nossa Missão',
      } as Record<Locale, string>,
      bodies: {
        en: `At {siteName}, our mission is to provide a simple, fast, and completely free unit conversion service that anyone can use, anywhere in the world. We believe that converting between different units of measurement should be straightforward and accessible to everyone — no registrations, no fees, no complicated interfaces.

Whether you're a student studying for an exam, a professional engineer working on a project, a traveler checking currency exchange rates, or simply someone who needs to convert a recipe from cups to milliliters, {siteName} is here to help.

We currently support {categoryCount} categories of measurement with over {pairCount} conversion pairs, covering everything from length and weight to currency and torque. Our tools are available in 6 languages: English, Chinese, Japanese, Korean, Spanish, and Portuguese.`,
        zh: `在{siteName}，我们的使命是提供一种简单、快速且完全免费的单位换算服务，任何人都可以在世界任何地方使用。我们相信，在不同测量单位之间进行换算应该是直接了当的，并且对所有人都可访问——无需注册、无需付费、无需复杂的界面。

无论您是准备考试的学生、从事项目的专业工程师、查看货币汇率的旅行者，还是仅仅需要将食谱从杯换算为毫升的人，{siteName}都能为您提供帮助。

我们目前支持{categoryCount}个测量类别，拥有{pairCount}多个换算对，涵盖从长度和重量到货币和扭矩的所有内容。我们的工具支持6种语言：英语、中文、日语、韩语、西班牙语和葡萄牙语。`,
        ja: `{siteName}の使命は、世界中の誰もが使用できる、シンプルで高速、完全無料の単位変換サービスを提供することです。異なる測定単位間の変換は、誰にとっても簡単でアクセスしやすいものであるべきだと考えています — 登録不要、無料、複雑なインターフェースなし。

試験勉強中の学生、プロジェクトに取り組むエンジニア、為替レートを確認する旅行者、または単にレシピをカップからミリリットルに変換する必要がある方まで、{siteName}がお手伝いします。

現在、{categoryCount}の測定カテゴリーで{pairCount}以上の変換ペアをサポートしており、長さや重さから通貨やトルクまで幅広くカバーしています。5つの言語（英語、中国語、日本語、韓国語、スペイン語、ポルトガル語）でご利用いただけます。`,
        ko: `{siteName}의 사명은 누구나, 세계 어디서나 사용할 수 있는 간단하고 빠르며 완전 무료인 단위 변환 서비스를 제공하는 것입니다. 다양한 측정 단위 간의 변환은 누구에게나 간단하고 접근 가능해야 한다고 믿습니다 — 등록도, 수수료도, 복잡한 인터페이스도 없습니다.

시험 공부를 하는 학생, 프로젝트를 진행하는 전문 엔지니어, 환율을 확인하는 여행자, 또는 단순히 컵에서 밀리리터로 조리법을 변환해야 하는 사람까지, {siteName}이 도와드립니다.

현재 {categoryCount}개의 측정 카테고리에서 {pairCount}개 이상의 변환 쌍을 지원하며, 길이와 무게부터 통화와 토크까지 모든 것을 다룹니다. 6개 언어(영어, 중국어, 일본어, 한국어, 스페인어, 포르투갈어)로 제공됩니다.`,
        es: `En {siteName}, nuestra misión es proporcionar un servicio de conversión de unidades simple, rápido y completamente gratuito que cualquier persona pueda usar, en cualquier parte del mundo. Creemos que la conversión entre diferentes unidades de medida debería ser directa y accesible para todos — sin registros, sin tarifas, sin interfaces complicadas.

Ya sea que seas un estudiante preparándose para un examen, un ingeniero profesional trabajando en un proyecto, un viajero consultando tipos de cambio de divisas, o simplemente alguien que necesita convertir una receta de tazas a mililitros, {siteName} está aquí para ayudar.

Actualmente admitimos {categoryCount} categorías de medición con más de {pairCount} pares de conversión, cubriendo todo, desde longitud y peso hasta moneda y torque. Nuestras herramientas están disponibles en 6 idiomas: inglés, chino, japonés, coreano, español y portugués.`,
        pt: `No {siteName}, nossa missão é fornecer um serviço de conversão de unidades simples, rápido e completamente gratuito que qualquer pessoa possa usar, em qualquer lugar do mundo. Acreditamos que a conversão entre diferentes unidades de medida deve ser direta e acessível a todos — sem registros, sem taxas, sem interfaces complicadas.

Seja você um estudante se preparando para um exame, um engenheiro profissional trabalhando em um projeto, um viajante verificando taxas de câmbio, ou simplesmente alguém que precisa converter uma receita de xícaras para mililitros, o {siteName} está aqui para ajudar.

Atualmente, suportamos {categoryCount} categorias de medição com mais de {pairCount} pares de conversão, cobrindo tudo, desde comprimento e peso até moeda e torque. Nossas ferramentas estão disponíveis em 6 idiomas: inglês, chinês, japonês, coreano, espanhol e português.`,
      } as Record<Locale, string>,
    },
    {
      headings: {
        en: 'Why Choose {siteName}?',
        zh: '为什么选择{siteName}？',
        ja: '{siteName}が選ばれる理由',
        ko: '{siteName}을 선택해야 하는 이유',
        es: '¿Por qué elegir {siteName}?',
        pt: 'Por que escolher o {siteName}?',
      } as Record<Locale, string>,
      bodies: {
        en: `1. Completely Free: All conversion tools on {siteName} are 100% free to use. There are no hidden charges, subscription fees, or premium tiers.

2. Privacy First: We take your privacy seriously. All conversion calculations are performed locally in your browser using JavaScript. We do not store, transmit, or process any values you enter into the converter tools. Our Privacy Policy provides full transparency about our data practices.

3. Comprehensive Coverage: With {categoryCount} categories and {pairCount} conversion pairs, we cover virtually every unit conversion you might need — from common ones like centimeters to inches to specialized ones like newton-meters to foot-pounds.

4. Multi-Language Support: Our interface is fully localized in 6 languages — English, Chinese, Japanese, Korean, Spanish, and Portuguese — making it accessible to billions of users worldwide.

5. Speed and Simplicity: No account required, no waiting, no clutter. Simply select your units, enter a value, and get your result instantly.

6. Works Everywhere: As a fully client-side web application, {siteName} works on all modern browsers and devices, including desktop computers, tablets, and smartphones.`,
        zh: `1. 完全免费：{siteName}上的所有换算工具100%免费使用。没有隐藏费用、订阅费或高级等级。

2. 隐私至上：我们非常重视您的隐私。所有换算计算均在您的浏览器本地使用JavaScript执行。我们不会存储、传输或处理您在换算器中输入的任何数值。我们的隐私政策完整透明地展示了我们的数据实践。

3. 全面覆盖：拥有{categoryCount}个类别和{pairCount}个换算对，我们几乎涵盖您可能需要的所有单位换算——从常见的厘米到英寸，到专业的牛·米到英尺·磅。

4. 多语言支持：我们的界面完全本地化为6种语言——英语、中文、日语、韩语、西班牙语和葡萄牙语——使全球数十亿用户都能使用。

5. 速度与简便：无需账户、无需等待、无需杂乱。只需选择单位，输入数值，即时获得结果。

6. 随处可用：作为完全客户端的Web应用程序，{siteName}适用于所有现代浏览器和设备，包括台式电脑、平板电脑和智能手机。`,
        ja: `1. 完全無料：{siteName}のすべての変換ツールは100%無料で使用できます。隠れた料金、購読料、プレミアムティアはありません。

2. プライバシーファースト：お客様のプライバシーを真剣に考慮しています。すべての変換計算は、お客様のブラウザ上でJavaScriptを使用してローカルに実行されます。変換ツールに入力された値は保存、送信、処理されません。プライバシーポリシーでデータ慣行について完全な透明性を提供しています。

3. 包括的なカバレッジ：{categoryCount}カテゴリー、{pairCount}以上の変換ペアで、センチメートルからインチへのような一般的なものから、ニュートンメートルからフィートポンドへのような専門的なものまで、必要なほぼすべての単位変換をカバーしています。

4. 多言語サポート：インターフェースは6言語（英語、中国語、日本語、韓国語、スペイン語、ポルトガル語）に完全ローカライズされており、世界中の何十億ものユーザーがアクセスできます。

5. スピードとシンプルさ：アカウント不要、待ち時間なし、煩雑さなし。単位を選択し、値を入力するだけで、即座に結果が得られます。

6. どこでも動作：完全なクライアントサイドWebアプリケーションとして、{siteName}はデスクトップ、タブレット、スマートフォンを含むすべての最新ブラウザとデバイスで動作します。`,
        ko: `1. 완전 무료: {siteName}의 모든 변환 도구는 100% 무료로 사용할 수 있습니다. 숨은 요금, 구독료 또는 프리미엄 등급이 없습니다.

2. 개인정보 우선: 저희는 귀하의 개인정보를 중요하게 생각합니다. 모든 변환 계산은 JavaScript를 사용하여 귀하의 브라우저에서 로컬로 수행됩니다. 변환기에 입력한 어떤 값도 저장, 전송 또는 처리하지 않습니다. 개인정보처리방침에서 데이터 관행에 대한 완전한 투명성을 제공합니다.

3. 포괄적인 범위: {categoryCount}개 카테고리와 {pairCount}개 이상의 변환 쌍으로 센티미터에서 인치와 같은 일반적인 것부터 뉴턴미터에서 피트파운드와 같은 전문적인 것까지 필요한 거의 모든 단위 변환을 다룹니다.

4. 다국어 지원: 인터페이스가 영어, 중국어, 일본어, 한국어, 스페인어, 포르투갈어의 6개 언어로 완전 지역화되어 전 세계 수십억 사용자가 이용할 수 있습니다.

5. 속도와 간편함: 계정 불필요, 대기 시간 없음, 복잡함 없음. 단위를 선택하고 값을 입력하기만 하면 즉시 결과를 얻을 수 있습니다.

6. 어디서나 작동: 완전한 클라이언트 측 웹 애플리케이션으로, {siteName}은 데스크톱 컴퓨터, 태블릿, 스마트폰을 포함한 모든 최신 브라우저와 기기에서 작동합니다.`,
        es: `1. Completamente Gratuito: Todas las herramientas de conversión en {siteName} son 100% gratuitas. No hay cargos ocultos, tarifas de suscripción ni niveles premium.

2. Privacidad Primero: Tomamos su privacidad en serio. Todos los cálculos de conversión se realizan localmente en su navegador usando JavaScript. No almacenamos, transmitimos ni procesamos ningún valor que ingrese en las herramientas conversoras. Nuestra Política de Privacidad proporciona transparencia total sobre nuestras prácticas de datos.

3. Cobertura Integral: Con {categoryCount} categorías y más de {pairCount} pares de conversión, cubrimos prácticamente todas las conversiones de unidades que pueda necesitar — desde comunes como centímetros a pulgadas hasta especializadas como newton-metros a pie-libra.

4. Soporte Multilingüe: Nuestra interfaz está completamente localizada en 6 idiomas — inglés, chino, japonés, coreano, español y portugués — haciéndola accesible para miles de millones de usuarios en todo el mundo.

5. Velocidad y Simplicidad: Sin necesidad de cuenta, sin esperas, sin desorden. Simplemente seleccione sus unidades, ingrese un valor y obtenga su resultado al instante.

6. Funciona en Todas Partes: Como aplicación web completamente del lado del cliente, {siteName} funciona en todos los navegadores y dispositivos modernos, incluyendo computadoras de escritorio, tabletas y teléfonos inteligentes.`,
        pt: `1. Completamente Gratuito: Todas as ferramentas de conversão no {siteName} são 100% gratuitas. Não há cobranças ocultas, taxas de assinatura ou níveis premium.

2. Privacidade em Primeiro Lugar: Levamos sua privacidade a sério. Todos os cálculos de conversão são realizados localmente em seu navegador usando JavaScript. Não armazenamos, transmitimos ou processamos qualquer valor que você insira nas ferramentas de conversão. Nossa Política de Privacidade fornece transparência total sobre nossas práticas de dados.

3. Cobertura Abrangente: Com {categoryCount} categorias e mais de {pairCount} pares de conversão, cobrimos praticamente todas as conversões de unidades que você possa precisar — desde comuns como centímetros para polegadas até especializadas como newton-metros para pé-libra.

4. Suporte a Múltiplos Idiomas: Nossa interface é totalmente localizada em 6 idiomas — inglês, chinês, japonês, coreano, espanhol e português — tornando-a acessível a bilhões de usuários em todo o mundo.

5. Velocidade e Simplicidade: Sem necessidade de conta, sem espera, sem confusão. Basta selecionar suas unidades, inserir um valor e obter seu resultado instantaneamente.

6. Funciona em Qualquer Lugar: Como um aplicativo web totalmente do lado do cliente, o {siteName} funciona em todos os navegadores e dispositivos modernos, incluindo computadores desktop, tablets e smartphones.`,
      } as Record<Locale, string>,
    },
    {
      headings: {
        en: 'How It Works',
        zh: '工作原理',
        ja: '仕組み',
        ko: '작동 방식',
        es: 'Cómo Funciona',
        pt: 'Como Funciona',
      } as Record<Locale, string>,
      bodies: {
        en: `{siteName} is built as a static site using Next.js, a modern React framework. The entire application runs entirely in your browser — no server-side processing is required for conversions. This means:

- All conversion calculations happen instantly on your device
- Your data never leaves your browser
- The site is fast and responsive regardless of your internet connection speed
- We can serve the site from a global content delivery network (CDN) for optimal loading times

Our conversion engine supports a wide range of unit categories, each with precisely defined conversion factors. For simple multiplicative conversions (like length or weight), we use verified conversion factors. For more complex conversions (like temperature or fuel consumption), we implement the appropriate formulas.

All our conversion data is carefully curated and regularly reviewed to ensure accuracy. However, as noted in our Terms of Service, we recommend independently verifying critical conversions.`,
        zh: `{siteName}使用Next.js（一个现代React框架）构建为静态站点。整个应用程序完全在您的浏览器中运行——换算无需服务器端处理。这意味着：

- 所有换算计算在您的设备上即时完成
- 您的数据永远不会离开您的浏览器
- 无论您的互联网连接速度如何，网站都快速响应
- 我们可以从全球内容分发网络（CDN）提供网站服务，以获得最佳加载时间

我们的换算引擎支持广泛的单位类别，每个类别都有精确定义的换算系数。对于简单的乘法换算（如长度或重量），我们使用经过验证的换算系数。对于更复杂的换算（如温度或燃油消耗），我们实施相应的公式。

我们所有的换算数据都经过精心策划并定期审查，以确保准确性。但是，正如我们的服务条款中所述，我们建议独立验证关键换算结果。`,
        ja: `{siteName}は、最新のReactフレームワークであるNext.jsを使用して静的サイトとして構築されています。アプリケーション全体が完全にお客様のブラウザ上で実行されます — 変換にサーバー側の処理は必要ありません。つまり：

- すべての変換計算はお客様のデバイス上で瞬時に実行されます
- データがブラウザから送出されることはありません
- インターネット接続速度に関係なく、サイトは高速で応答します
- グローバルコンテンツ配信ネットワーク（CDN）からサイトを提供できるため、最適な読み込み時間を実現します

当社の変換エンジンは、正確に定義された変換係数を持つ幅広い単位カテゴリーをサポートしています。単純な乗算変換（長さや重さなど）では、検証済みの変換係数を使用します。より複雑な変換（温度や燃費など）では、適切な計算式を実装しています。

すべての変換データは慎重に厳選され、正確性を確保するために定期的にレビューされています。ただし、利用規約に記載されているように、重要な変換については独立して確認することをお勧めします。`,
        ko: `{siteName}은(는) Next.js(최신 React 프레임워크)를 사용하여 정적 사이트로 구축되었습니다. 전체 애플리케이션이 귀하의 브라우저에서 완전히 실행됩니다 — 변환에 서버 측 처리가 필요하지 않습니다. 즉:

- 모든 변환 계산이 귀하의 기기에서 즉시 수행됩니다
- 귀하의 데이터는 브라우저를 벗어나지 않습니다
- 인터넷 연결 속도와 관계없이 사이트가 빠르게 응답합니다
- 글로벌 콘텐츠 전송 네트워크(CDN)에서 사이트를 제공하여 최적의 로딩 시간을 보장합니다

당사의 변환 엔진은 정확하게 정의된 변환 계수를 가진 다양한 단위 카테고리를 지원합니다. 단순한 곱셈 변환(길이 또는 무게 등)의 경우 검증된 변환 계수를 사용합니다. 더 복잡한 변환(온도 또는 연비 등)의 경우 적절한 공식을 구현합니다.

모든 변환 데이터는 정확성을 보장하기 위해 신중하게 선별되고 정기적으로 검토됩니다. 그러나 이용약관에 명시된 바와 같이 중요한 변환은 독립적으로 확인하는 것이 좋습니다.`,
        es: `{siteName} está construido como un sitio estático usando Next.js, un framework moderno de React. Toda la aplicación se ejecuta completamente en su navegador — no se requiere procesamiento del lado del servidor para las conversiones. Esto significa:

- Todos los cálculos de conversión ocurren instantáneamente en su dispositivo
- Sus datos nunca salen de su navegador
- El sitio es rápido y receptivo independientemente de la velocidad de su conexión a internet
- Podemos servir el sitio desde una red de entrega de contenido (CDN) global para tiempos de carga óptimos

Nuestro motor de conversión admite una amplia gama de categorías de unidades, cada una con factores de conversión definidos con precisión. Para conversiones multiplicativas simples (como longitud o peso), utilizamos factores de conversión verificados. Para conversiones más complejas (como temperatura o consumo de combustible), implementamos las fórmulas apropiadas.

Todos nuestros datos de conversión son cuidadosamente seleccionados y revisados periódicamente para garantizar la precisión. Sin embargo, como se indica en nuestros Términos de Servicio, recomendamos verificar de forma independiente las conversiones críticas.`,
        pt: `O {siteName} é construído como um site estático usando Next.js, um framework React moderno. Todo o aplicativo é executado inteiramente em seu navegador — nenhum processamento no lado do servidor é necessário para conversões. Isso significa:

- Todos os cálculos de conversão acontecem instantaneamente no seu dispositivo
- Seus dados nunca saem do seu navegador
- O site é rápido e responsivo, independentemente da velocidade da sua conexão de internet
- Podemos servir o site a partir de uma rede de entrega de conteúdo (CDN) global para tempos de carregamento ideais

Nosso mecanismo de conversão suporta uma ampla gama de categorias de unidades, cada uma com fatores de conversão precisamente definidos. Para conversões multiplicativas simples (como comprimento ou peso), usamos fatores de conversão verificados. Para conversões mais complexas (como temperatura ou consumo de combustível), implementamos as fórmulas apropriadas.

Todos os nossos dados de conversão são cuidadosamente selecionados e revisados regularmente para garantir a precisão. No entanto, conforme observado em nossos Termos de Serviço, recomendamos verificar independentemente as conversões críticas.`,
      } as Record<Locale, string>,
    },
    {
      headings: {
        en: 'Our Values',
        zh: '我们的价值观',
        ja: '私たちの価値観',
        ko: '저희의 가치',
        es: 'Nuestros Valores',
        pt: 'Nossos Valores',
      } as Record<Locale, string>,
      bodies: {
        en: `Free Access for Everyone: We believe that knowledge and tools should be accessible to all, regardless of geographic location or economic circumstances. That's why {siteName} will always remain free.

Privacy by Design: We built {siteName} from the ground up with privacy in mind. By processing all conversions locally in the browser, we ensure that your data stays yours. We never sell or share personal information.

Simplicity and Clarity: We believe in the power of simplicity. Our interface is clean, intuitive, and focused on what matters — getting you accurate conversions quickly without distractions.

Continuous Improvement: We are committed to improving {siteName} over time. We welcome feedback from our users and continuously work to expand our conversion coverage and enhance the user experience.`,
        zh: `人人免费使用：我们相信知识和工具应该对所有人开放，无论地理位置或经济状况如何。这就是为什么{siteName}将永远保持免费。

隐私设计：我们从一开始就考虑隐私构建{siteName}。通过在浏览器本地处理所有换算，我们确保您的数据始终属于您自己。我们从不销售或分享个人信息。

简洁清晰：我们相信简洁的力量。我们的界面干净、直观，专注于最重要的事情——让您快速获得准确换算结果，不受干扰。

持续改进：我们致力于随着时间的推移不断改进{siteName}。我们欢迎用户的反馈，并不断努力扩展我们的换算覆盖范围并提升用户体验。`,
        ja: `すべての人のための無料アクセス：知識とツールは、地理的な位置や経済的状況に関係なく、すべての人がアクセスできるべきだと考えています。それが{siteName}が常に無料であり続ける理由です。

プライバシーバイデザイン：プライバシーを考慮して{siteName}をゼロから構築しました。すべての変換をブラウザ上でローカルに処理することで、お客様のデータがお客様のものであり続けることを保証します。個人情報を販売または共有することは決してありません。

シンプルさと明快さ：シンプルさの力を信じています。インターフェースはクリーンで直感的であり、重要なこと — 気を散らさずに正確な変換を素早く得ること — に焦点を当てています。

継続的改善：時間の経過とともに{siteName}を改善し続けることを約束します。ユーザーからのフィードバックを歓迎し、変換カバレッジの拡大とユーザー体験の向上に継続的に取り組んでいます。`,
        ko: `모두를 위한 무료 접근: 지식과 도구는 지리적 위치나 경제적 상황에 관계없이 모든 사람이 접근할 수 있어야 한다고 믿습니다.それが {siteName}이(가) 항상 무료로 유지되는 이유입니다.

프라이버시 바이 디자인: 개인정보 보호를 염두에 두고 {siteName}을(를) 처음부터 구축했습니다. 모든 변환을 브라우저에서 로컬로 처리함으로써 귀하의 데이터가 귀하의 것임을 보장합니다. 개인정보를 판매하거나 공유하지 않습니다.

단순성과 명확성: 단순함의 힘을 믿습니다. 인터페이스는 깔끔하고 직관적이며 중요한 것 — 방해 없이 정확한 변환을 신속하게 얻는 것 — 에 초점을 맞추고 있습니다.

지속적인 개선: 시간이 지남에 따라 {siteName}을(를) 지속적으로 개선하는 데 전념하고 있습니다. 사용자의 피드백을 환영하며 변환 범위를 확장하고 사용자 경험을 향상시키기 위해 지속적으로 노력하고 있습니다.`,
        es: `Acceso Gratuito para Todos: Creemos que el conocimiento y las herramientas deben ser accesibles para todos, independientemente de la ubicación geográfica o las circunstancias económicas. Por eso {siteName} siempre permanecerá gratuito.

Privacidad por Diseño: Construimos {siteName} desde cero teniendo en cuenta la privacidad. Al procesar todas las conversiones localmente en el navegador, garantizamos que sus datos sigan siendo suyos. Nunca vendemos ni compartimos información personal.

Simplicidad y Claridad: Creemos en el poder de la simplicidad. Nuestra interfaz es limpia, intuitiva y se centra en lo que importa — obtener conversiones precisas rápidamente sin distracciones.

Mejora Continua: Estamos comprometidos a mejorar {siteName} con el tiempo. Agradecemos los comentarios de nuestros usuarios y trabajamos continuamente para ampliar nuestra cobertura de conversión y mejorar la experiencia del usuario.`,
        pt: `Acesso Gratuito para Todos: Acreditamos que o conhecimento e as ferramentas devem ser acessíveis a todos, independentemente da localização geográfica ou circunstâncias econômicas. É por isso que o {siteName} permanecerá sempre gratuito.

Privacidade por Design: Construímos o {siteName} desde o início com a privacidade em mente. Ao processar todas as conversões localmente no navegador, garantimos que seus dados permaneçam seus. Nunca vendemos ou compartilhamos informações pessoais.

Simplicidade e Clareza: Acreditamos no poder da simplicidade. Nossa interface é limpa, intuitiva e focada no que importa — obter conversões precisas rapidamente, sem distrações.

Melhoria Contínua: Estamos comprometidos em melhorar o {siteName} ao longo do tempo. Aceitamos feedback dos nossos usuários e trabalhamos continuamente para expandir nossa cobertura de conversão e melhorar a experiência do usuário.`,
      } as Record<Locale, string>,
    },
    {
      headings: {
        en: 'Disclaimer',
        zh: '免责声明',
        ja: '免責事項',
        ko: '면책 조항',
        es: 'Aviso Legal',
        pt: 'Aviso Legal',
      } as Record<Locale, string>,
      bodies: {
        en: `{siteName} provides conversion tools for informational and educational purposes only. While we strive for accuracy, we make no guarantees regarding the precision or suitability of conversion results for any particular purpose. Always verify critical conversions independently through appropriate professional channels.

The currency exchange rates displayed on this site are for reference only and may not reflect current market rates. We do not provide financial, legal, or medical advice through our conversion tools.`,
        zh: `{siteName}提供的换算工具仅供信息和教育目的。虽然我们力求准确，但我们不对换算结果针对任何特定目的的精确性或适用性作任何保证。请始终通过适当的专业渠道独立验证关键换算结果。

本网站上显示的货币汇率仅供参考，可能不反映当前市场汇率。我们不通过换算工具提供金融、法律或医疗建议。`,
        ja: `{siteName}は、情報提供および教育目的のみで変換ツールを提供しています。正確性に努めていますが、特定の目的に対する変換結果の精度や適合性については保証しません。重要な変換は、適切な専門チャネルを通じて常に独立して確認してください。

このサイトに表示される為替レートは参考用であり、現在の市場レートを反映していない場合があります。当社は変換ツールを通じて財務、法律、または医療に関する助言を提供するものではありません。`,
        ko: `{siteName}은(는) 정보 제공 및 교육 목적으로만 변환 도구를 제공합니다. 정확성을 위해 노력하지만 특정 목적에 대한 변환 결과의 정밀도나 적합성을 보장하지 않습니다. 중요한 변환은 항상 적절한 전문 채널을 통해 독립적으로 확인하시기 바랍니다.

이 사이트에 표시된 환율은 참고용이며 현재 시장 환율을 반영하지 않을 수 있습니다. 당사는 변환 도구를 통해 재정, 법률 또는 의학적 조언을 제공하지 않습니다.`,
        es: `{siteName} proporciona herramientas de conversión solo con fines informativos y educativos. Si bien nos esforzamos por la precisión, no garantizamos la exactitud o idoneidad de los resultados de conversión para ningún propósito en particular. Siempre verifique las conversiones críticas de forma independiente a través de los canales profesionales adecuados.

Los tipos de cambio de divisas que se muestran en este sitio son solo para referencia y pueden no reflejar las tasas actuales del mercado. No proporcionamos asesoramiento financiero, legal o médico a través de nuestras herramientas de conversión.`,
        pt: `O {siteName} fornece ferramentas de conversão apenas para fins informativos e educacionais. Embora nos esforcemos pela precisão, não garantimos a exatidão ou adequação dos resultados de conversão para qualquer propósito específico. Sempre verifique as conversões críticas de forma independente através dos canais profissionais apropriados.

As taxas de câmbio exibidas neste site são apenas para referência e podem não refletir as taxas atuais do mercado. Não fornecemos aconselhamento financeiro, jurídico ou médico através de nossas ferramentas de conversão.`,
      } as Record<Locale, string>,
    },
  ],
};

// ──── Metadata ────
const metaDescriptions: Record<Locale, string> = {
  en: 'About UnitConvert — Learn about our mission to provide free, fast, and privacy-respecting online unit conversions in 6 languages. Over 3000 conversion pairs across 18 categories.',
  zh: '关于 UnitConvert — 了解我们提供免费、快速、尊重隐私的在线单位换算的使命。支持6种语言，18个类别，3000多个换算对。',
  ja: 'UnitConvertについて — 6言語で無料、高速、プライバシーを尊重したオンライン単位変換を提供する使命について。18カテゴリー、3000以上の変換ペア。',
  ko: 'UnitConvert 소개 — 6개 언어로 무료, 빠르고 개인정보를 존중하는 온라인 단위 변환을 제공하는 사명에 대해 알아보세요. 18개 카테고리, 3000개 이상의 변환 쌍.',
  es: 'Acerca de UnitConvert — Conozca nuestra misión de proporcionar conversiones de unidades en línea gratuitas, rápidas y que respetan la privacidad en 6 idiomas. Más de 3000 pares de conversión en 18 categorías.',
  pt: 'Sobre o UnitConvert — Saiba mais sobre nossa missão de fornecer conversões de unidades online gratuitas, rápidas e que respeitam a privacidade em 6 idiomas. Mais de 3000 pares de conversão em 18 categorias.',
};

export function generateStaticParams() {
  return LOCALES.map(locale => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const title = `${pageContent.title[locale]} — ${SITE.name}`;
  const canonical = `${SITE.domain}/${locale}/about/`;
  return {
    title,
    description: metaDescriptions[locale],
    canonical,
    alternates: {
      canonical,
      languages: {
        'x-default': `${SITE.domain}/en/about/`,
        ...Object.fromEntries(LOCALES.map(l => [l, `${SITE.domain}/${l}/about/`])),
      },
    },
    openGraph: {
      title,
      description: metaDescriptions[locale],
      type: 'website' as const,
      locale: locale === 'zh' ? 'zh_CN' : locale === 'ja' ? 'ja_JP' : locale === 'ko' ? 'ko_KR' : locale === 'es' ? 'es_ES' : locale === 'pt' ? 'pt_BR' : 'en_US',
      url: canonical,
      siteName: SITE.name,
    },
    twitter: {
      card: 'summary_large_image' as const,
    },
    robots: { index: true, follow: true },
  };
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const categoryCount = CATEGORIES.length;
  const pairCount = ALL_PAIRS.length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
          <span className="bg-gradient-to-r from-brand-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {pageContent.title[locale]}
          </span>
        </h1>
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
          {pageContent.intro[locale].replace(/\{siteName\}/g, SITE.name)}
        </p>
      </section>

      {/* Stats Bar */}
      <section className="flex flex-wrap justify-center gap-4 mb-12">
        <div className="card px-6 py-4 text-center min-w-[140px]">
          <div className="text-3xl font-extrabold text-brand-500">{categoryCount}</div>
          <div className="text-sm text-[var(--text-tertiary)]">
            {locale === 'zh' ? '测量类别' : locale === 'ja' ? '測定カテゴリー' : locale === 'ko' ? '측정 카테고리' : locale === 'es' ? 'Categorías' : locale === 'pt' ? 'Categorias' : 'Categories'}
          </div>
        </div>
        <div className="card px-6 py-4 text-center min-w-[140px]">
          <div className="text-3xl font-extrabold text-brand-500">{pairCount.toLocaleString()}+</div>
          <div className="text-sm text-[var(--text-tertiary)]">
            {locale === 'zh' ? '换算对' : locale === 'ja' ? '変換ペア' : locale === 'ko' ? '변환 쌍' : locale === 'es' ? 'Pares' : locale === 'pt' ? 'Pares' : 'Conversion Pairs'}
          </div>
        </div>
        <div className="card px-6 py-4 text-center min-w-[140px]">
          <div className="text-3xl font-extrabold text-brand-500">6</div>
          <div className="text-sm text-[var(--text-tertiary)]">
            {locale === 'zh' ? '种语言' : locale === 'ja' ? '言語' : locale === 'ko' ? '개 언어' : locale === 'es' ? 'Idiomas' : locale === 'pt' ? 'Idiomas' : 'Languages'}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="space-y-8">
        {pageContent.sections.map((section, idx) => (
          <section key={idx} className="card p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-4 text-[var(--text-primary)]">
              {section.headings[locale].replace(/\{siteName\}/g, SITE.name)}
            </h2>
            <div className="text-[var(--text-secondary)] leading-relaxed space-y-3 whitespace-pre-line">
              {section.bodies[locale]
                .replace(/\{siteName\}/g, SITE.name)
                .replace(/\{domain\}/g, SITE.domain)
                .replace(/\{categoryCount\}/g, String(categoryCount))
                .replace(/\{pairCount\}/g, String(pairCount))
                .split('\n\n')
                .map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
            </div>
          </section>
        ))}
      </div>

      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebSiteSchema(locale)) }}
      />
    </div>
  );
}
