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
        <div className="text-4xl font-bold pb-8">My Projects</div>
        <Button onClick={() => router.push("/create")} label="New campaingn" />
      </div>
    </div>
  );
};

export default CampaignTitle;
