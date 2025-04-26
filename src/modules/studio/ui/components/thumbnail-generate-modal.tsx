"use client";
import { ResponsiveModal } from "@/components/responsive-modal";
import { Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage, } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { trpc } from "@/trpc/client";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

interface ThumbnailGenerateModalProps {
    videoId: string;
    open: boolean;
    onOpenChange:(open:boolean)=>void;
};

const formSchema = z.object({
    prompt:z.string().min(10),
});

export const ThumbnailGenerateModal = ({
    videoId,
    onOpenChange,
    open,
}:ThumbnailGenerateModalProps) =>{
    const form =useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            prompt:""
        }
    });
    

        const generateThumbnail = trpc.videos.generateThumbnail.useMutation({
            onSuccess:()=>{
                toast.success("Background job started",{ description: <span className="text-muted-foreground">This may take some time</span> });
                form.reset();
                onOpenChange(false);
            },
            onError:()=>{
                toast.error("Somthing went wrong")
            },
        });

    const onsubmit = (value: z.infer<typeof formSchema>) =>{
        generateThumbnail.mutate({
            id:videoId,
            prompt: value.prompt,
        });
    };

    return(
        <ResponsiveModal
         title="Upload a thumbnail"
         open={open}
         onOpenChange={onOpenChange}
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onsubmit)}
                    className=" flex flex-col gap-4"
                >
                    <FormField
                        control={form.control}
                        name="prompt"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>
                                    Prompt
                                </FormLabel>
                                <FormControl>

                                <Textarea
                                    {...field}
                                    className="resize-none"
                                    cols={30}
                                    rows={5}
                                    placeholder="A description of wanted thumbnail"
                                />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>

                        )}
                    
                    />
                    <div className=" flex justify-end">
                        <Button
                         disabled={generateThumbnail.isPending}
                            type="submit"
                        >
                            Generate
                        </Button>

                    </div>

                </form>
            </Form>
        </ResponsiveModal>
    );
};