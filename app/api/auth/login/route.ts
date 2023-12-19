import connect from "@/db";
import User from "@/models/User";
import { loginValidator } from "@/validators";
import { errors } from "@vinejs/vine";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// Db connection
connect();

export const POST = async (request: NextRequest) => {
  try {
    const data = await request.json();

    // Validate data with login validator
    let validatedData = await loginValidator.validate(data);

    // Check user exist or not
    const user = await User.findOne({ email: validatedData.email });
    if (!user)
      return NextResponse.json({
        message: "Invalid email provided",
        statusCode: 400,
      });

    const isPasswordValid = bcrypt.compareSync(
      validatedData.password,
      user.password
    );
    if (!isPasswordValid)
      return NextResponse.json({
        message: "Invalid Password provided",
        statusCode: 400,
      });

    return NextResponse.json({
      data: { username: user.username, email: user.email },
      message: "Login successfull",
      statusCode: 200,
    });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      console.log(error.messages);
      return NextResponse.json({ message: error.messages, status: 400 });
    }
  }
};
