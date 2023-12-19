import connect from "@/db";
import { registerValidator } from "@/validators/authSchema";
import { errors } from "@vinejs/vine";
import { NextRequest, NextResponse } from "next/server";

// DB connection
connect();

export const POST = async (request: NextRequest) => {
  try {
    const data = await request.json();

    // Validate data with vine
    const validatedData = await registerValidator.validate(data);
    console.log(validatedData);
    return NextResponse.json({ data: validatedData, status: 200 });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      console.log(error.messages);
      return NextResponse.json({ message: error.message, status: 400 });
    }
  }
};
