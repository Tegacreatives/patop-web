import getCurrentUser from "@/app/actions/getCurrentUser";
import { getCallbackUrl } from "@/app/utils/callbackUrl";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  const callback = await getCallbackUrl();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { listingId, startDate, endDate, totalPrice } = body;
  const pay = {
    email: currentUser.email,
    amount: totalPrice * 100,
    callback_url: callback,
    metadata: {
      userID: currentUser.id,
      listingId,
      startDate,
      endDate,
    },
  };
  const res = await fetch("https://api.paystack.co/transaction/initialize", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      Content_Type: "application/json",
    },
    body: JSON.stringify(pay),
  });

  const data = await res.json();

  return NextResponse.json(data);
}
