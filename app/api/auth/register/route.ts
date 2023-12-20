import connect from "@/db";
import User from "@/models/User";
import { registerValidator } from "@/validators";
import { errors } from "@vinejs/vine";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

// DB connection
connect();

export const POST = async (request: NextRequest) => {
  try {
    const data = await request.json();
    // Validate data with vine
    let validatedData = await registerValidator.validate(data);

    // Check if user already exists
    const userExists = await User.findOne({ email: validatedData.email });
    if (userExists) {
      return NextResponse.json({
        message: "Email is already taken",
        status: 409,
      });
    }

    // Generate salt
    const salt = bcrypt.genSaltSync(10);
    validatedData.password = bcrypt.hashSync(validatedData.password, salt);

    const user = await User.create(validatedData);
    return NextResponse.json({
      data: { username: user.username, email: user.email },
      status: 200,
    });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      console.log(error.messages);
      return NextResponse.json({ message: error.messages, status: 400 });
    }

    console.log(error);
    return NextResponse.json({
      message: "Something went wrong with the API",
      error: error,
      status: 400,
    });
  }
};
