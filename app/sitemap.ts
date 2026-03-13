import type { MetadataRoute } from 'next';

const SITE_URL = 'https://azumbo.vercel.app';
const LOCALES = ['en', 'ru', 'it'] as const;

const ROUTES = [''] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return LOCALES.flatMap((locale) =>
    ROUTES.map((route) => ({
      url: `${SITE_URL}/${locale}${route}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8
    }))
  );
}
