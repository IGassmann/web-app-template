// import { z } from 'zod';
//
// import { protectedProcedure } from '@/server/api/trpc';
//
// const productIdSchema = z.string();
//
// const purchaseProduct = protectedProcedure
//   .input(productIdSchema)
//   .query(async ({ input: productId, ctx }) => {
//     ctx.analytics.track({
//       userId: ctx.userId,
//       event: 'Product Purchased',
//       properties: {
//         productId,
//       },
//     });
//   });
//
// export default purchaseProduct;
