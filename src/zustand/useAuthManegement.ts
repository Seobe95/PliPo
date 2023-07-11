"use client";

import { apiClient } from "@/api/apiClient";
import { STORAGE_KEY } from "@/constants/keys";
import { removeStorage, setStorage } from "@/lib/storage";
import { AxiosError, isAxiosError } from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface LoginParams {
  username: string;
  password: string;
}

interface RegistParams extends LoginParams {
  nickname: string;
}

export type UserInfo = {
  _id: string;
  username: string;
  nickname: string;
  __v: number;
};

interface AuthManegementState {
  isLoading: boolean;
  isError: AxiosError | Error | null;
  user: { _id: string; username: string; nickname: string; __v: number } | null;
  login: ({ username, password }: LoginParams) => void;
  register: ({ username, password, nickname }: RegistParams) => void;
  logout: () => void;
  setUser: (value: UserInfo | null) => void;
}

type User = AuthManegementState["user"];

const useAuthManegement = create<AuthManegementState>()(
  devtools(
    (set) => ({
      isLoading: false,
      isError: null,
      user: null,
      login: async ({ username, password }) => {
        try {
          set((state) => ({ ...state, isLoading: true }));
          const { data } = await apiClient.post<User>("/auth/login", {
            username,
            password,
          });
          await setStorage({ key: STORAGE_KEY, value: { ...data } });
          set((state) => ({
            ...state,
            user: data ? { ...data } : null,
            isError: null,
            isLoading: false,
          }));
        } catch (e) {
          if (isAxiosError(e)) {
            const error = e;
            set((state) => ({ ...state, isError: error }));
          } else {
            const error = e as Error;
            set((state) => ({ ...state, isError: error }));
          }

          throw new Error("ASDfdsfsd ERRRRRRORRRRR");
        }
      },
      register: async ({ username, nickname, password }) => {},
      logout: async () => {
        set((state) => ({ ...state, isLoading: true }));
        try {
          await apiClient.post("auth/logout");
          await removeStorage(STORAGE_KEY);
        } catch (e) {
          if (isAxiosError(e)) {
            const error = e;
            set((state) => ({ ...state, isError: error }));
          } else {
            const error = e as Error;
            set((state) => ({ ...state, isError: error }));
          }
        }
        set((state) => ({ ...state, isLoading: false, user: null }));
      },
      setUser: (value) => {
        set(
          (state) => {
            // 현재 상태와 새로운 값이 완전히 같지 않을 때만 상태를 변경합니다.
            return { ...state, user: value ? { ...value } : null };
          },
          false,
          "SET_USER"
        );
      },
    }),
    { name: "AUTH" }
  )
);

export default useAuthManegement;
