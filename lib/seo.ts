export const SITE_URL = 'https://azumbo.vercel.app';
export const SUPPORTED_LOCALES = ['en', 'it', 'ru'] as const;

export const baseMetadata = (path: string) => ({
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: path,
    languages: {
      'en-US': '/en',
      'it-IT': '/it',
      'ru-RU': '/ru',
    },
  },
});
