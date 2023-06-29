"use client";
import Input from "../base/Input";
import useAuthInput from "@/hooks/useInput";
import { authInputContainer } from "./Auth.css";

interface AuthProps {
  type: "login" | "regist";
}

export default function Auth({ type }: AuthProps) {
  const userId = useAuthInput();
  const userPassword = useAuthInput();
  return (
    <div>
      <h1>{type === "login" ? "로그인" : "회원가입"}</h1>
      <div className={authInputContainer}>
        <Input
          onChange={(e) => userId.handleInputChange(e)}
          value={userId.inputValue}
          type="email"
        />
        <Input
          onChange={(e) => userPassword.handleInputChange(e)}
          value={userPassword.inputValue}
          type="password"
        />
      </div>
    </div>
  );
}
