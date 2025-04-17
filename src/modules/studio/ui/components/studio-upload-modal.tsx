"use client"

import { Button } from "@/components/ui/button"
import { trpc } from "@/trpc/client";
import { Loader2Icon, PlusIcon } from "lucide-react"
import { toast } from "sonner";

const StudioUploadModal = () => {
  const utils = trpc.useUtils();
  const create = trpc.videos.create.useMutation({
    onSuccess:()=>{
      toast.success("Video created");
      utils.studio.getMany.invalidate();
    },
    onError:()=>{
      toast.error("Something went wrong");
    }
  });
  
  return (
    <Button variant="secondary" onClick={()=>create.mutate()} disabled={create.isPending}>
        {create.isPending ?<Loader2Icon className="animate-spin"/>  :<PlusIcon/>}
        Create 
    </Button>
  );
};
export default StudioUploadModal