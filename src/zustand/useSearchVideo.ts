import { apiClient } from "@/api/apiClient";
import { AxiosError, isAxiosError } from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface SearchVideoState {
  isLoading: boolean;
  isError: AxiosError | Error | null;
  title: string | null;
  search: (videoId: string) => void;
  clearTitle: () => void;
}

export const useSearchVideo = create<SearchVideoState>()(
  devtools(
    (set) => ({
      isLoading: false,
      isError: null,
      title: null,
      search: async (videoId) => {
        set((state) => ({ ...state, isLoading: true }));
        try {
          const { data } = await apiClient.post<{ title: string }>(
            "youtube/search_title",
            { videoId }
          );
          set((state) => ({ ...state, isLoading: false, title: data.title }));
        } catch (e) {
          if (isAxiosError(e)) {
            const error = e;
            set((state) => ({ ...state, isLoading: false, isError: error }));
          } else {
            const error = e as Error;
            set((state) => ({ ...state, isLoading: false, isError: error }));
          }
        }
      },
      clearTitle: () => {
        set((state) => ({ ...state, title: null }));
      },
    }),
    { name: "SEARCH/YOUTUBE" }
  )
);
