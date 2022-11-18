import { AnalyticsBrowser } from '@segment/analytics-next';
import React, { createContext, ReactNode, useContext, useMemo } from 'react';

const SegmentAnalyticsContext = createContext<AnalyticsBrowser | undefined>(undefined);

type AnalyticsProviderProperties = {
  writeKey: string;
  children: ReactNode;
};

const SegmentAnalyticsProvider: React.FC<AnalyticsProviderProperties> = ({
  children,
  writeKey,
}) => {
  const analytics = useMemo(() => AnalyticsBrowser.load({ writeKey }), [writeKey]);
  return (
    <SegmentAnalyticsContext.Provider value={analytics}>
      {children}
    </SegmentAnalyticsContext.Provider>
  );
};

function useSegmentAnalytics(): AnalyticsBrowser {
  const result = useContext(SegmentAnalyticsContext);
  if (!result) {
    throw new Error('useAnalytics must be used within a SegmentAnalyticsProvider');
  }
  return result;
}

export { SegmentAnalyticsProvider, useSegmentAnalytics };
