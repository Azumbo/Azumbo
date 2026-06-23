import type { MetadataRoute } from 'next';
import { getPublicAppRoutes } from '../lib/apps';
import {
  SITE_URL,
  SUPPORTED_LOCALES,
  buildLanguageAlternates,
  INDEXABLE_ROUTES,
} from '../lib/seo';

const LAST_MODIFIED = new Date('2026-06-23T00:00:00.000Z');

export default function sitemap(): MetadataRoute.Sitemap {
  const localeHomepages = SUPPORTED_LOCALES.map((locale) => {
    const path = `/${locale}`;
    return {
      url: `${SITE_URL}${path}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'weekly' as const,
      priority: locale === 'en' ? 1 : 0.8,
      alternates: {
        languages: buildLanguageAlternates(path),
      },
    };
  });

  const staticPaths = [...new Set([...INDEXABLE_ROUTES, ...getPublicAppRoutes()])];

  const staticRoutes = staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'weekly' as const,
    priority: path.startsWith('/lapasta') || path === '/ciromap' ? 0.9 : 0.7,
  }));

  const infrastructure = [
    {
      url: `${SITE_URL}/app-ads.txt`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ];

  return [...localeHomepages, ...staticRoutes, ...infrastructure];
}
