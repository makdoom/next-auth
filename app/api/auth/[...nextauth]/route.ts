import NextAuth from "next-auth/next";
import { authOptions } from "./authOptions";

const handlers = NextAuth(authOptions);

export { handlers as GET, handlers as POST };
