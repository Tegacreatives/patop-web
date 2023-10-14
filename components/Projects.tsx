import { getCampaigns } from "@/app/actions/getCampaigns";
import CampaignsClient from "@/app/my-campaigns/campaignsClient";
import React from "react";

interface ProjectsProps {
  title?: string;
}

const Projects: React.FC<ProjectsProps> = async ({ title }) => {
  const campaigns = await getCampaigns();
  return (
    <section className="px-12 py-16">
      {title && <h1 className="text-2xl mb-8">{title}</h1>}
      <CampaignsClient campaigns={campaigns} />
    </section>
  );
};

export default Projects;
