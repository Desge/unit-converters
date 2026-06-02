import { LOCALES } from '@/lib/conversions';
import type { Locale } from '@/lib/conversions';
import { SITE } from '@/lib/seo';

// ──── Translation Data ────
const pageContent = {
  title: {
    en: 'Contact Us',
    zh: '联系我们',
    ja: 'お問い合わせ',
    ko: '문의하기',
    es: 'Contáctenos',
    pt: 'Fale Conosco',
  } as Record<Locale, string>,
  intro: {
    en: 'Have a question, suggestion, or need help? We\'d love to hear from you. Use any of the methods below to get in touch with us.',
    zh: '有问题、建议或需要帮助？我们期待您的来信。请通过以下任意方式与我们取得联系。',
    ja: 'ご質問、ご提案、またはサポートが必要ですか？ぜひお聞かせください。以下のいずれかの方法でお問い合わせください。',
    ko: '질문, 제안 또는 도움이 필요하신가요? 여러분의 의견을 듣고 싶습니다. 아래 방법 중 하나를 사용하여 연락해 주세요.',
    es: '¿Tiene una pregunta, sugerencia o necesita ayuda? Nos encantaría saber de usted. Utilice cualquiera de los siguientes métodos para ponerse en contacto con nosotros.',
    pt: 'Tem uma pergunta, sugestão ou precisa de ajuda? Adoraríamos ouvir você. Use qualquer um dos métodos abaixo para entrar em contato conosco.',
  } as Record<Locale, string>,
  methods: [
    {
      icon: '📧',
      headings: {
        en: 'Email',
        zh: '电子邮件',
        ja: 'メール',
        ko: '이메일',
        es: 'Correo Electrónico',
        pt: 'E-mail',
      } as Record<Locale, string>,
      bodies: {
        en: 'For general inquiries, suggestions, or support requests, please send us an email. We typically respond within 1–3 business days.',
        zh: '对于一般咨询、建议或支持请求，请发送电子邮件给我们。我们通常在1-3个工作日内回复。',
        ja: '一般的なお問い合わせ、ご提案、またはサポートリクエストについては、メールにてご連絡ください。通常1〜3営業日以内に回答いたします。',
        ko: '일반 문의, 제안 또는 지원 요청은 이메일을 보내주세요. 일반적으로 1-3 영업일 이내에 답변을 드립니다.',
        es: 'Para consultas generales, sugerencias o solicitudes de soporte, envíenos un correo electrónico. Generalmente respondemos dentro de 1 a 3 días hábiles.',
        pt: 'Para consultas gerais, sugestões ou solicitações de suporte, envie-nos um e-mail. Normalmente respondemos dentro de 1 a 3 dias úteis.',
      } as Record<Locale, string>,
      contact: 'support@toolconv.com',
      linkType: 'email' as const,
    },
    {
      icon: '🌐',
      headings: {
        en: 'Website',
        zh: '网站',
        ja: 'ウェブサイト',
        ko: '웹사이트',
        es: 'Sitio Web',
        pt: 'Site',
      } as Record<Locale, string>,
      bodies: {
        en: 'Visit our website for instant access to all our conversion tools. No registration required.',
        zh: '访问我们的网站，即时使用所有换算工具。无需注册。',
        ja: '当サイトにアクセスして、すべての変換ツールをすぐにご利用いただけます。登録は不要です。',
        ko: '웹사이트를 방문하여 모든 변환 도구에 즉시 액세스하세요. 등록이 필요 없습니다.',
        es: 'Visite nuestro sitio web para acceder instantáneamente a todas nuestras herramientas de conversión. No se requiere registro.',
        pt: 'Visite nosso site para acesso instantâneo a todas as nossas ferramentas de conversão. Nenhum registro é necessário.',
      } as Record<Locale, string>,
      contact: '{domain}',
      linkType: 'website' as const,
    },
    {
      icon: '🐛',
      headings: {
        en: 'Report an Issue',
        zh: '报告问题',
        ja: '問題を報告',
        ko: '문제 신고',
        es: 'Reportar un Problema',
        pt: 'Relatar um Problema',
      } as Record<Locale, string>,
      bodies: {
        en: 'If you encounter any errors, broken links, or incorrect conversion results, please let us know. Your feedback helps us improve the site for everyone.',
        zh: '如果您遇到任何错误、失效链接或不正确的换算结果，请告知我们。您的反馈有助于我们为所有人改进网站。',
        ja: 'エラー、リンク切れ、誤った変換結果などがございましたら、お知らせください。お客様のフィードバックは、サイトの改善に役立ちます。',
        ko: '오류, 깨진 링크 또는 잘못된 변환 결과를 발견하시면 알려주십시오. 귀하의 피드백은 모든 사용자를 위한 사이트 개선에 도움이 됩니다.',
        es: 'Si encuentra algún error, enlace roto o resultado de conversión incorrecto, por favor háganoslo saber. Sus comentarios nos ayudan a mejorar el sitio para todos.',
        pt: 'Se você encontrar erros, links quebrados ou resultados de conversão incorretos, por favor, nos avise. Seu feedback nos ajuda a melhorar o site para todos.',
      } as Record<Locale, string>,
      contact: 'support@toolconv.com',
      linkType: 'email' as const,
    },
    {
      icon: '💡',
      headings: {
        en: 'Suggestions & Feedback',
        zh: '建议与反馈',
        ja: 'ご提案とフィードバック',
        ko: '제안 및 피드백',
        es: 'Sugerencias y Comentarios',
        pt: 'Sugestões e Feedback',
      } as Record<Locale, string>,
      bodies: {
        en: 'Have an idea for a new conversion category, a feature request, or a suggestion for improvement? We\'re always looking to make {siteName} better for our users.',
        zh: '有新换算类别的想法、功能请求或改进建议？我们一直在努力让{siteName}更好地服务用户。',
        ja: '新しい変換カテゴリーのアイデア、機能リクエスト、改善提案はありますか？{siteName}をより良くするために、常にユーザーの声を求めています。',
        ko: '새로운 변환 카테고리에 대한 아이디어, 기능 요청 또는 개선 제안이 있으신가요? 저희는 항상 {siteName}을(를) 사용자에게 더 좋게 만들기 위해 노력하고 있습니다.',
        es: '¿Tiene una idea para una nueva categoría de conversión, una solicitud de función o una sugerencia de mejora? Siempre buscamos mejorar {siteName} para nuestros usuarios.',
        pt: 'Tem uma ideia para uma nova categoria de conversão, uma solicitação de recurso ou uma sugestão de melhoria? Estamos sempre procurando melhorar o {siteName} para nossos usuários.',
      } as Record<Locale, string>,
      contact: 'support@toolconv.com',
      linkType: 'email' as const,
    },
  ],
  faqSection: {
    headings: {
      en: 'Frequently Asked Questions',
      zh: '常见问题',
      ja: 'よくある質問',
      ko: '자주 묻는 질문',
      es: 'Preguntas Frecuentes',
      pt: 'Perguntas Frequentes',
    } as Record<Locale, string>,
    items: [
      {
        q: {
          en: 'Do I need to create an account to use the converter?',
          zh: '我需要创建账户才能使用换算器吗？',
          ja: '変換ツールを使用するためにアカウントを作成する必要がありますか？',
          ko: '변환기를 사용하려면 계정을 만들어야 하나요?',
          es: '¿Necesito crear una cuenta para usar el conversor?',
          pt: 'Preciso criar uma conta para usar o conversor?',
        } as Record<Locale, string>,
        a: {
          en: 'No, you don\'t need to create an account or provide any personal information. Our converter tools are completely free and accessible to everyone without registration.',
          zh: '不需要，您无需创建账户或提供任何个人信息。我们的换算工具完全免费，无需注册即可使用。',
          ja: 'いいえ、アカウントを作成したり、個人情報を提供する必要はありません。当社の変換ツールは完全無料で、登録なしですべての方がご利用いただけます。',
          ko: '아니요, 계정을 만들거나 개인정보를 제공할 필요가 없습니다. 당사의 변환 도구는 완전 무료이며 등록 없이 모든 사람이 사용할 수 있습니다.',
          es: 'No, no necesita crear una cuenta ni proporcionar información personal. Nuestras herramientas de conversión son completamente gratuitas y accesibles para todos sin registro.',
          pt: 'Não, você não precisa criar uma conta ou fornecer qualquer informação pessoal. Nossas ferramentas de conversão são completamente gratuitas e acessíveis a todos sem registro.',
        } as Record<Locale, string>,
      },
      {
        q: {
          en: 'How accurate are the conversion results?',
          zh: '换算结果的精确度如何？',
          ja: '変換結果の精度はどのくらいですか？',
          ko: '변환 결과의 정확도는 어느 정도인가요?',
          es: '¿Qué tan precisos son los resultados de conversión?',
          pt: 'Quão precisos são os resultados da conversão?',
        } as Record<Locale, string>,
        a: {
          en: 'We use verified conversion factors for all categories. However, we recommend independently verifying critical conversions, especially for financial, medical, or engineering applications.',
          zh: '我们对所有类别都使用经过验证的换算系数。但我们建议对关键换算结果进行独立验证，特别是用于金融、医疗或工程应用时。',
          ja: 'すべてのカテゴリーで検証済みの変換係数を使用しています。ただし、特に金融、医療、エンジニアリング用途については、重要な変換は独立して確認することをお勧めします。',
          ko: '모든 카테고리에 대해 검증된 변환 계수를 사용합니다. 그러나 특히 금융, 의료 또는 엔지니어링 용도의 경우 중요한 변환을 독립적으로 확인하는 것이 좋습니다.',
          es: 'Utilizamos factores de conversión verificados para todas las categorías. Sin embargo, recomendamos verificar de forma independiente las conversiones críticas, especialmente para aplicaciones financieras, médicas o de ingeniería.',
          pt: 'Usamos fatores de conversão verificados para todas as categorias. No entanto, recomendamos verificar independentemente as conversões críticas, especialmente para aplicações financeiras, médicas ou de engenharia.',
        } as Record<Locale, string>,
      },
      {
        q: {
          en: 'Is my data private when I use this site?',
          zh: '我使用本网站时，我的数据是私密的吗？',
          ja: '当サイトを使用する際、私のデータはプライベートですか？',
          ko: '이 사이트를 사용할 때 제 데이터가 개인 정보로 보호되나요?',
          es: '¿Mis datos son privados cuando uso este sitio?',
          pt: 'Meus dados são privados quando uso este site?',
        } as Record<Locale, string>,
        a: {
          en: 'Yes. All conversion calculations happen locally in your browser using JavaScript. We do not store, transmit, or process any values you enter into the converter tools. For more details, please refer to our Privacy Policy.',
          zh: '是的。所有换算计算均在您的浏览器本地使用JavaScript执行。我们不会存储、传输或处理您在换算器中输入的任何数值。更多详情请参阅我们的隐私政策。',
          ja: 'はい。すべての変換計算は、お客様のブラウザ上でJavaScriptを使用してローカルに実行されます。変換ツールに入力された値は保存、送信、処理されません。詳細については、プライバシーポリシーをご参照ください。',
          ko: '네. 모든 변환 계산은 JavaScript를 사용하여 귀하의 브라우저에서 로컬로 수행됩니다. 변환기에 입력한 어떤 값도 저장, 전송 또는 처리하지 않습니다. 자세한 내용은 개인정보처리방침을 참조하시기 바랍니다.',
          es: 'Sí. Todos los cálculos de conversión se realizan localmente en su navegador usando JavaScript. No almacenamos, transmitimos ni procesamos ningún valor que ingrese en las herramientas de conversión. Para más detalles, consulte nuestra Política de Privacidad.',
          pt: 'Sim. Todos os cálculos de conversão são realizados localmente no seu navegador usando JavaScript. Não armazenamos, transmitimos ou processamos qualquer valor que você insira nas ferramentas de conversão. Para mais detalhes, consulte nossa Política de Privacidade.',
        } as Record<Locale, string>,
      },
      {
        q: {
          en: 'How can I request a new conversion category?',
          zh: '如何请求新增换算类别？',
          ja: '新しい変換カテゴリーをリクエストするには？',
          ko: '새로운 변환 카테고리를 요청하려면 어떻게 하나요?',
          es: '¿Cómo puedo solicitar una nueva categoría de conversión?',
          pt: 'Como posso solicitar uma nova categoria de conversão?',
        } as Record<Locale, string>,
        a: {
          en: 'We welcome suggestions! Please send us an email at support@toolconv.com with your idea, and we\'ll consider adding it in a future update.',
          zh: '我们欢迎建议！请发送电子邮件至 support@toolconv.com，附上您的想法，我们将考虑在未来的更新中添加。',
          ja: 'ご提案を歓迎します！support@toolconv.com までアイデアをお送りください。将来のアップデートで追加を検討します。',
          ko: '제안을 환영합니다! support@toolconv.com으로 아이디어를 보내주시면 향후 업데이트에서 추가를 검토하겠습니다.',
          es: '¡Aceptamos sugerencias! Envíenos un correo electrónico a support@toolconv.com con su idea, y consideraremos agregarla en una futura actualización.',
          pt: 'Aceitamos sugestões! Envie-nos um e-mail para support@toolconv.com com sua ideia e consideraremos adicioná-la em uma atualização futura.',
        } as Record<Locale, string>,
      },
    ],
  },
};

