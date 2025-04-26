import { categoriesRouter } from '@/modules/categorises/server/procedures'; 
import { studioRouter } from '@/modules/studio/server/procedures';
import { videosRouter } from '@/modules/videos/server/procedure';
import { videoViewsRouter } from '@/modules/video-views/server/procedure';
import { videoReactionsRouter } from '@/modules/video-reaction/server/procedure';
import { subscriptionsRouter } from '@/modules/subscriptions/server/procedure';

import {   createTRPCRouter } from '../init';


export const appRouter = createTRPCRouter({
  studio: studioRouter,
  categories: categoriesRouter,
  videos: videosRouter,
  categorise: categoriesRouter,
  videoViews: videoViewsRouter,
  subscriptions: subscriptionsRouter,
  videoReactions: videoReactionsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;