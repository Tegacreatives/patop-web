"use client";
import { ICampaign, IUser } from "@/app/types";
import { calculateDaysLeft } from "@/app/utils/daysRemaining";
import { Button } from "@/components/button/Button";
import ContributionProgressBar from "@/components/contributionProgressBar";
import PaymentModal from "@/components/paymentModal";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface ICampaignDetails {
  campaign: ICampaign;
  user?: IUser | null;
}

const CampaignDetails = ({ campaign, user }: ICampaignDetails) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteProject = (id: string) => {
    axios
      .delete(`/api/campaign/${id}`)
      .then(() => {
        toast.success("Campaign Deleted Successfully");
        router.push("/my-campaigns");
      })
      .catch((error) => {
        console.log(campaign.id);
        toast.error("Could not delete project");
      });
  };

  const handleSupportClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const daysLeft = calculateDaysLeft(campaign.endDate);

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
  return (
    <div className="md:col-span-1 space-y-8">
      {" "}
      <div className="flex flex-row items-center justify-between">
        <div>
          <h3 className="text-xl font-medium">Raised</h3>
          <h2 className="text-lg text-gray-600">
            N{campaign.totalAmountRaised}
          </h2>
        </div>
        <div className="w-[1px] h-8 bg-gray-400"></div>
        <div>
          <h3 className="text-xl font-medium">Goal</h3>
          <h2 className="text-lg text-gray-600">N{campaign.goalAmount}</h2>
        </div>
        <div className="w-[1px] h-8 bg-gray-400"></div>
        <div>
          <h3 className="text-xl font-medium">Backers</h3>
          <h2 className="text-lg text-gray-600">
            {campaign.uniqueContributorsCount > 20
              ? "20+"
              : campaign.uniqueContributorsCount}
          </h2>
        </div>
      </div>
      {daysLeft >= 1 ? (
        <h2 className="font-semibold text-2xl text-gray-700">
          Remaing days for this project: {daysLeft}{" "}
          {daysLeft < 1 ? "days" : "day"}
        </h2>
      ) : (
        <h2 className="font-semibold text-2xl text-red-500">
          Campaign Period expired!
        </h2>
      )}
      <ContributionProgressBar
        totalAmountRaised={campaign.totalAmountRaised}
        remainingAmountNeeded={campaign.remainingAmountNeeded}
      />
      <h2 className="bg-gray-200 max-w-max px-2 py-1 rounded-xl">
        {campaign.category}
      </h2>
      {user && user.id == campaign.userId ? (
        <div className="flex items-center justify-between">
          <Button onClick={handleSupportClick} label="Edit project" />
          <Button
            deleteButton
            onClick={() => deleteProject(campaign.id)}
            label="Delete project"
          />
        </div>
      ) : (
        <Button onClick={handleSupportClick} label="Support this project" />
      )}
      <Button
        deleteButton
        onClick={() => deleteProject(campaign.id)}
        label="Delete project"
      />
      <PaymentModal
        projectId={campaign.id}
        onClose={handleCloseModal}
        isOpen={isModalOpen}
      />
      <div className="space-y-3">
        <h2>Share on:</h2>
        <div className="flex space-x-5">
          {socialShare.map((social, index) => (
            <div key={index}>
              <a
                href={social.shareUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={social.iconSrc}
                  alt={social.iconName}
                  width={35}
                  height={35}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
