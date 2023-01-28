import util from 'node:util';
import { Analytics } from '@segment/analytics-node';
import { captureException } from '@sentry/nextjs';
import type { Asyncify } from 'type-fest';

export default function serverAnalytics() {
  const analytics = new Analytics({
    maxEventsInBatch: 1,
    writeKey: process.env.NEXT_PUBLIC_SEGMENT_ANALYTICS_WRITE_KEY,
  }).on('error', captureException);

  const analyticsCallNames = ['identify', 'track', 'page', 'screen', 'group', 'alias'] as const;
  type AnalyticsCallName = typeof analyticsCallNames[number];
  type AnalyticsCallFunction = typeof analytics[AnalyticsCallName];
  type PromisifiedAnalyticsCallFunction = Asyncify<AnalyticsCallFunction>;

  // eslint-disable-next-line unicorn/no-array-reduce -- This is the simplest way I can think of to do this.
  const promisifiedAnalyticsCalls = analyticsCallNames.reduce((accumulator, analyticsCallName) => {
    const analyticsCall = analytics[analyticsCallName];
    const promisifiedAnalyticsCall = util.promisify(analyticsCall);
    return {
      ...accumulator,
      [analyticsCallName]: promisifiedAnalyticsCall,
    };
  }, {} as Record<AnalyticsCallName, PromisifiedAnalyticsCallFunction>);

  return {
    ...analytics,
    identify: promisifiedAnalyticsCalls.identify as Asyncify<Analytics['identify']>,
    track: promisifiedAnalyticsCalls.track as Asyncify<Analytics['track']>,
    page: promisifiedAnalyticsCalls.page as Asyncify<Analytics['page']>,
    screen: promisifiedAnalyticsCalls.screen as Asyncify<Analytics['screen']>,
    group: promisifiedAnalyticsCalls.group as Asyncify<Analytics['group']>,
    alias: promisifiedAnalyticsCalls.alias as Asyncify<Analytics['alias']>,
  };
}

const analytics = serverAnalytics();
