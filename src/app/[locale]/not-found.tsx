import Link from 'next/link';
import { LOCALES } from '@/lib/conversions';
import type { Locale } from '@/lib/conversions';

const labels: Record<Locale, { title: string; desc: string; backHome: string }> = {
  en: { title: 'Page Not Found', desc: 'The page you are looking for does not exist or has been moved.', backHome: 'Back to Home' },
  zh: { title: '页面未找到', desc: '您访问的页面不存在或已被移动。', backHome: '返回首页' },
  ja: { title: 'ページが見つかりません', desc: 'お探しのページは存在しないか、移動されました。', backHome: 'ホームに戻る' },
  ko: { title: '페이지를 찾을 수 없습니다', desc: '찾으시는 페이지가 존재하지 않거나 이동되었습니다.', backHome: '홈으로 돌아가기' },
  es: { title: 'Página no encontrada', desc: 'La página que buscas no existe o ha sido movida.', backHome: 'Volver al inicio' },
  pt: { title: 'Página não encontrada', desc: 'A página que você procura não existe ou foi movida.', backHome: 'Voltar ao início' },
};

export default function NotFound() {
  // Try to detect locale from URL path
  const pathLocale = typeof window !== 'undefined' 
    ? window.location.pathname.split('/')[1] as Locale
    : 'en';
  const locale = LOCALES.includes(pathLocale) ? pathLocale : 'en';
  const t = labels[locale];

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="text-8xl mb-6">🔍</div>
      <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
      <p className="text-[var(--text-secondary)] mb-8 max-w-md">{t.desc}</p>
      <Link
        href={`/${locale}/`}
        className="btn-primary px-6 py-3 rounded-lg font-medium"
      >
        {t.backHome}
      </Link>
    </div>
  );
}
