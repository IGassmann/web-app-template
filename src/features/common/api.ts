import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import superjson from 'superjson';

import type { AppRouter } from '@/server/api/routers';

/**
 * This is the client-side entrypoint for your tRPC API.
 * It's used to create the `api` object which contains the Next.js App-wrapper
 * as well as the typesafe react-query hooks.
 */
export const api = createTRPCNext<AppRouter>({
  config() {
    return {
      /**
       * Transformer used for data de-serialization from the server
       *
       * @see {@link https://trpc.io/docs/data-transformers#using-superjson}
       */
      transformer: superjson,

      /**
       * Links used to determine request flow from client to server
       *
       * @see {@link https://trpc.io/docs/links}
       */
      links: [
        httpBatchLink({
          url: '/api/trpc',
        }),
      ],
    };
  },
  /**
   *
   */
  unstable_overrides: {
    useMutation: {
      /**
       * This invalidates the entire cache after a mutation has been successful. This makes it
       * easier to keep the cache in sync with the server.
       *
       * @see {@link https://trpc.io/docs/useContext#invalidate-full-cache-on-every-mutation}
       */
      async onSuccess(options) {
        // Calls the `onSuccess` defined in the `useQuery()`-options:
        await options.originalFn();

        // Invalidates all queries in the react-query cache:
        await options.queryClient.invalidateQueries();
      },
    },
  },
});

/**
 * Inference helper for inputs
 * @example type HelloInput = RouterInputs['example']['hello']
 */
export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helper for outputs
 * @example type HelloOutput = RouterOutputs['example']['hello']
 */
export type RouterOutputs = inferRouterOutputs<AppRouter>;
