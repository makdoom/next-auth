"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoginErrorType, User } from "@/types/user.types";
import axios from "axios";
import { Loader } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ChangeEvent, useState } from "react";

const Login = () => {
  const session = useSession();

  const [user, setUser] = useState<User>({} as User);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<LoginErrorType>({});

  const handlerUserChange = (event: ChangeEvent<HTMLInputElement>) =>
    setUser((prev) => ({ ...prev, [event.target.name]: event?.target?.value }));

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/auth/login", {
        email: user.email,
        password: user.password,
      });

      setIsLoading(false);
      if (response.data.status === 400) {
        setError(response.data.message);
        return;
      }

      setError({});
      console.log(response);
      signIn("credentials", {
        email: user.email,
        password: user.email,
        callbackUrl: "/",
        redirect: true,
      });
      // router.push("/login");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  console.log(session);

  if (session.data) return redirect("/");

  return (
    <div className="h-full w-full flex justify-center items-center flex-1">
      <div className="border border-[#eee] p-3 md:p-8 w-[350px] flex flex-col justify-center items-center rounded-md">
        <h2 className="text-center font-bold mb-10 text-3xl tracking-wide text-gray-600">
          Login
        </h2>
        <Input
          name="email"
          type="email"
          autoFocus
          placeholder="Enter Email"
          className="w-full"
          onChange={handlerUserChange}
        />
        {error.email && (
          <span className="text-left text-xs text-red-500 my-2">
            {error.email}
          </span>
        )}
        <Input
          name="password"
          type="password"
          placeholder="Enter Password"
          className="w-full my-5"
          onChange={handlerUserChange}
        />
        {error.password && (
          <span className="text-left text-xs text-red-500 my-2">
            {error.password}
          </span>
        )}
        <Button variant="default" className="mt-4 w-full" onClick={handleLogin}>
          <span className="mr-2">Login</span>{" "}
          {isLoading && <Loader className="h-4 w-4 animate-spin" />}
        </Button>

        <h2 className="text-sm mt-4">
          Create new account ?{" "}
          <Link href="/register" className="font-semibold">
            Register
          </Link>
        </h2>
      </div>
    </div>
  );
};
export default Login;
