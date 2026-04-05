export const SITE_URL = 'https://azumbo.vercel.app';
export const SUPPORTED_LOCALES = ['en', 'it', 'ru'] as const;

export type Locale = typeof SUPPORTED_LOCALES[number];

/**
 * Проверяет, поддерживается ли данная локаль
 */
export function isSupportedLocale(locale: string): locale is Locale {
  return SUPPORTED_LOCALES.includes(locale as any);
}

/**
 * Генерирует ссылки на альтернативные языковые версии страницы
 */
export function buildLanguageAlternates(path = '') {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  // Удаляем текущий префикс локали из пути, если он есть
  const pathWithoutLocale = cleanPath.replace(/^\/(en|it|ru)/, '') || '/';

  return {
    'en-US': `/en${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`,
    'it-IT': `/it${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`,
    'ru-RU': `/ru${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`,
  };
}

/**
 * Базовый конфиг метаданных для страниц
 */
export const baseMetadata = (path: string) => ({
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: path,
    languages: buildLanguageAlternates(path),
  },
});
