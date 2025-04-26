import { Button } from "@/components/ui/button";
import{
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ListPlusIcon, MoreVerticalIcon, ShareIcon, Trash2Icon, TrashIcon } from "lucide-react";
import { toast } from "sonner";

interface VideoMenuProps {
    videoId:string;
    variant?:"ghost" | "secondary";
    onRemove?:()=>void; 
}

export const VideoMenu = ({
    videoId,
    onRemove,
    variant,
}:VideoMenuProps) =>{
    const onShare = ( ) =>{
        const fullUrl =`${process.env.VECEL_URL || "http://localhost:3000"}/videos/${videoId}`;
        navigator.clipboard.writeText(fullUrl);
        toast.success("Link copied to the clipboard")
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={variant} size="icon" className="rounded-full">
                    <MoreVerticalIcon/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" onClick={(e)=>e.stopPropagation()}>
                <DropdownMenuItem onClick={onShare}>
                    <ShareIcon className="mr-4 size-4"/>
                    Share
                </DropdownMenuItem>
                <DropdownMenuItem onClick={()=>{}}>
                    <ListPlusIcon className="mr-4 size-4"/>
                    Add to playlist
                </DropdownMenuItem>
                {onRemove && (
                <DropdownMenuItem onClick={()=>{}}>
                    <Trash2Icon className="mr-4 size-4"/>
                    Remove
                </DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};