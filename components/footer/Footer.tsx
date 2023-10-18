"use client";
import Link from "next/link";
import React from "react";
import { Links } from "../navbar/Navbar";

const Footer = () => {
  return (
    <div className="px-10 md:px-20 pb-10">
      <div className="flex flex-col md:flex-row justify-between md:items-center space-y-10 md:space-y-0">
        <div>
          <h1 className={`text-3xl font-bold text-[#015E5F]`}>
            <Link href="/">Patop</Link>
          </h1>
        </div>
        <div>
          <ul className="flex flex-col md:flex-row md:space-x-10 font-medium text-base">
            {Links.map((link, index) => (
              <li key={index}>
                <Link href={link.url} className="text-[#015E5F]">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center pt-10">
        <a
          href="https://tega.vercel.app/"
          target="_blank"
          className="text-[#015E5F] text-sm"
        >
          © 2023 Tega Okorare. All rights reserved.
        </a>
      </div>
    </div>
  );
};

export default Footer;
