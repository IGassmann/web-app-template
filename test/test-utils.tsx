import type React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { render, type RenderOptions } from '@testing-library/react';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

import { AnalyticsProvider } from '@/features/analytics/AnalyticsContext';

type AllTheProvidersProperties = {
  children: React.ReactNode;
};

const AllTheProviders: React.FC<AllTheProvidersProperties> = ({ children }) => (
  <MemoryRouterProvider>
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <AnalyticsProvider segmentWriteKey={process.env.NEXT_PUBLIC_SEGMENT_ANALYTICS_WRITE_KEY}>
        {children}
      </AnalyticsProvider>
    </ClerkProvider>
  </MemoryRouterProvider>
);

function customRender(ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return render(ui, { wrapper: AllTheProviders, ...options });
}

export * from '@testing-library/react';
export { customRender as render };
