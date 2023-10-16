import prisma from "@/app/libs/prisma";

import getCurrentUser from "./getCurrentUser";

export async function getUserCampaigns() {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return [];
    }
    const projectsData = await prisma.project.findMany({
      where: {
        userId: currentUser.id,
      },
    });

    const projects = await Promise.all(
      projectsData.map(async (project) => {
        const uniqueContributors = await prisma.contribution.findMany({
          where: {
            id: project.id,
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
            id: project.id,
          },
        });

        // Calculate the remaining amount needed
        const remainingAmountNeeded =
          project.goalAmount - (totalAmountRaised._sum.amount || 0);

        return {
          ...project,
          uniqueContributorsCount,
          totalAmountRaised: totalAmountRaised._sum.amount || 0,
          remainingAmountNeeded,
        };
      })
    );
    return projects;
  } catch (error) {
    throw new Error();
  }
}
