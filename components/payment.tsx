"use client";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Payment = () => {
  const router = useRouter();

  const makePayment = () =>
    axios.post("/api/payment").then((response) => {
      //   console.log(response.data.data.authorization_url);
      router.push(response.data.data.authorization_url);
    });

  const checkPayment = () =>
    axios.post("/api/getpayment").then((response) => {
      console.log(response);
    });
  return (
    <div>
      <button onClick={makePayment} className="flex flex-1 pt-[25vw] pl-[25vw]">
        Pay with paystack
      </button>
      <button
        onClick={checkPayment}
        className="flex flex-1 pt-[25vw] pl-[25vw]"
      >
        Check paystack
      </button>
    </div>
  );
};

export default Payment;
