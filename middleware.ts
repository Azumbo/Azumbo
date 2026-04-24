import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const SUPPORTED_LOCALES = ['en', 'ru', 'it'] as const;
const DEFAULT_LOCALE = 'en';

function getPreferredLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get('azumbo_locale')?.value;
  if (cookieLocale && SUPPORTED_LOCALES.includes(cookieLocale as (typeof SUPPORTED_LOCALES)[number])) {
    return cookieLocale;
  }

  const languageHeader = request.headers.get('accept-language')?.toLowerCase() || '';
  const matched = SUPPORTED_LOCALES.find((locale) => languageHeader.startsWith(locale) || languageHeader.includes(`${locale};`) || languageHeader.includes(`${locale},`));
  return matched || DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isFileRequest = /\/[^/]+\.[^/]+$/.test(pathname);

  if (!isFileRequest && pathname !== pathname.toLowerCase()) {
    return NextResponse.redirect(new URL(pathname.toLowerCase(), request.url), 308);
  }

  if (pathname === '/') {
    const locale = getPreferredLocale(request);
    return NextResponse.redirect(new URL(`/${locale}/`, request.url), 307);
  }

  const localeMatch = pathname.match(/^\/(en|ru|it)(\/.*)?$/);
  if (localeMatch) {
    const locale = localeMatch[1];
    const response = NextResponse.next();
    response.cookies.set('azumbo_locale', locale, {
      path: '/',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 365,
    });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|logo|images|site/assets).*)'],
};
