import React from "react";
import { getUserCampaigns } from "../actions/getUserCampaigns";
import Image from "next/image";
import { Button } from "@/components/button/Button";
import CampaignsClient from "./campaignsClient";

const MyCampaigns = async () => {
  const campaigns = await getUserCampaigns();

  return (
    <section className="px-20 py-10">
      <CampaignsClient campaigns={campaigns} />
    </section>
  );
};

export default MyCampaigns;
