import type { EventProperties, Traits } from '@segment/analytics-next';
import type { EventPayload } from 'inngest';

interface SegmentUserSignedUp extends EventPayload {
  name: 'segment/user.signed.up';
  data: EventProperties | undefined;
  user: Traits;
  ts: number;
}

export default SegmentUserSignedUp;
