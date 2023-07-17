import { pallete } from "@/style/color";
import { keyframes, style } from "@vanilla-extract/css";

export const youtubeInputContainerClass = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width : "50%"
})

export const youtubeInputClass = style({
  height: 32,
  width: "100%",
  outline: "none",
  border: `1px solid ${pallete.borderLine}`,
  borderRadius: 8,
  padding: "0px 32px 0px 8px"
})



