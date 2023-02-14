import type { UserJSON } from '@clerk/types';
import type { EventPayload } from 'inngest';

interface ClerkUserCreatedEvent extends EventPayload {
  name: 'clerk/user.created';
  data: UserJSON;
  user: UserJSON & {
    email: string;
  };
  asd: string;
}

export default ClerkUserCreatedEvent;
