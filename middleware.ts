import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Если в URL есть заглавные буквы, делаем редирект на нижний регистр
  if (pathname !== pathname.toLowerCase()) {
    return NextResponse.redirect(
      new URL(pathname.toLowerCase(), request.url),
      308 // Permanent redirect
    );
  }

  return NextResponse.next();
}

export const config = {
  // Исключаем API, статику и картинки из обработки
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|logo|images).*)'],
};
