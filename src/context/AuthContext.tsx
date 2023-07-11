"use client";

import { STORAGE_KEY } from "@/constants/keys";
import { getStorage } from "@/lib/storage";
import useAuthManegement, { UserInfo } from "@/zustand/useAuthManegement";
import { createContext, useEffect, useState } from "react";

interface AuthContextParams {
  isLogin: boolean;
  user: { _id: string; username: string; nickname: string } | null;
}

interface AuthContextProviderProps {
  children: React.ReactNode;
  isLogin: boolean;
  userInfo: { _id: string; username: string; nickname: string } | null;
}

export const AuthContext = createContext<AuthContextParams | null>(null);

export const AuthContextProvider = ({
  children,
  isLogin,
  userInfo,
}: AuthContextProviderProps) => {
  return (
    <AuthContext.Provider value={{ isLogin, user: userInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
