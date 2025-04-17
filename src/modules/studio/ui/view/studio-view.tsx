import { VideosSection } from "../sections/videos-section"

const StudioView = () => {
  return (
    <div>
        <div className="flex flex-col gap-y-6 pt-2.5">
          <div className="px-4">
            <h1 className="text-2xl font-bold">Channel content</h1>
            <p className="text-xs text-muted-foreground">
              Manage your channel content and videos
            </p>
          </div>
        </div>
        <VideosSection/>
    </div>
  )
}
export default StudioView