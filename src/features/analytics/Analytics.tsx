import type { FunctionComponent, ReactNode } from 'react';

import useAnalyticsIdentify from '@/features/analytics/useAnalyticsIdentify';
import useAnalyticsPageTracking from '@/features/analytics/useAnalyticsPageTracking';

type AnalyticsProperties = {
  children: ReactNode;
};

const Analytics: FunctionComponent<AnalyticsProperties> = ({ children }) => {
  useAnalyticsIdentify();
  useAnalyticsPageTracking();

  return <div>{children}</div>;
};
export default Analytics;
