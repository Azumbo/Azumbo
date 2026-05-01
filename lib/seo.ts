export const SITE_URL = 'https://azumbo.vercel.app';
export const SUPPORTED_LOCALES = ['en', 'it', 'ru'] as const;

export type Locale = typeof SUPPORTED_LOCALES[number];

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

export const baseMetadata = (pathname: string) => ({
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: buildCanonical(pathname),
  },
});
