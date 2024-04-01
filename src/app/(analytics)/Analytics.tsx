'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import type { Traits } from '@segment/analytics-next';

import browserAnalytics from '@/app/(analytics)/browserAnalytics';

type ClerkUser = NonNullable<ReturnType<typeof useUser>['user']>;

function getUserTraits(user: ClerkUser): Traits {
  return {
    email: user.primaryEmailAddress?.emailAddress,
    username: user.username,
    avatar: user.imageUrl,
    createdAt: user.createdAt,
    isAdmin: user.publicMetadata?.isAdmin,
  };
}

function useAnalyticsIdentify(): void {
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    if (!isSignedIn) return;
    const userTraits = getUserTraits(user);
    browserAnalytics.identify(user.id, userTraits);
  }, [isSignedIn, user]);
}

function useAnalyticsPageTracking(): void {
  const pathname = usePathname();
  const searchParameters = useSearchParams();

  useEffect(() => {
    browserAnalytics.page();
  }, [pathname, searchParameters]);
}

export default function Analytics() {
  useAnalyticsIdentify();
  useAnalyticsPageTracking();

  // eslint-disable-next-line unicorn/no-null -- We need to return null here to avoid rendering anything.
  return null;
}
