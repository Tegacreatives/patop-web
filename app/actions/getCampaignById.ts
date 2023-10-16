import prisma from "../libs/prisma";

interface IParams {
  campaignId?: string;
}

export default async function getCampaignById(params: IParams) {
  try {
    const { campaignId } = params;

    const uniqueContributorsCount = await prisma.contribution.count({
      where: {
        id: campaignId,
      },
      select: {
        backerId: true,
      },
      distinct: ["backerId"],
    });

    const totalAmountRaised = await prisma.contribution.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        id: campaignId,
      },
    });

    const campaign = await prisma.project.findUnique({
      where: {
        id: campaignId,
      },
      include: {
        user: true,
      },
    });

    if (!campaign) {
      return null;
    }

    // Calculate the remaining amount needed
    const remainingAmountNeeded =
      campaign.goalAmount - (totalAmountRaised._sum.amount || 0);

    return {
      uniqueContributorsCount: uniqueContributorsCount.backerId,
      totalAmountRaised: totalAmountRaised._sum.amount || 0,
      ...campaign,
      remainingAmountNeeded,
      createdAt: campaign.createdAt.toString(),
      user: {
        ...campaign.user,
        createdAt: campaign.user.createdAt.toString(),
        updatedAt: campaign.user.updatedAt.toString(),
        emailVerified: campaign.user.emailVerified?.toString() || null,
      },
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
