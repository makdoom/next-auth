"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const session = useSession();

  if (!session) redirect("/login");
  return (
    <div className="h-full flex items-center justify-center flex-col">
      <h1 className="text-3xl font-bold">Welcome to Nextjs Authentication</h1>
      <Button
        className="mt-4"
        onClick={() => signOut({ callbackUrl: "/login", redirect: true })}
      >
        Logout
      </Button>
    </div>
  );
}
