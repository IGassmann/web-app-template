// import inngest from '@/features/common/inngest';
// import serverAnalytics from '@/features/analytics/serverAnalytics';
//
// export default inngest.createFunction(
//   'Update user info',
//   'clerk/user.updated',
//   async ({ event }) => {
//     const analytics = await serverAnalytics();
//     const updatedUser = event.data;
//
//     const userPrimaryEmailAddress = updatedUser.email_addresses.find(
//       (emailAddress) => emailAddress.id === updatedUser.primary_email_address_id
//     )?.email_address;
//
//     await analytics.identify({
//       userId: updatedUser.id,
//       traits: {
//         email: userPrimaryEmailAddress,
//         username: updatedUser.username,
//         avatar: updatedUser.profile_image_url,
//         createdAt: new Date(updatedUser.created_at),
//       },
//     });
//   }
// );
