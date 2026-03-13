import type { MetadataRoute } from 'next';

const SITE_URL = 'https://azumbo.vercel.app';
const LOCALES = ['en', 'ru', 'it'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1
    },
    ...LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9
    }))
  ];
}
