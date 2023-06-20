import { EventSchemas, Inngest } from 'inngest';

import type SegmentUserSignedUp from '@/features/analytics/SegmentUserSignedUpEvent';
import type ClerkUserCreatedEvent from '@/features/user-management/ClerkUserCreatedEvent';
import type ClerkUserUpdatedEvent from '@/features/user-management/ClerkUserUpdatedEvent';
import type TestHelloWorldEvent from '@/app/api/hello/TestHelloWorldEvent';

const inngest = new Inngest({
  name: 'Web App Template',
  schemas: new EventSchemas().fromUnion<
    ClerkUserCreatedEvent | ClerkUserUpdatedEvent | SegmentUserSignedUp | TestHelloWorldEvent
  >(),
});

export default inngest;
