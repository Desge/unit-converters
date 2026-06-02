import { LOCALES } from '@/lib/conversions';
import type { Locale } from '@/lib/conversions';
import { SITE } from '@/lib/seo';

// ──── Translation Data ────
const pageContent = {
  title: {
    en: 'Terms of Service',
    zh: '服务条款',
    ja: '利用規約',
    ko: '이용약관',
    es: 'Términos del Servicio',
    pt: 'Termos de Serviço',
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
      id: 'acceptance',
      headings: {
        en: '1. Acceptance of Terms',
        zh: '一、条款接受',
        ja: '1. 規約への同意',
        ko: '1. 약관 동의',
        es: '1. Aceptación de los Términos',
        pt: '1. Aceitação dos Termos',
      } as Record<Locale, string>,
      bodies: {
        en: `By accessing or using {siteName} (the "Site"), you agree to be bound by these Terms of Service (the "Terms"). If you do not agree with any part of these Terms, you must not use the Site. These Terms apply to all visitors, users, and others who access or use the Site.

{siteName} is an online unit conversion tool that provides free conversion services between various units of measurement, including but not limited to length, weight, temperature, area, volume, speed, data storage, time, currency, pressure, energy, power, angle, frequency, fuel consumption, force, torque, and density.`,
        zh: `通过访问或使用{siteName}（以下简称"本网站"），您同意受本服务条款（以下简称"本条款"）的约束。如果您不同意本条款的任何部分，您不得使用本网站。本条款适用于所有访问或使用本网站的访客、用户和其他人。

{siteName}是一个在线单位换算工具，提供各种测量单位之间的免费换算服务，包括但不限于长度、重量、温度、面积、体积、速度、数据存储、时间、货币、压力、能量、功率、角度、频率、燃油消耗、力、扭矩和密度。`,
        ja: `{siteName}（以下「当サイト」）にアクセスまたは使用することにより、お客様は本利用規約（以下「本規約」）に拘束されることに同意したものとみなされます。本規約のいかなる部分に同意しない場合は、当サイトを使用してはなりません。本規約は、当サイトにアクセスまたは使用するすべての訪問者、ユーザー、その他の者に適用されます。

{siteName}は、長さ、重さ、温度、面積、体積、速度、データ容量、時間、通貨、圧力、エネルギー、電力、角度、周波数、燃費、力、トルク、密度などを含むがこれらに限定されない、様々な測定単位間の無料変換サービスを提供するオンライン単位変換ツールです。`,
        ko: `{siteName}("사이트")에 접속하거나 사용함으로써 귀하는 본 이용약관("약관")에 구속되는 것에 동의합니다. 본 약관의任何 부분에 동의하지 않는 경우 사이트를 사용해서는 안 됩니다. 본 약관은 사이트에 접속하거나 사용하는 모든 방문자, 사용자 및 기타 사람에게 적용됩니다.

{siteName}은(는) 길이, 무게, 온도, 면적, 부피, 속도, 데이터 저장, 시간, 통화, 압력, 에너지, 전력, 각도, 주파수, 연비, 힘, 토크, 밀도 등을 포함하되 이에 국한되지 않는 다양한 측정 단위 간의 무료 변환 서비스를 제공하는 온라인 단위 변환 도구입니다.`,
        es: `Al acceder o utilizar {siteName} (el "Sitio"), usted acepta estar sujeto a estos Términos de Servicio (los "Términos"). Si no está de acuerdo con alguna parte de estos Términos, no debe utilizar el Sitio. Estos Términos se aplican a todos los visitantes, usuarios y otras personas que accedan o utilicen el Sitio.

{siteName} es una herramienta de conversión de unidades en línea que proporciona servicios gratuitos de conversión entre diversas unidades de medida, incluyendo pero no limitado a longitud, peso, temperatura, área, volumen, velocidad, almacenamiento de datos, tiempo, moneda, presión, energía, potencia, ángulo, frecuencia, consumo de combustible, fuerza, torque y densidad.`,
        pt: `Ao acessar ou usar o {siteName} (o "Site"), você concorda em ficar vinculado a estes Termos de Serviço (os "Termos"). Se você não concordar com qualquer parte destes Termos, não deve usar o Site. Estes Termos se aplicam a todos os visitantes, usuários e outras pessoas que acessam ou usam o Site.

O {siteName} é uma ferramenta de conversão de unidades online que fornece serviços gratuitos de conversão entre várias unidades de medida, incluindo, mas não se limitando a comprimento, peso, temperatura, área, volume, velocidade, armazenamento de dados, tempo, moeda, pressão, energia, potência, ângulo, frequência, consumo de combustível, força, torque e densidade.`,
      } as Record<Locale, string>,
    },
    {
      id: 'use-of-service',
      headings: {
        en: '2. Use of the Service',
        zh: '二、服务使用',
        ja: '2. サービスの利用',
        ko: '2. 서비스 이용',
        es: '2. Uso del Servicio',
        pt: '2. Uso do Serviço',
      } as Record<Locale, string>,
      bodies: {
        en: `The Site is provided for informational and educational purposes. You may use the conversion tools and browse the Site without creating an account. You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Site.

You agree not to:

- Use the Site in any way that violates applicable local, national, or international laws or regulations
- Attempt to interfere with the proper functioning of the Site, including introducing viruses, malware, or other harmful code
- Use any automated means (such as bots, scrapers, or spiders) to access or collect data from the Site without our express written permission
- Engage in any activity that imposes an unreasonable or disproportionately large load on our infrastructure
- Attempt to reverse engineer, decompile, or disassemble any aspect of the Site
- Use the Site to conduct any unauthorized commercial activity

All conversions performed on the Site are for reference purposes only. While we strive for accuracy, we make no guarantees regarding the precision of conversion results. You should independently verify critical conversions before relying on them.`,
        zh: `本网站仅供信息和教育目的使用。您无需创建帐户即可使用换算工具和浏览网站。您同意仅出于合法目的使用本网站，并且以不侵犯他人权利、限制或妨碍他人使用和享受本网站的方式使用。

您同意不从事以下行为：

- 以任何违反适用的地方、国家或国际法律法规的方式使用本网站
- 试图干扰本网站的正常运行，包括引入病毒、恶意软件或其他有害代码
- 未经我们明确书面许可，使用任何自动化手段（如机器人、爬虫或蜘蛛程序）访问或收集本网站的数据
- 从事任何对我们的基础设施施加不合理或过大负载的活动
- 试图对本网站的任何方面进行逆向工程、反编译或反汇编
- 使用本网站进行任何未经授权的商业活动

在本网站上进行的所有换算仅供参考。虽然我们力求准确，但我们不对换算结果的精确性作任何保证。在依赖关键换算结果之前，您应独立验证。`,
        ja: `当サイトは情報提供および教育目的で提供されています。アカウントを作成せずに、変換ツールを使用し、サイトを閲覧することができます。お客様は、適法な目的のため、および他人のサイトの使用および享受の権利を侵害、制限、または妨害しない方法でのみサイトを使用することに同意するものとします。

お客様は以下の行為を行わないことに同意します：

- 適用される地域、国内、または国際的な法律や規制に違反する方法でサイトを使用すること
- ウイルス、マルウェア、その他の有害なコードの導入を含む、サイトの適切な機能を妨害しようとすること
- 当社の明示的な書面による許可なしに、自動化手段（ボット、スクレイパー、スパイダーなど）を使用してサイトにアクセスしたりデータを収集したりすること
- インフラストラクチャに不合理または不均衡に大きな負荷をかける活動に従事すること
- サイトのいかなる側面もリバースエンジニアリング、逆コンパイル、または逆アセンブルしようとすること
- 許可されていない商業活動のためにサイトを使用すること

サイトで実行されるすべての変換は参照目的のみです。正確性に努めていますが、変換結果の精度については保証しません。重要な変換に依存する前に、お客様自身で確認する必要があります。`,
        ko: `사이트는 정보 제공 및 교육 목적으로 제공됩니다. 계정을 만들지 않고도 변환 도구를 사용하고 사이트를 탐색할 수 있습니다. 귀하는 합법적인 목적으로만, 그리고 타인의 사이트 사용 및 향유 권리를 침해, 제한 또는 방해하지 않는 방식으로 사이트를 사용하는 데 동의합니다.

귀하는 다음 행위를 하지 않기로 동의합니다:

- 해당 지역, 국가 또는 국제 법률이나 규정을 위반하는 방식으로 사이트 사용
- 바이러스, 악성 코드 또는 기타 유해한 코드 도입을 포함하여 사이트의 정상적인 기능 방해 시도
- 당사의 명시적 서면 허가 없이 자동화된 수단(봇, 스크래퍼 또는 스파이더 등)을 사용하여 사이트에 접근하거나 데이터 수집
- 인프라에 불합리하거나 불균형적으로 큰 부하를 가하는 활동
- 사이트의任何 측면을 역공학, 디컴파일 또는 역어셈블하려는 시도
- 승인되지 않은 상업 활동을 위해 사이트 사용

사이트에서 수행되는 모든 변환은 참고용으로만 제공됩니다. 정확성을 위해 노력하지만 변환 결과의 정밀도에 대해 보장하지 않습니다. 중요한 변환에 의존하기 전에 독립적으로 확인해야 합니다.`,
        es: `El Sitio se proporciona con fines informativos y educativos. Puede utilizar las herramientas de conversión y navegar por el Sitio sin crear una cuenta. Usted acepta utilizar el Sitio solo para fines legales y de una manera que no infrinja los derechos de otros, ni restrinja o inhiba el uso y disfrute del Sitio por parte de terceros.

Usted acepta no:

- Utilizar el Sitio de cualquier manera que viole las leyes o regulaciones locales, nacionales o internacionales aplicables
- Intentar interferir con el funcionamiento adecuado del Sitio, incluyendo la introducción de virus, malware u otro código dañino
- Utilizar cualquier medio automatizado (como bots, scrapers o spiders) para acceder o recopilar datos del Sitio sin nuestro permiso expreso por escrito
- Participar en cualquier actividad que imponga una carga irrazonable o desproporcionadamente grande en nuestra infraestructura
- Intentar realizar ingeniería inversa, descompilar o desensamblar cualquier aspecto del Sitio
- Utilizar el Sitio para realizar cualquier actividad comercial no autorizada

Todas las conversiones realizadas en el Sitio son solo con fines de referencia. Si bien nos esforzamos por la precisión, no garantizamos la exactitud de los resultados de conversión. Debe verificar de forma independiente las conversiones críticas antes de confiar en ellas.`,
        pt: `O Site é fornecido para fins informativos e educacionais. Você pode usar as ferramentas de conversão e navegar no Site sem criar uma conta. Você concorda em usar o Site apenas para fins legais e de forma que não infrinja os direitos de, restrinja ou iniba o uso e aproveitamento do Site por terceiros.

Você concorda em não:

- Usar o Site de qualquer forma que viole leis ou regulamentos locais, nacionais ou internacionais aplicáveis
- Tentar interferir no funcionamento adequado do Site, incluindo a introdução de vírus, malware ou outro código prejudicial
- Usar qualquer meio automatizado (como bots, scrapers ou spiders) para acessar ou coletar dados do Site sem nossa permissão expressa por escrito
- Envolver-se em qualquer atividade que imponha uma carga irracional ou desproporcionalmente grande em nossa infraestrutura
- Tentar fazer engenharia reversa, descompilar ou desmontar qualquer aspecto do Site
- Usar o Site para realizar qualquer atividade comercial não autorizada

Todas as conversões realizadas no Site são apenas para fins de referência. Embora nos esforcemos pela precisão, não garantimos a exatidão dos resultados de conversão. Você deve verificar independentemente as conversões críticas antes de confiar nelas.`,
      } as Record<Locale, string>,
    },
    {
      id: 'intellectual-property',
      headings: {
        en: '3. Intellectual Property',
        zh: '三、知识产权',
        ja: '3. 知的財産権',
        ko: '3. 지적 재산권',
        es: '3. Propiedad Intelectual',
        pt: '3. Propriedade Intelectual',
      } as Record<Locale, string>,
      bodies: {
        en: `The Site and its original content, features, and functionality — including but not limited to the code, design, layout, graphics, logos, and software — are owned by {siteName} and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.

You may not reproduce, distribute, modify, create derivative works from, publicly display, publicly perform, republish, download, store, or transmit any of the material on the Site without our prior written consent, except as follows:

- Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials
- You may store files that are automatically cached by your Web browser for display enhancement purposes
- You may print or download one copy of a reasonable number of pages of the Site for your own personal, non-commercial use and not for further reproduction, publication, or distribution

The {siteName} name and logo are trademarks of {siteName}. You may not use these trademarks without our prior written permission.`,
        zh: `本网站及其原创内容、特色和功能——包括但不限于代码、设计、布局、图形、标志和软件——归{siteName}所有，并受国际版权、商标、专利、商业秘密和其他知识产权或专有权利法律保护。

未经我们事先书面同意，您不得复制、分发、修改、创作衍生作品、公开展示、公开表演、重新发布、下载、存储或传输本网站的任何材料，以下情况除外：

- 您的计算机可以在访问和查看这些材料时，在RAM中临时存储此类材料的副本
- 您可以存储由Web浏览器为增强显示目的而自动缓存的文件
- 您可以打印或下载一份合理数量的网站页面，用于您个人的非商业用途，不得用于进一步复制、出版或分发

{siteName}名称和标志是{siteName}的商标。未经我们事先书面许可，您不得使用这些商标。`,
        ja: `サイトおよびそのオリジナルコンテンツ、機能、特性（コード、デザイン、レイアウト、グラフィック、ロゴ、ソフトウェアを含むがこれらに限定されない）は{siteName}が所有し、国際的な著作権、商標、特許、営業秘密、およびその他の知的財産権または所有権法によって保護されています。

当社の事前の書面による同意なしに、サイト上のいかなる素材も複製、配布、修正、二次的著作物の作成、公開表示、公開演奏、再発行、ダウンロード、保存、または送信することはできません。ただし、以下は除きます：

- コンピュータが素材へのアクセスおよび表示に付随してRAM内に一時的にコピーを保存すること
- 表示を強化するためにブラウザが自動的にキャッシュするファイルを保存すること
- 個人の非営利使用のために、合理的な数のサイトページを印刷またはダウンロードすること。ただし、さらなる複製、出版、配布は不可

{siteName}の名称およびロゴは{siteName}の商標です。事前の書面による許可なしにこれらの商標を使用することはできません。`,
        ko: `사이트 및 그 독창적인 콘텐츠, 기능 및 특성(코드, 디자인, 레이아웃, 그래픽, 로고 및 소프트웨어를 포함하되 이에 국한되지 않음)은 {siteName}의 소유이며 국제 저작권, 상표, 특허, 영업 비밀 및 기타 지적 재산권 또는 소유권 법률에 의해 보호됩니다.

당사의 사전 서면 동의 없이 사이트의 자료를 복제, 배포, 수정, 2차적 저작물 작성, 공개 전시, 공개 공연, 재발행, 다운로드, 저장 또는 전송할 수 없습니다. 단, 다음은 예외입니다:

- 컴퓨터가 해당 자료에 접근하고 보는 과정에서 RAM에 임시로 복사본을 저장하는 행위
- 웹 브라우저가 표시 향상을 위해 자동으로 캐시하는 파일을 저장하는 행위
- 개인적이고 비상업적인 용도로 합리적인 수의 사이트 페이지를 인쇄하거나 다운로드하는 행위. 단, 추가 복제, 출판 또는 배포는 불가

{siteName} 이름과 로고는 {siteName}의 상표입니다. 사전 서면 허가 없이 이러한 상표를 사용할 수 없습니다.`,
        es: `El Sitio y su contenido original, características y funcionalidad, incluyendo pero no limitado al código, diseño, maquetación, gráficos, logotipos y software, son propiedad de {siteName} y están protegidos por leyes internacionales de derechos de autor, marcas registradas, patentes, secretos comerciales y otras leyes de propiedad intelectual o derechos de propiedad.

No puede reproducir, distribuir, modificar, crear trabajos derivados, exhibir públicamente, ejecutar públicamente, volver a publicar, descargar, almacenar o transmitir ningún material del Sitio sin nuestro consentimiento previo por escrito, excepto en los siguientes casos:

- Su computadora puede almacenar temporalmente copias de dichos materiales en RAM incidentales a su acceso y visualización de esos materiales
- Puede almacenar archivos que su navegador web almacene automáticamente en caché para mejorar la visualización
- Puede imprimir o descargar una copia de un número razonable de páginas del Sitio para su uso personal y no comercial, y no para su posterior reproducción, publicación o distribución

El nombre y el logotipo de {siteName} son marcas registradas de {siteName}. No puede utilizar estas marcas sin nuestro permiso previo por escrito.`,
        pt: `O Site e seu conteúdo original, recursos e funcionalidade — incluindo, mas não se limitando a código, design, layout, gráficos, logotipos e software — são de propriedade do {siteName} e são protegidos por leis internacionais de direitos autorais, marcas registradas, patentes, segredos comerciais e outras leis de propriedade intelectual ou direitos de propriedade.

Você não pode reproduzir, distribuir, modificar, criar trabalhos derivados, exibir publicamente, executar publicamente, republicar, baixar, armazenar ou transmitir qualquer material do Site sem nosso consentimento prévio por escrito, exceto conforme abaixo:

- Seu computador pode armazenar temporariamente cópias de tais materiais na RAM incidentalmente ao seu acesso e visualização desses materiais
- Você pode armazenar arquivos que são automaticamente armazenados em cache pelo seu navegador da web para fins de melhoria de exibição
- Você pode imprimir ou baixar uma cópia de um número razoável de páginas do Site para seu uso pessoal e não comercial, e não para reprodução, publicação ou distribuição posterior

O nome e logotipo do {siteName} são marcas registradas do {siteName}. Você não pode usar essas marcas sem nossa permissão prévia por escrito.`,
      } as Record<Locale, string>,
    },
    {
      id: 'disclaimer',
      headings: {
        en: '4. Disclaimer of Warranties',
        zh: '四、免责声明',
        ja: '4. 保証の否認',
        ko: '4. 보증 부인',
        es: '4. Exención de Garantías',
        pt: '4. Isenção de Garantias',
      } as Record<Locale, string>,
      bodies: {
        en: `THE SITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, {siteName} DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.

{siteName} DOES NOT WARRANT THAT:

- The Site will function uninterrupted, secure, or available at any particular time or location
- Any errors or defects will be corrected
- The results obtained from the use of the Site will be accurate, reliable, or fit for your purposes
- The Site is free of viruses or other harmful components
- The conversion results are suitable for financial, medical, legal, engineering, or any other professional decisions

You acknowledge that the conversion results provided by the Site are for general reference only and should not be relied upon for critical applications such as medical dosages, financial transactions, engineering calculations, legal compliance, or any other situation where inaccurate information could result in harm, loss, or liability.`,
        zh: `本网站按"现状"和"现有可用"基础提供，不提供任何形式的明示或暗示保证。在适用法律允许的最大范围内，{siteName}不承担所有明示或暗示的保证，包括但不限于对适销性、特定用途适用性、所有权和非侵权的暗示保证。

{siteName}不保证：

- 本网站将在任何特定时间或地点不间断、安全或可用
- 任何错误或缺陷将被更正
- 使用本网站获得的结果将是准确、可靠或适合您目的的
- 本网站没有病毒或其他有害组件
- 换算结果适用于金融、医疗、法律、工程或任何其他专业决策

您确认本网站提供的换算结果仅供一般参考，不应依赖用于关键应用，如医疗剂量、金融交易、工程计算、法律合规或任何其他不准确信息可能导致伤害、损失或责任的情况。`,
        ja: `当サイトは「現状のまま」および「利用可能な状態で」提供され、明示または黙示を問わず、いかなる種類の保証もありません。適用法で認められる最大限の範囲において、{siteName}は、商品性、特定目的への適合性、権原、および非侵害の黙示的保証を含むがこれらに限定されない、すべての明示的および黙示的保証を否認します。

{siteName}は以下を保証しません：

- サイトが中断されず、安全であり、特定の時間や場所で利用可能であること
- エラーや欠陥が修正されること
- サイトの使用から得られた結果が正確、信頼性があり、お客様の目的に適合すること
- サイトにウイルスやその他の有害なコンポーネントがないこと
- 変換結果が財務、医療、法律、エンジニアリング、その他の専門的判断に適していること

お客様は、サイトが提供する変換結果が一般的な参考のみを目的としており、医療用投与量、金融取引、エンジニアリング計算、法的遵守、または不正確な情報が危害、損失、または責任をもたらす可能性のある状況など、重要な用途に依存すべきではないことを認識します。`,
        ko: `사이트는 "있는 그대로" 및 "이용 가능한 상태로" 제공되며, 명시적이거나 묵시적인任何 종류의 보증 없이 제공됩니다. 관련 법률이 허용하는 최대 범위 내에서 {siteName}은(는) 상품성, 특정 목적에의 적합성, 권리 소유권 및 비침해에 대한 묵시적 보증을 포함하되 이에 국한되지 않는 모든 명시적 및 묵시적 보증을 부인합니다.

{siteName}은(는) 다음을 보증하지 않습니다:

- 사이트가 중단 없이, 안전하게, 또는 특정 시간이나 장소에서 이용 가능할 것
- 오류나 결함이 수정될 것
- 사이트 사용에서 얻은 결과가 정확하거나, 신뢰할 수 있거나, 귀하의 목적에 적합할 것
- 사이트에 바이러스나 기타 유해한 구성 요소가 없을 것
- 변환 결과가 재정, 의료, 법률, 엔지니어링 또는 기타 전문적인 결정에 적합할 것

귀하는 사이트에서 제공하는 변환 결과가 일반적인 참고용으로만 제공되며, 의료 복용량, 금융 거래, 엔지니어링 계산, 법적 준수 또는 부정확한 정보가 피해, 손실 또는 책임을 초래할 수 있는 상황과 같은 중요한 용도로 의존해서는 안 됨을 인정합니다.`,
        es: `EL SITIO SE PROPORCIONA "TAL CUAL" Y "SEGÚN DISPONIBILIDAD", SIN GARANTÍAS DE NINGÚN TIPO, YA SEAN EXPRESAS O IMPLÍCITAS. EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY APLICABLE, {siteName} RENUNCIA A TODAS LAS GARANTÍAS, EXPRESAS O IMPLÍCITAS, INCLUYENDO PERO NO LIMITADO A GARANTÍAS IMPLÍCITAS DE COMERCIABILIDAD, IDONEIDAD PARA UN PROPÓSITO PARTICULAR, TÍTULO Y NO INFRACCIÓN.

{siteName} NO GARANTIZA QUE:

- El Sitio funcionará sin interrupciones, será seguro o estará disponible en ningún momento o lugar en particular
- Los errores o defectos serán corregidos
- Los resultados obtenidos del uso del Sitio serán precisos, confiables o adecuados para sus propósitos
- El Sitio esté libre de virus u otros componentes dañinos
- Los resultados de conversión sean adecuados para decisiones financieras, médicas, legales, de ingeniería o cualquier otra decisión profesional

Usted reconoce que los resultados de conversión proporcionados por el Sitio son solo para referencia general y no deben ser utilizados para aplicaciones críticas como dosis médicas, transacciones financieras, cálculos de ingeniería, cumplimiento legal o cualquier otra situación donde información inexacta podría resultar en daño, pérdida o responsabilidad.`,
        pt: `O SITE É FORNECIDO "COMO ESTÁ" E "CONFORME DISPONÍVEL", SEM GARANTIAS DE QUALQUER TIPO, EXPRESSAS OU IMPLÍCITAS. NA MÁXIMA EXTENSÃO PERMITIDA PELA LEI APLICÁVEL, O {siteName} SE ISENTA DE TODAS AS GARANTIAS, EXPRESSAS OU IMPLÍCITAS, INCLUINDO, MAS NÃO SE LIMITANDO A, GARANTIAS IMPLÍCITAS DE COMERCIALIZAÇÃO, ADEQUAÇÃO A UM FIM ESPECÍFICO, TÍTULO E NÃO VIOLAÇÃO.

O {siteName} NÃO GARANTE QUE:

- O Site funcionará ininterruptamente, será seguro ou estará disponível em qualquer horário ou local específico
- Quaisquer erros ou defeitos serão corrigidos
- Os resultados obtidos do uso do Site serão precisos, confiáveis ou adequados para seus propósitos
- O Site está livre de vírus ou outros componentes prejudiciais
- Os resultados de conversão são adequados para decisões financeiras, médicas, legais, de engenharia ou qualquer outra decisão profissional

Você reconhece que os resultados de conversão fornecidos pelo Site são apenas para referência geral e não devem ser usados para aplicações críticas, como dosagens médicas, transações financeiras, cálculos de engenharia, conformidade legal ou qualquer outra situação em que informações imprecisas possam resultar em danos, perdas ou responsabilidade.`,
      } as Record<Locale, string>,
    },
    {
      id: 'limitation-liability',
      headings: {
        en: '5. Limitation of Liability',
        zh: '五、责任限制',
        ja: '5. 責任の制限',
        ko: '5. 책임 제한',
        es: '5. Limitación de Responsabilidad',
        pt: '5. Limitação de Responsabilidade',
      } as Record<Locale, string>,
      bodies: {
        en: `TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL {siteName}, ITS OWNERS, OPERATORS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:

- Your use or inability to use the Site
- Any conduct or content of any third party on the Site
- Any content obtained from the Site
- Unauthorized access, use, or alteration of your transmissions or content
- Any errors, inaccuracies, or omissions in the conversion results or any other content on the Site

This limitation of liability applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, even if {siteName} has been advised of the possibility of such damage. Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for incidental or consequential damages, so some of the above limitations may not apply to you.`,
        zh: `在适用法律允许的最大范围内，{siteName}及其所有者、运营者、员工、代理人或关联公司在任何情况下均不对任何直接、间接、附带、特殊、后果性或惩罚性损害赔偿负责，包括但不限于利润、商誉、使用、数据或其他无形损失的损害赔偿，由以下原因导致：

- 您使用或无法使用本网站
- 任何第三方在本网站上的任何行为或内容
- 从本网站获得的任何内容
- 未经授权访问、使用或更改您的传输内容或数据
- 换算结果或本网站任何其他内容中的任何错误、不准确或遗漏

此责任限制适用于无论声称的责任是基于合同、侵权、过失、严格责任或任何其他基础，即使{siteName}已被告知此类损害的可能性。某些司法管辖区不允许排除某些保证或限制附带或后果性损害的责任，因此上述某些限制可能不适用于您。`,
        ja: `適用法で認められる最大限の範囲において、{siteName}、その所有者、運営者、従業員、代理人、または関連会社は、以下に起因する直接的、間接的、付随的、特別、結果的、または懲罰的損害（利益、のれん、使用、データ、またはその他の無形の損失に対する損害を含むがこれらに限定されない）について一切責任を負いません：

- お客様によるサイトの使用または使用不能
- サイト上の第三者の行為またはコンテンツ
- サイトから取得したコンテンツ
- お客様の送信またはコンテンツへの不正アクセス、使用、または変更
- 変換結果またはサイト上のその他のコンテンツの誤り、不正確、または脱落

この責任の制限は、主張される責任が契約、不法行為、過失、厳格責任、またはその他の根拠に基づくかどうかにかかわらず適用され、{siteName}がそのような損害の可能性について知らされていた場合でも同様とします。一部の法域では、特定の保証の除外や付随的または結果的損害に対する責任の制限を許可していないため、上記の制限の一部がお客様に適用されない場合があります。`,
        ko: `관련 법률이 허용하는 최대 범위 내에서 {siteName}, 그 소유자, 운영자, 직원, 대리인 또는 관계사는 다음으로 인한 직접, 간접, 부수적, 특별, 결과적 또는 징벌적 손해(이익, 영업권, 사용, 데이터 또는 기타 무형 손실에 대한 손해를 포함하되 이에 국한되지 않음)에 대해 책임을 지지 않습니다:

- 귀하의 사이트 사용 또는 사용 불능
- 사이트상의 제3자의 행위 또는 콘텐츠
- 사이트에서 얻은 콘텐츠
- 귀하의 전송 또는 콘텐츠에 대한 무단 액세스, 사용 또는 변경
- 변환 결과 또는 사이트상의 기타 콘텐츠의 오류, 부정확성 또는 누락

이 책임 제한은 주장된 책임이 계약, 불법 행위, 과실, 엄격 책임 또는 기타 근거에 기반하는지 여부에 관계없이 적용되며, {siteName}이(가) 그러한 손해의 가능성에 대해 고지받은 경우에도 마찬가지입니다. 일부 관할권에서는 특정 보증의 배제나 부수적 또는 결과적 손해에 대한 책임 제한을 허용하지 않으므로 위 제한 사항 중 일부가 귀하에게 적용되지 않을 수 있습니다.`,
        es: `EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY APLICABLE, EN NINGÚN CASO {siteName}, SUS PROPIETARIOS, OPERADORES, EMPLEADOS, AGENTES O AFILIADOS SERÁN RESPONSABLES POR DAÑOS DIRECTOS, INDIRECTOS, INCIDENTALES, ESPECIALES, CONSECUENCIALES O PUNITIVOS, INCLUYENDO PERO NO LIMITADO A DAÑOS POR PÉRDIDA DE GANANCIAS, BUENA VOLUNTAD, USO, DATOS U OTRAS PÉRDIDAS INTANGIBLES, RESULTANTES DE:

- Su uso o incapacidad de usar el Sitio
- Cualquier conducta o contenido de cualquier tercero en el Sitio
- Cualquier contenido obtenido del Sitio
- Acceso, uso o alteración no autorizados de sus transmisiones o contenido
- Cualquier error, inexactitud u omisión en los resultados de conversión o cualquier otro contenido del Sitio

Esta limitación de responsabilidad se aplica independientemente de si la supuesta responsabilidad se basa en contrato, agravio, negligencia, responsabilidad estricta o cualquier otra base, incluso si {siteName} ha sido informado de la posibilidad de dicho daño. Algunas jurisdicciones no permiten la exclusión de ciertas garantías o la limitación de responsabilidad por daños incidentales o consecuenciales, por lo que algunas de las limitaciones anteriores pueden no aplicarse a usted.`,
        pt: `NA MÁXIMA EXTENSÃO PERMITIDA PELA LEI APLICÁVEL, EM NENHUMA CIRCUNSTÂNCIA O {siteName}, SEUS PROPRIETÁRIOS, OPERADORES, FUNCIONÁRIOS, AGENTES OU AFILIADOS SERÃO RESPONSÁVEIS POR QUAISQUER DANOS DIRETOS, INDIRETOS, INCIDENTAIS, ESPECIAIS, CONSEQÜENCIAIS OU PUNITIVOS, INCLUINDO, MAS NÃO SE LIMITANDO A, DANOS POR PERDA DE LUCROS, GOODWILL, USO, DADOS OU OUTRAS PERDAS INTANGÍVEIS, RESULTANTES DE:

- Seu uso ou incapacidade de usar o Site
- Qualquer conduta ou conteúdo de qualquer terceiro no Site
- Qualquer conteúdo obtido do Site
- Acesso, uso ou alteração não autorizados de suas transmissões ou conteúdo
- Quaisquer erros, imprecisões ou omissões nos resultados de conversão ou qualquer outro conteúdo no Site

Esta limitação de responsabilidade se aplica independentemente de a suposta responsabilidade ser baseada em contrato, ato ilícito, negligência, responsabilidade objetiva ou qualquer outra base, mesmo que o {siteName} tenha sido informado da possibilidade de tais danos. Algumas jurisdições não permitem a exclusão de certas garantias ou a limitação de responsabilidade por danos incidentais ou conseqüenciais, portanto, algumas das limitações acima podem não se aplicar a você.`,
      } as Record<Locale, string>,
    },
    {
      id: 'indemnification',
      headings: {
        en: '6. Indemnification',
        zh: '六、赔偿',
        ja: '6. 補償',
        ko: '6. 면책',
        es: '6. Indemnización',
        pt: '6. Indenização',
      } as Record<Locale, string>,
      bodies: {
        en: `You agree to indemnify, defend, and hold harmless {siteName}, its owners, operators, employees, agents, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to reasonable attorneys' fees) arising from:

- Your use of and access to the Site
- Your violation of any term of these Terms
- Your violation of any third-party right, including without limitation any copyright, property, or privacy right
- Any claim that your use of the Site caused damage to a third party

This indemnification obligation will survive the termination of these Terms and your use of the Site.`,
        zh: `您同意赔偿、辩护并使{siteName}及其所有者、运营者、员工、代理人和关联公司免受任何及所有索赔、损害、义务、损失、责任、成本或债务以及费用（包括但不限于合理的律师费）的损害，这些由以下原因引起：

- 您对网站的使用和访问
- 您违反本条款的任何规定
- 您侵犯任何第三方权利，包括但不限于任何版权、财产或隐私权
- 任何声称您使用本网站对第三方造成损害的索赔

此赔偿义务在本条款终止以及您停止使用本网站后仍然有效。`,
        ja: `お客様は、{siteName}、その所有者、運営者、従業員、代理人、および関連会社を、以下に起因するすべての請求、損害、義務、損失、責任、費用、または債務、および経費（合理的な弁護士費用を含むがこれらに限定されない）から補償し、防御し、免責することに同意します：

- お客様によるサイトの使用およびアクセス
- お客様による本規約のいずれかの条項の違反
- 著作権、財産権、プライバシー権を含むがこれらに限定されない、お客様による第三者の権利の侵害
- お客様によるサイトの使用が第三者に損害を与えたという請求

この補償義務は、本規約の終了後およびお客様のサイト使用後も存続します。`,
        ko: `귀하는 {siteName}, 그 소유자, 운영자, 직원, 대리인 및 관계사를 다음으로 인해 발생하는 모든 청구, 손해, 의무, 손실, 책임, 비용 또는 채무 및 경비(합리적인 변호사 비용을 포함하되 이에 국한되지 않음)로부터 면책, 방어 및 보호하는 데 동의합니다:

- 귀하의 사이트 사용 및 접근
- 귀하의 본 약관의任何 조항 위반
- 저작권, 재산권 또는 개인정보 보호권을 포함하되 이에 국한되지 않는 귀하의 제3자 권리 침해
- 귀하의 사이트 사용이 제3자에게 손해를 입혔다는 청구

이 면책 의무는 본 약관의 종료 및 귀하의 사이트 사용 중단 후에도 존속합니다.`,
        es: `Usted acepta indemnizar, defender y mantener indemne a {siteName}, sus propietarios, operadores, empleados, agentes y afiliados de y contra cualquier reclamo, daño, obligación, pérdida, responsabilidad, costo o deuda, y gastos (incluyendo pero no limitado a honorarios razonables de abogados) que surjan de:

- Su uso y acceso al Sitio
- Su violación de cualquier término de estos Términos
- Su violación de cualquier derecho de terceros, incluyendo sin limitación cualquier derecho de autor, propiedad o privacidad
- Cualquier reclamo de que su uso del Sitio causó daños a un tercero

Esta obligación de indemnización sobrevivirá a la terminación de estos Términos y a su uso del Sitio.`,
        pt: `Você concorda em indenizar, defender e isentar o {siteName}, seus proprietários, operadores, funcionários, agentes e afiliados de e contra quaisquer reclamações, danos, obrigações, perdas, responsabilidades, custos ou dívidas e despesas (incluindo, mas não se limitando a honorários advocatícios razoáveis) decorrentes de:

- Seu uso e acesso ao Site
- Sua violação de qualquer termo destes Termos
- Sua violação de qualquer direito de terceiros, incluindo, sem limitação, qualquer direito autorais, propriedade ou privacidade
- Qualquer reclamação de que seu uso do Site causou danos a terceiros

Esta obrigação de indenização sobreviverá à rescisão destes Termos e ao seu uso do Site.`,
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
        en: `The Site may contain links to third-party websites, applications, or services that are not owned or controlled by {siteName}. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that {siteName} shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such third-party websites or services.

We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.`,
        zh: `本网站可能包含不属于{siteName}所有或控制的第三方网站、应用程序或服务的链接。我们对任何第三方网站或服务的内容、隐私政策或做法没有控制权，也不承担任何责任。您确认并同意，{siteName}对因使用或依赖任何此类第三方网站或服务上提供的任何内容、商品或服务而导致或 alleged 导致的任何损害或损失，不直接或间接承担责任。

我们强烈建议您阅读您访问的任何第三方网站或服务的条款和条件以及隐私政策。`,
        ja: `当サイトには、{siteName}が所有または管理していない第三者のウェブサイト、アプリケーション、またはサービスへのリンクが含まれる場合があります。当社は、第三者のウェブサイトやサービスのコンテンツ、プライバシーポリシー、または慣行について管理権限を有しておらず、責任を負いません。お客様は、{siteName}が、そのような第三者のウェブサイトやサービスで利用可能なコンテンツ、商品、またはサービスへのリンクの使用または依存に起因または関連して生じた損害や損失について、直接的または間接的に責任を負わないことを承認し、同意するものとします。

アクセスするすべての第三者のウェブサイトやサービスの利用規約とプライバシーポリシーをお読みになることを強くお勧めします。`,
        ko: `사이트에는 {siteName}이(가) 소유하거나 통제하지 않는 타사 웹사이트, 애플리케이션 또는 서비스에 대한 링크가 포함될 수 있습니다. 당사는 타사 웹사이트 또는 서비스의 콘텐츠, 개인정보처리방침 또는 관행에 대해 통제권이 없으며 책임을 지지 않습니다. 귀하는 {siteName}이(가) 그러한 타사 웹사이트 또는 서비스를 통해 제공되는 콘텐츠, 상품 또는 서비스의 사용이나 의존으로 인해 발생하거나 발생했다고 주장되는 손해나 손실에 대해 직간접적으로 책임을 지지 않음을 인정하고 동의합니다.

방문하는 모든 타사 웹사이트 또는 서비스의 이용약관 및 개인정보처리방침을 읽을 것을 강력히 권장합니다.`,
        es: `El Sitio puede contener enlaces a sitios web, aplicaciones o servicios de terceros que no son propiedad ni están controlados por {siteName}. No tenemos control ni asumimos responsabilidad alguna por el contenido, las políticas de privacidad o las prácticas de sitios web o servicios de terceros. Usted reconoce y acepta que {siteName} no será responsable, directa o indirectamente, por ningún daño o pérdida causados o supuestamente causados por o en relación con el uso o la confianza en cualquier contenido, bienes o servicios disponibles en o a través de dichos sitios web o servicios de terceros.

Le recomendamos encarecidamente que lea los términos y condiciones y las políticas de privacidad de cualquier sitio web o servicio de terceros que visite.`,
        pt: `O Site pode conter links para sites, aplicativos ou serviços de terceiros que não são de propriedade ou controlados pelo {siteName}. Não temos controle e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros. Você reconhece e concorda que o {siteName} não será responsável, direta ou indiretamente, por qualquer dano ou perda causados ou alegadamente causados por ou em conexão com o uso ou confiança em qualquer conteúdo, bens ou serviços disponíveis em ou através de tais sites ou serviços de terceiros.

Recomendamos fortemente que você leia os termos e condições e as políticas de privacidade de quaisquer sites ou serviços de terceiros que visitar.`,
      } as Record<Locale, string>,
    },
    {
      id: 'termination',
      headings: {
        en: '8. Termination',
        zh: '八、终止',
        ja: '8. 契約の終了',
        ko: '8. 계약 종료',
        es: '8. Terminación',
        pt: '8. Rescisão',
      } as Record<Locale, string>,
      bodies: {
        en: `We reserve the right to terminate or suspend your access to the Site immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.

Upon termination, your right to use the Site will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive termination, including but not limited to ownership provisions, warranty disclaimers, indemnification, and limitations of liability.`,
        zh: `我们保留以任何理由（包括但不限于您违反本条款）立即终止或暂停您对本网站访问的权利，无需事先通知或承担责任。

终止后，您使用本网站的权利将立即终止。本条款中按其性质应在终止后继续有效的所有规定，包括但不限于所有权条款、免责声明、赔偿条款和责任限制，应在终止后继续有效。`,
        ja: `当社は、お客様が本規約に違反した場合を含むがこれに限定されない任意の理由により、事前の通知または責任なしに、お客様のサイトへのアクセスを直ちに終了または停止する権利を留保します。

終了後、お客様のサイトを使用する権利は直ちに停止します。性質上終了後も存続すべき本規約のすべての規定（所有権に関する規定、保証の否認、補償、および責任の制限を含むがこれらに限定されない）は、終了後も存続します。`,
        ko: `당사는 귀하의 본 약관 위반을 포함하되 이에 국한되지 않는 어떤 이유로든 사전 통지나 책임 없이 귀하의 사이트 접근을 즉시 종료하거나 중단할 권리를 보유합니다.

종료 시 귀하의 사이트 사용 권리는 즉시 중단됩니다. 그 성격상 종료 후에도 존속해야 하는 본 약관의 모든 조항(소유권 조항, 보증 부인, 면책 및 책임 제한을 포함하되 이에 국한되지 않음)은 종료 후에도 존속합니다.`,
        es: `Nos reservamos el derecho de terminar o suspender su acceso al Sitio de inmediato, sin previo aviso ni responsabilidad, por cualquier motivo, incluyendo sin limitación si usted incumple estos Términos.

Tras la terminación, su derecho a usar el Sitio cesará inmediatamente. Todas las disposiciones de estos Términos que por su naturaleza deban sobrevivir a la terminación sobrevivirán a la terminación, incluyendo pero no limitado a las disposiciones de propiedad, exclusiones de garantía, indemnización y limitaciones de responsabilidad.`,
        pt: `Reservamo-nos o direito de rescindir ou suspender seu acesso ao Site imediatamente, sem aviso prévio ou responsabilidade, por qualquer motivo, incluindo, sem limitação, se você violar estes Termos.

Após a rescisão, seu direito de usar o Site cessará imediatamente. Todas as disposições destes Termos que, por sua natureza, devem sobreviver à rescisão sobreviverão à rescisão, incluindo, mas não se limitando a, disposições de propriedade, isenções de garantia, indenização e limitações de responsabilidade.`,
      } as Record<Locale, string>,
    },
    {
      id: 'changes-to-terms',
      headings: {
        en: '9. Changes to These Terms',
        zh: '九、条款变更',
        ja: '9. 規約の変更',
        ko: '9. 약관 변경',
        es: '9. Cambios a Estos Términos',
        pt: '9. Alterações nestes Termos',
      } as Record<Locale, string>,
      bodies: {
        en: `We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.

By continuing to access or use our Site after any revisions become effective, you agree to be bound by the revised Terms. If you do not agree to the new Terms, you are no longer authorized to use the Site.`,
        zh: `我们保留自行决定随时修改或替换本条款的权利。如果修订是重大变更，我们将在新条款生效前合理努力提前至少30天通知。什么构成重大变更将由我们自行决定。

在任何修订生效后继续访问或使用我们的网站，即表示您同意受修订后的条款约束。如果您不同意新条款，您将不再被授权使用本网站。`,
        ja: `当社は、独自の裁量により、いつでも本規約を修正または置き換える権利を留保します。改訂が重要なものである場合、新規約が発効する前に少なくとも30日前の通知を合理的に努力して提供します。重要な変更を構成するものは、当社の独自の裁量で決定されます。

改訂が発効した後も継続して当サイトにアクセスまたは使用することにより、お客様は改訂された規約に拘束されることに同意したものとみなされます。新規約に同意しない場合、お客様は当サイトを使用する権限を失います。`,
        ko: `당사는 단독 재량으로 언제든지 본 약관을 수정하거나 대체할 권리를 보유합니다. 개정이 중대한 경우, 새로운 약관이 발효되기 전에 최소 30일 전에 합리적인 노력을 기울여 통지합니다. 무엇이 중대한 변경을 구성하는지는 당사의 단독 재량으로 결정됩니다.

개정 사항이 발효된 후에도 계속해서 사이트에 접속하거나 사용하면 개정된 약관에 구속되는 것에 동의하는 것으로 간주됩니다. 새로운 약관에 동의하지 않는 경우 더 이상 사이트를 사용할 수 없습니다.`,
        es: `Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos Términos en cualquier momento. Si una revisión es material, haremos esfuerzos razonables para proporcionar al menos 30 días de aviso antes de que los nuevos términos entren en vigencia. Lo que constituye un cambio material se determinará a nuestra sola discreción.

Al continuar accediendo o utilizando nuestro Sitio después de que las revisiones entren en vigencia, usted acepta estar sujeto a los Términos revisados. Si no acepta los nuevos Términos, ya no está autorizado a utilizar el Sitio.`,
        pt: `Reservamo-nos o direito, a nosso exclusivo critério, de modificar ou substituir estes Termos a qualquer momento. Se uma revisão for material, faremos esforços razoáveis para fornecer pelo menos 30 dias de aviso prévio antes da entrada em vigor de quaisquer novos termos. O que constitui uma alteração material será determinado a nosso exclusivo critério.

Ao continuar a acessar ou usar nosso Site após a entrada em vigor de quaisquer revisões, você concorda em ficar vinculado aos Termos revisados. Se você não concordar com os novos Termos, não estará mais autorizado a usar o Site.`,
      } as Record<Locale, string>,
    },
    {
      id: 'contact',
      headings: {
        en: '11. Contact Information',
        zh: '十一、联系方式',
        ja: '11. お問い合わせ先',
        ko: '11. 연락처 정보',
        es: '11. Información de Contacto',
        pt: '11. Informações de Contato',
      } as Record<Locale, string>,
      bodies: {
        en: `If you have any questions about these Terms, please contact us at:

- Email: support@toolconv.com

We will make reasonable efforts to respond to your inquiry within a reasonable timeframe.`,
        zh: `如果您对这些条款有任何疑问，请通过以下方式联系我们：

- 电子邮箱：support@toolconv.com

我们将在合理的时间内努力回复您的询问。`,
        ja: `本規約に関するご質問がある場合は、以下までご連絡ください：

- メール：support@toolconv.com

合理的な期間内にご質問にお答えするよう努めます。`,
        ko: `본 약관에 관한 문의 사항이 있으시면 다음으로 연락해 주십시오:

- 이메일: support@toolconv.com

당사는 합리적인 기간 내에 문의에 응답하기 위해 합리적인 노력을 기울일 것입니다.`,
        es: `Si tiene alguna pregunta sobre estos Términos, contáctenos en:

- Correo electrónico: support@toolconv.com

Haremos esfuerzos razonables para responder a su consulta dentro de un plazo razonable.`,
        pt: `Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco pelo:

- E-mail: support@toolconv.com

Faremos esforços razoáveis para responder à sua consulta dentro de um prazo razoável.`,
      } as Record<Locale, string>,
    },
  ],
};

