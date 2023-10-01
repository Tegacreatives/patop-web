import { NextResponse } from "next/server";

import prisma from "@/app/libs/prisma";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();

  const { title, description, imageSrc, goalAmount, endDate, category } = body;

  const project = await prisma.project.create({
    data: {
      title,
      description,
      imageSrc,
      goalAmount: parseInt(goalAmount, 10),
      endDate,
      category,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(project);
}
