"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "@/types/user.types";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

const Register = () => {
  const [user, setUser] = useState<User>({} as User);

  const handleUserChange = (event: ChangeEvent<HTMLInputElement>) =>
    setUser((prev) => ({ ...prev, [event.target.name]: event.target.value }));

  const handleRegister = async () => {
    console.log(user);
  };

  return (
    <div className="h-full w-full flex justify-center items-center flex-1">
      <div className="border border-[#eee] p-3 md:p-8 w-[350px] flex flex-col justify-center items-center rounded-md">
        <h2 className="text-center font-bold mb-10 text-3xl tracking-wide text-gray-600">
          Register
        </h2>
        <Input
          name="name"
          type="text"
          autoFocus
          placeholder="Username"
          className="w-full"
          onChange={handleUserChange}
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full mt-5"
          onChange={handleUserChange}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full mt-5"
          onChange={handleUserChange}
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          className="w-full my-5"
          onChange={handleUserChange}
        />

        <Button
          variant="default"
          className="mt-4 w-full"
          onClick={handleRegister}
        >
          Register
        </Button>

        <h2 className="text-sm mt-4">
          Already have an account ?{" "}
          <Link href="/login" className="font-semibold">
            Login
          </Link>
        </h2>
      </div>
    </div>
  );
};
export default Register;
