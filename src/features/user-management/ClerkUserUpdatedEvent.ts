import type { UserJSON } from '@clerk/types';

type ClerkUserCreatedEvent = {
  name: 'clerk/user.updated';
  data: UserJSON;
  user: UserJSON & {
    email: string;
  };
};

export default ClerkUserCreatedEvent;
