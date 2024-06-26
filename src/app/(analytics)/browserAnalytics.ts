import { AnalyticsBrowser } from '@segment/analytics-next';

import sentryIdentifyPlugin from '@/app/(analytics)/sentryIdentifyPlugin';

const browserAnalytics = AnalyticsBrowser.load({
  writeKey: process.env.NEXT_PUBLIC_SEGMENT_ANALYTICS_WRITE_KEY,
  plugins: [sentryIdentifyPlugin],
});

export default browserAnalytics;
