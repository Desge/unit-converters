import { LOCALES, ALL_PAIRS } from '@/lib/conversions';
import { BLOG_ARTICLES } from '@/lib/blog-data';
import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const DOMAIN = process.env.NEXT_PUBLIC_SITE_URL || 'https://unit.toolconv.com';

// Legal pages to include in sitemap
const LEGAL_PAGES = ['privacy', 'terms', 'about', 'contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    // Homepage
    entries.push({
      url: `${DOMAIN}/${locale}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map(l => [l, `${DOMAIN}/${l}/`])
        ),
      },
    });

    // All conversion pages
    for (const pair of ALL_PAIRS) {
      entries.push({
        url: `${DOMAIN}/${locale}/convert/${pair.slug}/`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map(l => [l, `${DOMAIN}/${l}/convert/${pair.slug}/`])
          ),
        },
      });
    }

    // Legal pages (Privacy, Terms, About, Contact)
    for (const page of LEGAL_PAGES) {
      entries.push({
        url: `${DOMAIN}/${locale}/${page}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map(l => [l, `${DOMAIN}/${l}/${page}/`])
          ),
        },
      });
    }

    // Blog index page
    entries.push({
      url: `${DOMAIN}/${locale}/blog/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map(l => [l, `${DOMAIN}/${l}/blog/`])
        ),
      },
    });

    // Blog article pages
    for (const post of BLOG_ARTICLES) {
      entries.push({
        url: `${DOMAIN}/${locale}/blog/${post.slug}/`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map(l => [l, `${DOMAIN}/${l}/blog/${post.slug}/`])
          ),
        },
      });
    }
  }

  return entries;
}
