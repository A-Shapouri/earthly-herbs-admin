import { NextRequest, NextResponse } from 'next/server';
import routes from '@routes';

export async function middleware(req: NextRequest, res: NextResponse) {
  const token = await req.cookies.get('token')?.value;

  const { origin, pathname } = req.nextUrl;

  if (!token && pathname !== routes['route.auth.login']) {
    return NextResponse.redirect(`${origin}${routes['route.auth.login']}`, 307);
  }

  if (token && (pathname === '/' || pathname === routes['route.auth.login'])) {
    return NextResponse.redirect(`${origin}/en${routes['route.home.index']}`, 307);
  }

  return NextResponse.next();
}

// add matcher because middleware just run scripts and cant run other type of files
export const config = {
  matcher: ['/((?!_next|brand-icons|icons|js|video|sw.js|manifest.json|images|fonts|favicon.ico).*)'],
};
