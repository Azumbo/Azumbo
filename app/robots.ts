import type { MetadataRoute } from 'next';
import { AI_AND_SEARCH_BOTS, NOINDEX_PATHS, SITE_URL } from '../lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: AI_AND_SEARCH_BOTS.map((userAgent) => ({
      userAgent,
      allow: ['/', '/app-ads.txt'],
      disallow: [...NOINDEX_PATHS, '/api/'],
    })),
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
