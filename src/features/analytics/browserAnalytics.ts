import { AnalyticsBrowser, Plugin } from '@segment/analytics-next';

import sentryIdentifyPlugin from '@/features/analytics/sentryIdentifyPlugin';

const browserAnalytics = AnalyticsBrowser.load({
  writeKey: process.env.NEXT_PUBLIC_SEGMENT_ANALYTICS_WRITE_KEY,
  plugins: [sentryIdentifyPlugin as Plugin],
});

export default browserAnalytics;
