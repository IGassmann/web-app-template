import { TRPCError, initTRPC } from '@trpc/server';
import superjson from 'superjson';

import type Context from '@/server/api/context';

const trpc = initTRPC.context<Context>().create({
  transformer: superjson,
});

/**
 * This is how you create new routers and sub-routers in the tRPC API
 * @see {@link https://trpc.io/docs/router}
 */
export const createTRPCRouter = trpc.router;

/**
 * Middleware that identifies the user in analytics.
 *
 * @see {@link https://trpc.io/docs/middlewares}
 */
const identifyUser = trpc.middleware(({ ctx, next }) => {
  const { analytics, userId } = ctx;

  if (userId) {
    analytics.identify({ userId });
  }

  return next();
});

/**
 * Public (unauthenticated) procedure
 *
 * This is the base piece used to build new queries and mutations on the
 * tRPC API. It does not guarantee that a user querying is authorized, but you
 * can still access the userId if they are signed in
 */
export const publicProcedure = trpc.procedure.use(identifyUser);

/**
 * Middleware that enforces users are signed in before running the procedure.
 *
 * @see {@link https://trpc.io/docs/middlewares}
 */
const isAuthenticated = trpc.middleware(({ ctx, next }) => {
  if (!ctx.userId) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  return next({
    // Infers the `userId` as non-nullable
    ctx: { ...ctx, userId: ctx.userId },
  });
});

/**
 * Protected (authenticated) procedure
 *
 * For a query or mutation that is only be accessible to signed-in users. It verifies the session is
 * valid and guarantees ctx.userId is present.
 *
 * @see {@link https://trpc.io/docs/procedures}
 */
export const protectedProcedure = trpc.procedure.use(identifyUser).use(isAuthenticated);

/**
 * Middleware that enforces users are admin before running the procedure.
 *
 * @see {@link https://trpc.io/docs/middlewares}
 */
const isAdmin = trpc.middleware(async ({ ctx, next }) => {
  if (!ctx.isAdmin) {
    throw new TRPCError({
      code: 'FORBIDDEN',
      message: "You don't have permission to perform this action.",
    });
  }
  return next({
    // Infers the `isAdmin` as true
    ctx: { ...ctx, isAdmin: ctx.isAdmin },
  });
});

export const adminProcedure = protectedProcedure.use(isAdmin);
