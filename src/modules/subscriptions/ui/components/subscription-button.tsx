import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import type { ComponentProps } from "react";

// ดึงชนิด (type) ของ props ทั้งหมดจาก Button
type ButtonProps = ComponentProps<typeof Button>;


interface SubscriptionButtonProps {
    onClick:ButtonProps["onClick"];
    disabled:boolean;
    isSubscribed:boolean;
    className?:string;
    size?:ButtonProps["size"];
};

export const SubscriptionButton = ({
    disabled,
    isSubscribed,
    onClick,
    className,
    size,
}:SubscriptionButtonProps)=>{
    return(
        <Button
            size={size}
            variant={isSubscribed ? "secondary" : "default"}
            className={cn("rounded-full",className)}
            onClick={onClick}
            disabled={disabled}
            
        >
            {isSubscribed ? "Unsubscribe" : "Subscribe"}
        </Button>
    );
};