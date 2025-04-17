import { categoriesRouter } from '@/modules/categorises/server/procedures'; 

import {  createTRPCRouter } from '../init';
export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;