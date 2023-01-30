import { Inngest } from 'inngest';

import type ClerkUserCreatedEvent from '@/features/user-management/ClerkUserCreatedEvent';
import type ClerkUserUpdatedEvent from '@/features/user-management/ClerkUserUpdatedEvent';

type Events = {
  'clerk/user.created': ClerkUserCreatedEvent;
  'clerk/user.updated': ClerkUserUpdatedEvent;
};

const inngest = new Inngest<Events>({ name: 'Web App Template' });

export default inngest;
