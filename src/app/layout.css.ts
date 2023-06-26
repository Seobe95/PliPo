import { globalStyle, style } from "@vanilla-extract/css";

export const tempStyle = style({});


globalStyle("html, body", {
  margin: 0,
  boxSizing: "border-box",
  height: "100%",
});