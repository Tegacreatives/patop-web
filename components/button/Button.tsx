import React from "react";

interface ButtonProps {
  label: string;
  outline?: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, outline, onClick }) => {
  return (
    <button
      className={`border border-[#015E5F] px-10  py-3 rounded 
      ${
        outline
          ? "bg-white text-[#015E5F]"
          : "bg-[#015E5F] text-white hover:bg-[#017A7A]"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
