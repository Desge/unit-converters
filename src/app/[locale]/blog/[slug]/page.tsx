import { LOCALES } from '@/lib/conversions';
import type { Locale } from '@/lib/conversions';
import { SITE } from '@/lib/seo';
import { BLOG_ARTICLES } from '@/lib/blog-data';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// ──── Translation Data ────
const BACK_TO_BLOG: Record<Locale, string> = {
  en: '← Back to Blog',
  zh: '← 返回博客',
  ja: '← ブログに戻る',
  ko: '← 블로그로 돌아가기',
  es: '← Volver al Blog',
  pt: '← Voltar ao Blog',
};

const RELATED_CONVERTER: Record<Locale, string> = {
  en: 'Try the Converter',
  zh: '试试换算器',
  ja: '変換ツールを試す',
  ko: '변환기 사용해보기',
  es: 'Probar el Conversor',
  pt: 'Experimente o Conversor',
};

const PUBLISHED: Record<Locale, string> = {
  en: 'Published on',
  zh: '发布于',
  ja: '公開日',
  ko: '게시일',
  es: 'Publicado el',
  pt: 'Publicado em',
};

// Extract converter links from the content
function extractConverterSlugs(body: string): { text: string; slug: string }[] {
  const links: { text: string; slug: string }[] = [];
  // Match markdown links like [text](https://unit.toolconv.com/{locale}/convert/{slug}/)
  const regex = /\[([^\]]+)\]\(https:\/\/unit\.toolconv\.com\/[a-z]+\/convert\/([^\/]+)\/\)/g;
  let match;
  while ((match = regex.exec(body)) !== null) {
    links.push({ text: match[1], slug: match[2] });
  }
  return links;
}

// ──── Generate Static Params ────
export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of LOCALES) {
    for (const article of BLOG_ARTICLES) {
      params.push({ locale, slug: article.slug });
    }
  }
  return params;
}

// ──── Generate Metadata ────
export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const l = locale as Locale;
  const article = BLOG_ARTICLES.find(a => a.slug === slug);
  if (!article) return {};

  const title = `${article.title[l] || article.title.en} — ${SITE.name}`;
  const description = article.description[l] || article.description.en;
  const canonical = `${SITE.domain}/${locale}/blog/${slug}/`;

  return {
    title,
    description,
    canonical,
    alternates: {
      canonical,
      languages: {
        'x-default': `${SITE.domain}/en/blog/${slug}/`,
        ...Object.fromEntries(LOCALES.map(loc => [loc, `${SITE.domain}/${loc}/blog/${slug}/`])),
      },
    },
    openGraph: {
      title,
      description,
      type: 'article' as const,
      locale: l === 'zh' ? 'zh_CN' : l === 'ja' ? 'ja_JP' : l === 'ko' ? 'ko_KR' : l === 'es' ? 'es_ES' : l === 'pt' ? 'pt_BR' : 'en_US',
      url: canonical,
      siteName: SITE.name,
      publishedTime: article.date,
    },
    twitter: {
      card: 'summary_large_image' as const,
    },
    robots: { index: true, follow: true },
  };
}

