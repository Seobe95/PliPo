import { NextFont } from "next/dist/compiled/@next/font";
import { authContainer, headerContainer, titleContainer } from "./Header.css";
import Link from "next/link";

interface HeaderProps {
  titleFont: NextFont;
  children: React.ReactNode;
}

export default function Header({ titleFont, children }: HeaderProps) {
  return (
    <header>
      <nav className={headerContainer}>
        <Link href={"/"} style={titleFont.style} className={titleContainer}>
          플리포
        </Link>
        {children}
      </nav>
    </header>
  );
}
