import { SegmentAnalyticsProvider } from '@/features/analytics/SegmentAnalyticsContext';
import { render, type RenderOptions } from '@testing-library/react';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

import type React from 'react';

type AllTheProvidersProperties = {
  children: React.ReactNode;
};

const AllTheProviders: React.FC<AllTheProvidersProperties> = ({ children }) => (
  <MemoryRouterProvider>
    <SegmentAnalyticsProvider writeKey={process.env.NEXT_PUBLIC_SEGMENT_ANALYTICS_WRITE_KEY}>
      {children}
    </SegmentAnalyticsProvider>
  </MemoryRouterProvider>
);

function customRender(ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return render(ui, { wrapper: AllTheProviders, ...options });
}

export * from '@testing-library/react';
export { customRender as render };
