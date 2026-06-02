import { LOCALES } from '@/lib/conversions';
import type { Locale } from '@/lib/conversions';
import { SITE } from '@/lib/seo';

// ──── Translation Data ────
const pageContent = {
  title: {
    en: 'Privacy Policy',
    zh: '隐私政策',
    ja: 'プライバシーポリシー',
    ko: '개인정보처리방침',
    es: 'Política de Privacidad',
    pt: 'Política de Privacidade',
  } as Record<Locale, string>,
  lastUpdated: {
    en: 'Last updated: June 1, 2025',
    zh: '最后更新：2025年6月1日',
    ja: '最終更新日：2025年6月1日',
    ko: '최종 업데이트: 2025년 6월 1일',
    es: 'Última actualización: 1 de junio de 2025',
    pt: 'Última atualização: 1 de junho de 2025',
  } as Record<Locale, string>,
  sections: [
    {
      id: 'introduction',
      headings: {
        en: '1. Introduction',
        zh: '一、引言',
        ja: '1. はじめに',
        ko: '1. 소개',
        es: '1. Introducción',
        pt: '1. Introdução',
      } as Record<Locale, string>,
      bodies: {
        en: `At {siteName}, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website {domain} (the "Site"). Please read this Privacy Policy carefully. By accessing or using the Site, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy. If you do not agree with our policies and practices, please do not use the Site.`,
        zh: `在{siteName}，我们非常重视您的隐私。本隐私政策说明了当您访问我们的网站{domain}（以下简称"本网站"）时，我们如何收集、使用、披露和保护您的信息。请仔细阅读本隐私政策。通过访问或使用本网站，即表示您确认已阅读、理解并同意受本隐私政策所有条款的约束。如果您不同意我们的政策和做法，请勿使用本网站。`,
        ja: `{siteName}（以下「当サイト」）は、お客様のプライバシーを真剣に考慮しています。本プライバシーポリシーは、お客様が当サイト{domain}にアクセスした際に、お客様の情報をどのように収集、使用、開示、保護するかについて説明するものです。本プライバシーポリシーをよくお読みください。当サイトにアクセスまたは使用することにより、お客様は本プライバシーポリシーのすべての条項を読了し、理解し、拘束されることに同意したものとみなされます。`,
        ko: `{siteName}은(는) 귀하의 개인정보를 중요하게 생각합니다. 본 개인정보처리방침은 귀하가 당사 웹사이트 {domain}("사이트")을 방문할 때 귀하의 정보를 수집, 사용, 공개 및 보호하는 방법을 설명합니다. 본 개인정보처리방침을 주의 깊게 읽어주시기 바랍니다. 사이트에 접속하거나 사용함으로써 귀하는 본 개인정보처리방침의 모든 조건을 읽고, 이해하며, 이에 구속되는 것에 동의한 것으로 간주됩니다.`,
        es: `En {siteName}, nos tomamos su privacidad en serio. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando visita nuestro sitio web {domain} (el "Sitio"). Lea atentamente esta Política de Privacidad. Al acceder o utilizar el Sitio, usted reconoce que ha leído, comprendido y acepta estar sujeto a todos los términos de esta Política de Privacidad.`,
        pt: `No {siteName}, levamos a sua privacidade a sério. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você visita nosso site {domain} (o "Site"). Leia esta Política de Privacidade cuidadosamente. Ao acessar ou usar o Site, você reconhece que leu, compreendeu e concorda em ficar vinculado a todos os termos desta Política de Privacidade.`,
      } as Record<Locale, string>,
    },
    {
      id: 'information-we-collect',
      headings: {
        en: '2. Information We Collect',
        zh: '二、我们收集的信息',
        ja: '2. 収集する情報',
        ko: '2. 수집하는 정보',
        es: '2. Información que Recopilamos',
        pt: '2. Informações que Coletamos',
      } as Record<Locale, string>,
      bodies: {
        en: `We may collect certain information automatically when you visit our Site. This includes your IP address, browser type, operating system, referring URLs, device type, and browsing behavior such as pages visited, time spent on pages, and interactions with the converter tool. This information is collected through cookies, web beacons, and similar tracking technologies as described in the "Cookies and Third-Party Tracking" section below.

We do NOT collect, store, or process any personal data that you enter into the unit converter tool. All conversions are performed locally in your browser. We do not require account registration, and we do not collect names, email addresses, postal addresses, or payment information through the normal use of the Site.

If you contact us via email or a contact form, we will collect the information you voluntarily provide, such as your name and email address, solely for the purpose of responding to your inquiry.`,
        zh: `当您访问我们的网站时，我们可能会自动收集某些信息。这包括您的IP地址、浏览器类型、操作系统、来源URL、设备类型以及浏览行为，如访问的页面、在页面上的停留时间以及与换算工具的交互。这些信息通过cookies、网络信标和类似跟踪技术收集，详见下方"Cookie和第三方跟踪"部分。

我们不会收集、存储或处理您在单位换算器中输入的任何个人数据。所有换算均在您的浏览器本地执行。我们不需要帐户注册，在正常使用网站过程中，我们不会收集姓名、电子邮件地址、邮寄地址或付款信息。

如果您通过电子邮件或联系表格联系我们，我们将收集您自愿提供的信息，如您的姓名和电子邮件地址，仅用于回复您的询问。`,
        ja: `お客様が当サイトにアクセスする際に、特定の情報が自動的に収集される場合があります。これには、IPアドレス、ブラウザの種類、オペレーティングシステム、参照元URL、デバイスの種類、および訪問したページ、ページ滞在時間、変換ツールとのやり取りなどの閲覧行動が含まれます。これらの情報は、以下の「Cookieとサードパーティトラッキング」のセクションで説明されているように、Cookie、ウェブビーコン、および類似の追跡技術を通じて収集されます。

お客様が単位変換ツールに入力した個人データは一切収集、保存、処理いたしません。すべての変換はお客様のブラウザ上でローカルに実行されます。アカウント登録は不要であり、サイトの通常使用において、氏名、メールアドレス、住所、支払い情報を収集することはありません。

メールまたはお問い合わせフォームでご連絡いただいた場合、お問い合わせへの返信目的に限り、お客様が自発的に提供された氏名やメールアドレスなどの情報を収集します。`,
        ko: `귀하가 당사 사이트를 방문할 때 특정 정보가 자동으로 수집될 수 있습니다. 여기에는 IP 주소, 브라우저 유형, 운영 체제, 참조 URL, 기기 유형 및 방문한 페이지, 페이지 체류 시간, 변환기 도구와의 상호작용과 같은 탐색 행동이 포함됩니다. 이 정보는 아래 "쿠키 및 타사 추적" 섹션에 설명된 대로 쿠키, 웹 비콘 및 유사한 추적 기술을 통해 수집됩니다.

당사는 귀하가 단위 변환기 도구에 입력한 개인 데이터를 수집, 저장 또는 처리하지 않습니다. 모든 변환은 귀하의 브라우저에서 로컬로 수행됩니다. 계정 등록이 필요하지 않으며, 사이트의 정상적인 사용을 통해 이름, 이메일 주소, 우편 주소 또는 결제 정보를 수집하지 않습니다.

이메일 또는 문의 양식을 통해 연락하시는 경우, 문의에 응답할 목적으로만 귀하가 자발적으로 제공한 이름 및 이메일 주소와 같은 정보를 수집합니다.`,
        es: `Podemos recopilar automáticamente cierta información cuando visita nuestro Sitio. Esto incluye su dirección IP, tipo de navegador, sistema operativo, URL de referencia, tipo de dispositivo y comportamiento de navegación como páginas visitadas, tiempo en las páginas e interacciones con la herramienta conversora. Esta información se recopila a través de cookies, web beacons y tecnologías de seguimiento similares, como se describe en la sección "Cookies y Seguimiento de Terceros".

NO recopilamos, almacenamos ni procesamos ningún dato personal que usted ingrese en la herramienta conversora de unidades. Todas las conversiones se realizan localmente en su navegador. No requerimos registro de cuenta, y no recopilamos nombres, direcciones de correo electrónico, direcciones postales ni información de pago mediante el uso normal del Sitio.

Si se comunica con nosotros por correo electrónico o mediante un formulario de contacto, recopilaremos la información que usted proporcione voluntariamente, como su nombre y dirección de correo electrónico, únicamente con el propósito de responder a su consulta.`,
        pt: `Podemos coletar automaticamente certas informações quando você visita nosso Site. Isso inclui seu endereço IP, tipo de navegador, sistema operacional, URLs de referência, tipo de dispositivo e comportamento de navegação, como páginas visitadas, tempo gasto nas páginas e interações com a ferramenta de conversão. Essas informações são coletadas por meio de cookies, web beacons e tecnologias de rastreamento semelhantes, conforme descrito na seção "Cookies e Rastreamento de Terceiros" abaixo.

NÃO coletamos, armazenamos ou processamos quaisquer dados pessoais que você insira na ferramenta de conversão de unidades. Todas as conversões são realizadas localmente no seu navegador. Não exigimos registro de conta e não coletamos nomes, endereços de e-mail, endereços postais ou informações de pagamento através do uso normal do Site.

Se você entrar em contato conosco por e-mail ou formulário de contato, coletaremos as informações que você fornecer voluntariamente, como seu nome e endereço de e-mail, exclusivamente para responder à sua consulta.`,
      } as Record<Locale, string>,
    },
    {
      id: 'cookies',
      headings: {
        en: '3. Cookies and Third-Party Tracking',
        zh: '三、Cookie和第三方跟踪',
        ja: '3. Cookieとサードパーティトラッキング',
        ko: '3. 쿠키 및 타사 추적',
        es: '3. Cookies y Seguimiento de Terceros',
        pt: '3. Cookies e Rastreamento de Terceiros',
      } as Record<Locale, string>,
      bodies: {
        en: `Our Site uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and serve personalized advertisements.

We use the following types of cookies:

- Essential Cookies: These cookies are necessary for the Site to function properly. They enable basic features such as page navigation and access to secure areas of the Site.
- Analytics Cookies: These cookies help us understand how visitors interact with the Site by collecting and reporting information anonymously.
- Advertising Cookies: These cookies are used to deliver advertisements that are more relevant to you and your interests.

Google AdSense and Third-Party Cookies
We use Google AdSense, a third-party advertising service provided by Google LLC ("Google"), to display advertisements on our Site. Google AdSense uses cookies (including the DoubleClick cookie) to serve ads based on your prior visits to our Site or other websites. These cookies enable Google and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.

You may opt out of personalized advertising by visiting Google's Ads Settings at https://www.google.com/settings/ads. Alternatively, you can opt out of third-party cookies used for interest-based advertising by visiting the Network Advertising Initiative opt-out page at https://optout.networkadvertising.org/.

Third-Party Vendors
Other third-party vendors, including ad networks and analytics providers, may also use cookies, web beacons, or similar technologies to collect information about your browsing activities across different websites over time. These vendors may use this information to provide you with interest-based advertising or other targeted content.

Cookie Management
Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or to alert you when cookies are being sent. Please note that if you disable cookies, some features of the Site may not function properly.`,
        zh: `我们的网站使用cookies和类似跟踪技术来增强您的浏览体验、分析网站流量以及投放个性化广告。

我们使用以下类型的cookies：

- 必要Cookie：这些Cookie是网站正常运行所必需的。它们支持页面导航和网站安全区域访问等基本功能。
- 分析Cookie：这些Cookie通过匿名收集和报告信息，帮助我们了解访问者如何与网站互动。
- 广告Cookie：这些Cookie用于投放与您和您的兴趣更相关的广告。

Google AdSense 和第三方Cookie
我们使用Google LLC（以下简称"Google"）提供的第三方广告服务Google AdSense在本网站展示广告。Google AdSense使用Cookie（包括DoubleClick Cookie）根据您之前访问我们网站或其他网站的情况投放广告。这些Cookie使Google及其合作方能够根据用户访问您的网站和/或互联网上的其他网站的情况向用户投放广告。

您可以通过访问 https://www.google.com/settings/ads 来选择退出个性化广告。或者，您也可以访问网络广告倡议退订页面 https://optout.networkadvertising.org/ 来退订用于兴趣导向广告的第三方Cookie。

第三方供应商
其他第三方供应商（包括广告网络和分析提供商）也可能使用Cookie、网络信标或类似技术，收集您在不同网站上随时间推移的浏览活动信息。这些供应商可能使用这些信息向您提供兴趣导向广告或其他定向内容。

Cookie管理
大多数网络浏览器允许您通过其设置控制Cookie。您可以将浏览器设置为拒绝Cookie或在发送Cookie时提醒您。请注意，如果您禁用Cookie，网站的某些功能可能无法正常运行。`,
        ja: `当サイトでは、ブラウジング体験の向上、サイトトラフィックの分析、パーソナライズされた広告の配信のために、Cookieおよび類似の追跡技術を使用しています。

当サイトでは以下の種類のCookieを使用しています：

- 必須Cookie：サイトが適切に機能するために必要なCookieです。ページナビゲーションやサイトの安全なエリアへのアクセスなどの基本機能を有効にします。
- 分析Cookie：情報を匿名で収集・報告することにより、訪問者がサイトとどのようにやり取りするかを把握するのに役立ちます。
- 広告Cookie：お客様とお客様の興味に特化した広告を配信するために使用されます。

Google AdSense とサードパーティCookie
当サイトでは、Google LLC（以下「Google」）が提供する第三者広告サービスGoogle AdSenseを使用して広告を表示しています。Google AdSenseは、Cookie（DoubleClick Cookieを含む）を使用して、お客様の当サイトや他のサイトへの過去のアクセスに基づいて広告を配信します。これらのCookieにより、Googleおよびそのパートナーは、ユーザーのサイト訪問履歴に基づいて広告を配信することができます。

パーソナライズド広告は、https://www.google.com/settings/ads のGoogleの広告設定からオプトアウトできます。また、興味に基づく広告に使用されるサードパーティCookieは、Network Advertising Initiativeのオプトアウトページ https://optout.networkadvertising.org/ からオプトアウトできます。

第三者ベンダー
広告ネットワークや分析プロバイダを含む他の第三者ベンダーも、Cookie、ウェブビーコン、または類似の技術を使用して、時間の経過とともにさまざまなウェブサイトでの閲覧活動に関する情報を収集する場合があります。これらのベンダーは、この情報を使用して興味に基づく広告やその他のターゲットコンテンツを提供する場合があります。

Cookie管理
ほとんどのWebブラウザでは、設定を通じてCookieを制御できます。ブラウザを設定してCookieを拒否したり、Cookieが送信されたときに警告を表示させることができます。Cookieを無効にすると、サイトの一部の機能が正常に動作しない場合があることにご注意ください。`,
        ko: `당사 사이트는 쿠키 및 유사한 추적 기술을 사용하여 귀하의 브라우징 경험을 향상시키고, 사이트 트래픽을 분석하며, 맞춤형 광고를 제공합니다.

당사는 다음과 같은 유형의 쿠키를 사용합니다:

- 필수 쿠키: 이 쿠키는 사이트가 제대로 작동하는 데 필요합니다. 페이지 탐색 및 사이트의 안전한 영역에 대한 접근과 같은 기본 기능을 활성화합니다.
- 분석 쿠키: 이 쿠키는 정보를 익명으로 수집하고 보고함으로써 방문자가 사이트와 상호작용하는 방식을 이해하는 데 도움을 줍니다.
- 광고 쿠키: 이 쿠키는 귀하와 귀하의 관심사에 더 관련성 높은 광고를 제공하는 데 사용됩니다.

Google AdSense 및 타사 쿠키
당사는 Google LLC("Google")가 제공하는 타사 광고 서비스인 Google AdSense를 사용하여 사이트에 광고를 게재합니다. Google AdSense는 쿠키(DoubleClick 쿠키 포함)를 사용하여 귀하의 이전 사이트 방문 또는 다른 웹사이트 방문을 기반으로 광고를 게재합니다. 이러한 쿠키는 Google 및 그 파트너가 사용자의 사이트 및/또는 인터넷상의 다른 사이트 방문을 기반으로 광고를 게재할 수 있게 합니다.

https://www.google.com/settings/ads 의 Google 광고 설정에서 맞춤형 광고를 거부할 수 있습니다. 또는 https://optout.networkadvertising.org/ 의 Network Advertising Initiative 옵트아웃 페이지에서 관심 기반 광고에 사용되는 타사 쿠키를 거부할 수 있습니다.

타사 공급업체
광고 네트워크 및 분석 제공업체를 포함한 기타 타사 공급업체도 쿠키, 웹 비콘 또는 유사한 기술을 사용하여 시간이 지남에 따라 다양한 웹사이트에서의 귀하의 브라우징 활동에 대한 정보를 수집할 수 있습니다. 이러한 공급업체는 이 정보를 사용하여 귀하에게 관심 기반 광고 또는 기타 타겟 콘텐츠를 제공할 수 있습니다.

쿠키 관리
대부분의 웹 브라우저는 설정을 통해 쿠키를 제어할 수 있습니다. 브라우저를 설정하여 쿠키를 거부하거나 쿠키가 전송될 때 알림을 받을 수 있습니다. 쿠키를 비활성화하면 사이트의 일부 기능이 제대로 작동하지 않을 수 있습니다.`,
        es: `Nuestro Sitio utiliza cookies y tecnologías de seguimiento similares para mejorar su experiencia de navegación, analizar el tráfico del sitio y ofrecer anuncios personalizados.

Utilizamos los siguientes tipos de cookies:

- Cookies Esenciales: Estas cookies son necesarias para que el Sitio funcione correctamente. Permiten funciones básicas como la navegación de páginas y el acceso a áreas seguras del Sitio.
- Cookies Analíticas: Estas cookies nos ayudan a comprender cómo los visitantes interactúan con el Sitio recopilando y reportando información de forma anónima.
- Cookies Publicitarias: Estas cookies se utilizan para ofrecer anuncios más relevantes para usted y sus intereses.

Google AdSense y Cookies de Terceros
Utilizamos Google AdSense, un servicio de publicidad de terceros proporcionado por Google LLC ("Google"), para mostrar anuncios en nuestro Sitio. Google AdSense utiliza cookies (incluyendo la cookie DoubleClick) para mostrar anuncios basados en sus visitas anteriores a nuestro Sitio u otros sitios web. Estas cookies permiten a Google y sus socios mostrar anuncios basados en la visita de los usuarios a sus sitios y/u otros sitios en Internet.

Puede optar por no recibir publicidad personalizada visitando la Configuración de anuncios de Google en https://www.google.com/settings/ads. Alternativamente, puede optar por no participar en cookies de terceros utilizadas para publicidad basada en intereses visitando la página de exclusión de la Network Advertising Initiative en https://optout.networkadvertising.org/.

Proveedores Terceros
Otros proveedores externos, incluidas redes publicitarias y proveedores de análisis, también pueden utilizar cookies, web beacons o tecnologías similares para recopilar información sobre sus actividades de navegación en diferentes sitios web a lo largo del tiempo. Estos proveedores pueden utilizar esta información para ofrecerle publicidad basada en intereses u otro contenido dirigido.

Gestión de Cookies
La mayoría de los navegadores web le permiten controlar las cookies a través de sus configuraciones. Puede configurar su navegador para rechazar cookies o para alertarle cuando se envíen cookies. Tenga en cuenta que si deshabilita las cookies, algunas funciones del Sitio pueden no funcionar correctamente.`,
        pt: `Nosso Site utiliza cookies e tecnologias de rastreamento semelhantes para melhorar sua experiência de navegação, analisar o tráfego do site e exibir anúncios personalizados.

Utilizamos os seguintes tipos de cookies:

- Cookies Essenciais: Esses cookies são necessários para que o Site funcione corretamente. Eles permitem recursos básicos, como navegação de páginas e acesso a áreas seguras do Site.
- Cookies Analíticos: Esses cookies nos ajudam a entender como os visitantes interagem com o Site, coletando e relatando informações anonimamente.
- Cookies Publicitários: Esses cookies são usados para exibir anúncios mais relevantes para você e seus interesses.

Google AdSense e Cookies de Terceiros
Usamos o Google AdSense, um serviço de publicidade terceirizado fornecido pelo Google LLC ("Google"), para exibir anúncios em nosso Site. O Google AdSense usa cookies (incluindo o cookie DoubleClick) para exibir anúncios com base em suas visitas anteriores ao nosso Site ou a outros sites. Esses cookies permitem que o Google e seus parceiros exibam anúncios aos usuários com base na visita a seus sites e/ou outros sites na Internet.

Você pode optar por não receber publicidade personalizada visitando as Configurações de Anúncios do Google em https://www.google.com/settings/ads. Alternativamente, você pode optar por não usar cookies de terceiros usados para publicidade baseada em interesses visitando a página de exclusão da Network Advertising Initiative em https://optout.networkadvertising.org/.

Fornecedores Terceiros
Outros fornecedores terceirizados, incluindo redes de anúncios e provedores de análise, também podem usar cookies, web beacons ou tecnologias semelhantes para coletar informações sobre suas atividades de navegação em diferentes sites ao longo do tempo. Esses fornecedores podem usar essas informações para fornecer publicidade baseada em interesses ou outro conteúdo direcionado.

Gerenciamento de Cookies
A maioria dos navegadores da web permite que você controle cookies por meio de suas configurações. Você pode configurar seu navegador para recusar cookies ou alertá-lo quando cookies estiverem sendo enviados. Observe que, se você desabilitar os cookies, alguns recursos do Site podem não funcionar corretamente.`,
      } as Record<Locale, string>,
    },
    {
      id: 'google-adsense',
      headings: {
        en: '4. Google AdSense and Third-Party Cookies Declaration',
        zh: '四、Google AdSense 和第三方 Cookie 声明',
        ja: '4. Google AdSenseとサードパーティCookieに関する宣言',
        ko: '4. Google AdSense 및 타사 쿠키 선언',
        es: '4. Declaración de Google AdSense y Cookies de Terceros',
        pt: '4. Declaração do Google AdSense e Cookies de Terceiros',
      } as Record<Locale, string>,
      bodies: {
        en: `In compliance with Google's EU User Consent Policy and similar regulations worldwide, we provide the following specific notice regarding our use of Google AdSense:

Google AdSense is a service provided by Google LLC that allows us to display targeted advertisements on our Site. As part of this service, Google and its partners use cookies and other tracking technologies to collect data about your browsing activities across different websites over time. This data is used to:

- Serve advertisements that are more relevant to you and your interests (interest-based advertising)
- Limit the number of times you see a particular advertisement
- Measure the effectiveness of advertising campaigns
- Generate aggregated statistics about ad performance

The types of data collected may include:

- Your IP address (truncated/anonymized where required by local law)
- Browser type and version
- Device type and operating system
- Pages visited on our Site and other websites
- Clickstream data and interaction with advertisements
- Unique device identifiers

Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our Site and/or other sites on the Internet. You have the right to control whether these cookies are used. You can:

1. Visit Google's Ads Settings (https://www.google.com/settings/ads) to manage your preferences and opt out of personalized advertising
2. Visit the Network Advertising Initiative opt-out page (https://optout.networkadvertising.org/)
3. Visit the Digital Advertising Alliance's Consumer Choice page (https://www.aboutads.info/choices/)
4. Configure your browser settings to block or delete cookies
5. Use your mobile device's advertising ID settings to limit ad tracking

We do not transfer any personal data to Google. The data collected by Google AdSense is governed by Google's Privacy Policy (https://policies.google.com/privacy).`,
        zh: `根据Google的欧盟用户同意政策及全球类似法规，我们就使用Google AdSense提供以下具体声明：

Google AdSense是Google LLC提供的服务，允许我们在本网站上展示定向广告。作为此服务的一部分，Google及其合作方使用Cookie和其他跟踪技术，收集您在不同网站上随时间推移的浏览活动数据。这些数据用于：

- 投放与您和您的兴趣更相关的广告（兴趣导向广告）
- 限制您看到特定广告的次数
- 衡量广告活动的效果
- 生成关于广告效果的汇总统计

收集的数据类型可能包括：

- 您的IP地址（在当地法律要求时进行截断/匿名化）
- 浏览器类型和版本
- 设备类型和操作系统
- 在本网站和其他网站访问的页面
- 点击流数据及与广告的交互
- 唯一设备标识符

Google对广告Cookie的使用使其及其合作方能够根据您访问我们网站和/或互联网上其他网站的情况来投放广告。您有权控制是否使用这些Cookie。您可以：

1. 访问Google的广告设置页面（https://www.google.com/settings/ads）管理您的偏好并选择退出个性化广告
2. 访问网络广告倡议退订页面（https://optout.networkadvertising.org/）
3. 访问数字广告联盟的消费者选择页面（https://www.aboutads.info/choices/）
4. 配置浏览器设置以阻止或删除Cookie
5. 使用移动设备的广告ID设置来限制广告跟踪

我们不会向Google传输任何个人数据。Google AdSense收集的数据受Google隐私政策（https://policies.google.com/privacy）的约束。`,
        ja: `GoogleのEUユーザー同意ポリシーおよび世界中の同様の規制に従い、Google AdSenseの使用に関する以下の具体的な通知を提供します。

Google AdSenseは、Google LLCが提供するサービスであり、当サイトに関連する広告を表示することを可能にします。このサービスの一環として、Googleおよびそのパートナーは、Cookieやその他の追跡技術を使用して、時間の経過とともにさまざまなウェブサイトでのお客様の閲覧活動に関するデータを収集します。このデータは以下の目的で使用されます：

- お客様とお客様の興味に関連する広告を配信する（興味に基づく広告）
- 特定の広告を表示する回数を制限する
- 広告キャンペーンの効果を測定する
- 広告パフォーマンスに関する集計統計を生成する

収集されるデータの種類には以下が含まれる場合があります：

- IPアドレス（現地法で要求される場合は切り捨て/匿名化）
- ブラウザの種類とバージョン
- デバイスの種類とオペレーティングシステム
- 当サイトおよび他のウェブサイトで訪問したページ
- クリックストリームデータと広告とのやり取り
- 一意のデバイス識別子

Googleの広告Cookieの使用により、Googleおよびそのパートナーは、お客様の当サイトおよび/またはインターネット上の他のサイトへの訪問に基づいて広告を配信できます。これらのCookieを使用するかどうかはお客様が制御する権利があります。以下の方法で設定できます：

1. Googleの広告設定（https://www.google.com/settings/ads）にアクセスして、パーソナライズド広告の設定を管理およびオプトアウトする
2. Network Advertising Initiativeのオプトアウトページ（https://optout.networkadvertising.org/）にアクセスする
3. Digital Advertising AllianceのConsumer Choiceページ（https://www.aboutads.info/choices/）にアクセスする
4. ブラウザ設定でCookieをブロックまたは削除する
5. モバイルデバイスの広告ID設定を使用して広告追跡を制限する

当社はGoogleに個人データを転送することはありません。Google AdSenseによって収集されたデータは、Googleのプライバシーポリシー（https://policies.google.com/privacy）に準拠します。`,
        ko: `Google의 EU 사용자 동의 정책 및 전 세계의 유사한 규정을 준수하여 Google AdSense 사용에 관한 다음과 같은 특정 고지사항을 제공합니다.

Google AdSense는 Google LLC가 제공하는 서비스로, 당사 사이트에 타겟 광고를 게재할 수 있게 합니다. 이 서비스의 일부로 Google과 그 파트너는 쿠키 및 기타 추적 기술을 사용하여 시간이 지남에 따라 다양한 웹사이트에서 귀하의 브라우징 활동에 대한 데이터를 수집합니다. 이 데이터는 다음 용도로 사용됩니다:

- 귀하와 귀하의 관심사에 더 관련성 높은 광고 게재(관심 기반 광고)
- 특정 광고를 보는 횟수 제한
- 광고 캠페인의 효과 측정
- 광고 성과에 대한 집계 통계 생성

수집되는 데이터 유형에는 다음이 포함될 수 있습니다:

- IP 주소(현지 법률에서 요구하는 경우 잘림/익명화)
- 브라우저 유형 및 버전
- 기기 유형 및 운영 체제
- 당사 사이트 및 기타 웹사이트에서 방문한 페이지
- 클릭스트림 데이터 및 광고와의 상호작용
- 고유 기기 식별자

Google의 광고 쿠키 사용을 통해 Google과 그 파트너는 귀하의 사이트 방문 및/또는 인터넷상의 다른 사이트 방문을 기반으로 광고를 게재할 수 있습니다. 귀하는 이러한 쿠키 사용 여부를 제어할 권리가 있습니다. 다음과 같은 방법으로 설정할 수 있습니다:

1. Google 광고 설정(https://www.google.com/settings/ads)을 방문하여 기본 설정을 관리하고 맞춤형 광고 거부
2. Network Advertising Initiative 옵트아웃 페이지(https://optout.networkadvertising.org/) 방문
3. Digital Advertising Alliance의 Consumer Choice 페이지(https://www.aboutads.info/choices/) 방문
4. 브라우저 설정에서 쿠키 차단 또는 삭제
5. 모바일 기기의 광고 ID 설정을 사용하여 광고 추적 제한

당사는 Google에 개인 데이터를 전송하지 않습니다. Google AdSense가 수집한 데이터는 Google의 개인정보처리방침(https://policies.google.com/privacy)의 적용을 받습니다.`,
        es: `En cumplimiento de la Política de Consentimiento de Usuarios de la UE de Google y regulaciones similares en todo el mundo, proporcionamos el siguiente aviso específico sobre nuestro uso de Google AdSense:

Google AdSense es un servicio proporcionado por Google LLC que nos permite mostrar anuncios dirigidos en nuestro Sitio. Como parte de este servicio, Google y sus socios utilizan cookies y otras tecnologías de seguimiento para recopilar datos sobre sus actividades de navegación en diferentes sitios web a lo largo del tiempo. Estos datos se utilizan para:

- Mostrar anuncios más relevantes para usted y sus intereses (publicidad basada en intereses)
- Limitar el número de veces que ve un anuncio en particular
- Medir la efectividad de las campañas publicitarias
- Generar estadísticas agregadas sobre el rendimiento de los anuncios

Los tipos de datos recopilados pueden incluir:

- Su dirección IP (truncada/anónima cuando lo requiera la ley local)
- Tipo y versión del navegador
- Tipo de dispositivo y sistema operativo
- Páginas visitadas en nuestro Sitio y otros sitios web
- Datos de clics e interacción con anuncios
- Identificadores únicos de dispositivo

El uso de cookies publicitarias por parte de Google le permite a él y a sus socios mostrar anuncios basados en su visita a nuestro Sitio y/u otros sitios en Internet. Usted tiene derecho a controlar si se utilizan estas cookies. Puede:

1. Visitar la Configuración de anuncios de Google (https://www.google.com/settings/ads) para gestionar sus preferencias y optar por no recibir publicidad personalizada
2. Visitar la página de exclusión de la Network Advertising Initiative (https://optout.networkadvertising.org/)
3. Visitar la página de Elección del Consumidor de la Digital Advertising Alliance (https://www.aboutads.info/choices/)
4. Configurar su navegador para bloquear o eliminar cookies
5. Usar la configuración de ID de publicidad de su dispositivo móvil para limitar el seguimiento de anuncios

No transferimos ningún dato personal a Google. Los datos recopilados por Google AdSense se rigen por la Política de Privacidad de Google (https://policies.google.com/privacy).`,
        pt: `Em conformidade com a Política de Consentimento do Usuário da UE do Google e regulamentações similares em todo o mundo, fornecemos o seguinte aviso específico sobre nosso uso do Google AdSense:

O Google AdSense é um serviço fornecido pelo Google LLC que nos permite exibir anúncios direcionados em nosso Site. Como parte deste serviço, o Google e seus parceiros usam cookies e outras tecnologias de rastreamento para coletar dados sobre suas atividades de navegação em diferentes sites ao longo do tempo. Esses dados são usados para:

- Exibir anúncios mais relevantes para você e seus interesses (publicidade baseada em interesses)
- Limitar o número de vezes que você vê um anúncio específico
- Medir a eficácia das campanhas publicitárias
- Gerar estatísticas agregadas sobre o desempenho dos anúncios

Os tipos de dados coletados podem incluir:

- Seu endereço IP (truncado/anônimo quando exigido pela legislação local)
- Tipo e versão do navegador
- Tipo de dispositivo e sistema operacional
- Páginas visitadas em nosso Site e em outros sites
- Dados de clickstream e interação com anúncios
- Identificadores exclusivos de dispositivo

O uso de cookies de publicidade pelo Google permite que ele e seus parceiros exibam anúncios com base em sua visita ao nosso Site e/ou outros sites na Internet. Você tem o direito de controlar se esses cookies são usados. Você pode:

1. Visitar as Configurações de Anúncios do Google (https://www.google.com/settings/ads) para gerenciar suas preferências e optar por não receber publicidade personalizada
2. Visitar a página de exclusão da Network Advertising Initiative (https://optout.networkadvertising.org/)
3. Visitar a página de Escolha do Consumidor da Digital Advertising Alliance (https://www.aboutads.info/choices/)
4. Configurar seu navegador para bloquear ou excluir cookies
5. Usar as configurações de ID de publicidade do seu dispositivo móvel para limitar o rastreamento de anúncios

Não transferimos nenhum dado pessoal para o Google. Os dados coletados pelo Google AdSense são regidos pela Política de Privacidade do Google (https://policies.google.com/privacy).`,
      } as Record<Locale, string>,
    },
    {
      id: 'data-use',
      headings: {
        en: '5. How We Use Your Information',
        zh: '五、我们如何使用您的信息',
        ja: '5. 情報の使用目的',
        ko: '5. 정보 사용 방법',
        es: '5. Cómo Usamos su Información',
        pt: '5. Como Usamos Suas Informações',
      } as Record<Locale, string>,
      bodies: {
        en: `We use the information we collect for the following purposes:

- To operate, maintain, and improve the Site and its features
- To understand how users interact with the Site and analyze usage patterns
- To detect, prevent, and address technical issues and security threats
- To display relevant advertisements through Google AdSense and other ad networks
- To communicate with you if you contact us with inquiries or support requests
- To comply with legal obligations and enforce our Terms of Service

We do not sell, trade, or rent your personal information to third parties. We do not use the data entered into the unit converter tool for any purpose other than performing the conversion requested by you.`,
        zh: `我们将收集的信息用于以下目的：

- 运营、维护和改进网站及其功能
- 了解用户如何与网站互动并分析使用模式
- 检测、预防和解决技术问题及安全威胁
- 通过Google AdSense和其他广告网络展示相关广告
- 如果您联系我们进行咨询或支持请求，与您沟通
- 遵守法律义务并执行我们的服务条款

我们不会向第三方出售、交易或出租您的个人信息。我们不会将您在单位换算器中输入的数据用于任何除执行您请求的换算之外的目的。`,
        ja: `収集した情報は以下の目的で使用します：

- サイトとその機能の運用、維持、改善
- ユーザーがサイトとどのようにやり取りするかを理解し、利用パターンを分析
- 技術的な問題やセキュリティ上の脅威の検出、予防、対処
- Google AdSenseやその他の広告ネットワークを通じた関連広告の表示
- お問い合わせやサポートリクエストがあった場合の通信
- 法的義務の遵守と利用規約の執行

お客様の個人情報を第三者に販売、交換、貸与することはありません。お客様が単位変換ツールに入力したデータは、お客様が要求した変換の実行以外の目的では使用しません。`,
        ko: `당사는 수집한 정보를 다음 목적으로 사용합니다:

- 사이트 및 기능의 운영, 유지 및 개선
- 사용자가 사이트와 상호작용하는 방식 이해 및 사용 패턴 분석
- 기술적 문제 및 보안 위협 탐지, 예방 및 해결
- Google AdSense 및 기타 광고 네트워크를 통한 관련 광고 게재
- 문의나 지원 요청 시 귀하와의 소통
- 법적 의무 준수 및 서비스 약관 집행

당사는 귀하의 개인정보를 제3자에게 판매, 교환 또는 임대하지 않습니다. 단위 변환기 도구에 입력된 데이터는 귀하가 요청한 변환 수행 이외의 목적으로 사용하지 않습니다.`,
        es: `Utilizamos la información que recopilamos para los siguientes fines:

- Operar, mantener y mejorar el Sitio y sus funciones
- Comprender cómo los usuarios interactúan con el Sitio y analizar patrones de uso
- Detectar, prevenir y abordar problemas técnicos y amenazas de seguridad
- Mostrar anuncios relevantes a través de Google AdSense y otras redes publicitarias
- Comunicarnos con usted si nos contacta con consultas o solicitudes de soporte
- Cumplir con obligaciones legales y hacer cumplir nuestros Términos de Servicio

No vendemos, intercambiamos ni alquilamos su información personal a terceros. No utilizamos los datos ingresados en la herramienta conversora de unidades para ningún otro propósito que no sea realizar la conversión solicitada por usted.`,
        pt: `Usamos as informações que coletamos para os seguintes fins:

- Operar, manter e melhorar o Site e seus recursos
- Entender como os usuários interagem com o Site e analisar padrões de uso
- Detectar, prevenir e resolver problemas técnicos e ameaças de segurança
- Exibir anúncios relevantes através do Google AdSense e outras redes de anúncios
- Comunicar-nos com você se você nos contatar com perguntas ou solicitações de suporte
- Cumprir obrigações legais e aplicar nossos Termos de Serviço

Não vendemos, trocamos ou alugamos suas informações pessoais para terceiros. Não usamos os dados inseridos na ferramenta de conversão de unidades para qualquer finalidade que não seja realizar a conversão solicitada por você.`,
      } as Record<Locale, string>,
    },
    {
      id: 'data-retention',
      headings: {
        en: '6. Data Retention and Security',
        zh: '六、数据保留和安全',
        ja: '6. データの保持とセキュリティ',
        ko: '6. 데이터 보관 및 보안',
        es: '6. Retención y Seguridad de los Datos',
        pt: '6. Retenção e Segurança de Dados',
      } as Record<Locale, string>,
      bodies: {
        en: `We retain automatically collected analytics data for a period of up to 26 months, after which it is aggregated or deleted. If you contact us via email, we will retain your communication and contact information only for as long as necessary to respond to your inquiry and for record-keeping purposes.

We implement industry-standard security measures to protect your information, including SSL/TLS encryption for data transmission. However, please be aware that no method of electronic storage or transmission over the Internet is 100% secure, and we cannot guarantee absolute security.

The Site does not store any personal data entered into the converter tool — all conversion calculations are performed client-side using JavaScript in your browser.`,
        zh: `我们将自动收集的分析数据保留最多26个月，之后进行汇总或删除。如果您通过电子邮件联系我们，我们仅在回复您的询问和记录保存所需的时间内保留您的通信和联系信息。

我们采用行业标准的安全措施来保护您的信息，包括数据传输的SSL/TLS加密。但请注意，没有任何电子存储或互联网传输方法是100%安全的，我们无法保证绝对安全。

本网站不会存储您在换算器中输入的任何个人数据——所有换算计算均在您的浏览器中通过JavaScript在客户端执行。`,
        ja: `自動収集された分析データは最長26ヶ月間保持され、その後集計または削除されます。メールでお問い合わせいただいた場合、お問い合わせへの返信および記録保持に必要な期間のみ、通信内容と連絡先情報を保持します。

情報を保護するために、データ送信のSSL/TLS暗号化を含む業界標準のセキュリティ対策を実施しています。ただし、電子保存やインターネット上の送信方法は100%安全ではなく、絶対的な安全性を保証することはできません。

当サイトは、変換ツールに入力された個人データを保存しません。すべての変換計算は、お客様のブラウザでJavaScriptを使用してクライアント側で実行されます。`,
        ko: `자동 수집된 분석 데이터는 최대 26개월간 보관되며, 그 후 집계되거나 삭제됩니다. 이메일을 통해 문의하시는 경우, 문의에 응답하고 기록 보존 목적으로 필요한 기간 동안만 통신 내용과 연락처 정보를 보관합니다.

당사는 데이터 전송을 위한 SSL/TLS 암호화를 포함한 업계 표준 보안 조치를 시행하여 귀하의 정보를 보호합니다. 그러나 인터넷을 통한 전자 저장 또는 전송 방법은 100% 안전하지 않으며, 절대적인 보안을 보장할 수 없습니다.

사이트는 변환기 도구에 입력된 개인 데이터를 저장하지 않습니다. 모든 변환 계산은 귀하의 브라우저에서 JavaScript를 사용하여 클라이언트 측에서 수행됩니다.`,
        es: `Conservamos los datos de análisis recopilados automáticamente por un período de hasta 26 meses, después del cual se agregan o eliminan. Si se comunica con nosotros por correo electrónico, conservaremos su comunicación e información de contacto solo durante el tiempo necesario para responder a su consulta y para fines de mantenimiento de registros.

Implementamos medidas de seguridad estándar de la industria para proteger su información, incluido el cifrado SSL/TLS para la transmisión de datos. Sin embargo, tenga en cuenta que ningún método de almacenamiento electrónico o transmisión a través de Internet es 100% seguro, y no podemos garantizar una seguridad absoluta.

El Sitio no almacena ningún dato personal ingresado en la herramienta conversora — todos los cálculos de conversión se realizan del lado del cliente usando JavaScript en su navegador.`,
        pt: `Retemos os dados analíticos coletados automaticamente por um período de até 26 meses, após o qual são agregados ou excluídos. Se você entrar em contato conosco por e-mail, reteremos sua comunicação e informações de contato apenas pelo tempo necessário para responder à sua consulta e para fins de manutenção de registros.

Implementamos medidas de segurança padrão da indústria para proteger suas informações, incluindo criptografia SSL/TLS para transmissão de dados. No entanto, esteja ciente de que nenhum método de armazenamento eletrônico ou transmissão pela Internet é 100% seguro, e não podemos garantir segurança absoluta.

O Site não armazena nenhum dado pessoal inserido na ferramenta de conversão — todos os cálculos de conversão são realizados no lado do cliente usando JavaScript no seu navegador.`,
      } as Record<Locale, string>,
    },
    {
      id: 'third-party-links',
      headings: {
        en: '7. Third-Party Links and Services',
        zh: '七、第三方链接和服务',
        ja: '7. サードパーティのリンクとサービス',
        ko: '7. 타사 링크 및 서비스',
        es: '7. Enlaces y Servicios de Terceros',
        pt: '7. Links e Serviços de Terceiros',
      } as Record<Locale, string>,
      bodies: {
        en: `Our Site may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. We strongly advise you to review the privacy policy of every site you visit.

We use the following third-party services on our Site:

- Google AdSense (advertising) — Privacy Policy: https://policies.google.com/privacy
- Vercel Analytics (anonymized site analytics) — Privacy Policy: https://vercel.com/legal/privacy-policy
- Google Fonts (typography) — Privacy Policy: https://policies.google.com/privacy

These third-party services have their own privacy policies and data collection practices, which are independent of ours.`,
        zh: `我们的网站可能包含不属于我们所有或控制的第三方网站或服务的链接。我们对任何第三方网站或服务的内容、隐私政策或做法没有控制权，也不承担任何责任。我们强烈建议您查阅您访问的每个网站的隐私政策。

我们在网站上使用以下第三方服务：

- Google AdSense（广告）— 隐私政策：https://policies.google.com/privacy
- Vercel Analytics（匿名网站分析）— 隐私政策：https://vercel.com/legal/privacy-policy
- Google Fonts（字体）— 隐私政策：https://policies.google.com/privacy

这些第三方服务有其自己的隐私政策和数据收集实践，与我们的政策相互独立。`,
        ja: `当サイトには、当社が所有または管理していない第三者のウェブサイトやサービスへのリンクが含まれる場合があります。当社は、第三者のウェブサイトやサービスのコンテンツ、プライバシーポリシー、または慣行について管理権限を有しておらず、責任を負いません。アクセスするすべてのサイトのプライバシーポリシーを確認することを強くお勧めします。

当サイトでは以下の第三者サービスを使用しています：

- Google AdSense（広告）— プライバシーポリシー：https://policies.google.com/privacy
- Vercel Analytics（匿名サイト分析）— プライバシーポリシー：https://vercel.com/legal/privacy-policy
- Google Fonts（フォント）— プライバシーポリシー：https://policies.google.com/privacy

これらの第三者サービスには、当社とは独立した独自のプライバシーポリシーとデータ収集慣行があります。`,
        ko: `당사 사이트에는 당사가 소유하거나 통제하지 않는 타사 웹사이트 또는 서비스에 대한 링크가 포함될 수 있습니다. 당사는 타사 웹사이트 또는 서비스의 콘텐츠, 개인정보처리방침 또는 관행에 대해 통제권이 없으며 책임을 지지 않습니다. 방문하는 모든 사이트의 개인정보처리방침을 검토하실 것을 강력히 권장합니다.

당사 사이트에서는 다음과 같은 타사 서비스를 사용합니다:

- Google AdSense(광고) — 개인정보처리방침: https://policies.google.com/privacy
- Vercel Analytics(익명 사이트 분석) — 개인정보처리방침: https://vercel.com/legal/privacy-policy
- Google Fonts(서체) — 개인정보처리방침: https://policies.google.com/privacy

이러한 타사 서비스에는 당사와 독립적인 자체 개인정보처리방침 및 데이터 수집 관행이 있습니다.`,
        es: `Nuestro Sitio puede contener enlaces a sitios web o servicios de terceros que no son propiedad ni están controlados por nosotros. No tenemos control ni asumimos responsabilidad alguna por el contenido, las políticas de privacidad o las prácticas de sitios web o servicios de terceros. Le recomendamos encarecidamente que revise la política de privacidad de cada sitio que visite.

Utilizamos los siguientes servicios de terceros en nuestro Sitio:

- Google AdSense (publicidad) — Política de Privacidad: https://policies.google.com/privacy
- Vercel Analytics (análisis anónimo del sitio) — Política de Privacidad: https://vercel.com/legal/privacy-policy
- Google Fonts (tipografía) — Política de Privacidad: https://policies.google.com/privacy

Estos servicios de terceros tienen sus propias políticas de privacidad y prácticas de recopilación de datos, que son independientes de las nuestras.`,
        pt: `Nosso Site pode conter links para sites ou serviços de terceiros que não são de nossa propriedade ou控制ados por nós. Não temos controle e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros. Recomendamos fortemente que você revise a política de privacidade de cada site que visitar.

Utilizamos os seguintes serviços de terceiros em nosso Site:

- Google AdSense (publicidade) — Política de Privacidade: https://policies.google.com/privacy
- Vercel Analytics (análise anônima do site) — Política de Privacidade: https://vercel.com/legal/privacy-policy
- Google Fonts (tipografia) — Política de Privacidade: https://policies.google.com/privacy

Estes serviços de terceiros têm suas próprias políticas de privacidade e práticas de coleta de dados, que são independentes das nossas.`,
      } as Record<Locale, string>,
    },
    {
      id: 'children',
      headings: {
        en: '8. Children\'s Privacy',
        zh: '八、儿童隐私',
        ja: '8. 子どものプライバシー',
        ko: '8. 아동 프라이버시',
        es: '8. Privacidad de los Menores',
        pt: '8. Privacidade de Crianças',
      } as Record<Locale, string>,
      bodies: {
        en: `Our Site is not directed to children under the age of 13 (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children. If you believe that a child has provided us with personal information, please contact us immediately, and we will take steps to delete such information.`,
        zh: `我们的网站不面向13岁（或您所在司法管辖区的适用同意年龄）以下的儿童。我们不会故意收集儿童的个人信息。如果您认为有儿童向我们提供了个人信息，请立即联系我们，我们将采取措施删除此类信息。`,
        ja: `当サイトは、13歳（またはお客様の管轄区域における該当する同意年齢）未満のお子様を対象としていません。当社は、子どもから意図的に個人情報を収集することはありません。お子様が当社に個人情報を提供したと思われる場合は、直ちにご連絡ください。当社はそのような情報を削除する措置を講じます。`,
        ko: `당사 사이트는 13세(또는 해당 관할권의 해당 동의 연령) 미만의 아동을 대상으로 하지 않습니다. 당사는 아동으로부터 고의로 개인정보를 수집하지 않습니다. 아동이 당사에 개인정보를 제공했다고 생각되면 즉시 연락해 주시기 바랍니다. 당사는 해당 정보를 삭제하기 위한 조치를 취할 것입니다.`,
        es: `Nuestro Sitio no está dirigido a niños menores de 13 años (o la edad de consentimiento aplicable en su jurisdicción). No recopilamos a sabiendas información personal de niños. Si cree que un niño nos ha proporcionado información personal, comuníquese con nosotros de inmediato y tomaremos medidas para eliminar dicha información.`,
        pt: `Nosso Site não é direcionado a crianças menores de 13 anos (ou a idade de consentimento aplicável em sua jurisdição). Não coletamos intencionalmente informações pessoais de crianças. Se você acredita que uma criança nos forneceu informações pessoais, entre em contato conosco imediatamente e tomaremos medidas para excluir tais informações.`,
      } as Record<Locale, string>,
    },
    {
      id: 'gdpr',
      headings: {
        en: '9. Your Rights (GDPR, CCPA, and Other Regulations)',
        zh: '九、您的权利（GDPR、CCPA及其他法规）',
        ja: '9. お客様の権利（GDPR、CCPAおよびその他の規制）',
        ko: '9. 귀하의 권리(GDPR, CCPA 및 기타 규정)',
        es: '9. Sus Derechos (GDPR, CCPA y Otras Regulaciones)',
        pt: '9. Seus Direitos (GDPR, CCPA e Outros Regulamentos)',
      } as Record<Locale, string>,
      bodies: {
        en: `Depending on your jurisdiction, you may have the following rights regarding your personal information:

- Right to Access: You can request a copy of the personal information we hold about you.
- Right to Rectification: You can request that we correct any inaccurate or incomplete information.
- Right to Erasure ("Right to be Forgotten"): You can request that we delete your personal information, subject to certain exceptions.
- Right to Restrict Processing: You can request that we restrict the processing of your information.
- Right to Data Portability: You can request that we provide your information in a structured, commonly used, and machine-readable format.
- Right to Object: You can object to our processing of your information for direct marketing purposes or on grounds relating to your particular situation.
- Right to Withdraw Consent: If we rely on your consent to process your information, you have the right to withdraw that consent at any time.

To exercise any of these rights, please contact us using the information provided in the "Contact Us" section. We will respond to your request within the timeframe required by applicable law.

For users in the European Economic Area (EEA) or the United Kingdom, the data controller is {siteName}. Our legal basis for processing your information includes your consent, our legitimate interests in operating and improving the Site, and compliance with legal obligations.

For users in California (USA), the California Consumer Privacy Act (CCPA) provides you with additional rights, including the right to know what personal information is collected about you and the right to opt out of the sale of your personal information. We do not sell your personal information.

For users in Brazil, the Lei Geral de Proteção de Dados (LGPD) provides similar rights.

For users in Japan, the Act on the Protection of Personal Information (APPI) governs our handling of your data.

For users in South Korea, the Personal Information Protection Act (PIPA) governs our handling of your data.`,
        zh: `根据您所在的司法管辖区，您可能拥有以下关于您个人信息的权利：

- 访问权：您可以要求获取我们所持有的关于您的个人信息的副本。
- 更正权：您可以要求我们更正任何不准确或不完整的信息。
- 删除权（"被遗忘权"）：您可以要求我们删除您的个人信息，但须遵守某些例外情况。
- 限制处理权：您可以要求我们限制对您信息的处理。
- 数据可携带权：您可以要求我们以结构化、常用且机器可读的格式提供您的信息。
- 反对权：您可以反对我们为直接营销目的或基于您特定情况的原因处理您的信息。
- 撤回同意权：如果我们依赖您的同意来处理您的信息，您有权随时撤回该同意。

要行使任何这些权利，请使用"联系我们"部分提供的信息与我们联系。我们将在适用法律要求的时限内回复您的请求。

对于欧洲经济区（EEA）或英国的用户，数据控制者是{siteName}。我们处理您信息的法律依据包括您的同意、我们在运营和改进网站方面的合法利益以及遵守法律义务。

对于加利福尼亚州（美国）的用户，《加州消费者隐私法案》（CCPA）为您提供了额外权利，包括了解我们收集了哪些个人信息以及选择不出售您个人信息的权利。我们不出售您的个人信息。

对于巴西的用户，《通用数据保护法》（LGPD）提供了类似的权利。

对于日本的用户，《个人信息保护法》（APPI）规定了我们处理您数据的方式。

对于韩国的用户，《个人信息保护法》（PIPA）规定了我们处理您数据的方式。`,
        ja: `管轄区域に応じて、お客様はお客様の個人情報に関して以下の権利を有する場合があります：

- アクセス権：当社が保有するお客様の個人情報のコピーを請求できます。
- 訂正権：不正確または不完全な情報の訂正を請求できます。
- 消去権（「忘れられる権利」）：特定の例外を除き、お客様の個人情報の削除を請求できます。
- 処理制限権：お客様の情報の処理の制限を請求できます。
- データポータビリティ権：構造化され、一般的に使用され、機械可読な形式でお客様の情報の提供を請求できます。
- 拒否権：ダイレクトマーケティング目的またはお客様の特定の状況に関連する理由で、お客様の情報の処理に異議を唱えることができます。
- 同意撤回権：お客様の情報の処理について同意に依存している場合、お客様はいつでもその同意を撤回する権利を有します。

これらの権利を行使するには、「お問い合わせ」セクションに記載されている情報を使用してご連絡ください。適用される法律で要求される期間内にご請求に対応いたします。

欧州経済領域（EEA）または英国のユーザーの場合、データ管理者は{siteName}です。お客様の情報を処理する法的根拠には、お客様の同意、サイトの運営と改善における正当な利益、および法的義務の遵守が含まれます。

カリフォルニア州（米国）のユーザーの場合、カリフォルニア消費者プライバシー法（CCPA）により、収集される個人情報について知る権利や個人情報の販売を拒否する権利などの追加の権利が提供されます。当社はお客様の個人情報を販売しません。

ブラジルのユーザーの場合、一般データ保護法（LGPD）が同様の権利を提供します。

日本のユーザーの場合、個人情報の保護に関する法律（APPI）がお客様のデータの取り扱いを規定します。

韓国のユーザーの場合、個人情報保護法（PIPA）がお客様のデータの取り扱いを規定します。`,
        ko: `관할권에 따라 귀하는 귀하의 개인정보와 관련하여 다음과 같은 권리를 가질 수 있습니다:

- 접근권: 당사가 보유한 귀하의 개인정보 사본을 요청할 수 있습니다.
- 정정권: 부정확하거나 불완전한 정보의 정정을 요청할 수 있습니다.
- 삭제권("잊혀질 권리"): 특정 예외를 조건으로 귀하의 개인정보 삭제를 요청할 수 있습니다.
- 처리 제한권: 귀하의 정보 처리 제한을 요청할 수 있습니다.
- 데이터 이동권: 구조화되고 일반적으로 사용되며 기계 판독 가능한 형식으로 귀하의 정보 제공을 요청할 수 있습니다.
- 반대권: 직접 마케팅 목적 또는 귀하의 특정 상황과 관련된 사유로 귀하의 정보 처리에 반대할 수 있습니다.
- 동의 철회권: 귀하의 정보 처리를 위해 귀하의 동의에 의존하는 경우, 귀하는 언제든지 해당 동의를 철회할 권리가 있습니다.

이러한 권리를 행사하려면 "문의하기" 섹션에 제공된 정보를 사용하여 연락해 주시기 바랍니다. 당사는 관련 법률에서 요구하는 기간 내에 귀하의 요청에 응답할 것입니다.

유럽 경제 지역(EEA) 또는 영국 사용자의 경우 데이터 컨트롤러는 {siteName}입니다. 귀하의 정보를 처리하는 법적 근거에는 귀하의 동의, 사이트 운영 및 개선에 대한 당사의 정당한 이익, 법적 의무 준수가 포함됩니다.

캘리포니아(미국) 사용자의 경우 캘리포니아 소비자 개인정보 보호법(CCPA)은 귀하에 대해 수집된 개인정보를 알 권리와 귀하의 개인정보 판매를 거부할 권리를 포함한 추가 권리를 제공합니다. 당사는 귀하의 개인정보를 판매하지 않습니다.

브라질 사용자의 경우 일반 데이터 보호법(LGPD)이 유사한 권리를 제공합니다.

일본 사용자의 경우 개인정보 보호법(APPI)이 당사의 데이터 처리를 규율합니다.

한국 사용자의 경우 개인정보 보호법(PIPA)이 당사의 데이터 처리를 규율합니다.`,
        es: `Dependiendo de su jurisdicción, usted puede tener los siguientes derechos con respecto a su información personal:

- Derecho de Acceso: Puede solicitar una copia de la información personal que tenemos sobre usted.
- Derecho de Rectificación: Puede solicitar que corrijamos cualquier información inexacta o incompleta.
- Derecho de Supresión ("Derecho al Olvido"): Puede solicitar que eliminemos su información personal, sujeto a ciertas excepciones.
- Derecho a la Limitación del Tratamiento: Puede solicitar que limitemos el procesamiento de su información.
- Derecho a la Portabilidad de los Datos: Puede solicitar que proporcionemos su información en un formato estructurado, de uso común y legible por máquina.
- Derecho de Oposición: Puede oponerse al procesamiento de su información para fines de marketing directo o por motivos relacionados con su situación particular.
- Derecho a Retirar el Consentimiento: Si dependemos de su consentimiento para procesar su información, usted tiene derecho a retirar ese consentimiento en cualquier momento.

Para ejercer cualquiera de estos derechos, comuníquese con nosotros utilizando la información proporcionada en la sección "Contáctenos". Responderemos a su solicitud dentro del plazo requerido por la ley aplicable.

Para usuarios del Espacio Económico Europeo (EEE) o del Reino Unido, el controlador de datos es {siteName}. Nuestra base legal para procesar su información incluye su consentimiento, nuestros intereses legítimos en operar y mejorar el Sitio, y el cumplimiento de obligaciones legales.

Para usuarios de California (EE.UU.), la Ley de Privacidad del Consumidor de California (CCPA) le otorga derechos adicionales, incluido el derecho a saber qué información personal se recopila sobre usted y el derecho a optar por no vender su información personal. No vendemos su información personal.

Para usuarios de Brasil, la Lei Geral de Proteção de Dados (LGPD) proporciona derechos similares.

Para usuarios de Japón, la Ley de Protección de Información Personal (APPI) regula nuestro manejo de sus datos.

Para usuarios de Corea del Sur, la Ley de Protección de Información Personal (PIPA) regula nuestro manejo de sus datos.`,
        pt: `Dependendo da sua jurisdição, você pode ter os seguintes direitos em relação às suas informações pessoais:

- Direito de Acesso: Você pode solicitar uma cópia das informações pessoais que mantemos sobre você.
- Direito de Retificação: Você pode solicitar que corrijamos qualquer informação imprecisa ou incompleta.
- Direito de Exclusão ("Direito ao Esquecimento"): Você pode solicitar que excluamos suas informações pessoais, sujeito a certas exceções.
- Direito de Restringir o Processamento: Você pode solicitar que restrinjamos o processamento de suas informações.
- Direito à Portabilidade de Dados: Você pode solicitar que forneçamos suas informações em um formato estruturado, comumente usado e legível por máquina.
- Direito de Oposição: Você pode se opor ao processamento de suas informações para fins de marketing direto ou por motivos relacionados à sua situação particular.
- Direito de Retirar o Consentimento: Se confiarmos em seu consentimento para processar suas informações, você tem o direito de retirar esse consentimento a qualquer momento.

Para exercer qualquer um desses direitos, entre em contato conosco usando as informações fornecidas na seção "Fale Conosco". Responderemos à sua solicitação dentro do prazo exigido pela lei aplicável.

Para usuários no Espaço Econômico Europeu (EEE) ou no Reino Unido, o controlador de dados é {siteName}. Nossa base legal para processar suas informações inclui seu consentimento, nossos interesses legítimos em operar e melhorar o Site e o cumprimento de obrigações legais.

Para usuários na Califórnia (EUA), a Lei de Privacidade do Consumidor da Califórnia (CCPA) fornece direitos adicionais, incluindo o direito de saber quais informações pessoais são coletadas sobre você e o direito de optar por não vender suas informações pessoais. Não vendemos suas informações pessoais.

Para usuários no Brasil, a Lei Geral de Proteção de Dados (LGPD) fornece direitos semelhantes.

Para usuários no Japão, a Lei de Proteção de Informações Pessoais (APPI) rege nosso tratamento de seus dados.

Para usuários na Coreia do Sul, a Lei de Proteção de Informações Pessoais (PIPA) rege nosso tratamento de seus dados.`,
      } as Record<Locale, string>,
    },
    {
      id: 'changes',
      headings: {
        en: '10. Changes to This Privacy Policy',
        zh: '十、本隐私政策的变更',
        ja: '10. プライバシーポリシーの変更',
        ko: '10. 개인정보처리방침 변경',
        es: '10. Cambios a Esta Política de Privacidad',
        pt: '10. Alterações nesta Política de Privacidade',
      } as Record<Locale, string>,
      bodies: {
        en: `We reserve the right to update or modify this Privacy Policy at any time without prior notice. We will indicate the date of the most recent revision at the top of this page. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information. Your continued use of the Site after any changes to this Privacy Policy constitutes your acceptance of such changes.`,
        zh: `我们保留随时更新或修改本隐私政策的权利，无需事先通知。我们将在本页顶部注明最近修订的日期。我们鼓励您定期查阅本隐私政策，以了解我们如何保护您的信息。在本隐私政策发生任何更改后，您继续使用本网站即表示您接受这些更改。`,
        ja: `当社は、事前の通知なしにいつでも本プライバシーポリシーを更新または変更する権利を留保します。最新の改訂日をこのページの上部に表示します。お客様の情報がどのように保護されているかを把握するため、本プライバシーポリシーを定期的に確認することをお勧めします。本プライバシーポリシーの変更後もサイトを継続して使用することにより、お客様は当該変更を承認したものとみなされます。`,
        ko: `당사는 사전 통지 없이 언제든지 본 개인정보처리방침을 업데이트 또는 수정할 권리를 보유합니다. 최근 개정 날짜를 이 페이지 상단에 표시합니다. 개인정보처리방침을 정기적으로 검토하여 당사가 귀하의 정보를 보호하는 방법을 확인하시기 바랍니다. 본 개인정보처리방침의 변경 후에도 사이트를 계속 사용하면 귀하가 이러한 변경을 수락한 것으로 간주됩니다.`,
        es: `Nos reservamos el derecho de actualizar o modificar esta Política de Privacidad en cualquier momento sin previo aviso. Indicaremos la fecha de la revisión más reciente en la parte superior de esta página. Le recomendamos que revise periódicamente esta Política de Privacidad para mantenerse informado sobre cómo protegemos su información. El uso continuado del Sitio después de cualquier cambio a esta Política de Privacidad constituye su aceptación de dichos cambios.`,
        pt: `Reservamo-nos o direito de atualizar ou modificar esta Política de Privacidade a qualquer momento, sem aviso prévio. Indicaremos a data da revisão mais recente no topo desta página. Recomendamos que você revise esta Política de Privacidade periodicamente para se manter informado sobre como estamos protegendo suas informações. O uso contínuo do Site após quaisquer alterações nesta Política de Privacidade constitui sua aceitação de tais alterações.`,
      } as Record<Locale, string>,
    },
  ],
};

