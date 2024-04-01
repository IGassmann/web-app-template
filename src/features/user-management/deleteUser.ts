// import { clerkClient } from '@clerk/nextjs/server';
// import { z } from 'zod';
//
// import { adminProcedure } from '@/server/api/trpc';
//
// const userIdSchema = z.string();
//
// const deleteUser = adminProcedure.input(userIdSchema).query(async ({ input: userId }) => {
//   await clerkClient.users.deleteUser(userId);
// });
//
// export default deleteUser;
