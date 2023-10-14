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
              <div className=" h-[370px] w-[300px] rounded-lg border border-gray-100">
                <div className=" w-[280px] pt-3 mx-auto h-[320px] rounded-t-3xl">
                  <div className="relative w-full h-[50%]">
                    <Image
                      src={campaign.imageSrc}
                      alt={campaign.title}
                      fill
                      className="rounded-xl"
                    />
                  </div>
                  <div className="px-5 pt-3 space-y-3">
                    <h1 className="font-semibold">{campaign.title}</h1>
                    <h2> {daysLeft} Days left</h2>
                    <div className="flex flex-row items-center justify-between">
                      <div>
                        <h3>Raised</h3>
                        <h2 className="text-sm text-gray-600">N300</h2>
                      </div>
                      <div className="w-[1px] h-8 bg-gray-400"></div>
                      <div>
                        <h3>Goal</h3>
                        <h2 className="text-sm text-gray-600">
                          N{campaign.goalAmount}
                        </h2>
                      </div>
                      <div className="w-[1px] h-8 bg-gray-400"></div>
                      <div>
                        <h3>Backers</h3>
                        <h2 className="text-sm text-gray-600">20+</h2>
                      </div>
                    </div>

                    <Button label="View Project" />
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
