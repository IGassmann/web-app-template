import util from 'node:util';
import { Analytics, Plugin } from '@segment/analytics-node';
import { captureException } from '@sentry/nextjs';
import type { Asyncify } from 'type-fest';

import sentryIdentifyPlugin from '@/features/analytics/sentryIdentifyPlugin';

const analyticsCallNames = ['identify', 'track', 'page', 'screen', 'group', 'alias'] as const;
type AnalyticsCallName = (typeof analyticsCallNames)[number];
type PromisifiedAnalyticsCalls = {
  identify: Asyncify<Analytics['identify']>;
  track: Asyncify<Analytics['track']>;
  page: Asyncify<Analytics['page']>;
  screen: Asyncify<Analytics['screen']>;
  group: Asyncify<Analytics['group']>;
  alias: Asyncify<Analytics['alias']>;
};

export default async function serverAnalytics(): Promise<
  Omit<Analytics, AnalyticsCallName> & PromisifiedAnalyticsCalls
> {
  const analytics = new Analytics({
    maxEventsInBatch: 1,
    writeKey: process.env.NEXT_PUBLIC_SEGMENT_ANALYTICS_WRITE_KEY,
  }).on('error', captureException);

  await analytics.register(sentryIdentifyPlugin as Plugin);

  // eslint-disable-next-line unicorn/no-array-reduce -- This is the simplest way I can think of to do this.
  const promisifiedAnalyticsCalls = analyticsCallNames.reduce((accumulator, analyticsCallName) => {
    const analyticsCall = analytics[analyticsCallName];
    const promisifiedAnalyticsCall = util.promisify(analyticsCall);
    return {
      ...accumulator,
      [analyticsCallName]: promisifiedAnalyticsCall,
    };
  }, {} as PromisifiedAnalyticsCalls);

  return Object.assign(analytics, promisifiedAnalyticsCalls);
}
