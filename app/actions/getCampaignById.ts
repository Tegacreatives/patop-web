import prisma from "../libs/prisma";

interface IParams {
  campaignId?: string;
}

export default async function getCampaignById(params: IParams) {
  try {
    const { campaignId } = params;

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

    return {
      ...campaign,
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
