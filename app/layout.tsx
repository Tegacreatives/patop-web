import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import ToasterProvider from "./providers/ToasterProvider";

const font = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patop | Be part of the next generation future",
  description:
    "Help students raise funds for their academnic projects and potential startups",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
