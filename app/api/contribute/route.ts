import getCurrentUser from "@/app/actions/getCurrentUser";
import { getCallbackUrl } from "@/app/utils/callbackUrl";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  const callback = await getCallbackUrl();

  const body = await request.json();
  const { amount, email, name, projectId } = body;
  const generateRandomId = () => {
    const randomId =
      Math.random().toString(36).substring(2) + Date.now().toString(36);
    return randomId;
  };

  const backerIdAlt = generateRandomId();
  const pay = {
    email,
    amount: amount * 100,
    callback_url: callback,
    metadata: {
      backerId: backerIdAlt,
      projectId,
      amount,
    },
  };
  const res = await fetch("https://api.paystack.co/transaction/initialize", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_SECRET_PAYSTACK_KEY}`,
      Content_Type: "application/json",
    },
    body: JSON.stringify(pay),
  });

  const data = await res.json();

  return NextResponse.json(data);
}
