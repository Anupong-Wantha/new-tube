import { Sidebar, SidebarContent } from "@/components/ui/sidebar"
import MianSection from "./main-section"
import { Separator } from "@/components/ui/separator"
import PersonalSection from "./personal-section"
import { SignedIn } from "@clerk/nextjs"
import { SubscriptionsSection } from "./subcriptions-section"


const HomeSidebar = () => {
  return (
    <Sidebar className="pt-16 z-40 border-none" collapsible="icon">
        <SidebarContent className="bg-background">
            <MianSection/>
            <Separator/>
            <PersonalSection/>
            <SignedIn>
              <>
                <Separator/>
                <SubscriptionsSection/>
              </>
            </SignedIn>
        </SidebarContent>
    </Sidebar>
  )
}
export default HomeSidebar