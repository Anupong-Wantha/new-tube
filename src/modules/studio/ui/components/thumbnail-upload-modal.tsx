import { ResponsiveModal } from "@/components/responsive-modal";
import { UploadDropzone } from "@/lib/uploadthing";

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
    return(
        <ResponsiveModal
         title="Upload a thumbnail"
         open={open}
         onOpenChange={onOpenChange}
        >
            <UploadDropzone
            endpoint="imageUploader"
            />
        </ResponsiveModal>
    );
};