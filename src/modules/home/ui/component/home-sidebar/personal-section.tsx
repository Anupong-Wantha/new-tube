"use client"

import { useClerk,useAuth } from "@clerk/nextjs"
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu ,SidebarMenuButton,SidebarMenuItem} from "@/components/ui/sidebar"
import {  HistoryIcon,  ListVideoIcon,  ThumbsUpIcon } from "lucide-react"
import Link from "next/link"

const item =[
    {
        title:"History",
        url:"/playlists/history",
        icon: HistoryIcon,
        auth:true,
    },
    {
        title:"Link videos",
        url:"/playlists/liked",
        icon: ThumbsUpIcon,
        auth:true,
    },
    {
        title:"All playlists",
        url:"/playlists",
        icon: ListVideoIcon,
        auth:true,
    },
]
const PersonalSection = () => {
    const {isSignedIn} = useAuth();
    const clerk = useClerk()
  return (
    <SidebarGroup>
        <SidebarGroupLabel>You</SidebarGroupLabel>
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
export default PersonalSection