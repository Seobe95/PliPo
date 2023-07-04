"use client";
import AuthInput from "../base/AuthInput";
import { authInputBox, authInputContainer, authTitle } from "./Auth.css";
import Button from "../base/Button";
import localFont from "next/font/local";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useAuthInput from "@/hooks/useAuthInput";
interface AuthProps {
  type: "login" | "regist";
}

const titleFont = localFont({
  src: "../../app/KyoboHandwriting2022khn.woff2",
  display: "swap",
});

export default function Auth({ type }: AuthProps) {
  const userId = useAuthInput();
  const userPassword = useAuthInput();
  const userNickname = useAuthInput();
  const router = useRouter();

  const buttonDisable = (authType: "login" | "regist") => {
    if (
      authType === "login" &&
      (userId.inputValue === "" || userPassword.inputValue === "")
    ) {
      return true;
    } else if (
      authType === "regist" &&
      (userId.inputValue === "" ||
        userPassword.inputValue === "" ||
        userNickname.inputValue === "")
    ) {
      return true;
    }
    return false;
  };

  const onSubmit = async () => {
    
  };

  return (
    <>
      <h1 className={authTitle} style={titleFont.style}>
        <Link href={"/"}>플리포</Link>
      </h1>
      <form className={authInputContainer} onSubmit={onSubmit}>
        <div className={authInputBox}>
          <AuthInput
            onChange={(e) => userId.handleInputChange(e, "id")}
            value={userId.inputValue}
            valueCheck={userId.isValid ? "correct" : "incorrect"}
            type="text"
            placeholder="이메일을 입력하세요"
          />
        </div>
        {type === "regist" ? (
          <div className={authInputBox}>
            <AuthInput
              onChange={(e) => userNickname.handleInputChange(e, "nickname")}
              value={userNickname.inputValue}
              type="text"
              valueCheck={userNickname.isValid ? "correct" : "incorrect"}
              placeholder="닉네임을 입력하세요"
            />
          </div>
        ) : null}
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
            disabled={buttonDisable(type)}
            onClick={onSubmit}
            type="submit"
          >
            {type === "login" ? "로그인" : "회원가입"}
          </Button>
        </div>
      </form>
      <Button
        color="none"
        size="large"
        onClick={() =>
          router.push(`/auth/${type === "login" ? "regist" : "login"}`)
        }
      >
        {type === "login" ? "회원가입" : "로그인"}
      </Button>
    </>
  );
}