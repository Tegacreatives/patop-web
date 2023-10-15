import React from "react";
import getCampaignById from "../../actions/getCampaignById";
import getCurrentUser from "../../actions/getCurrentUser";
import Image from "next/image";
import { calculateDaysLeft } from "@/app/utils/daysRemaining";
import { Button } from "@/components/button/Button";

interface IParams {
  campaignId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const campaign = await getCampaignById(params);
  const currentUser = await getCurrentUser();
  if (!campaign) {
    return <div>No Campaigns</div>;
  }

  const daysLeft = calculateDaysLeft(campaign.endDate);
  return (
    <div className="px-14 pt-12 lg:px-20">
      <h1 className="font-semibold text-3xl text-gray-700">{campaign.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:space-x-12 md:col-span-2">
        <div className="relative w-full">
          <Image
            src={campaign.imageSrc}
            alt={campaign.title}
            className="rounded-lg py-4 w-full"
            width={2200}
            height={800}
            priority
          />
        </div>
        <div className="md:col-span-1 space-y-8">
          {" "}
          <div className="flex flex-row items-center justify-between">
            <div>
              <h3>Raised</h3>
              <h2 className="text-sm text-gray-600">N300</h2>
            </div>
            <div className="w-[1px] h-8 bg-gray-400"></div>
            <div>
              <h3>Goal</h3>
              <h2 className="text-sm text-gray-600">N{campaign.goalAmount}</h2>
            </div>
            <div className="w-[1px] h-8 bg-gray-400"></div>
            <div>
              <h3>Backers</h3>
              <h2 className="text-sm text-gray-600">20+</h2>
            </div>
          </div>
          <h2 className="font-semibold text-2xl text-gray-700">
            Remaing days for this project: {daysLeft} days
          </h2>
          <h2 className="bg-gray-200 max-w-max px-2 py-1 rounded-xl">
            {campaign.category}
          </h2>
          <Button label="Support this project" />
          <div>
            <h2>Share on:</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
