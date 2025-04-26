"use client";

import { UploadDropzone } from "@/lib/uploadthing";

interface MyTestUploadProps {
    videoId: string;
};



export default function MyTestUpload({
    videoId,
}:MyTestUploadProps) {
  return (
    <UploadDropzone
      endpoint="tumbnailUploader"
      input={{ videoId }}
      onClientUploadComplete={(res) => {
        console.log("Upload complete:", res);
      }}
      onUploadError={(error: Error) => {
        console.error("Upload error:", error);
      }}
      onUploadBegin={(name) => {
        console.log("Uploading: ", name);
      }}
    />
  );
}
