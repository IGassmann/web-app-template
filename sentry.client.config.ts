// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.2,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
});

Sentry.getCurrentHub?.()
  ?.getClient?.()
  ?.addIntegration?.(
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  );
