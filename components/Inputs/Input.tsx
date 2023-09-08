import React from "react";
import { FieldValues, UseFormRegister, useForm } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  register: UseFormRegister<FieldValues>;
}

const Input = ({ id, label, placeholder, type, register }: InputProps) => {
  const {
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-base">
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...register(id, { required: true })}
        placeholder={placeholder}
        required
        className={`block w-full px-4 py-4 mt-2 bg-white border text-sm rounded-md
                   focus:border-[#015E5F] focus:outline-none
                   ${errors[id] ? "border-red-500" : "border-gray-400"}
                   `}
      />
    </div>
  );
};

export default Input;
