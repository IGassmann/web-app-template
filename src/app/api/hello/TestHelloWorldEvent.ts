import type { EventPayload } from 'inngest';

export default interface TestHelloWorldEvent extends EventPayload {
  name: 'test/hello.world';
  user: {
    firstName: string;
  };
}
