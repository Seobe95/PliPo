"use client"
import { pallete } from "@/style/color";
import { globalStyle, style } from "@vanilla-extract/css";

export const headerContainer = style({
  width: 768,
  height: 60,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
});

export const titleContainer = style({
  fontSize: 32,
  color: pallete.primary,
  textUnderlineOffset: "none",
  fontWeight: 900,
});

export const authContainer = style({})

export const authClientHeader = style({
  display: "flex",
  flexDirection: "row"
})

globalStyle(`${authContainer} > a`, {
  padding: "8px 16px",
  borderRadius: 8,
  border: "none",
  fontSize: 14,
})

export const loginButton = style({
  background: "#6F42C1",
  color: "#ffffff",
  ":hover" : {
    background: "#5B30A1"
  },
  marginRight: 8,
});

export const registButton = style({
  background: "none",
  color: "#6F42C1",
  ":hover" : {
    color: "#333333"
  }
});

export const logoutButton = style({
  background: "#6F42C1",
  color: "#ffffff",
  ":hover" : {
    background: "#5B30A1",
    cursor: "pointer"
  },
  padding: "8px 16px",
  borderRadius: 8,
  border: "none",
  fontSize: 14,
})
