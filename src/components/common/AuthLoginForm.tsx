"use client";

import AuthInput from "../base/AuthInput";
import { authInputBox, authInputContainer, authTitle } from "./Auth.css";
import Button from "../base/Button";
import localFont from "next/font/local";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useAuthInput from "@/hooks/useAuthInput";
import useAuthManegement from "@/zustand/useAuthManegement";
import { setStorage } from "@/lib/storage";
import { STORAGE_KEY } from "@/constants/keys";

interface AuthProps {}

const titleFont = localFont({
  src: "../../app/KyoboHandwriting2022khn.woff2",
  display: "swap",
});

export default function AuthLoginForm() {
  const username = useAuthInput();
  const userPassword = useAuthInput();
  const { login, isError, user  } = useAuthManegement((state) => ({
    login: state.login,
    isError: state.isError,
    user: state.user
  }));
  const router = useRouter();
  const buttonDisable = () => {
    if (username.inputValue === "" || userPassword.inputValue === "") {
      return true;
    }
    return false;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login({
        username: username.inputValue,
        password: userPassword.inputValue,
      });
    } catch (e) {
      console.log(e);
    }

    if (!isError) {
      router.replace("/");
    }
  };

  return (
    <>
      <h1 className={authTitle} style={titleFont.style}>
        <Link href={"/"}>플리포</Link>
      </h1>
      <form className={authInputContainer} onSubmit={onSubmit}>
        <div className={authInputBox}>
          <AuthInput
            onChange={(e) => username.handleInputChange(e, "id")}
            value={username.inputValue}
            valueCheck={username.isValid ? "correct" : "incorrect"}
            type="text"
            placeholder="아이디를 입력하세요"
          />
        </div>
        <div className={authInputBox}>
          <AuthInput
            onChange={(e) => userPassword.handleInputChange(e, "password")}
            value={userPassword.inputValue}
            type="password"
            placeholder="비밀번호를 입력하세요"
            valueCheck={userPassword.isValid ? "correct" : "incorrect"}
          />
        </div>
        <div className={authInputBox}>
          <Button
            color="primary"
            size="large"
            disabled={buttonDisable()}
            type="submit"
          >
            로그인
          </Button>
        </div>
      </form>
      <Button
        color="none"
        size="large"
        onClick={() => router.push(`/auth/regist`)}
      >
        회원가입
      </Button>
    </>
  );
}
