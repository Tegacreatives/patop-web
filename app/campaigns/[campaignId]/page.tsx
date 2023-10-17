import React from "react";
import getCampaignById from "../../actions/getCampaignById";
import Image from "next/image";
import { calculateDaysLeft } from "@/app/utils/daysRemaining";
import CampaignDetails from "./campaignDetails";

interface IParams {
  campaignId?: string;
}

const CampaignPage = async ({ params }: { params: IParams }) => {
  const campaign = await getCampaignById(params);

  if (!campaign) {
    return <div>No Campaigns</div>;
  }

  return (
    <div className="px-14 pt-12 lg:px-20">
      <h1 className="font-semibold text-3xl text-gray-700">{campaign.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="relative w-full">
            <Image
              src={campaign.imageSrc || "/assets/placeholder.png"}
              alt={campaign.title}
              className="rounded-lg py-4 w-full"
              width={2200}
              height={800}
              priority
            />
          </div>
        </div>
        <CampaignDetails campaign={campaign} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 py-10">
          <h2 className="font-semibold text-xl">About Project</h2>
          <p>{campaign.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CampaignPage;
