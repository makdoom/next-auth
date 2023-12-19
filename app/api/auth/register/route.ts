import connect from "@/db";
import { registerValidator } from "@/validators/authSchema";
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

    // Generate salt
    const salt = bcrypt.genSaltSync(10);
    validatedData.password = bcrypt.hashSync(validatedData.password, salt);

    console.log(validatedData);
    return NextResponse.json({ data: validatedData, status: 200 });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      console.log(error.messages);
      return NextResponse.json({ message: error.messages, status: 400 });
    }
  }
};
