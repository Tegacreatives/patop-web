import React from "react";
import getCampaignById from "../../actions/getCampaignById";
import getCurrentUser from "../../actions/getCurrentUser";

interface IParams {
  campaignId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const campaign = await getCampaignById(params);
  const currentUser = await getCurrentUser();
  if (!campaign) {
    return <div>No Campaigns</div>;
  }
  return <div>Hello</div>;
};

export default ListingPage;
