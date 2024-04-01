// import { Inngest } from 'inngest';
//
// import type SegmentUserSignedUp from '@/features/analytics/SegmentUserSignedUpEvent';
// import type ClerkUserCreatedEvent from '@/features/user-management/ClerkUserCreatedEvent';
// import type ClerkUserUpdatedEvent from '@/features/user-management/ClerkUserUpdatedEvent';
//
// type Event = ClerkUserCreatedEvent | ClerkUserUpdatedEvent | SegmentUserSignedUp;
//
// type Events = {
//   [K in Event['name']]: Extract<Event, { name: K }>;
// };
//
// const inngest = new Inngest<Events>({ name: 'Web App Template' });
//
// export default inngest;
