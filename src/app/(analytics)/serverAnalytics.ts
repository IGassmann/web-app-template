import { promisify } from 'node:util';
import { Analytics, Context } from '@segment/analytics-node';
import { captureException } from '@sentry/nextjs';

import sentryIdentifyPlugin from '@/app/(analytics)/sentryIdentifyPlugin';

const analyticsCallNames = ['identify', 'track', 'page', 'screen', 'group', 'alias'] as const;
type AnalyticsCallName = (typeof analyticsCallNames)[number];

type AnalyticsCall = (typeof Analytics.prototype)[AnalyticsCallName];

type PromisifyAnalyticsCall<F extends AnalyticsCall> = (
  arguments_: Parameters<F>[0],
) => Promise<Context>;

type PromisifiedAnalyticsCalls = {
  [K in AnalyticsCallName]: PromisifyAnalyticsCall<Analytics[K]>;
};

export default async function serverAnalytics(): Promise<
  Omit<Analytics, AnalyticsCallName> & PromisifiedAnalyticsCalls
> {
  const analytics = new Analytics({
    maxEventsInBatch: 1,
    writeKey: process.env.NEXT_PUBLIC_SEGMENT_ANALYTICS_WRITE_KEY,
  }).on('error', captureException);

  await analytics.register(sentryIdentifyPlugin);

  // eslint-disable-next-line unicorn/no-array-reduce -- This is simpler than using .map with Object.fromEntries.
  const promisifiedAnalyticsCalls = analyticsCallNames.reduce((accumulator, analyticsCallName) => {
    const analyticsCall = analytics[analyticsCallName];
    const promisifiedAnalyticsCall = promisify(analyticsCall);
    return {
      ...accumulator,
      [analyticsCallName]: promisifiedAnalyticsCall,
    };
  }, {} as PromisifiedAnalyticsCalls);

  return Object.assign(analytics, promisifiedAnalyticsCalls);
}