// ──── Metadata ────
const metaDescriptions: Record<Locale, string> = {
  en: 'Privacy Policy for UnitConvert — Learn how we collect, use, and protect your personal information. Includes Google AdSense third-party cookie disclosures.',
  zh: 'UnitConvert 隐私政策 — 了解我们如何收集、使用和保护您的个人信息。包含 Google AdSense 第三方 Cookie 声明。',
  ja: 'UnitConvert プライバシーポリシー — お客様の個人情報の収集、使用、保護方法について。Google AdSenseのサードパーティCookieに関する開示を含みます。',
  ko: 'UnitConvert 개인정보처리방침 — 당사가 개인정보를 수집, 사용 및 보호하는 방법을 알아보세요. Google AdSense 타사 쿠키 공개를 포함합니다.',
  es: 'Política de Privacidad de UnitConvert — Conozca cómo recopilamos, usamos y protegemos su información personal. Incluye divulgación de cookies de terceros de Google AdSense.',
  pt: 'Política de Privacidade do UnitConvert — Saiba como coletamos, usamos e protegemos suas informações pessoais. Inclui divulgação de cookies de terceiros do Google AdSense.',
};

export function generateStaticParams() {
  return LOCALES.map(locale => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const title = `${pageContent.title[locale]} — ${SITE.name}`;
  const canonical = `${SITE.domain}/${locale}/privacy/`;
  return {
    title,
    description: metaDescriptions[locale],
    canonical,
    alternates: {
      canonical,
      languages: {
        'x-default': `${SITE.domain}/en/privacy/`,
        ...Object.fromEntries(LOCALES.map(l => [l, `${SITE.domain}/${l}/privacy/`])),
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

export default function PrivacyPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const t = pageContent.title[locale];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
          <span className="bg-gradient-to-r from-brand-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {pageContent.title[locale]}
          </span>
        </h1>
        <p className="text-sm text-[var(--text-tertiary)]">{pageContent.lastUpdated[locale]}</p>
      </section>

      {/* Content */}
      <div className="space-y-8">
        {pageContent.sections.map(section => (
          <section key={section.id} id={section.id} className="card p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-4 text-[var(--text-primary)]">
              {section.headings[locale]}
            </h2>
            <div className="text-[var(--text-secondary)] leading-relaxed space-y-3 whitespace-pre-line">
              {section.bodies[locale]
                .replace(/\{siteName\}/g, SITE.name)
                .replace(/\{domain\}/g, SITE.domain)
                .split('\n\n')
                .map((paragraph, i) => (
                  <p key={i} className={paragraph.startsWith('- ') ? 'ml-4' : ''}>
                    {paragraph.startsWith('- ') ? (
                      <span className="block ml-4">{paragraph}</span>
                    ) : paragraph.startsWith('1.') || paragraph.startsWith('2.') || paragraph.startsWith('3.') || paragraph.startsWith('4.') || paragraph.startsWith('5.') ? (
                      <span className="block">{paragraph}</span>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
