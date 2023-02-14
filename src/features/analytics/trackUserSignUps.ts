import inngest from '@/features/common/inngest';
import serverAnalytics from '@/features/analytics/serverAnalytics';

export default inngest.createFunction(
  'Track user sign ups',
  'clerk/user.created',
  async ({ event }) => {
    const analytics = await serverAnalytics();

    const createdUser = event.data;

    const userPrimaryEmailAddress = createdUser.email_addresses.find(
      (emailAddress) => emailAddress.id === createdUser.primary_email_address_id
    )?.email_address;

    await analytics.identify({
      userId: createdUser.id,
      traits: {
        email: userPrimaryEmailAddress,
        username: createdUser.username,
        avatar: createdUser.profile_image_url,
        createdAt: new Date(createdUser.created_at),
      },
    });

    await analytics.track({
      userId: createdUser.id,
      event: 'User Signed Up',
    });
  }
);
