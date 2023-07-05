import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    request.cookies.delete("access_token");
    return NextResponse.json({ message: "로그아웃 완료" }, { status: 204 });
  } catch (e) {
    return NextResponse.json(
      { message: "error", e },
      {
        status: 500,
      }
    );
  }
}
