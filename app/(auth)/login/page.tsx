"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "@/types/user.types";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

const Login = () => {
  const [user, setUser] = useState<User>({} as User);

  const handlerUserChange = (event: ChangeEvent<HTMLInputElement>) =>
    setUser((prev) => ({ ...prev, [event.target.name]: event?.target?.value }));

  const handleLogin = async () => {
    console.log(user);
  };

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
        <Input
          name="password"
          type="password"
          placeholder="Enter Password"
          className="w-full my-5"
          onChange={handlerUserChange}
        />
        <Button variant="default" className="mt-4 w-full" onClick={handleLogin}>
          Login
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
