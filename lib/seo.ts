import type { Metadata } from 'next';

export const SITE_URL = 'https://azumbo.vercel.app';
export const PRIMARY_HOST = 'azumbo.vercel.app';
export const SUPPORTED_LOCALES = ['en', 'it', 'ru'] as const;
export const DEFAULT_LOCALE = 'en';

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  en: 'en-US',
  it: 'it-IT',
  ru: 'ru-RU',
};

export const LOCALE_OG: Record<Locale, string> = {
  en: 'en_US',
  it: 'it_IT',
  ru: 'ru_RU',
};

export const ORGANIZATION_SAME_AS = [
  'https://www.youtube.com/@AzumboGames',
  'https://www.instagram.com/azumbogames',
  'https://www.linkedin.com/in/azumbogames',
  'https://www.gofundme.com/u/azumbox',
] as const;

/** Crawlers explicitly allowed for indexing and AI discovery (2026 baseline). */
export const AI_AND_SEARCH_BOTS = [
  '*',
  'Googlebot',
  'Google-Extended',
  'Bingbot',
  'Yandex',
  'CCBot',
  'Bytespider',
  'OAI-SearchBot',
  'GPTBot',
  'ChatGPT-User',
  'anthropic-ai',
  'ClaudeBot',
  'PerplexityBot',
  'cohere-ai',
  'Meta-ExternalAgent',
  'Applebot',
  'Diffbot',
  'ImagesiftBot',
  'Omgili',
] as const;

export function isSupportedLocale(locale: string): locale is Locale {
  return SUPPORTED_LOCALES.includes(locale as Locale);
}

export function buildCanonical(pathname = '/') {
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${SITE_URL}${normalizedPath}`;
}

export function buildLanguageAlternates(pathname = '/') {
  const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const pathWithoutLocale = cleanPath.replace(/^\/(en|it|ru)(?=\/|$)/, '') || '/';

  return {
    'en-US': buildCanonical(`/en${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`),
    'it-IT': buildCanonical(`/it${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`),
    'ru-RU': buildCanonical(`/ru${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`),
    'x-default': buildCanonical(`/en${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`),
  };
}

export const INDEXABLE_ROUTES = [
  '/pacman',
  '/frogger',
  '/spaceinvaders',
  '/cirotap',
  '/cornettoclicker',
  '/cornettoclicker-landing',
  '/petonauta-landing',
  '/game',
  '/register',
  '/stats',
  '/finish',
  '/lapasta',
  '/ciromap',
  '/ciromap/privacy',
  '/azumbox',
  '/legal/privacy',
  '/legal/terms',
  '/legal/cookies',
  '/legal/gdpr-ccpa',
  '/support',
  '/cornettoclicker/privacy',
  '/redlines/privacy',
  '/petonauta/privacy',
] as const;

export const baseMetadata = (pathname: string): Metadata => ({
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: buildCanonical(pathname),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
});

export function buildPageMetadata({
  pathname,
  title,
  description,
  locale = DEFAULT_LOCALE,
  imagePath = '/logo/Azumbo Logo no background small size.jpeg',
}: {
  pathname: string;
  title: string;
  description: string;
  locale?: Locale;
  imagePath?: string;
}): Metadata {
  const canonical = buildCanonical(pathname);
  const imageUrl = `${SITE_URL}${imagePath}`;

  return {
    ...baseMetadata(pathname),
    title,
    description,
    openGraph: {
      type: 'website',
      siteName: 'AZUMBO',
      url: canonical,
      title,
      description,
      locale: LOCALE_OG[locale],
      images: [{ url: imageUrl, alt: 'AZUMBO indie game studio' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function buildHomeGraph(locale: Locale) {
  const pageUrl = buildCanonical(`/${locale}`);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORGANIZATION_ID,
        name: 'AZUMBO',
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/logo/Azumbo Logo no background small size.jpeg`,
        },
        email: 'azumbogames@gmail.com',
        sameAs: [...ORGANIZATION_SAME_AS],
        areaServed: {
          '@type': 'Country',
          name: 'United States',
        },
        knowsLanguage: ['en-US', 'it-IT', 'ru-RU'],
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: pageUrl,
        name: 'AZUMBO',
        description:
          'Indie game studio building mobile and Nintendo Switch games for global audiences with US-first English content.',
        publisher: { '@id': ORGANIZATION_ID },
        inLanguage: LOCALE_HTML_LANG[locale],
      },
    ],
  };
}

export const VIDEO_PUBLISH_DATE = '2026-01-15T00:00:00Z';
