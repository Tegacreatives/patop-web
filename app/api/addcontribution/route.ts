import { NextResponse } from "next/server";

import prisma from "@/app/libs/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  const { amount, backerId, projectId } = body;

  const project = await prisma.contribution.create({
    data: {
      amount: amount / 100,
      backerId,
      projectId,
    },
  });

  return NextResponse.json(project);
}
