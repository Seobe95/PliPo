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

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const loadingIndicatorClass = style({
  position: "absolute",
  transform: "translateY(-50%)",
  right: 10,
  border: '2px solid #f3f3f3',
  borderRadius: '50%',
  borderTop: '2px solid #3498db',
  width: '16px',
  height: '16px',
  animation: `${spin} 1s linear infinite`,
})

