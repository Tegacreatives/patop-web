"use client";
import React, { useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import Form from "@/components/form/Form";
import Input from "@/components/Inputs/Input";
import { FormButton } from "@/components/button/Button";

const SignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const [isLoading, setisLoading] = useState(false);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setisLoading(true);
    axios
      .post("/api/register", data)
      .then(() => router.push("/login"))
      .catch((error) => {
        console.log(error);
      });
    setisLoading(false);
  };

  // const { data: session } = useSession();
  // useEffect(() => {
  //   if (session?.user) {
  //     router.push("/");
  //   }
  // }, []);
  return (
    <div className="md:flex md:h-[86vh]">
      <div className=" md:w-[50vw] p-14 md:px-36 md:py-10">
        <div className="relative flex flex-col items-center justify-center overflow-hidden">
          <div className="w-full lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-[#015E5F]">
              Welcome to Patop!
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
              <Input id="name" label="Name" placeholder="Enter your name" />
              <Input id="email" label="Email" placeholder="Enter your email" />
              <Input
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
              Got an account?{" "}
              <Link
                href="/login"
                className="font-medium text-[#015E5F] hover:underline"
              >
                Login Here
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-[50vw] relative">
        <Image src="/assets/bg.jpg" fill alt="login-image" sizes="100%" />
      </div>
    </div>
  );
};

export default SignUp;
