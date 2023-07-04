import { pallete } from "@/style/color";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const inputContainer = style({});

export const authInputContainer = recipe({
  base: {
    border: "0.5px solid #3e3e3e",
    height: 38,
    borderRadius: 5,
    fontSize: 14,
    padding: "2px 8px",
    width: "100%",
  },
  variants: {
    check: {
      default: {
        ":focus": {
          outline: `1px solid ${pallete.primary}`,
        },
      },
      correct: {
        ":focus": {
          outline: `1px solid ${pallete.primary}`,
        },
      },
      incorrect: {
        ":focus": {
          outline: `1px solid ${pallete.warning}`,
        },
      },
    },
  },
});
