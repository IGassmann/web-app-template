// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { useUser } from '@clerk/nextjs';
// import type { UserResource } from '@clerk/types';
// import type { Traits } from '@segment/analytics-next';
//
// import browserAnalytics from '@/features/analytics/browserAnalytics';
//
// function getUserTraits(user: UserResource): Traits {
//   return {
//     email: user.primaryEmailAddress?.emailAddress,
//     username: user.username,
//     avatar: user.imageUrl,
//     createdAt: user.createdAt,
//     isAdmin: user.publicMetadata?.isAdmin,
//   };
// }
//
// /**
//  * This hook automatically identifies the user for analytics when the user is signed in.
//  */
// export default function useAnalyticsIdentify(): void {
//   const router = useRouter();
//   const { user } = useUser();
//
//   useEffect(() => {
//     // Don't run if the user is not signed in
//     if (!user) return;
//
//     const userTraits = getUserTraits(user);
//
//     // This only triggers on the first page load
//     browserAnalytics.identify(user.id, userTraits);
//
//     const handleRouteChange = (): void => {
//       browserAnalytics.identify(user.id, userTraits);
//     };
//
//     router.events.on('routeChangeComplete', handleRouteChange);
//     return () => {
//       router.events.off('routeChangeComplete', handleRouteChange);
//     };
//   }, [router.events, user]);
// }
