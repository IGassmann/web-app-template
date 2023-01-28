import { getAuth } from '@clerk/nextjs/server';
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';

type Context = {
  userId: string | undefined;
  isAdmin: boolean;
};

/**
 * Context used in the tRPC router. It is used to process every request that goes through the tRPC
 * endpoints.
 *
 * @see {@link https://trpc.io/docs/context}
 */
export async function createContext(options: CreateNextContextOptions): Promise<Context> {
  const { userId, sessionClaims } = await getAuth(options.req);
  const isAdmin = typeof sessionClaims?.is_admin === 'boolean' ? sessionClaims?.is_admin : false;

  return {
    userId: userId ?? undefined,
    isAdmin,
  };
}

export default Context;