// ──── Metadata ────
const metaDescriptions: Record<Locale, string> = {
  en: 'Terms of Service for UnitConvert — Understand the terms governing the use of our free online unit converter tools, including disclaimers and limitations of liability.',
  zh: 'UnitConvert 服务条款 — 了解管理我们免费在线单位换算工具使用的条款，包括免责声明和责任限制。',
  ja: 'UnitConvert 利用規約 — 無料オンライン単位変換ツールの使用を規定する条件、免責事項、および責任制限について。',
  ko: 'UnitConvert 이용약관 — 무료 온라인 단위 변환기 도구 사용을 규율하는 조건, 면책 조항 및 책임 제한을 알아보세요.',
  es: 'Términos de Servicio de UnitConvert — Comprenda los términos que rigen el uso de nuestras herramientas gratuitas de conversión de unidades en línea, incluyendo exenciones de responsabilidad y limitaciones.',
  pt: 'Termos de Serviço do UnitConvert — Entenda os termos que regem o uso de nossas ferramentas gratuitas de conversão de unidades online, incluindo isenções de responsabilidade e limitações.',
};

export function generateStaticParams() {
  return LOCALES.map(locale => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const title = `${pageContent.title[locale]} — ${SITE.name}`;
  const canonical = `${SITE.domain}/${locale}/terms/`;
  return {
    title,
    description: metaDescriptions[locale],
    canonical,
    alternates: {
      canonical,
      languages: {
        'x-default': `${SITE.domain}/en/terms/`,
        ...Object.fromEntries(LOCALES.map(l => [l, `${SITE.domain}/${l}/terms/`])),
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

export default function TermsPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;

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
                .replace(/\{locale\}/g, locale)
                .split('\n\n')
                .map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
