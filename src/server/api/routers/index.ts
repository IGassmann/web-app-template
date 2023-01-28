import { createTRPCRouter } from '../trpc';
import adminRouter from './admin';

/**
 * This is the primary router for the API.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  featureA: adminRouter,
});

// Export type definition of API to be used on the client
export type AppRouter = typeof appRouter;
