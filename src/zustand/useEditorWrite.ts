import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface EditState {
  contents: string;
  youtubeLink: string;
  setText: (value: string) => void;
  setYoutubeLink: (value: string) => void;
}

export const useEditorWrite = create<EditState>()(
  devtools(
    (set) => ({
      contents: "",
      youtubeLink: "",
      setText: (value) => {
        set(
          (state) => ({ ...state, contents: value }),
          false,
          "setText/EDITOR"
        );
      },
      setYoutubeLink: (value) => {
        set((state) => ({ ...state, youtubeLink: value }));
      },
    }),
    { name: "WRITE" }
  )
);
