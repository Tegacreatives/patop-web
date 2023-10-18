"use client";
import toast from "react-hot-toast";
import { UploadDropzone } from "@/app/libs/uploadthing";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import { useState } from "react";
import Image from "next/image";

interface FileUploadProps {
  onChange: (url?: string) => void;
  endpoint: keyof typeof ourFileRouter;
}

export const FileUpload = ({ onChange, endpoint }: FileUploadProps) => {
  const [imageUrl, setImageUrl] = useState("");
  return (
    <div>
      <UploadDropzone
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
          onChange(res?.[0].url);
          setImageUrl(res?.[0].url || "");
        }}
        onUploadError={(error: Error) => {
          toast.error(`${error?.message}`);
        }}
      />
      <div className="py-5">
        {imageUrl && (
          <div className="relative w-[150px] h-[150px]">
            <Image fill src={imageUrl} alt="Uploaded" />
          </div>
        )}
      </div>
    </div>
  );
};
