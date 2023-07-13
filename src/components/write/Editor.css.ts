import { pallete } from "@/style/color";
import { globalStyle, style } from "@vanilla-extract/css";

export const editorClass = style({
  border: `1px solid ${pallete.borderLine}`,
  padding: "16px 16px",
  borderRadius: 8,
  height: "auto",
  marginTop: 16
});

globalStyle(`${editorClass} .ProseMirror`, {
  color: "black",
  height: "auto",
  outline: "none",
});

globalStyle(`${editorClass} .ProseMirror p`, {
  margin: "8px 0px"
});

globalStyle(`${editorClass} .is-empty:first-child::before`, {
  color: "#adb6bd",
  content: "attr(data-placeholder)",
  pointerEvents: "none",
});

export const subContainer = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 24
})