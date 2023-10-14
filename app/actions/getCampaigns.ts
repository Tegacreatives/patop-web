import prisma from "@/app/libs/prisma";

export async function getCampaigns() {
  try {
    const projects = await prisma.project.findMany();
    return projects;
  } catch (error) {
    throw new Error();
  }
}
