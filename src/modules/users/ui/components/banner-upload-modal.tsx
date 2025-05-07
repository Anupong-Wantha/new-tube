"use client";
import { ResponsiveModal } from "@/components/responsive-modal";
import { UploadButton, UploadDropzone } from "@/lib/uploadthing";

import { trpc } from "@/trpc/client";


interface BannerUploadModalProps {
    userId: string;
    open: boolean;
    onOpenChange:(open:boolean)=>void;
};

export const BannerUploadModal = ({
    userId,
    onOpenChange,
    open,
}:BannerUploadModalProps) =>{
    const utils = trpc.useUtils();

    const onUploadComplete = () =>{
        utils.users.getOne.invalidate({id: userId});
        onOpenChange(false);
    }

    return(
        <ResponsiveModal
         title="Upload a banner"
         open={open}
         onOpenChange={onOpenChange}
        >  
            <UploadButton 
                endpoint="bannerUploader"
                appearance={{
                    button: "flex items-center gap-2 bg-black  px-4 py-2 rounded  w-100 ",
                  }}
                onClientUploadComplete={onUploadComplete}  
            />
            
            

        </ResponsiveModal>
    );
};