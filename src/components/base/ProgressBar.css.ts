import { keyframes, style } from "@vanilla-extract/css";

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const loadingContainerClass = style({
  display:"flex",
  justifyContent: "center",
  alignContent : "center",
})

export const loadingIndicatorClass = style({
  position: "absolute",
  transform: "translateY(-50%)",
  border: '2px solid #f3f3f3',
  borderRadius: '50%',
  borderTop: '2px solid #3498db',
  width: '32px',
  height: '32px',
  animation: `${spin} 1s linear infinite`,
})