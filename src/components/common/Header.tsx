import { NextFont } from "next/dist/compiled/@next/font";
import {
  authContainer,
  headerContainer,
  loginButton,
  registButton,
  titleContainer,
} from "./Header.css";
import Link from "next/link";

interface HeaderProps {
  titleFont: NextFont;
  isLogin: boolean;
}

export default function Header({ titleFont, isLogin }: HeaderProps) {
  return (
    <header>
      <nav className={headerContainer}>
        <Link href={"/"} style={titleFont.style} className={titleContainer}>
          플리포
        </Link>
        {isLogin ? (
          <Link href={"/setting"}>마이페이지</Link>
        ) : (
          <div className={authContainer}>
            <Link href={"/auth/login"} className={loginButton}>
              로그인
            </Link>
            <Link href={"/auth/regist"} className={registButton}>
              가입하기
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
