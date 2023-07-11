import connectMongo from "@/api/connectMongo";
import { login } from "@/controllers/auth/auth.ctrl";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await connectMongo();
  try {
    const response = await login(request);
    return response;
  } catch (e) {
    return NextResponse.json({ message: "에러 발생", e }.e, {
      status: 500,
    });
  }
}
