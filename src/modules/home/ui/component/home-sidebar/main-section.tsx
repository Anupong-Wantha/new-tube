"use client"

import { SidebarGroup, SidebarGroupContent, SidebarMenu ,SidebarMenuButton,SidebarMenuItem} from "@/components/ui/sidebar"
import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react"
import Link from "next/link"
import { useClerk,useAuth } from "@clerk/nextjs"

const item =[
    {
        title:"Home",
        url:"/",
        icon: HomeIcon,
    },
    {
        title:"Subscriptions",
        url:"/feed/subcriptions",
        icon: PlaySquareIcon,
        auth:true,
    },
    {
        title:"Trending",
        url:"/feed/trending",
        icon: FlameIcon,
    },
]
const MianSection = () => {
    const {isSignedIn} = useAuth();
    const clerk = useClerk()
  return (
    <SidebarGroup>
        <SidebarGroupContent>
            <SidebarMenu>
                {item.map((item)=>(
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                            tooltip={item.title} asChild
                            isActive={false} //TODO: Change to look at current pathname
                            onClick={(e)=>{
                                if(!isSignedIn && item.auth){
                                    e.preventDefault();
                                    return clerk.openSignIn();
                                }


                            }} 
                        >
                            <Link href={item.url} className="flex items-center gap-4">
                                <item.icon />
                                <span className="text-sm">{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroupContent>
    </SidebarGroup>
  )
}
export default MianSection