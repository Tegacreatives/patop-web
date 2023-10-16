import React from "react";
import { getUserCampaigns } from "../actions/getUserCampaigns";
import CampaignsClient from "./campaignsClient";
import CampaignTitle from "./CampaignTitle";

const MyCampaigns = async () => {
  const userCampaigns = await getUserCampaigns();

  return (
    <section className="md:px-20 py-10">
      <CampaignTitle />
      <CampaignsClient campaigns={userCampaigns} />
    </section>
  );
};

export default MyCampaigns;
