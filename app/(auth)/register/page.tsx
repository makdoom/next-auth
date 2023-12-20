"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "@/types/user.types";
import axios from "axios";
import { Loader } from "lucide-react";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

type RegisterErrorMessageType = {
  username?: string;
  email?: string;
  password?: string;
};

const Register = () => {
  const [user, setUser] = useState<User>({} as User);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<RegisterErrorMessageType>({});

  const handleUserChange = (event: ChangeEvent<HTMLInputElement>) =>
    setUser((prev) => ({ ...prev, [event.target.name]: event.target.value }));

  const handleRegister = async () => {
    console.log(user);
    setIsLoading(true);
    try {
      const response = await axios.post("/api/auth/register", {
        username: user.username,
        email: user.email,
        password: user.password,
        password_confirmation: user.confirmPassword,
      });

      setIsLoading(false);
      if (response.data.status === 400) {
        setError(response.data.message);
        return;
      }

      setError({});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-center flex-1">
      <div className="border border-[#eee] p-3 md:p-8 w-[350px] m-4 md:w-[400px] flex flex-col justify-center items-center rounded-md">
        <h2 className="text-center font-bold mb-10 text-3xl tracking-wide text-gray-600">
          Register
        </h2>
        <div className="w-full">
          <Input
            name="username"
            type="text"
            autoFocus
            placeholder="Username"
            className="w-full"
            onChange={handleUserChange}
          />
          {error.username && (
            <span className="text-left text-xs text-red-500 my-2">
              {error.username}
            </span>
          )}
          <Input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full mt-5"
            onChange={handleUserChange}
          />
          {error.email && (
            <span className="text-left text-xs text-red-500 my-2">
              {error.email}
            </span>
          )}

          <Input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full mt-5"
            onChange={handleUserChange}
          />
          {error.password && (
            <span className="justify-start text-xs text-red-500 my-2">
              {error.password}
            </span>
          )}
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
            disabled={isLoading}
            onClick={handleRegister}
          >
            <span className="mr-2">Register</span>{" "}
            {isLoading && <Loader className="h-4 w-4 animate-spin" />}
          </Button>

          <h2 className="text-sm mt-4 text-center">
            Already have an account ?{" "}
            <Link href="/login" className="font-semibold">
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Register;
