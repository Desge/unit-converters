import { CATEGORIES, LOCALES } from '@/lib/conversions';
import type { Locale } from '@/lib/conversions';
import { SITE } from '@/lib/seo';
import { t } from '@/lib/i18n';

export default function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-secondary)] mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {CATEGORIES.map(c => (
            <div key={c.key}>
              <h4 className="font-semibold text-sm mb-3">{c.icon} {c.name[locale] || c.name.en}</h4>
              <ul className="space-y-1.5">
                {c.units.slice(0, 4).map((u, i) => {
                  const next = c.units[(i + 1) % c.units.length];
                  return (
                    <li key={u.key}>
                      <a
                        href={`/${locale}/convert/${u.key}-to-${next.key}/`}
                        className="text-xs text-[var(--text-tertiary)] hover:text-brand-500 transition-colors"
                      >
                        {u.name[locale] || u.name.en} → {next.name[locale] || next.name.en}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Cross-site links */}
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="font-semibold text-[var(--text-secondary)]">{t('alsoTry', locale)}</span>
            <a href="https://pdf.toolconv.com" className="text-brand-500 hover:text-brand-600 font-medium">📄 PDF Tools</a>
            <a href="https://image.toolconv.com" className="text-brand-500 hover:text-brand-600 font-medium">🖼️ Image Tools</a>
          </div>
          {/* Legal links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[var(--text-tertiary)]">
            <a href={`/${locale}/privacy/`} className="hover:text-brand-500 transition-colors">{legalLinks.privacy[locale]}</a>
            <a href={`/${locale}/terms/`} className="hover:text-brand-500 transition-colors">{legalLinks.terms[locale]}</a>
            <a href={`/${locale}/about/`} className="hover:text-brand-500 transition-colors">{legalLinks.about[locale]}</a>
            <a href={`/${locale}/contact/`} className="hover:text-brand-500 transition-colors">{legalLinks.contact[locale]}</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-xs text-[var(--text-tertiary)]">
          © {new Date().getFullYear()} UnitConvert. {copyrightText[locale]}
        </div>
      </div>
    </footer>
  );
}

const copyrightText: Record<string, string> = {
  zh: '保留所有权利。', ja: '無断複写・転載を禁じます。', ko: '모든 권리 보유.',
  es: 'Todos los derechos reservados.', pt: 'Todos os direitos reservados.', en: 'All rights reserved.',
};

const legalLinks = {
  privacy: { en: 'Privacy Policy', zh: '隐私政策', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', es: 'Política de Privacidad', pt: 'Política de Privacidade' },
  terms: { en: 'Terms of Service', zh: '服务条款', ja: '利用規約', ko: '이용약관', es: 'Términos de Servicio', pt: 'Termos de Serviço' },
  about: { en: 'About Us', zh: '关于我们', ja: '私たちについて', ko: '소개', es: 'Sobre Nosotros', pt: 'Sobre Nós' },
  contact: { en: 'Contact Us', zh: '联系我们', ja: 'お問い合わせ', ko: '문의하기', es: 'Contáctenos', pt: 'Contate-nos' },
};
