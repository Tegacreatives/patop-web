import { getCampaigns } from "@/app/actions/getCampaigns";
import CampaignsClient from "@/app/my-campaigns/campaignsClient";
import React from "react";

interface ProjectsProps {
  title?: string;
}

const Projects: React.FC<ProjectsProps> = async ({ title }) => {
  const campaigns = await getCampaigns();

  const filteredCampaigns = campaigns.filter(
    (campaign) => new Date(campaign.endDate) > new Date()
  );
  return (
    <section className=" md:px-16 py-16 max-w-[2180px] mx-auto">
      {title && <h1 className="text-2xl mb-8 px-8 md:px-5">{title}</h1>}
      <CampaignsClient campaigns={filteredCampaigns} />
    </section>
  );
};

export default Projects;
