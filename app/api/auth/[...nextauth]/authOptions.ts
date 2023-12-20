import connect from "@/db";
import User from "@/models/User";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Next Auth",
      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        connect();

        const user = await User.findOne({ email: credentials?.email }); //{ id: "1", name: "J Smith", email: credentials?.email };
        if (user) return user;
        return null;
      },
    }),
  ],
};
