import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Register = () => {
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
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full mt-5"
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full mt-5"
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          className="w-full my-5"
        />

        <Button variant="default" className="mt-4 w-full">
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
