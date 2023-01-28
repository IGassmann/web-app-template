import { SegmentAnalyticsProvider } from '@/features/analytics/SegmentAnalyticsContext';
import { ClerkProvider } from '@clerk/nextjs';
import { render, type RenderOptions } from '@testing-library/react';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

import type React from 'react';

type AllTheProvidersProperties = {
  children: React.ReactNode;
};

const AllTheProviders: React.FC<AllTheProvidersProperties> = ({ children }) => (
  <MemoryRouterProvider>
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SegmentAnalyticsProvider writeKey={process.env.NEXT_PUBLIC_SEGMENT_ANALYTICS_WRITE_KEY}>
        {children}
      </SegmentAnalyticsProvider>
    </ClerkProvider>
  </MemoryRouterProvider>
);

function customRender(ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return render(ui, { wrapper: AllTheProviders, ...options });
}

export * from '@testing-library/react';
export { customRender as render };
