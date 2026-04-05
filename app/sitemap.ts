import type { MetadataRoute } from 'next';
import { SITE_URL, SUPPORTED_LOCALES } from '../lib/seo';

const LAST_MODIFIED = new Date('2026-03-21T00:00:00.000Z');

const CORE_ROUTES = [
  '/',
  '/pacman',
  '/spaceinvaders',
  '/frogger',
  '/cornettoclicker',
  '/cirotap',
  '/cornettoclicker-landing',
  '/petonauta-landing',
  '/game',
  '/register',
  '/stats',
  '/finish',
  '/cityintheplane/privacy',
  '/cornettoclicker/privacy',
  '/cornettoclicker/terms'
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
    url: `${SITE_URL}${path === '/' ? '/en' : path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'weekly' as const,
    priority: path === '/' ? 1 : 0.7
  }));

  return [...core, ...localized];
}
