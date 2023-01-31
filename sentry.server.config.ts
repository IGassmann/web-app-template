// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  // We need to explicitly set the environment here, otherwise it will be set to "production" even
  // when the app is running in a preview environment. This is because the environment configuration
  // defaults to NODE_ENV which is "production" when built with `pnpm build` and "development" when
  // running `pnpm dev`.
  // See https://github.com/getsentry/sentry-javascript/issues/6993
  environment: process.env.NEXT_PUBLIC_VERCEL_ENV,
  tracesSampleRate: 0.2,
});
