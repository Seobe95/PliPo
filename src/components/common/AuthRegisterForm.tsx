"use client";

import AuthInput from "../base/AuthInput";
import { authInputBox, authInputContainer, authTitle } from "./Auth.css";
import Button from "../base/Button";
import localFont from "next/font/local";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useAuthInput from "@/hooks/useAuthInput";
import { apiClient } from "@/api/apiClient";
import { setStorage } from "@/lib/storage";
import { STORAGE_KEY } from "@/constants/keys";
import useAuthManegement from "@/zustand/useAuthManegement";
interface AuthProps {
  type: "login" | "regist";
}

const titleFont = localFont({
  src: "../../app/KyoboHandwriting2022khn.woff2",
  display: "swap",
});

export default function AuthRegisterForm() {
  const username = useAuthInput();
  const userPassword = useAuthInput();
  const userNickname = useAuthInput();
  const { isLoading, isError } = useAuthManegement((state) => ({
    isLoading: state.isLoading,
    isError: state.isError,
  }));
  const router = useRouter();
  const buttonDisable = () => {
    if (
      username.inputValue === "" ||
      userPassword.inputValue === "" ||
      userNickname.inputValue === ""
    ) {
      return true;
    }
    return false;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { status } = await apiClient.post("/auth/register", {
        username: username.inputValue,
        nickname: userNickname.inputValue,
        password: userPassword.inputValue,
      });
    } catch (e) {
      console.log("errror", e);
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
            placeholder="이메일을 입력하세요"
          />
        </div>

          <div className={authInputBox}>
            <AuthInput
              onChange={(e) => userNickname.handleInputChange(e, "nickname")}
              value={userNickname.inputValue}
              type="text"
              valueCheck={userNickname.isValid ? "correct" : "incorrect"}
              placeholder="닉네임을 입력하세요"
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
            회원가입
          </Button>
        </div>
      </form>
      <Button
        color="none"
        size="large"
        onClick={() =>
          router.push(`/auth/login`)
        }
      >
        로그인
      </Button>
    </>
  );
}
