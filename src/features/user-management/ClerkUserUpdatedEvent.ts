import type { UserJSON } from '@clerk/types';
import type { EventPayload } from 'inngest';

interface ClerkUserCreatedEvent extends EventPayload {
  name: 'clerk/user.updated';
  data: UserJSON;
  user: UserJSON & {
    email: string;
  };
}

export default ClerkUserCreatedEvent;
