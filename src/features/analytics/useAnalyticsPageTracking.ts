// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
//
// import browserAnalytics from '@/features/analytics/browserAnalytics';

/**
 * This hook automatically tracks page views for analytics. It tracks the page view when the app is
 * mounted and when the route changes.
 */
// export default function useAnalyticsPageTracking(): void {
//   const router = useRouter();
//
//   useEffect(() => {
//     // This only triggers on the first page load
//     browserAnalytics.page();
//
//     function handleRouteChange(): void {
//       browserAnalytics.page();
//     }
//
//     router.events.on('routeChangeComplete', handleRouteChange);
//     return () => {
//       router.events.off('routeChangeComplete', handleRouteChange);
//     };
//   }, [router.events]);
// }
