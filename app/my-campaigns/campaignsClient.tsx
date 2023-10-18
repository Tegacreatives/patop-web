"use client";
import { Button } from "@/components/button/Button";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { calculateDaysLeft } from "../utils/daysRemaining";
import { ICampaign } from "../types";

interface CampaignsClientProps {
  campaigns: ICampaign[];
}

const CampaignsClient = ({ campaigns }: CampaignsClientProps) => {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {campaigns.map((campaign) => {
          const daysLeft = calculateDaysLeft(campaign.endDate);
          return (
            <div key={campaign.id} className="mx-auto">
              <div className=" h-[370px] px-4 rounded-lg border border-gray-100">
                <div className="w-[75vw] md:w-[250px] pt-3 mx-auto h-[320px] rounded-t-3xl">
                  <div className="relative w-full h-[50%]">
                    <Image
                      src={campaign.imageSrc || "/assets/placeholder.png"}
                      alt={campaign.title}
                      fill
                      className="rounded-xl"
                    />
                  </div>
                  <div className="px-5 pt-3 space-y-3">
                    <h1 className="font-semibold">{campaign.title}</h1>
                    <h2>
                      {" "}
                      {daysLeft} {daysLeft > 1 ? "Days left" : "Day left"}
                    </h2>
                    <div className="flex flex-row items-center justify-between">
                      <div>
                        <h3>Raised</h3>
                        <h2 className="text-sm text-gray-600">
                          {" "}
                          N{campaign.totalAmountRaised}
                        </h2>
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
                        <h2 className="text-sm text-gray-600">
                          {(campaign.uniqueContributorsCount as number) > 20
                            ? "20+"
                            : campaign.uniqueContributorsCount}
                        </h2>
                      </div>
                    </div>

                    <Button
                      onClick={() => router.push(`/campaigns/${campaign.id}`)}
                      label="View Project"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CampaignsClient;
