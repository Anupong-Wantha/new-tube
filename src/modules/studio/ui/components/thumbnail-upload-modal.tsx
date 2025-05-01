"use client";
import { ResponsiveModal } from "@/components/responsive-modal";
import { UploadDropzone,UploadButton } from "@/lib/uploadthing";

import { trpc } from "@/trpc/client";
import { Upload } from "lucide-react";

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

            
            
            <UploadButton 
                endpoint="tumbnailUploader"
                appearance={{
                    button: "flex items-center gap-2 bg-black  px-4 py-2 rounded  w-100 ",
                    
                  }}
                input={{ videoId }}
                onClientUploadComplete={onUploadComplete}
                onUploadError={(error) => {
                    console.error("Upload error:", error);
                }}
                
            />
            
            

        </ResponsiveModal>
    );
};