import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import getCurrentUser from "./actions/getCurrentUser";
import ToasterProvider from "./providers/ToasterProvider";
import Provider from "./context/client-provider";
import { getServerSession } from "next-auth";

import { authOptions } from "@/pages/api/auth/[...nextauth]";

const font = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patop | Be part of the next generation future",
  description:
    "Help students raise funds for their academnic projects and potential startups",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <Navbar currentUser={currentUser} />
        <Provider session={session}>{children}</Provider>
      </body>
    </html>
  );
}
