import { NextRequest, NextResponse } from "next/server";
import { signToken, verifyToken } from "./lib/session";

export interface AuthRequest extends NextRequest {
  user: {
    _id: string;
    username: string;
    nickname: string;
    iat?: number;
    exp?: number;
  };
}

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token");

  if (!token && request.nextUrl.pathname.startsWith("/profile")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!token) return NextResponse.next();
  
  try {
    const user = await verifyToken<{
      _id: string;
      username: string;
      nickname: string;
      iat: number;
      exp: number;
    }>(token.value);
    const now = Math.floor(Date.now() / 1000);

    if (user.exp - now < 60 * 60 * 24 * 3.5) {
      const response = NextResponse.next();
      const newToken = await signToken({
        data: {
          _id: user._id,
          username: user.username,
          nickname: user.nickname,
        },
        expiresIn: "7d",
      });

      response.cookies.set({
        name: "access_token",
        value: newToken || "",
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60,
        path: "/",
      });

      return response;
    }
  } catch (e) {
    return NextResponse.next();
  }

  if (token && request.nextUrl.pathname.startsWith("/auth/login")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (token && request.nextUrl.pathname.startsWith("/auth/regist")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (token && request.nextUrl.pathname.startsWith("/")) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/login", "/auth/regist", "/profile", "/"],
};
