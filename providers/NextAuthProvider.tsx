"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

type NextAuthProviderPropType = {
  children: ReactNode;
};

const NextAuthProvider = ({ children }: NextAuthProviderPropType) => {
  return <SessionProvider>{children}</SessionProvider>;
};
export default NextAuthProvider;
