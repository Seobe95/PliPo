"use client";

import { useEffect } from "react";
import useAuthManegement, { UserInfo } from "@/zustand/useAuthManegement";
import { getStorage } from "@/lib/storage";
import { STORAGE_KEY } from "@/constants/keys";
import Link from "next/link";
import { loginButton, logoutButton, registButton } from "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pallete } from "@/style/color";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { usePathname, useRouter } from "next/navigation";

export default function ClientHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { setUser, user, logout } = useAuthManegement((state) => ({
    setUser: state.setUser,
    user: state.user,
    logout: state.logout,
  }));

  useEffect(() => {
    const token = getStorage<{ data: UserInfo }>(STORAGE_KEY);
    if (token?.data) {
      setUser(token.data);
    }
  }, []);

  return (
    <>
      {user ? (
        <Link href={"/profile"}>
          {pathname === "/profile" ? (
            <button className={logoutButton} onClick={async () => {
              await logout();
              router.refresh();
            }}>로그아웃</button>
          ) : (
            <FontAwesomeIcon
              icon={faCircleUser}
              color={pallete.primary}
              width={32}
              height={32}
            />
          )}
        </Link>
      ) : (
        <>
          <Link href={"/auth/login"} className={loginButton}>
            로그인
          </Link>
          <Link href={"/auth/regist"} className={registButton}>
            가입하기
          </Link>
        </>
      )}
    </>
  );
}
