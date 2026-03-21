import type { Metadata } from 'next';

export const SITE_URL = 'https://azumbo.vercel.app';
export const SUPPORTED_LOCALES = ['en', 'it', 'ru'] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export const isSupportedLocale = (value?: string): value is SupportedLocale =>
  value === 'en' || value === 'it' || value === 'ru';

const normalizePath = (path: string) => {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return normalized === '/' ? '' : normalized;
};

export const buildCanonical = (path: string) => `${SITE_URL}${normalizePath(path) || '/en'}`;

export const buildLanguageAlternates = (path = ''): Record<string, string> => {
  const suffix = normalizePath(path);

  return {
    en: `${SITE_URL}/en${suffix}`,
    it: `${SITE_URL}/it${suffix}`,
    ru: `${SITE_URL}/ru${suffix}`,
    'x-default': `${SITE_URL}/en${suffix}`
  };
};

export const baseMetadata = (path: string): Metadata => ({
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: buildCanonical(path),
    languages: buildLanguageAlternates(path)
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1
    }
  }
});
