import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest, res: NextResponse) {
  const { pathname } = req.nextUrl;

  if (pathname === '/') {
    return NextResponse.redirect(new URL(encodeURI('/en'), req.url), 308)
  }

  const pattern = /\.(html)$/g;
  const isValid = pattern.test(decodeURI(pathname));
  if (isValid) {
    const newRedirectRoute = decodeURI(pathname).replace(pattern, '');
    return NextResponse.redirect(new URL(encodeURI(newRedirectRoute), req.url), 308);
  }

  return NextResponse.next();
}

// add matcher because middleware just run scripts and cant run other type of files
export const config = {
  matcher: ['/((?!_next|brand-icons|icons|js|video|sw.js|manifest.json|images|fonts|favicon.ico).*)'],
};
