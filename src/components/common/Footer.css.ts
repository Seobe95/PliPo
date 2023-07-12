import { style } from "@vanilla-extract/css";

export const footerContainer = style({
  width: 598,
  height: 60,
  display: "flex",
  alignItems: 'center',
  justifyItems: "center",
  padding: "10px 20px",
  "@media": {
    "screen and (max-width: 598px)": {
      width: 425,
      padding: "5px 10px"
    },
    "screen and (max-width: 425px)": {
      width: "100%"
    }
  },
})