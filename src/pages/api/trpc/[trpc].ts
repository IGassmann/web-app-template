import { captureException } from '@sentry/nextjs';
import { createNextApiHandler } from '@trpc/server/adapters/next';

import { createContext } from '@/server/api/context';
import { appRouter } from '@/server/api/routers';

/**
 * @see {@link https://trpc.io/docs/api-handler}
 */
export default createNextApiHandler({
  router: appRouter,
  createContext,
  onError({ error }) {
    if (error.code === 'INTERNAL_SERVER_ERROR') {
      captureException(error);
    }
  },
});
