import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const LEGACY_REWRITES: Record<string, string> = {
  '/pacman': '/PacMan',
  '/spaceinvaders': '/Spaceinvaders',
  '/cityintheplane/privacy': '/CityInThePlane/privacy'
};

const isAsset = (pathname: string) =>
  pathname.startsWith('/_next') ||
  pathname.startsWith('/api') ||
  pathname.includes('.') ||
  pathname.startsWith('/favicon');

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (isAsset(pathname)) {
    return NextResponse.next();
  }

  const lowercasePath = pathname.toLowerCase();
  if (pathname !== lowercasePath) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = lowercasePath;
    redirectUrl.search = search;
    return NextResponse.redirect(redirectUrl, 308);
  }

  const rewriteTarget = LEGACY_REWRITES[lowercasePath];
  if (rewriteTarget) {
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = rewriteTarget;
    return NextResponse.rewrite(rewriteUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|.*\\..*).*)']
};
