import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = new NextResponse(undefined, {
      status: 204,
      headers: {
        'Set-Cookie': 'access_token=; Max-Age=0; Path=/; HttpOnly;',
      },
    });
    return response
  } catch (e) {
    return NextResponse.json(
      { message: "error", e },
      {
        status: 500,
      }
    );
  }
}
