import type React from 'react';
import { createContext, useContext, useState } from 'react';
import { AnalyticsBrowser } from '@segment/analytics-next';

import useAnalyticsIdentify from './useAnalyticsIdentify';
import useAnalyticsPageTracking from './useAnalyticsPageTracking';

const AnalyticsContext = createContext<AnalyticsBrowser | undefined>(undefined);

type AnalyticsProviderProperties = {
  segmentWriteKey: string;
  children: React.ReactNode;
};

const AnalyticsProvider: React.FC<AnalyticsProviderProperties> = ({
  children,
  segmentWriteKey,
}) => {
  const [analytics] = useState(() => AnalyticsBrowser.load({ writeKey: segmentWriteKey }));

  useAnalyticsPageTracking(analytics);
  useAnalyticsIdentify(analytics);

  return <AnalyticsContext.Provider value={analytics}>{children}</AnalyticsContext.Provider>;
};

function useAnalytics(): AnalyticsBrowser {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within a AnalyticsProvider');
  }
  return context;
}

export { AnalyticsProvider, useAnalytics };
