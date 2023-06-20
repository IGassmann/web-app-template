import type { EventProperties, Traits } from '@segment/analytics-next';
import type { EventPayload } from 'inngest';

export default interface SegmentUserSignedUp extends EventPayload {
  name: 'segment/user.signed.up';
  data: EventProperties;
  user: Traits;
  ts: number;
}
