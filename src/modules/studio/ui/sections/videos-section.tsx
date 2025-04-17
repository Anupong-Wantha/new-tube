"use client";

import { DEFAULT_LIMIT } from "@/constants";
import { trpc } from "@/trpc/client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const VideosSection =() =>{
    return(
        <Suspense fallback={<p>Loading...</p>}>
            <ErrorBoundary fallback={<p>Error</p>}>
                <VideosSectionSuspenes/>
            </ErrorBoundary>
        </Suspense>
    )
}

export const VideosSectionSuspenes = () =>{
    const [data] = trpc.studio.getMany.useSuspenseInfiniteQuery({
        limit:DEFAULT_LIMIT,
    },{
        getNextPageParam:( lastPage) => lastPage.nextCursor,
    });

    return(
        <div>
           {JSON.stringify(data)}
        </div>
    );
}