// ──── Page Component ────
export default async function BlogArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const l = locale as Locale;
  const article = BLOG_ARTICLES.find(a => a.slug === slug);

  if (!article) {
    notFound();
  }

  const title = article.title[l] || article.title.en;
  const body = article.body[l] || article.body.en;
  const converterLinks = extractConverterSlugs(article.body.en);

  // Format date
  const formattedDate = new Date(article.date).toLocaleDateString(
    l === 'en' ? 'en-US' : l === 'zh' ? 'zh-CN' : l === 'ja' ? 'ja-JP' : l === 'ko' ? 'ko-KR' : l === 'es' ? 'es-ES' : 'pt-BR',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Back to Blog */}
      <Link
        href={`/${locale}/blog/`}
        className="inline-flex items-center text-sm font-medium text-[var(--text-tertiary)] hover:text-brand-500 transition-colors mb-8"
      >
        {BACK_TO_BLOG[l]}
      </Link>

      {/* Article Header */}
      <article>
        <header className="mb-8">
          <time className="text-sm text-[var(--text-tertiary)]">
            {PUBLISHED[l]} {formattedDate}
          </time>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-2 mb-4 text-[var(--text-primary)]">
            {title}
          </h1>
        </header>

        {/* Article Body with Prose */}
        <div
          className="
            prose prose-lg max-w-none
            prose-headings:text-[var(--text-primary)] prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
            prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg
            prose-p:text-[var(--text-secondary)] prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-brand-500 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-[var(--text-primary)] prose-strong:font-semibold
            prose-code:text-brand-500 prose-code:bg-[var(--bg-tertiary)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm
            prose-pre:bg-[var(--bg-tertiary)] prose-pre:border prose-pre:border-[var(--border-color)] prose-pre:rounded-xl
            prose-table:border-collapse prose-table:w-full
            prose-th:bg-[var(--bg-tertiary)] prose-th:text-[var(--text-primary)] prose-th:font-semibold prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:border prose-th:border-[var(--border-color)]
            prose-td:px-4 prose-td:py-2.5 prose-td:border prose-td:border-[var(--border-color)] prose-td:text-[var(--text-secondary)]
            prose-tr:even:bg-[var(--bg-tertiary)] prose-tr:hover:bg-[var(--bg-secondary)]
            prose-hr:border-[var(--border-color)]
            prose-blockquote:border-l-4 prose-blockquote:border-brand-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-[var(--text-secondary)]
            prose-ul:text-[var(--text-secondary)] prose-ol:text-[var(--text-secondary)]
            prose-li:my-1
          "
        >
          {/* Render body with proper formatting */}
          {body.split('\n').map((line, i) => {
            // Skip empty lines (they're paragraph separators)
            if (line.trim() === '') return null;

            // Table rows
            if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
              // Check if it's a header separator (|---|)
              if (line.includes('|---')) return null;
              const cells = line.split('|').filter(c => c.trim());
              // Determine if previous line was also a table row
              return null; // Handled by table grouping
            }

            // Headers
            if (line.startsWith('## ')) {
              return <h2 key={i}>{line.replace('## ', '')}</h2>;
            }
            if (line.startsWith('### ')) {
              return <h3 key={i}>{line.replace('### ', '')}</h3>;
            }

            // Unordered list
            if (line.trim().startsWith('- ')) {
              return <li key={i} className="list-disc ml-6">{line.trim().replace('- ', '')}</li>;
            }

            // Numbered list
            if (/^\d+\.\s/.test(line.trim())) {
              return <li key={i} className="list-decimal ml-6">{line.trim().replace(/^\d+\.\s/, '')}</li>;
            }

            // Math (LaTeX) - wrap inline $$...$$ or block $$$$...$$$$
            if (line.trim().startsWith('$$') && line.trim().endsWith('$$') && line.trim().length > 4) {
              const math = line.trim().slice(2, -2);
              return <div key={i} className="my-4 p-3 bg-[var(--bg-tertiary)] rounded-lg text-center font-mono text-sm text-[var(--text-primary)]">{math}</div>;
            }

            // Regular paragraph - process inline formatting
            return (
              <p key={i} className="text-[var(--text-secondary)]">
                {processInlineContent(line, l, locale)}
              </p>
            );
          })}

          {/* 
            Process tables: regroup table rows 
          */}
          {(() => {
            const lines = body.split('\n');
            const tables: string[][][] = [];
            let currentTable: string[][] | null = null;

            for (const line of lines) {
              if (line.trim().startsWith('|') && line.trim().endsWith('|') && !line.includes('|---')) {
                const cells = line.split('|').filter(c => c.trim());
                if (currentTable) {
                  currentTable.push(cells);
                } else {
                  currentTable = [cells];
                }
              } else {
                if (currentTable) {
                  tables.push(currentTable);
                  currentTable = null;
                }
              }
            }
            if (currentTable) tables.push(currentTable);

            return tables.map((table, tIdx) => (
              <div key={`table-${tIdx}`} className="overflow-x-auto my-6">
                <table className="w-full border-collapse">
                  {table.map((row, rIdx) => (
                    <tr key={rIdx}>
                      {row.map((cell, cIdx) =>
                        rIdx === 0 ? (
                          <th key={cIdx} className="bg-[var(--bg-tertiary)] text-[var(--text-primary)] font-semibold px-4 py-3 text-left border border-[var(--border-color)]">
                            {processInlineContent(cell, l, locale)}
                          </th>
                        ) : (
                          <td key={cIdx} className="px-4 py-2.5 border border-[var(--border-color)] text-[var(--text-secondary)]">
                            {processInlineContent(cell, l, locale)}
                          </td>
                        )
                      )}
                    </tr>
                  ))}
                </table>
              </div>
            ));
          })()}
        </div>

        {/* Internal Links Section */}
        {converterLinks.length > 0 && (
          <section className="mt-12 pt-8 border-t border-[var(--border-color)]">
            <h2 className="text-xl font-bold mb-4 text-[var(--text-primary)]">
              {RELATED_CONVERTER[l]}
            </h2>
            <div className="flex flex-wrap gap-3">
              {converterLinks.slice(0, 4).map((link, i) => (
                <Link
                  key={i}
                  href={`/${locale}/convert/${link.slug}/`}
                  className="btn-secondary text-sm"
                >
                  {link.text.replace(' Converter', '').replace(' converter', '')}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* JSON-LD Article Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: title,
              description: article.description[l] || article.description.en,
              author: {
                '@type': 'Organization',
                name: SITE.name,
              },
              publisher: {
                '@type': 'Organization',
                name: SITE.name,
              },
              datePublished: article.date,
              dateModified: article.date,
              image: `${SITE.domain}/og/home.svg`,
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `${SITE.domain}/${locale}/blog/${slug}/`,
              },
            }),
          }}
        />
      </article>
    </div>
  );
}

