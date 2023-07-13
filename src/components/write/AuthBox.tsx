import Link from "next/link";
import { authBoxClass } from "./AuthBox.css";
import { loginButton, registButton } from "../common/Header.css";

interface AuthBoxProps {};

export default function AuthBox () {
  return (
    <div className={authBoxClass}>
      <p>로그인 후 플리포를 사용해보세요!</p>
      <Link href={'/auth/login'} className={loginButton}>로그인</Link>
    </div>
  );
};
