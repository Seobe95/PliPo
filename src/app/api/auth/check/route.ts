import connectMongo from "@/api/connectMongo";
import { check, login } from "@/controllers/auth/auth.ctrl";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const result = check(request);
    return result;
  } catch (e) {
    return NextResponse.json(
      { message: "error", e },
      {
        status: 500,
      }
    );
  }
}
