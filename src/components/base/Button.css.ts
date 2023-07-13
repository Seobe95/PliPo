import { recipe } from "@vanilla-extract/recipes";

export const button = recipe({
  base: {
    borderRadius: 8,
    border: "none",
    width: "100%",
    boxSizing: "border-box",
    fontWeight: 500,
  },

  variants: {
    color: {
      primary: {
        background: "#6F42C1",
        color: "#ffffff",
        ":hover": {
          cursor: "pointer",
          background: "#5B30A1",
        },
      },
      secondary: {},
      disable: {
        background: "#D3D3D3",
        color: "#ffffff",
        ":hover": {
          cursor: "default",
        },
      },
      cancel: {},
      none: {
        background: "none",
        color: "#6F42C1",
        ":hover": {
          cursor: "pointer",
        },
      },
    },
    size: {
      large: {
        padding: "8px 16px",
      },
      medium: {},
      small: {
        padding: "8px 16px",
        width: "auto"
      },
      full: {},
    },
  },
});
