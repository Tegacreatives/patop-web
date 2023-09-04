import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="md:flex md:h-[86vh]">
      <div className=" md:w-[50vw] p-14 md:px-36 md:py-24">
        <div className="relative flex flex-col items-center justify-center overflow-hidden">
          <div className="w-full lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-[#015E5F]">
              Welcome Back!
            </h1>
            <form className="mt-6">
              <div className="mb-4">
                <label htmlFor="email" className="block text-base">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="block w-full px-4 py-4 mt-2 bg-white text-sm border border-gray-400 rounded-md
                   focus:border-[#015E5F] focus:outline-none"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="password" className="block text-base">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  required
                  hidden
                  className="block w-full px-4 py-4 mt-2 bg-white border border-gray-400 text-sm rounded-md
                   focus:border-[#015E5F] focus:outline-none"
                />
              </div>
              <Link
                href="/forget"
                className="text-xs text-[#015E5F] hover:underline"
              >
                Forget Password?
              </Link>
              <div className="mt-6">
                <button
                  className="w-full text-sm px-4 py-4 tracking-wide text-white transition-colors duration-200
                 transform bg-[#015E5F] rounded-md hover:bg-[#017A7A] focus:outline-none focus:bg-[#017A7A]"
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
                className=" flex items-center justify-center space-x-5 w-full text-sm px-4 py-4 tracking-wide transition-colors duration-200
                 transform bg-white border border-gray-500 rounded-md focus:outline-none"
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
              Don't have an account?{" "}
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
