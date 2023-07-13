import connectMongo from "@/api/connectMongo";
import { auth } from "@/controllers/auth/auth.ctrl";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await connectMongo()
  try {
    const regist = await auth.register(req)
    return regist
  } catch (e) {
    return NextResponse.json({ message: "에러입니다.", e }.e, {
      status: 500,
    });
  }
}
