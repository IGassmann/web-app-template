import type { UserJSON } from '@clerk/types';
import type { EventPayload } from 'inngest';

export default interface ClerkUserCreatedEvent extends EventPayload {
  name: 'clerk/user.updated';
  data: UserJSON;
  user: UserJSON & {
    email: string;
  };
}
