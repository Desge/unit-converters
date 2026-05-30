/**
 * 根路径 (/) — 语言检测 & 重定向
 *
 * 三层降级策略:
 *   L1: Cloudflare Pages _worker.js / Vercel vercel.json (边缘层，零客户端成本)
 *   L2: 本页内联 <script>（HTML 解析阶段执行，早于 React hydration）
 *   L3: navigator.language 默认 fallback → 'en'
 *
 * 优先级: localStorage > navigator.language > navigator.languages > 'en'
 */
export default function RootPage() {
  // 内联脚本在 HTML 解析阶段执行，早于任何 React 代码
  // dangerouslySetInnerHTML 在静态导出时输出为原生 <script> 标签
  const detectScript = `
(function(){
  var L=['en','zh','ja','ko','es','pt'];
  var l='en';
  try{var s=localStorage.getItem('locale');if(s&&L.indexOf(s)>=0)l=s;}catch(e){}
  if(l==='en'){var n=(navigator.language||'').split('-')[0];if(L.indexOf(n)>=0)l=n;}
  if(l==='en'&&navigator.languages){for(var i=0;i<navigator.languages.length;i++){var m=navigator.languages[i].split('-')[0];if(L.indexOf(m)>=0){l=m;break;}}}
  if(window.location.pathname==='/'||window.location.pathname===''){
    location.replace('/'+l+'/');
  }
})();`;

  return <script dangerouslySetInnerHTML={{ __html: detectScript }} />;
}
