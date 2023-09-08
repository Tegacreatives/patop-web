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
      <Form
        onSubmit={onSubmit}
        title="Welcome to Patop!"
        bottomLabel="Got an account?"
        bottomLink="/login"
        bottomLinkText="Login Here"
      />
      <div className="hidden md:block w-[50vw] relative">
        <Image src="/assets/bg.jpg" fill alt="login-image" sizes="100%" />
      </div>
    </div>
  );
};

export default SignUp;
