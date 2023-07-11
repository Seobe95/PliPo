import { check } from "@/controllers/auth/auth.ctrl";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const result = await check(request);
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
