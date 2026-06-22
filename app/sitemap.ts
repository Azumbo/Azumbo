import type { MetadataRoute } from 'next';
import { getPublicAppRoutes } from '../lib/apps';
import { SITE_URL, SUPPORTED_LOCALES } from '../lib/seo';

const LAST_MODIFIED = new Date('2026-06-20T00:00:00.000Z');

const CORE_ROUTES = [
  '/',
  '/app-ads.txt',
  ...getPublicAppRoutes(),
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const localized = SUPPORTED_LOCALES.map((locale) => {
    const path = `/${locale}`;
    return {
      url: `${SITE_URL}${path}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'weekly' as const,
      priority: path === '/en' ? 1 : 0.8
    };
  });

  const core = CORE_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'weekly' as const,
    priority: path === '/' ? 1 : path === '/app-ads.txt' ? 0.3 : 0.8
  }));

  return [...core, ...localized];
}
