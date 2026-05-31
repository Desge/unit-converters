/**
 * 根路径 (/) — 语言检测 & 重定向
 *
 * 多层降级策略 (按优先级从高到低):
 *   L1: Vercel vercel.json 边缘层重定向 (Accept-Language 路由 + 默认 fallback → /en/)
 *       注意: Cloudflare Pages 不读 vercel.json，所以需要 L2-L5
 *   L2: <meta http-equiv="refresh"> — HTML 层重定向，Googlebot 可识别
 *   L3: <link rel="canonical" href="/en/"> — 帮助 Google 理解规范 URL
 *   L4: 内联 <script> 检测 navigator.language，执行 location.replace
 *   L5: <a> 链接 fallback — 无 JS/CSS 用户可手动点击
 *
 * 语言检测: localStorage > navigator.language > navigator.languages > 'en'
 */

import type { Metadata } from 'next';

// 所有支持的语言代码
const LOCALES = ['en', 'zh', 'ja', 'ko', 'es', 'pt'] as const;

// 让搜索引擎知道这是一个重定向页面
export const metadata: Metadata = {
  title: 'Redirecting...',
  robots: { index: false, follow: true },
  alternates: { canonical: '/en/' },
};

export default function RootPage() {
  // 内联脚本在 HTML 解析阶段执行，早于任何 React 代码
  const detectScript = `(function(){
var L=${JSON.stringify(LOCALES)};
var l='en';
try{var s=localStorage.getItem('locale');if(s&&L.indexOf(s)>=0)l=s;}catch(e){}
if(l==='en'){var n=(navigator.language||'').split('-')[0];if(L.indexOf(n)>=0)l=n;}
if(l==='en'&&navigator.languages){for(var i=0;i<navigator.languages.length;i++){var m=navigator.languages[i].split('-')[0];if(L.indexOf(m)>=0){l=m;break;}}}
if(window.location.pathname==='/'||window.location.pathname===''){
  location.replace('/'+l+'/');
}
})();`;

  return (
    <>
      {/* L2: meta refresh — Googlebot 和所有爬虫可识别的静态重定向 */}
      {/* 在 Next.js App Router 中，meta/link 元素在 page 组件里会被 hoist 到 <head> */}
      <meta httpEquiv="refresh" content="0;url=/en/" />

      {/* L4: JS 语言检测增强 */}
      <script dangerouslySetInnerHTML={{ __html: detectScript }} />

      {/* L5: 无 JS fallback — 用户可手动选择语言 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>
          Redirecting...
        </h1>
        <p style={{ marginBottom: '1.5rem', color: '#666' }}>
          Please select your language / 请选择语言 / 言語を選択してください
        </p>
        <nav style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {LOCALES.map((locale) => (
            <a
              key={locale}
              href={`/${locale}/`}
              style={{
                display: 'inline-block',
                padding: '0.5rem 1.25rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '0.95rem',
                color: '#fff',
                backgroundColor: '#6366f1',
                transition: 'background-color 0.15s',
              }}
            >
              {locale === 'en' ? 'English' :
               locale === 'zh' ? '中文' :
               locale === 'ja' ? '日本語' :
               locale === 'ko' ? '한국어' :
               locale === 'es' ? 'Español' :
               locale === 'pt' ? 'Português' : locale.toUpperCase()}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