// ──── Inline Content Processor ────
function processInlineContent(text: string, locale: Locale, urlLocale: string): React.ReactNode {
  // Process inline code `code`
  const parts: React.ReactNode[] = [];
  let remaining = text;

  // Process links [text](url)
  const linkRegex = /\[([^\]]+)\]\(https:\/\/unit\.toolconv\.com\/[a-z]+\/convert\/([^\/]+)\/\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  // We need to process both links and code, handling them in order of appearance
  const segments: { type: 'text' | 'link' | 'code' | 'bold'; content: string; url?: string }[] = [];

  // Process bold text first
  const boldRegex = /\*\*([^*]+)\*\*/g;
  // Process code
  const codeRegex = /`([^`]+)`/g;

  // Combine all patterns
  type SegmentMatch = { index: number; type: 'link' | 'code' | 'bold'; content: string; url?: string };
  const allMatches: SegmentMatch[] = [];

  let m: RegExpExecArray | null;

  // Find links
  linkRegex.lastIndex = 0;
  while ((m = linkRegex.exec(text)) !== null) {
    allMatches.push({ index: m.index, type: 'link', content: m[1], url: `/${urlLocale}/convert/${m[2]}/` });
  }

  // Find bold
  boldRegex.lastIndex = 0;
  while ((m = boldRegex.exec(text)) !== null) {
    allMatches.push({ index: m.index, type: 'bold', content: m[1] });
  }

  // Find code
  codeRegex.lastIndex = 0;
  while ((m = codeRegex.exec(text)) !== null) {
    allMatches.push({ index: m.index, type: 'code', content: m[1] });
  }

  // Sort by index
  allMatches.sort((a, b) => a.index - b.index);

  // Build segments
  let pos = 0;
  for (const sMatch of allMatches) {
    if (sMatch.index < pos) continue; // Overlapping match, skip

    // Add text before this match
    if (sMatch.index > pos) {
      segments.push({ type: 'text', content: text.slice(pos, sMatch.index) });
    }

    if (sMatch.type === 'link') {
      segments.push({ type: 'link', content: sMatch.content, url: sMatch.url });
    } else if (sMatch.type === 'bold') {
      segments.push({ type: 'bold', content: sMatch.content });
    } else if (sMatch.type === 'code') {
      segments.push({ type: 'code', content: sMatch.content });
    }

    const endIdx = sMatch.type === 'link'
      ? text.indexOf(')', sMatch.index) + 1
      : sMatch.type === 'bold'
        ? text.indexOf('**', sMatch.index + 2) + 2
        : text.indexOf('`', sMatch.index + 1) + 1;
    pos = endIdx;
  }

  // Add remaining text
  if (pos < text.length) {
    segments.push({ type: 'text', content: text.slice(pos) });
  }

  return segments.map((seg, idx) => {
    if (seg.type === 'link') {
      return (
        <Link key={idx} href={seg.url!} className="text-brand-500 hover:underline">
          {seg.content}
        </Link>
      );
    }
    if (seg.type === 'bold') {
      return <strong key={idx} className="font-semibold text-[var(--text-primary)]">{seg.content}</strong>;
    }
    if (seg.type === 'code') {
      return (
        <code key={idx} className="text-brand-500 bg-[var(--bg-tertiary)] px-1.5 py-0.5 rounded-md text-sm">
          {seg.content}
        </code>
      );
    }
    return <span key={idx}>{seg.content}</span>;
  });
}
