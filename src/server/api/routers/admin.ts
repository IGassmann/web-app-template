import deleteUser from '@/features/user-management/deleteUser';
import { createTRPCRouter } from '../trpc';

const adminRouter = createTRPCRouter({
  deleteUser,
});

export default adminRouter;
