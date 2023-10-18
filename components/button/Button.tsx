import Image from "next/image";
import React from "react";

interface ButtonProps {
  label: string;
  outline?: boolean;
  deleteButton?: boolean;
  onClick?: () => void;
  fixedButton?: boolean;
}

interface FormButtonProps extends ButtonProps {
  iconSrc?: string;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  outline,
  onClick,
  fixedButton,
  deleteButton,
}) => {
  return (
    <button
      className={` px-10  py-3 rounded 
      ${
        outline
          ? "bg-white text-[#015E5F] border border-[#015E5F]"
          : "bg-[#015E5F] text-white hover:bg-[#017A7A]"
      } ${deleteButton && "bg-red-500"}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const FormButton = ({
  onClick,
  iconSrc,
  label,
  outline,
  isLoading,
}: FormButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={` space-x-5 w-full text-sm px-4 py-4 tracking-wide
                   border border-gray-500 rounded-md focus:outline-none
                 ${
                   outline
                     ? " flex items-center justify-center bg-white"
                     : "block hover:bg-[#017A7A] transition-colors duration-200 transform text-white focus:bg-[#017A7A]"
                 }
                 ${isLoading == true ? "bg-[#017A&A]" : "bg-[#015E5F]"}
                 `}
    >
      {outline && (
        <Image
          src={iconSrc as string}
          width={25}
          height={25}
          alt="google-login"
        />
      )}
      {/* Register button */}

      <p>{label}</p>
    </button>
  );
};

export { Button, FormButton };
