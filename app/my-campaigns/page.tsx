import React from "react";
import { getUserCampaigns } from "../actions/getUserCampaigns";
import CampaignsClient from "./campaignsClient";
import CampaignTitle from "./CampaignTitle";

const MyCampaigns = async () => {
  const userCampaigns = await getUserCampaigns();

  return (
    <section className="md:px-10 lg:px-20 py-10 max-w-[2180px] min-h-[80vh]">
      <CampaignTitle />
      <CampaignsClient campaigns={userCampaigns} />
    </section>
  );
};

export default MyCampaigns;
