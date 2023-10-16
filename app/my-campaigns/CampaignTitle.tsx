"use client";
import { Button } from "@/components/button/Button";
import { useRouter } from "next/navigation";
import React from "react";

const CampaignTitle = () => {
  const router = useRouter();
  return (
    <div>
      {" "}
      <div className="flex items-center justify-between">
        <div className="text-2xl md:text-4xl font-bold pb-8 px-10 md:px-0">
          My Projects
        </div>
        <div className="hidden md:block">
          <Button
            onClick={() => router.push("/create")}
            label="New campaingn"
          />
        </div>
      </div>
    </div>
  );
};

export default CampaignTitle;
