import { AnalyticsBrowser } from '@segment/analytics-next';
import type React from 'react';
import { createContext, useContext, useMemo } from 'react';

const SegmentAnalyticsContext = createContext<AnalyticsBrowser | undefined>(undefined);

type AnalyticsProviderProperties = {
  writeKey: string;
  children: React.ReactNode;
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
  const context = useContext(SegmentAnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within a SegmentAnalyticsProvider');
  }
  return context;
}

export { SegmentAnalyticsProvider, useSegmentAnalytics };
