import React from "react";
import { getUserCampaigns } from "../actions/getUserCampaigns";
import CampaignsClient from "./campaignsClient";
import CampaignTitle from "./campaignTitle";

const MyCampaigns = async () => {
  const userCampaigns = await getUserCampaigns();

  return (
    <section className="px-20 py-10">
      <CampaignTitle />
      <CampaignsClient campaigns={userCampaigns} />
    </section>
  );
};

export default MyCampaigns;
