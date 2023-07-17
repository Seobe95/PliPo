import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface EditState {
  contents: string;
  setText: (value: string) => void;
}

export const useEditorWrite = create<EditState>()(
  devtools(
    (set) => ({
      contents: "",
      setText: (value) => {
        set(
          (state) => ({ ...state, contents: value }),
          false,
          "setText/EDITOR"
        );
      },
    }),
    { name: "WRITE" }
  )
);
