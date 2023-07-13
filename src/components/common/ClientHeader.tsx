"use client";

import { useEffect } from "react";
import useAuthManegement, { UserInfo } from "@/zustand/useAuthManegement";
import { getStorage } from "@/lib/storage";
import { STORAGE_KEY } from "@/constants/keys";
import Link from "next/link";
import { authContainer, loginButton, logoutButton, registButton } from "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pallete } from "@/style/color";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { usePathname, useRouter } from "next/navigation";

interface ClientHeaderProps {
  users: UserInfo
}

export default function ClientHeader({users}: ClientHeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { logout, setUser } = useAuthManegement((state) => ({
    logout: state.logout,
    setUser: state.setUser
  }));

  useEffect(() => {
    if(typeof window !== "undefined") {
      setUser(users)
    }
  }, [])

  return (
    <>
      {users ? (
        <div>
          {pathname === "/profile" ? (
            <button
              className={logoutButton}
              onClick={async () => {
                await logout();
                router.refresh();
              }}
            >
              로그아웃
            </button>
          ) : (
            <Link href={"/profile"}>
              <FontAwesomeIcon
                icon={faCircleUser}
                color={pallete.primary}
                style={{fontSize: 32}}
              />
            </Link>
          )}
        </div>
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
    </>
  );
}
