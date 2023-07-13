import { posts } from "@/controllers/posts/posts.ctrl";
import { NextResponse, NextRequest } from "next/server";

interface NextApi {
  res: NextResponse;
  req: NextRequest;
}

export async function GET({req, res}: NextApi) {
  const result = await posts.list();
}

export async function POST({req, res}: NextApi) {}
