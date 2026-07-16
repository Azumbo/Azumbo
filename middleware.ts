import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import {
  DEFAULT_LOCALE,
  LOCALE_REQUEST_HEADER,
  NOINDEX_PATHS,
  PRIMARY_HOST,
  SUPPORTED_LOCALES,
} from './lib/seo';

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

function isNoindexPath(pathname: string) {
  return (NOINDEX_PATHS as readonly string[]).some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );
}

const KNOWN_APP_ROOTS = new Set([
  'pacman',
  'frogger',
  'spaceinvaders',
  'cirotap',
  'cornettoclicker',
  'cornettoclicker-landing',
  'petonauta-landing',
  'lapasta',
  'ciromap',
  'azumbox',
  'support',
  'register',
  'finish',
  'game',
  'legal',
  'redlines',
  'petonauta',
  'cityintheplane',
]);

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const hostname = request.nextUrl.hostname.toLowerCase();

  // 1. DOMAIN LOCK: strip non-primary Vercel mirrors
  const isVercelMirror = hostname.endsWith('.vercel.app') && hostname !== PRIMARY_HOST;
  if (isVercelMirror) {
    const redirectUrl = `https://${PRIMARY_HOST}${pathname}${search}`;
    const response = NextResponse.redirect(redirectUrl, 301);
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
    return response;
  }

  // 2. Skip static files
  const isFileRequest = /\/[^/]+\.[^/]+$/.test(pathname);
  if (isFileRequest) return NextResponse.next();

  // 3. Lowercase normalization
  if (pathname !== pathname.toLowerCase()) {
    return NextResponse.redirect(new URL(`${pathname.toLowerCase()}${search}`, request.url), 308);
  }

  // 4. Root -> preferred locale (no trailing slash)
  if (pathname === '/') {
    const locale = getPreferredLocale(request);
    return NextResponse.redirect(new URL(`/${locale}${search}`, request.url), 307);
  }

  // 4.1 /en/ -> /en
  const localeTrailingSlash = pathname.match(/^\/(en|ru|it)\/$/);
  if (localeTrailingSlash) {
    const locale = localeTrailingSlash[1];
    return NextResponse.redirect(new URL(`/${locale}${search}`, request.url), 308);
  }

  // 4.2 Soft-404 guard: unknown single segments must not match [locale]
  const singleSegment = pathname.match(/^\/([^/]+)$/);
  if (singleSegment) {
    const segment = singleSegment[1];
    const isLocale = SUPPORTED_LOCALES.includes(segment as (typeof SUPPORTED_LOCALES)[number]);
    if (!isLocale && !KNOWN_APP_ROOTS.has(segment)) {
      return new NextResponse(null, {
        status: 404,
        headers: { 'X-Robots-Tag': 'noindex, nofollow, noarchive' },
      });
    }
  }

  // 5. Locale cookies + request header
  const localeMatch = pathname.match(/^\/(en|ru|it)(\/.*)?$/);
  if (localeMatch) {
    const locale = localeMatch[1];
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set(LOCALE_REQUEST_HEADER, locale);
    const response = NextResponse.next({
      request: { headers: requestHeaders },
    });
    response.cookies.set('azumbo_locale', locale, {
      path: '/',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 365,
    });
    return response;
  }

  if (isNoindexPath(pathname)) {
    const response = NextResponse.next();
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|logo|images|site/assets|.*\\..*).*)'],
};
