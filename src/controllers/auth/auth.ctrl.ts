import { verifyToken } from "@/lib/session";
import User from "@/models/auth/auth.model";
import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";

export interface UserData {
  username: string;
  nickname?: string;
  password: string;
}

const register = async (req: Request) => {
  const { username, nickname, password }: UserData = await req.json();

  const usernameExists = await User.findByUsername(username);
  const nicknameExists = await User.findByNickname(nickname!);

  if (usernameExists) {
    return NextResponse.json(
      { message: "존재하는 아이디입니다." },
      {
        status: 409,
      }
    );
  }

  if (nicknameExists) {
    return NextResponse.json(
      { message: "존재하는 닉네임입니다." },
      {
        status: 409,
      }
    );
  }

  const user = new User({ username, nickname });
  await user.setPassword(password);
  await user.save();

  const data = user.serialize();

  const token = await user.generateToken();

  cookies().set({
    name: "access_token",
    value: token,
    maxAge: 7 * 24 * 60 * 60,
    path: "/",
    httpOnly: true,
  });

  return NextResponse.json(
    { data },
    {
      status: 200,
    }
  );
};

const login = async (req: Request) => {
  const { username, password }: UserData = await req.json();

  if (!username || !password) {
    return NextResponse.json(
      { message: "에러가 발생하였습니다." },
      {
        status: 401,
      }
    );
  }

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return NextResponse.json(
        { message: "등록되지 않은 유저입니다." },
        {
          status: 401,
        }
      );
    }

    const valid = await user.checkPassword(password);

    if (!valid) {
      return NextResponse.json(
        { message: "비밀번호가 일치하지 않습니다." },
        {
          status: 401,
        }
      );
    }
    const data = user.serialize();
    const token = await user.generateToken();
    cookies().set({
      name: "access_token",
      value: token,
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
      httpOnly: true,
    });

    return NextResponse.json(
      { data },
      {
        status: 200,
      }
    );
  } catch (e) {
    return NextResponse.json(
      { message: "에러가 발생하였습니다.", e },
      {
        status: 500,
      }
    );
  }
};

const logout = () => {
  cookies().delete("access_token");
  return NextResponse.json({ message: "로그아웃" }, { status: 204 });
};

const check = async (req: NextRequest) => {
  const auth = req.headers.get("authorization");
  const token = auth?.split(" ")[1];
  if (!token) {
    return NextResponse.json(
      { message: "로그인 중이 아님", isLogin: false },
      {
        status: 401, // Unauthorized
      }
    );
  }

  const user = await verifyToken(token);
  console.log(user)

  return NextResponse.json({ user, isLogin: true });
};

export const auth = {
  login, logout, check, register
}