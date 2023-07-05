import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./lib/session";

export interface AuthRequest extends NextRequest {
  user: {
    _id: string;
    username: string;
    iat?: number;
    exp?: number;
  };
}

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token");
  if (!token) return NextResponse.next();
  try {
    const { _id, username } = await verifyToken<{
      _id: string;
      username: string;
    }>(token.value);
    (request as AuthRequest).user = {
      ...(request as AuthRequest).user,
      _id,
      username,
    };
  } catch (e) {
    return NextResponse.next();
  }

  const authUser = (request as AuthRequest).user;
  if (authUser && request.nextUrl.pathname.startsWith("/auth/login")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (authUser && request.nextUrl.pathname.startsWith("/auth/regist")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/login", "/auth/regist"],
};
