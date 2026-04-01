import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const STATIC_PREFIXES = [
  '/_next',
  '/api',
  '/images',
  '/logo',
  '/favicon',
  '/assets',
  '/fonts'
] as const;

const STATIC_FILE_EXTENSIONS =
  /\.(?:avif|bmp|css|gif|ico|jpeg|jpg|js|json|map|mp3|mp4|ogg|png|svg|txt|wav|webm|webmanifest|webp|woff|woff2|xml)$/i;

function isStaticPath(pathname: string): boolean {
  if (STATIC_PREFIXES.some((prefix) => pathname.startsWith(prefix))) {
    return true;
  }

  return STATIC_FILE_EXTENSIONS.test(pathname);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isStaticPath(pathname)) {
    return NextResponse.next();
  }

  const lowerCasePathname = pathname.toLowerCase();

  if (pathname !== lowerCasePathname) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = lowerCasePathname;
    return NextResponse.redirect(redirectUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*'
};
