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
import { data } from "autoprefixer";

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

  const googleSignIn = async () => {
    signIn("google");
  };

  const { data: session } = useSession();
  useEffect(() => {
    if (session?.user) {
      router.push("/");
    }
  }, [session, router]);
  return (
    <div className="md:flex md:h-[86vh]">
      <div className=" md:w-[50vw] p-14 md:px-36 md:py-10">
        <div className="relative flex flex-col items-center justify-center overflow-hidden">
          <div className="w-full lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-[#015E5F]">
              Welcome to Patop!
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-base">
                  Name
                </label>
                <input
                  id="name"
                  {...register("name", { required: true })}
                  placeholder="Enter your name"
                  required
                  className={`block w-full px-4 py-4 mt-2 bg-white border text-sm rounded-md
                   focus:border-[#015E5F] focus:outline-none
                   ${errors.name ? "border-red-500" : "border-gray-400"}
                   `}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-base">
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className={`block w-full px-4 py-4 mt-2 bg-white border text-sm rounded-md
                   focus:border-[#015E5F] focus:outline-none
                   ${errors.email ? "border-red-500" : "border-gray-400"}
                   `}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="password" className="block text-base">
                  Password
                </label>
                <input
                  {...register("password", { required: true })}
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  required
                  hidden
                  className={`block w-full px-4 py-4 mt-2 bg-white border text-sm rounded-md
                   focus:border-[#015E5F] focus:outline-none
                   ${errors.password ? "border-red-500" : "border-gray-400"}
                   `}
                />
              </div>

              <div className="mt-6">
                <button
                  className={`w-full text-sm px-4 py-4 tracking-wide text-white transition-colors duration-200
                 transform rounded-md hover:bg-[#017A7A] focus:outline-none focus:bg-[#017A7A]
                 ${isLoading == true ? "bg-[#017A&A]" : "bg-[#015E5F]"}
                 `}
                >
                  Register
                </button>
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
              <button
                onClick={googleSignIn}
                className=" flex items-center justify-center space-x-5 w-full text-sm px-4 py-4 tracking-wide
                 transition-colors duration-200 transform bg-white border border-gray-500 rounded-md focus:outline-none"
              >
                <Image
                  src="/assets/icons/google.png"
                  width={25}
                  height={25}
                  alt="google-login"
                />
                <p>Sign up with Google</p>
              </button>
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
