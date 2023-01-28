import type { AnalyticsBrowser } from '@segment/analytics-next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

/**
 * This hook will automatically track page views using Segment Analytics.
 * It will track the page view when the app is mounted and when the route changes.
 *
 * @param analytics - The Segment Analytics instance.
 */
export default function useSegmentAnalyticsPageTracking(analytics: AnalyticsBrowser): void {
  const router = useRouter();

  useEffect(() => {
    // This only triggers on the first page load
    analytics.page();

    function handleRouteChange(): void {
      analytics.page();
    }

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [analytics, router.events]);
}
