import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PRIMARY_HOST = 'azumbo.vercel.app';
const SUPPORTED_LOCALES = ['en', 'ru', 'it'] as const;
const DEFAULT_LOCALE = 'en';

function getPreferredLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get('azumbo_locale')?.value;
  if (cookieLocale && SUPPORTED_LOCALES.includes(cookieLocale as (typeof SUPPORTED_LOCALES)[number])) {
    return cookieLocale;
  }

  const languageHeader = request.headers.get('accept-language')?.toLowerCase() || '';
  const matched = SUPPORTED_LOCALES.find(
    (locale) =>
      languageHeader.startsWith(locale) ||
      languageHeader.includes(`${locale};`) ||
      languageHeader.includes(`${locale},`)
  );

  return matched || DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const hostname = request.nextUrl.hostname.toLowerCase();

  const isVercelMirror = hostname.endsWith('.vercel.app') && hostname !== PRIMARY_HOST;
  if (isVercelMirror) {
    const redirectUrl = `https://${PRIMARY_HOST}${pathname}${search}`;
    const response = NextResponse.redirect(redirectUrl, 301);
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return response;
  }

  const isFileRequest = /\/[^/]+\.[^/]+$/.test(pathname);

  if (!isFileRequest && pathname !== pathname.toLowerCase()) {
    return NextResponse.redirect(new URL(`${pathname.toLowerCase()}${search}`, request.url), 308);
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
