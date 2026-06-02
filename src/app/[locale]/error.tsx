'use client';

import { useEffect } from 'react';

const labels: Record<string, { title: string; desc: string; retry: string }> = {
  en: { title: 'Something went wrong', desc: 'An error occurred while loading this page.', retry: 'Try again' },
  zh: { title: '出错了', desc: '加载页面时发生错误。', retry: '重试' },
  ja: { title: 'エラーが発生しました', desc: 'ページの読み込み中にエラーが発生しました。', retry: '再試行' },
  ko: { title: '오류가 발생했습니다', desc: '페이지를 로드하는 중 오류가 발생했습니다.', retry: '다시 시도' },
  es: { title: 'Algo salió mal', desc: 'Ocurrió un error al cargar esta página.', retry: 'Intentar de nuevo' },
  pt: { title: 'Algo deu errado', desc: 'Ocorreu um erro ao carregar esta página.', retry: 'Tentar novamente' },
};

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Try to detect locale from URL path
  const pathLocale = typeof window !== 'undefined' 
    ? window.location.pathname.split('/')[1]
    : 'en';
  const t = labels[pathLocale] || labels.en;

  useEffect(() => {
    console.error('Page error:', error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="text-8xl mb-6">⚠️</div>
      <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
      <p className="text-[var(--text-secondary)] mb-8 max-w-md">{t.desc}</p>
      <button
        onClick={reset}
        className="btn-primary px-6 py-3 rounded-lg font-medium"
      >
        {t.retry}
      </button>
    </div>
  );
}
