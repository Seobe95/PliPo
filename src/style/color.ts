enum PalleteEnum {
  "primary",
  "secondary",
  "bg_1",
  "bg_2",
  "cancel",
  "borderLine",
  "fontColor",
  "warning"
}

type Pallete = keyof typeof PalleteEnum;

export const pallete: Record<Pallete, string> = {
  primary: "#6F42C1",
  secondary: "",
  warning: "#DC143C",
  bg_1: "#F7F7FF",
  bg_2: "#ffffff",
  cancel: "",
  borderLine: "#C5C5F0",
  fontColor: "#333333",
};
