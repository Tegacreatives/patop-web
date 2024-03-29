import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Input from "../Inputs/Input";
import { FormButton } from "../button/Button";

interface FormProps {
  onSubmit: SubmitHandler<FieldValues>;
  title: string;
  bottomLabel: string;
  bottomLink: string;
  bottomLinkText: string;
}

const Form = ({
  onSubmit,
  title,
  bottomLabel,
  bottomLink,
  bottomLinkText,
}: FormProps) => {
  const { handleSubmit, register } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const [isLoading, setisLoading] = useState(false);
  return (
    <div className=" md:w-[50vw] p-14 md:px-36 md:py-10">
      <div className="relative flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-[#015E5F]">{title}</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
            <Input
              register={register}
              id="name"
              label="Name"
              placeholder="Enter your name"
            />
            <Input
              register={register}
              id="email"
              label="Email"
              placeholder="Enter your email"
            />
            <Input
              register={register}
              id="password"
              label="Password"
              type="password"
              placeholder="Enter password"
            />

            <div className="mt-6">
              <FormButton label="Register" />
            </div>
          </form>

          <div className="flex items-center justify-center my-8 space-x-2">
            <div className="flex-1 h-[1px] bg-gray-500"></div>
            <p className="text-sm text-center text-gray-700">
              Or, Sign up with
            </p>
            <div className="flex-1 h-[1px] bg-gray-500"></div>
          </div>
          <div className="mt-4">
            <FormButton
              label="Sign up with Google"
              iconSrc="/assets/icons/google.png"
              onClick={() => signIn("google")}
              outline
            />
          </div>
          <p className="mt-4 text-sm text-center text-gray-700">
            {bottomLabel}{" "}
            <Link
              href={bottomLink}
              className="font-medium text-[#015E5F] hover:underline"
            >
              {bottomLinkText}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
