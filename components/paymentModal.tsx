"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { Button } from "./button/Button";

interface IPaymentModal {
  onClose: () => void;
  isOpen: boolean;
}

const PaymentModal = ({ onClose, isOpen }: IPaymentModal) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const onSubmit = (data: any) => {
    // Handle form submission data
    console.log(data);
    // Close the modal after form submission (you can customize this behavior)
    onClose();
  };

  const donationOptions = [
    { label: "NGN100", value: 100 },
    { label: "NGN250", value: 250 },
    { label: "NGN500", value: 500 },
    { label: "NGN1000", value: 1000 },
  ];

  const selectedOption = watch("amount");

  if (!isOpen) return null;

  const handlePredefinedOptionClick = (value: number) => {
    setValue("amount", value);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
      <div className="modal-content bg-white p-8 rounded shadow-lg z-50">
        <div className="flex items-center justify-between pb-8">
          <h2 className="text-xl font-semibold">Support this Project</h2>
          <button onClick={onClose}>
            <AiOutlineClose />
          </button>
        </div>
        <form
          className="w-[80vw] md:w-[40vw]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-600 font-light mb-1 text-sm"
            >
              Not Required
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              {...register("name")}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 font-light mb-1 text-sm"
            >
              Required
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="border border-gray-300 p-2 rounded w-full"
            />
            {errors.email && (
              <span className="text-red-500">
                An email is required to process your contribution
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="donationAmount"
              className="block text-gray-700 font-medium mb-2"
            >
              Select or Enter Donation Amount
            </label>
            <div className="flex flex-wrap gap-2">
              {donationOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`bg-[#015E5F] text-white px-4 py-2 rounded hover:bg-[#017A7A] ${
                    selectedOption === option.value ? "bg-[#0f4343]" : ""
                  }`}
                  onClick={() => {
                    handlePredefinedOptionClick(option.value);
                    setValue("customAmount", option.value);
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <input
              type="number"
              {...register("amount", { required: true })}
              placeholder="Enter custom amount"
              min={100}
              className="mt-2 border border-gray-300 p-2 rounded w-full"
            />
            {errors.amount && (
              <span className="text-red-500">Please make a contribution</span>
            )}
          </div>
          <Button label="Make Contribution" />
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;
