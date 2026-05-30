// ============================================================
// Cloudflare Pages Edge Worker — Language Detection
// Runs at the CDN edge before any static asset is served.
// Detects Accept-Language header and issues 302 redirect.
// ============================================================

const SUPPORTED = ['zh', 'ja', 'ko', 'es', 'pt', 'en'];

function detectLocale(request) {
  // Check cookie first (user preference set by LanguageSwitcher)
  const cookieHeader = request.headers.get('Cookie') || '';
  const cookieMatch = cookieHeader.match(/(?:^|;\s*)locale=([a-z]{2})(?:;|$)/);
  if (cookieMatch && SUPPORTED.includes(cookieMatch[1])) {
    return cookieMatch[1];
  }

  // Parse Accept-Language header
  // Example: "zh-CN,zh;q=0.9,en;q=0.8,ja;q=0.7"
  const acceptLang = request.headers.get('Accept-Language') || '';
  for (const part of acceptLang.split(',')) {
    const base = part.trim().split(';')[0].split('-')[0].toLowerCase();
    if (SUPPORTED.includes(base)) {
      return base;
    }
  }

  return 'en'; // default
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Only intercept the root path
    if (url.pathname === '/' || url.pathname === '') {
      const locale = detectLocale(request);
      return Response.redirect(new URL(`/${locale}/`, request.url), 302);
    }

    // All other requests pass through to static assets
    return env.ASSETS.fetch(request);
  },
};
