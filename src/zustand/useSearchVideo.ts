import { apiClient } from "@/api/apiClient";
import { AxiosError, isAxiosError } from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface SearchVideoState {
  isLoading: boolean;
  isError: AxiosError | Error | null;
  title: string | null;
  isValidYoutubeLink: boolean;
  youtubeLink: string | null;
  setYoutubeLink: (link: string | null) => void;
  search: (videoId: string) => void;
  clearTitle: () => void;
}

export const useSearchVideo = create<SearchVideoState>()(
  devtools(
    (set) => ({
      isLoading: false,
      isError: null,
      title: null,
      youtubeLink: null,
      isValidYoutubeLink: false,
      setYoutubeLink: (link) => {
        set((state) => ({ ...state, youtubeLink: link }), false, {
          type: "YOUTUBELINK/SET",
        });
      },
      search: async (videoId) => {
        set((state) => ({ ...state, isLoading: true }), false, "TITLE/LOADING");
        try {
          const { data } = await apiClient.post<{ title: string }>(
            "youtube/search_title",
            { videoId }
          );
          set(
            (state) => ({
              ...state,
              isValidYoutubeLink: true,
              isLoading: false,
              title: data.title,
            }),
            false,
            "TITLE/SET"
          );
        } catch (e) {
          if (isAxiosError(e)) {
            const error = e;
            set(
              (state) => ({
                ...state,
                isLoading: false,
                isError: error,
                youtubeLink: null,
              }),
              false,
              "TITLE/ERROR"
            );
          } else {
            const error = e as Error;
            set(
              (state) => ({
                ...state,
                isLoading: false,
                isError: error,
                youtubeLink: null,
              }),
              false,
              "TITLE/ERROR"
            );
          }
        }
      },
      clearTitle: () => {
        set(
          (state) => ({
            ...state,
            title: null,
            isValidYoutubeLink: false,
            youtubeLink: null,
          }),
          false,
          "TITLE/CLEAR"
        );
      },
    }),
    { name: "SEARCH/YOUTUBE" }
  )
);