// ──── Metadata ────
const metaDescriptions: Record<Locale, string> = {
  en: 'Contact UnitConvert — Have questions or suggestions? Reach out via email at support@toolconv.com. We typically respond within 1-3 business days.',
  zh: '联系 UnitConvert — 有问题或建议？请通过 support@toolconv.com 与我们联系。我们通常在1-3个工作日内回复。',
  ja: 'UnitConvert お問い合わせ — ご質問やご提案がありますか？support@toolconv.com までメールでご連絡ください。通常1-3営業日以内に回答いたします。',
  ko: 'UnitConvert 문의하기 — 질문이나 제안이 있으신가요? support@toolconv.com으로 이메일을 보내주세요. 1-3 영업일 이내에 답변을 드립니다.',
  es: 'Contacte con UnitConvert — ¿Tiene preguntas o sugerencias? Comuníquese por correo electrónico a support@toolconv.com. Respondemos dentro de 1 a 3 días hábiles.',
  pt: 'Fale com o UnitConvert — Tem perguntas ou sugestões? Entre em contato por e-mail support@toolconv.com. Respondemos dentro de 1 a 3 dias úteis.',
};

export function generateStaticParams() {
  return LOCALES.map(locale => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const title = `${pageContent.title[locale]} — ${SITE.name}`;
  const canonical = `${SITE.domain}/${locale}/contact/`;
  return {
    title,
    description: metaDescriptions[locale],
    canonical,
    alternates: {
      canonical,
      languages: {
        'x-default': `${SITE.domain}/en/contact/`,
        ...Object.fromEntries(LOCALES.map(l => [l, `${SITE.domain}/${l}/contact/`])),
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

export default function ContactPage({ params }: { params: { locale: string } }) {
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
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
          {pageContent.intro[locale]}
        </p>
      </section>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {pageContent.methods.map((method, idx) => (
          <div key={idx} className="card p-6">
            <div className="text-3xl mb-3">{method.icon}</div>
            <h2 className="text-lg font-bold mb-2">{method.headings[locale]}</h2>
            <p className="text-sm text-[var(--text-secondary)] mb-3">
              {method.bodies[locale].replace(/\{siteName\}/g, SITE.name)}
            </p>
            {method.linkType === 'email' ? (
              <a
                href={`mailto:${method.contact}`}
                className="text-brand-500 hover:text-brand-600 font-medium text-sm transition-colors"
              >
                {method.contact}
              </a>
            ) : (
              <a
                href={SITE.domain}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-500 hover:text-brand-600 font-medium text-sm transition-colors"
              >
                {method.contact.replace('{domain}', SITE.domain)}
              </a>
            )}
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-8">
          {pageContent.faqSection.headings[locale]}
        </h2>
        <div className="space-y-4">
          {pageContent.faqSection.items.map((item, idx) => (
            <details key={idx} className="card p-6 group open:shadow-md transition-shadow">
              <summary className="font-semibold text-[var(--text-primary)] cursor-pointer list-none flex items-center justify-between">
                <span>{item.q[locale]}</span>
                <span className="text-[var(--text-tertiary)] transform transition-transform group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-[var(--text-secondary)] leading-relaxed text-sm">
                {item.a[locale].replace(/\{siteName\}/g, SITE.name)}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Response Time Note */}
      <section className="mt-12 text-center card p-6">
        <p className="text-sm text-[var(--text-tertiary)]">
          {locale === 'zh' ? '我们通常在工作日24-72小时内回复所有咨询。' :
           locale === 'ja' ? '通常、すべてのお問い合わせには24〜72時間以内に回答いたします。' :
           locale === 'ko' ? '당사는 일반적으로 영업일 기준 24-72시간 이내에 모든 문의에 응답합니다.' :
           locale === 'es' ? 'Generalmente respondemos a todas las consultas dentro de 24 a 72 horas hábiles.' :
           locale === 'pt' ? 'Geralmente respondemos a todas as consultas dentro de 24 a 72 horas úteis.' :
           'We typically respond to all inquiries within 24-72 business hours.'}
        </p>
      </section>
    </div>
  );
}
