"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

const paystackSecretKey = process.env.NEXT_PUBLIC_SECRET_PAYSTACK_KEY;

const PayemntComplete = ({
  searchParams,
}: {
  searchParams: { reference: string };
}) => {
  const reference = searchParams.reference;
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.paystack.co/transaction/verify/${reference}`,
          {
            headers: {
              Authorization: `Bearer ${paystackSecretKey}`,
            },
          }
        );

        const apiData = response.data.data.metadata;

        await axios.post("/api/addcontribution", apiData);
        toast.success("You have contributed to this project!");
        router.push(`/campaigns/${apiData.projectId}`);
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error processing payment");
      }
    };
    // if (reference) {
    //   fetchData();
    // }
  }, [reference, router]);
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] text-[#015E5F] px-8 text-center space-y-4">
      <h1 className="text-2xl md:text-3xl font-semibold">
        Thank you for making a contribution to this project!
      </h1>
      <h2 className="font-medium">Redirecting to project page...</h2>
    </div>
  );
};

export default PayemntComplete;
