import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { SegmentAnalyticsProvider } from '@/features/analytics/SegmentAnalyticsContext';

type AllTheProvidersProperties = {
  children: React.ReactNode;
};

const AllTheProviders: React.FC<AllTheProvidersProperties> = ({ children }) => (
  <SegmentAnalyticsProvider writeKey={process.env.NEXT_PUBLIC_SEGMENT_ANALYTICS_WRITE_KEY}>
    {children}
  </SegmentAnalyticsProvider>
);

function customRender(ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return render(ui, { wrapper: AllTheProviders, ...options });
}

export * from '@testing-library/react';
export { customRender as render };
