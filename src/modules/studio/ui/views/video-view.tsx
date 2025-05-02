import { FromSection } from "../sections/form-section";

interface PageProps {
    videoId: string;

};

export const VideoViews =({videoId}:PageProps)=>{
    return(
        <div className="px-4 pt-2.5 pb-32 max-w-screen-lg  mr-auto ">
            <FromSection videoId={videoId}/>
        </div>
    )
}