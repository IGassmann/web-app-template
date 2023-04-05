import type { EventPayload } from 'inngest';

interface TestEvent extends EventPayload {
  name: 'app/test.event';
  data: {
    foo: string;
  };
}

export default TestEvent;
