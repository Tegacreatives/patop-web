"use client";
import { Button } from "@/components/button/Button";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface ICampaign {
  id: string;
  title: string;
  description: string | null;
  imageSrc: string;
  goalAmount: number;
  endDate: Date;
  createdAt: Date;
  category: string;
  userId: string;
}

interface CampaignsClientProps {
  campaigns: ICampaign[];
}

const CampaignsClient = ({ campaigns }: CampaignsClientProps) => {
  const router = useRouter();
  function calculateDaysLeft(targetDate: string | number | Date) {
    const targetDateTime = new Date(targetDate).getTime();
    const currentDateTime = new Date().getTime();
    const timeDifference = targetDateTime - currentDateTime;
    return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  }
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-4xl font-bold pb-8">My Projects</div>
        <Button onClick={() => router.push("/create")} label="New campaingn" />
      </div>
      <div className="grid grid-cols-4 gap-3">
        {campaigns.map((campaign) => {
          const daysLeft = calculateDaysLeft(campaign.endDate);
          return (
            <Link href={`/my-campaigns/${campaign.id}`} key={campaign.id}>
              <div className=" h-[340px] w-[300px] rounded-t-lg">
                <div className=" w-[300px] h-[320px] rounded-t-3xl bg-gray-50">
                  <div className="relative w-full h-[50%]">
                    <Image
                      src={campaign.imageSrc}
                      alt={campaign.title}
                      fill
                      className="rounded-t-xl"
                    />
                  </div>
                  <div className="px-5 pt-3 space-y-3">
                    <h1 className="font-semibold">{campaign.title}</h1>
                    <h2 className="text-sm text-gray-600">
                      N300 raised from N{campaign.goalAmount}
                    </h2>
                    <h2> {daysLeft} Days left</h2>
                    <Button label="Edit Project" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CampaignsClient;
