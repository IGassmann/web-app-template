import type { Plugin } from '@segment/analytics-node';
import { dotCase } from 'dot-case';

import inngest from '@/features/common/inngest';
import type SegmentUserSignedUp from './SegmentUserSignedUpEvent';

type SegmentEventName = SegmentUserSignedUp['name'];

const inngestPlugin: Plugin = {
  name: 'Inngest',
  type: 'destination',
  version: '0.1.0',

  isLoaded: () => Boolean(inngest),
  load: () => Promise.resolve(),

  track: async (context) => {
    const { event } = context;

    if (!event.name) return context;

    await inngest.send({
      name: `segment/${dotCase(event.name)}` as SegmentEventName,
      data: event.properties ?? {},
      user: {
        ...event.traits,
        id: event.userId ?? event.anonymousId ?? event.traits?.id ?? undefined,
      },
      ts: event.timestamp ? new Date(event.timestamp).valueOf() : undefined,
    });

    return context;
  },
};

export default inngestPlugin;
