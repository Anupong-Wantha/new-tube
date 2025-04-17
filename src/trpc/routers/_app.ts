import { categoriesRouter } from '@/modules/categorises/server/procedures'; 

import {   createTRPCRouter } from '../init';
import { studioRouter } from '@/modules/studio/server/procedures';
import { videosRouter } from '@/modules/videos/server/procedure';



export const appRouter = createTRPCRouter({

  studio: studioRouter,
  categories: categoriesRouter,
  videos: videosRouter,
  categorise: categoriesRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;