import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prisma";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "text" },
      },

      async authorize(credentials) {
        //Checks if the user doesn't input complete credetials
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        //Finds the user by email
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        //Checks if user exists or invalid login details
        if (!user || !user?.hashedPassword) {
          throw new Error("Invalid Credentials");
        }

        //Checks if the password is thesame as the encrypted password
        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        //Checks if the password is wrong
        if (!isPasswordCorrect) {
          throw new Error("Invalid password");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.SECRET,
};

export default NextAuth(authOptions);
