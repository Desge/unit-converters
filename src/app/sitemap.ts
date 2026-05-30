import { LOCALES, ALL_PAIRS } from '@/lib/conversions';
import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = 'https://unitconvert.pro';
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    // Homepage
    entries.push({
      url: `${domain}/${locale}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    });
    // All conversion pages
    for (const pair of ALL_PAIRS) {
      entries.push({
        url: `${domain}/${locale}/convert/${pair.slug}/`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    }
  }

  return entries;
}
