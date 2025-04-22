import { db } from "@/db";
import { users, videos } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { z } from "zod";

const f = createUploadthing();



// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  tumbnailUploader: f({
    image: {

      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
  .input(z.object({
    videoId:z.string().uuid(),
  }))
    // Set permissions and file types for this FileRoute
    .middleware(async ({ input }) => {
      
      // This code runs on your server before upload
      const {userId:clerkUserId} = await auth();
      

      // If you throw, the user will not be able to upload
      if (!clerkUserId) throw new UploadThingError("Unauthorized");
      
      const [user] = await db
       .select()
       .from(users)
       .where(eq(users.clerkId,clerkUserId))

       if(!user) throw new UploadThingError("Unauthorized")
      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { user,...input};
    })
    .onUploadComplete(async ({ metadata, file }) => {
      await db
        .update(videos)
        .set({
          thumbnailUrl: file.ufsUrl,
        })
        .where(and(
          eq(videos.id,metadata.videoId),
          eq(videos.userId, metadata.user.id),
        ))

      return { uploadedBy: metadata.user.id };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
