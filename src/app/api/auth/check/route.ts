import connectMongo from "@/api/connectMongo";
import { auth } from "@/controllers/auth/auth.ctrl";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  await connectMongo();
  const result = await auth.check(request);
  return result;
}
