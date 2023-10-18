import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prisma";

interface IParams {
  campaignId: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { campaignId } = params;
  if (!campaignId) {
    throw new Error("Invalid ID");
  }

  const project = await prisma.project.deleteMany({
    where: {
      id: campaignId,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(project);
}
