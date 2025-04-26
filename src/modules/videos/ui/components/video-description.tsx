import { cn } from "@/lib/utils";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useState } from "react";

interface VideoDescriptionProps {
    compactViews:string;
    expandedViews:string;
    compactDate:string;
    expandedDate:string;
    description?:string|null;
};

export const VideoDescription = ({
    compactDate,
    compactViews,
    expandedDate,
    expandedViews,
    description,
}:VideoDescriptionProps) => {
    const [isExpaded,setIsExpanded] =  useState(false);
    return(

    <div
        onClick={()=>setIsExpanded((current)=>!current)}
        className="bg-secondary/50 rounded-xl p-3 cursor-pointer hover:bg-secondary/70 transition"
    >
        <div className="flex gap-2 text-sm mb-2">
            <span className="font-medium">
                {isExpaded ? expandedViews : compactViews} views
            </span>
            <span className="font-medium">
                {isExpaded ? expandedDate : compactDate}
            </span>
        </div>
        <div className="relative">
            <p
                className={cn(
                    "text-sm whitespace-pre-wrap",
                    !isExpaded && "line-clamp-1"
                )}
            >
                {description || "No description"}
            </p>
            <div className="flex items-center gap-1 mt-4 text-sm font-medium">
                {isExpaded ? (
                    <>
                     Show less <ChevronUpIcon className="size-4"/>
                    </>
                ) :(
                    <>
                    Show more <ChevronDownIcon className="size-4"/>
                   </>
                )}
            </div>
        </div>

    </div>
    )
}