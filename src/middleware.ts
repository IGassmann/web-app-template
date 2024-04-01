import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher(['/']);

export default clerkMiddleware((auth, request) => {
  if (isPublicRoute(request)) return; // if it's a public route, do nothing
  auth().protect(); // for any other route, require auth
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/api(.*)'],
};
