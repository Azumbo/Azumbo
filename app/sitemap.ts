import type { MetadataRoute } from 'next';

const SITE_URL = 'https://azumbo.vercel.app';
const LOCALES = ['en', 'ru', 'it'] as const;

const STATIC_ROUTES: Array<{ path: string; priority: number }> = [
  { path: '', priority: 1 },
  { path: '/PacMan', priority: 0.8 },
  { path: '/Spaceinvaders', priority: 0.8 },
  { path: '/CityInThePlane/privacy', priority: 0.4 },
  { path: '/cornettoclicker', priority: 0.8 },
  { path: '/cornettoclicker-landing', priority: 0.8 },
  { path: '/cornettoclicker/privacy', priority: 0.4 },
  { path: '/cornettoclicker/terms', priority: 0.4 },
  { path: '/finish', priority: 0.5 },
  { path: '/frogger', priority: 0.8 },
  { path: '/game', priority: 0.7 },
  { path: '/petonauta-landing', priority: 0.8 },
  { path: '/register', priority: 0.7 },
  { path: '/stats', priority: 0.6 }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = STATIC_ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: 'weekly',
    priority
  }));

  const localePages: MetadataRoute.Sitemap = LOCALES.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.9
  }));

  return [...staticPages, ...localePages];
}
