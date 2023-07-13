import { pallete } from "@/style/color";
import { globalStyle, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  height: "100%",
});

globalStyle("body", {
  background: pallete.bg_1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

globalStyle("a", {
  textDecoration: "none",
  outline: "none",
  color: "black",
});

export const wrapContent = style({
  minHeight: calc.multiply("100% - 120px"),
});

export const authContainer = style({
  width: 360,
  background: pallete.bg_2,
  borderRadius: 20,
  border: `solid 1px ${pallete.borderLine}`,
  padding: "8px 16px",
});

export const layoutContainer = style({
  width: 598,
  height: "100%",
  background: pallete.bg_2,

  "@media": {
    "screen and (max-width: 598px)": {
      width: 425,
    },

    "screen and (max-width: 425px)": {
      width: "100%"
    }
  },
});