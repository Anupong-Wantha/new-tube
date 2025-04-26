"use client";
import { ResponsiveModal } from "@/components/responsive-modal";
import { UploadDropzone,UploadButton } from "@/lib/uploadthing";

import { trpc } from "@/trpc/client";

interface ThumbnailUploadModalProps {
    videoId: string;
    open: boolean;
    onOpenChange:(open:boolean)=>void;
};

export const ThumbnailUploadModal = ({
    videoId,
    onOpenChange,
    open,
}:ThumbnailUploadModalProps) =>{
    const utils = trpc.useUtils();

    const onUploadComplete = () =>{
        utils.studio.getMany.invalidate();
        utils.studio.getOne.invalidate({id: videoId});
        onOpenChange(false);
    }

    return(
        <ResponsiveModal
         title="Upload a thumbnail"
         open={open}
         onOpenChange={onOpenChange}
        >
        <UploadDropzone
        endpoint="tumbnailUploader"
        input={{ videoId }}
        onClientUploadComplete={(res) => {
            console.log("✅ Upload complete", res); // แค่ log URL ชัดๆ
            if (res && res[0]?.url) {
            // ทดลองเก็บ url หรือทำอะไรก็ได้
            console.log("Uploaded file URL:", res[0].url);
            }
            utils.studio.getMany.invalidate();
            utils.studio.getOne.invalidate({ id: videoId });
            onOpenChange(false);
        }}
        onUploadError={(error) => {
            console.error("Upload error:", error);
        }}
        />


        </ResponsiveModal>
    );
};