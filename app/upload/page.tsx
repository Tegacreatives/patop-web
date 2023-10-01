"use client";
import { useState } from "react";
// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";

import { UploadButton } from "../libs/uploadthing";
import { FileUpload } from "@/components/fileUpload";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <FileUpload endpoint="projectImage" onChange={(url) => {}} />
        <div className="text-xs text-muted-foreground mt-4">
          16:9 aspect ratio recommended
        </div>
      </div>
    </main>
  );
}
