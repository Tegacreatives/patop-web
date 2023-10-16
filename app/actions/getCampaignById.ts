import prisma from "../libs/prisma";

interface IParams {
  campaignId?: string;
}

export default async function getCampaignById(params: IParams) {
  try {
    const { campaignId } = params;

    const uniqueContributors = await prisma.contribution.findMany({
      where: {
        id: campaignId,
      },
      select: {
        backerId: true,
      },
    });

    const uniqueContributorsCount = new Set(
      uniqueContributors.map((contribution) => contribution.backerId)
    ).size;

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
      uniqueContributorsCount,
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
