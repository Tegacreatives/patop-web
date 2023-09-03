"use client";
import React from "react";
import Button from "../button/Button";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const Links = [
  {
    name: "Home",
    url: "/",
  },
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
    url: "/raise-funds",
  },
];

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-8 px-10 md:px-20">
      <div>
        <h1 className="text-3xl font-semibold text-[#015E5F]">Patop</h1>
      </div>
      <div className="hidden md:block">
        <ul className="flex space-x-10">
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
        <Button onClick={() => {}} outline label="Login" />
        <Button onClick={() => {}} label="Sign Up" />
      </div>
      <div className="block md:hidden">
        <FiMenu size={30} />
      </div>
    </div>
  );
};

export default Navbar;
