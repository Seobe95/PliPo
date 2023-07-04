import { NextResponse, NextRequest } from "next/server";

interface NextApi {
  res: NextResponse;
  req: NextRequest;
}

export async function GET({req, res}: NextApi) {}

export async function DELETE({req, res}: NextApi) {}

export async function PATCH({req, res}: NextApi) {}

export async function PUT({req, res}: NextApi) {}



