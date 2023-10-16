"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../button/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";

const Links = [
  {
    name: "About",
    url: "/about",
  },
  {
    name: "How it works",
    url: "/how-it-works",
  },
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "Raise Funds",
    url: "/create",
  },
];

interface NavbarProps {
  currentUser?: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  //Toggles the navigation menu
  const toogleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div
      className="flex items-center justify-between py-6 px-10 md:px-20 top-0
      w-full transition-all duration-300 bg-white border-b border-gray-200"
    >
      <div>
        <h1 className={`text-3xl font-bold text-[#015E5F]`}>
          <Link href="/">Patop</Link>
        </h1>
      </div>
      <div className="hidden md:block">
        <ul className="flex space-x-10 font-medium text-base">
          {Links.map((link, index) => (
            <li key={index}>
              <Link href={link.url} className="text-[#015E5F]">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:block md:space-x-5">
        {currentUser ? (
          <h1
            onClick={toogleOpen}
            className="capitalize border border-[#015E5F] px-10  py-3 rounded text-[#015E5F] cursor-pointer"
          >
            {currentUser?.name ? currentUser.name : ""}
          </h1>
        ) : (
          <>
            <Button
              onClick={() => router.push("login")}
              outline
              label="Login"
            />
            <Button onClick={() => router.push("signup")} label="Sign Up" />
          </>
        )}
        {isOpen && (
          <div className="absolute bg-white w-40 p-4 rounded-xl shadow-md overdlow-hidden right-30 top-28 text-sm">
            <div className="flex flex-col cursor-pointer justify-between items-start space-y-6">
              <div
                onClick={() => router.push("/my-campaigns")}
                className="text-[#015E5F] cursor-pointer"
              >
                My Projects
              </div>
              <div
                onClick={() => signOut()}
                className="text-[#015E5F] cursor-pointer"
              >
                Sign out
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="block md:hidden">
        <FiMenu size={30} />
      </div>
    </div>
  );
};

export default Navbar;
