import { pallete } from "@/style/color";
import { globalStyle, style } from "@vanilla-extract/css";

export const authBoxClass = style({
  textAlign: "center",
  border: `1px solid ${pallete.borderLine}`,
  padding: "16px",
  paddingBottom: 24,
  borderRadius: 8,
  height: "auto",
  marginTop: 16
})

globalStyle(`${authBoxClass} > a`, {
  padding: "8px 16px",
  borderRadius: 8,
  border: "none",
  fontSize: 14,
  "@media": {
    "screen and (max-width: 425px)": {
      padding: "5px 10px",
      fontSize: 12
    }
  },
})

globalStyle(`${authBoxClass} > p`, {
  margin: "0px 0px 16px"
})