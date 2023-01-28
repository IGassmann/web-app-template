import { getAuth, withClerkMiddleware } from '@clerk/nextjs/server';
import { type NextRequest, NextResponse } from 'next/server';

// Set the paths that don't require the user to be signed in
const publicPaths = ['/', '/sign-in*', '/sign-up*'];

function isPublicPath(urlPath: string): boolean {
  return publicPaths.some((publicPath) =>
    new RegExp(`^${publicPath}$`.replace('*$', '($|/)')).test(urlPath)
  );
}

export default withClerkMiddleware((request: NextRequest) => {
  if (isPublicPath(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const { userId } = getAuth(request);

  const isUserSignedIn = Boolean(userId);

  // If the user is not signed in redirect them to the sign-in page.
  if (!isUserSignedIn) {
    const signInURL = new URL('/sign-in', request.url);
    signInURL.searchParams.set('redirect_url', request.url);
    return NextResponse.redirect(signInURL);
  }

  return NextResponse.next();
});

// Stop Middleware running on static files
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
