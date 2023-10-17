import getCurrentUser from "@/app/actions/getCurrentUser";
import { getCallbackUrl } from "@/app/utils/callbackUrl";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  console.log(body);
  return NextResponse.json(body);
}
