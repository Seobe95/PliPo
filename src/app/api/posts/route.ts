import { NextResponse, NextRequest } from "next/server";

interface NextApi {
  res: NextResponse;
  req: NextRequest;
}

export async function GET({req, res}: NextApi) {}

export async function POST({req, res}: NextApi) {}
