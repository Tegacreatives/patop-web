import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prisma";

interface IParams {
  projectId?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { projectId } = params;

  const project = await prisma.project.deleteMany({
    where: {
      id: projectId,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(project);
}
