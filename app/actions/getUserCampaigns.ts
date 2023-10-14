import prisma from "@/app/libs/prisma";

import getCurrentUser from "./getCurrentUser";

export async function getUserCampaigns() {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return [];
    }
    const projects = await prisma.project.findMany({
      where: {
        userId: currentUser.id,
      },
    });
    return projects;
  } catch (error) {
    throw new Error();
  }
}
