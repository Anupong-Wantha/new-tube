import { inferRouterOutputs } from "@trpc/server";

import { AppRouter } from "@/trpc/routers/_app";

export type CommentsManyOneOutput = 
    inferRouterOutputs<AppRouter>["comments"]["getMany"];