import {  SidebarProvider } from "@/components/ui/sidebar";
import HomeNavbar from "../component/home-navbar";
import HomeSidebar from "../component/home-sidebar";

interface HomeLayoutProps{
    children:React.ReactNode;
};
const HomeLayout = ({children}:HomeLayoutProps) => {
  return (
    <SidebarProvider>
        <div className="w-full">
            <HomeNavbar/>
            <div className="flex min-h-screen pt-[4rem]">
                <HomeSidebar/>
                <main className="flex-1 overflow-y-auto">

                    {children}
                </main>
            </div>
        </div>
    </SidebarProvider>
  )
}
export default HomeLayout