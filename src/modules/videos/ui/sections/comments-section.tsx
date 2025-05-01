"use client";

import { InfiniteScroll } from "@/components/infinite-scroll";
import { DEFAULT_LIMIT } from "@/constants";
import { CommentsForm } from "@/modules/comments/ui/components/comments-form";
import { CommentsItem } from "@/modules/comments/ui/components/comments-item";
import { trpc } from "@/trpc/client";
import { Loader2Icon } from "lucide-react";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface CommentsSectionProps {
    videoId: string;
};

export const CommentsSection = ({videoId}:CommentsSectionProps) =>{
    return (
        <Suspense fallback={<CommentsSectionSkeleton/>}>
            <ErrorBoundary fallback={<p>Error</p>}>
                <CommentsSectionSuspense videoId={videoId} />
            </ErrorBoundary>
        </Suspense>
    );
};

const CommentsSectionSkeleton = () => {
    return(
        <div className="mt-6 flex justify-center items-center">
            <Loader2Icon className="text-muted-foreground size-7 animate-spin"/>
        </div>
    )
}


 const CommentsSectionSuspense = ({videoId}:CommentsSectionProps) =>{
    const [comments, query] = trpc.comments.getMany.useSuspenseInfiniteQuery({
        videoId,
        limit: DEFAULT_LIMIT
    },{
        getNextPageParam:( lastPage) => lastPage.nextCursor,
    });

    return(
        <div className="mt-6">
            <div className="flex flex-col gap-6">
                <h1 className="text-xl font-bold">
                    {comments.pages[0].totalCount} Comments
                </h1>
                <CommentsForm videoId={videoId}/>
                <div className="flex flex-col gap-4 mt-2">
                    {comments.pages.flatMap((page)=> page.items).map((comments)=>(
                        <CommentsItem
                            key={comments.id}
                            comment={comments}
                        />
                    ))}
                    <InfiniteScroll
                        isManual
                        hasNextPage={query.hasNextPage}
                        isFetchingNextPage={query.isFetchingNextPage}
                        fetchNextPage={query.fetchNextPage}
                    />
                </div>
            </div>
        </div>
    );
};