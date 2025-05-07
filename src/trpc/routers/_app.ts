import { categoriesRouter } from '@/modules/categorises/server/procedures'; 
import { studioRouter } from '@/modules/studio/server/procedures';
import { videosRouter } from '@/modules/videos/server/procedure';
import { commentsRouter } from '@/modules/comments/server/procedure';
import { videoViewsRouter } from '@/modules/video-views/server/procedure';
import { videoReactionsRouter } from '@/modules/video-reaction/server/procedure';
import { subscriptionsRouter } from '@/modules/subscriptions/server/procedure';
import { playlistsRouter } from '@/modules/playlists/server/procedure';
import { searchRouter } from '@/modules/search/server/procedures';
import { suggestionsRouter } from '@/modules/suggestions/server/procedures';
import { commentReactionsRouter } from '@/modules/comment-reaction/server/procedure';


import {   createTRPCRouter } from '../init';
import { usersRouter } from '@/modules/users/server/procedures';

export const appRouter = createTRPCRouter({
  users: usersRouter,
  studio: studioRouter,
  categories: categoriesRouter,
  search: searchRouter,
  videos: videosRouter,
  comments: commentsRouter,
  playlists: playlistsRouter,
  categorise: categoriesRouter,
  videoViews: videoViewsRouter,
  subscriptions: subscriptionsRouter,
  videoReactions: videoReactionsRouter,
  commentsReactions: commentReactionsRouter,
  suggestions: suggestionsRouter,

});
// export type definition of API
export type AppRouter = typeof appRouter;