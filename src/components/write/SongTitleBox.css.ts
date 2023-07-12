import { pallete } from "@/style/color";
import { style } from "@vanilla-extract/css";

export const boxContainerClass = style({
  display: "flex",
  width : "50%",
  border: `1px solid ${pallete.primary}`,
  borderRadius: 8,
  padding: "0px 8px 0px 8px",
  alignItems:"center"
})

export const titleBox = style({
  display: "flex",
  flexDirection: "row",
  width :'100%',
  alignItems : "center",
  justifyContent: "space-evenly"
})

export const ellipsisStyle = style({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: '90%',
  margin: 0 // 너비를 직접 설정하거나, 필요에 따라 다른 방식으로 제한해야 합니다.
});

export const cancelIconClass = style({
  ":hover" : {
    cursor: "pointer",
    color: "#666666"
  }
})