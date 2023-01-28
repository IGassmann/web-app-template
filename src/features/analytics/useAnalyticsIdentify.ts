import { useUser } from '@clerk/nextjs';
import type { AnalyticsBrowser } from '@segment/analytics-next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

/**
 * This hook automatically identifies the user for analytics when the user is signed in.
 *
 * @param analytics - The Segment Analytics browser instance.
 */
export default function useAnalyticsIdentify(analytics: AnalyticsBrowser): void {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user?.id) return;

    // This only triggers on the first page load
    analytics.identify(user.id, {
      email: user.primaryEmailAddress?.emailAddress,
      username: user.username,
      avatar: user.profileImageUrl,
      createdAt: user.createdAt,
    });

    const handleRouteChange = (): void => {
      if (!user?.id) return;
      analytics.identify(user.id, {
        email: user.primaryEmailAddress?.emailAddress,
        username: user.username,
        avatar: user.profileImageUrl,
        createdAt: user.createdAt,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [
    analytics,
    router.events,
    user?.id,
    user?.primaryEmailAddress?.emailAddress,
    user?.username,
    user?.profileImageUrl,
    user?.createdAt,
  ]);
}
