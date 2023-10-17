import React from "react";
import getCampaignById from "../../actions/getCampaignById";
import getCurrentUser from "../../actions/getCurrentUser";
import Image from "next/image";
import { calculateDaysLeft } from "@/app/utils/daysRemaining";
import { Button } from "@/components/button/Button";
import ContributionProgressBar from "@/components/contributionProgressBar";
import CampaignDetails from "./campaignDetails";

interface IParams {
  campaignId?: string;
}

const CampaignPage = async ({ params }: { params: IParams }) => {
  const campaign = await getCampaignById(params);

  const shareUrl = `https://patop.vercel.app/campaigns/${campaign?.id}`;
  const title = campaign?.title;
  const socialShare = [
    {
      iconName: "Instagram",
      iconSrc: "/assets/icons/instagram.png",
      shareUrl: `https://www.instagram.com/share?url=${shareUrl}`,
    },
    {
      iconName: "Facebook",
      iconSrc: "/assets/icons/facebook.png",
      shareUrl: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    },
    {
      iconName: "Linkedin",
      iconSrc: "/assets/icons/linkedin.png",
      shareUrl: `https://www.linkedin.com/shareArticle?url=${shareUrl}&title=${title}`,
    },
    {
      iconName: "Twitter",
      iconSrc: "/assets/icons/twitter.png",
      shareUrl: `https://twitter.com/share?url=${shareUrl}&text=${title}`,
    },
  ];

  if (!campaign) {
    return <div>No Campaigns</div>;
  }

  const daysLeft = calculateDaysLeft(campaign.endDate);
  return (
    <div className="px-14 pt-12 lg:px-20">
      <h1 className="font-semibold text-3xl text-gray-700">{campaign.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
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
