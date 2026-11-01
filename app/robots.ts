import type { MetadataRoute } from 'next';
import {
  CITATION_AND_SEARCH_BOTS,
  NOINDEX_PATHS,
  SITE_URL,
  TRAINING_AND_SCRAPER_BOTS,
} from '../lib/seo';

export default function robots(): MetadataRoute.Robots {
  const utilityDisallow = [...NOINDEX_PATHS, '/api/'];

  return {
    rules: [
      ...CITATION_AND_SEARCH_BOTS.map((userAgent) => ({
        userAgent,
        allow: ['/', '/app-ads.txt'],
        disallow: utilityDisallow,
      })),
      ...TRAINING_AND_SCRAPER_BOTS.map((userAgent) => ({
        userAgent,
        disallow: ['/'],
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
