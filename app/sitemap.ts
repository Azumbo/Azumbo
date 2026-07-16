import type { MetadataRoute } from 'next';
import { getPublicAppRoutes } from '../lib/apps';
import { BIRD_LINES_VIDEO_PATH } from '../lib/birdLinesVideo';
import {
  SITE_URL,
  SUPPORTED_LOCALES,
  buildLanguageAlternates,
  INDEXABLE_ROUTES,
} from '../lib/seo';

const LAST_MODIFIED = new Date('2026-07-16T22:00:00.000Z');

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

  const birdLinesWatchPages = SUPPORTED_LOCALES.map((locale) => {
    const path = `/${locale}${BIRD_LINES_VIDEO_PATH}`;
    return {
      url: `${SITE_URL}${path}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
      alternates: {
        languages: buildLanguageAlternates(BIRD_LINES_VIDEO_PATH),
      },
    };
  });

  const answerHubPages = SUPPORTED_LOCALES.map((locale) => {
    const path = `/${locale}/answers`;
    return {
      url: `${SITE_URL}${path}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
      alternates: {
        languages: buildLanguageAlternates('/answers'),
      },
    };
  });

  const mergedRoutes = [...INDEXABLE_ROUTES, ...getPublicAppRoutes()];
  const staticPaths = mergedRoutes.filter(
    (path, index) => mergedRoutes.indexOf(path) === index
  );

  const staticRoutes = staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'weekly' as const,
    priority: path.startsWith('/lapasta') || path === '/ciromap' ? 0.9 : 0.7,
  }));

  return [...localeHomepages, ...birdLinesWatchPages, ...answerHubPages, ...staticRoutes];
}
