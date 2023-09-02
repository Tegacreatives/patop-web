import React from "react";
import Button from "../button/Button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-10 px-10 md:px-20">
      <div>Logo</div>
      <div className="hidden md:block">
        <ul className="flex space-x-10">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/how-it-works">How it works</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/raise-funds">Raise Funds</Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:block md:space-x-5">
        <Button onClick={() => {}} outline label="Login" />
        <Button onClick={() => {}} label="Sign Up" />
      </div>
    </div>
  );
};

export default Navbar;
