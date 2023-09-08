"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Input from "@/components/Inputs/Input";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);
      if (callback?.ok) {
        toast.success("Logged in Successfully");
        router.refresh();
        router.push("/");
      }
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  const { data: session } = useSession();
  useEffect(() => {
    if (session?.user) {
      router.push("/");
    }
  }, [session, router]);
  return (
    <div className="md:flex md:h-[86vh]">
      <div className=" md:w-[50vw] p-14 md:px-36 md:py-24">
        <div className="relative flex flex-col items-center justify-center overflow-hidden">
          <div className="w-full lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-[#015E5F]">
              Welcome Back!
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
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
              <Link
                href="/forget"
                className="text-xs text-[#015E5F] hover:underline"
              >
                Forget Password?
              </Link>
              <div className="mt-6">
                <button
                  className={`w-full text-sm px-4 py-4 tracking-wide text-white transition-colors duration-200
                 transform rounded-md hover:bg-[#017A7A] focus:outline-none focus:bg-[#017A7A]
                 ${isLoading == true ? "bg-[#017A&A]" : "bg-[#015E5F]"}
                 `}
                >
                  Login
                </button>
              </div>
            </form>

            <div className="flex items-center justify-center my-8 space-x-2">
              <div className="flex-1 h-[1px] bg-gray-500"></div>
              <p className="text-sm text-center text-gray-700">
                Or, Login with
              </p>
              <div className="flex-1 h-[1px] bg-gray-500"></div>
            </div>
            <div className="mt-4">
              <button
                onClick={() => signIn("google")}
                className=" flex items-center justify-center space-x-5 w-full text-sm px-4 py-4 tracking-wide transition-colors duration-200
                 transform bg-white border border-gray-500 rounded-md focus:outline-none"
              >
                <Image
                  src="/assets/icons/google.png"
                  sizes="100%"
                  width={25}
                  height={25}
                  alt="google-login"
                />
                <p>Sign up with Google</p>
              </button>
            </div>
            <p className="mt-4 text-sm text-center text-gray-700">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="font-medium text-[#015E5F] hover:underline"
              >
                Register Here
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-[50vw] relative">
        <Image src="/assets/loginbg.jpg" fill alt="login-image" />
      </div>
    </div>
  );
};

export default Login;
