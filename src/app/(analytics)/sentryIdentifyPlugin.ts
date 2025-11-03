import type { Plugin as BrowserPlugin } from '@segment/analytics-next';
import type { Plugin as ServerPlugin } from '@segment/analytics-node';
import * as Sentry from '@sentry/nextjs';

type NonNullValues<T> = {
  [K in keyof T]: T[K] extends null ? never : T[K];
};

function mapObjectNullValuesToUndefined<T extends Record<string, unknown>>(
  object: T,
): NonNullValues<Record<string, unknown>> {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => [key, value ?? undefined]),
  );
}

const sentryIdentifyPlugin = {
  name: 'Sentry User Identification',
  type: 'destination',
  version: '1.0.0',

  isLoaded: () => Sentry.getClient() !== undefined,
  load: () => Promise.resolve(),

  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- TODO: improve typings
  identify: (context: any) => {
    const normalizedTraits = context.event.traits
      ? mapObjectNullValuesToUndefined(context.event.traits)
      : undefined;
    Sentry.setUser({
      id: context.event.userId ?? context.event.anonymousId ?? undefined,
      ...normalizedTraits,
    });
    return context;
  },
} satisfies BrowserPlugin | ServerPlugin;

export default sentryIdentifyPlugin;
