import { apiClient } from "@/api/apiClient";
import { url } from "@/constants/url";
import { PostDataParams, PostWriteResponse } from "@/types/types";
import { AxiosError, isAxiosError } from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface WritePorsState {
  isLoading: boolean;
  isError: Error | AxiosError | null;
  progress: number;
  setProgress: (progress: number) => void;
  postApiHandler: ({ contents, youtubeLink }: PostDataParams) => void;
}

export const useWritePost = create<WritePorsState>()(
  devtools(
    (set) => ({
      isLoading: false,
      isError: null,
      progress: 0,
      setProgress: (progress: number) =>
        set((state) => ({ ...state, progress })),
      postApiHandler: async ({ contents, youtubeLink }) => {
        set(
          (state) => ({ ...state, isLoading: true }),
          undefined,
          "LOADING/WRITE"
        );
        try {
          await apiClient.post<PostWriteResponse>(
            `${url}api/posts`,
            {
              contents,
              youtubeLink,
            },
            {
              onUploadProgress: (progressEvent) => {
                let percentCompleted = progressEvent.total
                  ? Math.round(
                      (progressEvent.loaded * 100) / progressEvent.total
                    )
                  : 0;
                set((state) => ({ ...state, progress: percentCompleted }), undefined, "PROGRESS/WRITE");
              },
            }
          );
          set(
            (state) => ({ ...state, isLoading: false, isError: null }),
            undefined,
            "SUCCESS/WRITE"
          );
        } catch (e) {
          if (isAxiosError(e)) {
            const error = e;
            set(
              (state) => ({ ...state, isLoading: false, isError: error }),
              undefined,
              "ERROR/WRITE"
            );
          } else {
            set(
              (state) => ({ ...state, isLoading: false, isError: e as Error }),
              undefined,
              "ERROR/WRITE"
            );
          }
        }
      },
    }),
    { name: "API - WRITE/POSTS" }
  )
);
