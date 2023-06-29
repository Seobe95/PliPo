import { recipe } from "@vanilla-extract/recipes";

export const button = recipe({
  base: {
    borderRadius: 8,
    border: "none",
    ":hover" : {
      
    }
  },

  variants: {
    color: {
      primary: {
        background: "#6F42C1",
        color : "#ffffff"
      },
      secondary: {},
      cancel: {},
      none: {
        background: "none",
        color: "#333333"
      },
    },
    size: {
      large: {
        padding: "8px 16px"
      },
      medium: {},
      small: {},
      full: {},
    },
  },
});
