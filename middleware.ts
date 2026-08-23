import { NextResponse, type NextRequest } from 'next/server';
import { locales, defaultLocale, type Locale } from '@/lib/i18n';

function getLocaleFromPath(pathname: string): Locale | null {
  for (const locale of locales) {
    if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
      return locale;
    }
  }
  return null;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static assets and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const localeInPath = getLocaleFromPath(pathname);

  // If locale is already in path, continue
  if (localeInPath) {
    return NextResponse.next();
  }

  // Redirect to default locale (fa)
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|api|images).*)'],
};
