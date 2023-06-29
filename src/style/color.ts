enum PalleteEnum {
  "primary",
  "secondary",
  "bg_1",
  "bg_2",
  "cancel",
  "borderLine",
  "fontColor",
}

type Pallete = keyof typeof PalleteEnum;

export const pallete: Record<Pallete, string> = {
  primary: "#6F42C1",
  secondary: "",
  bg_1: "#F7F7FF",
  bg_2: "#ffffff",
  cancel: "",
  borderLine: "#E6E6FA",
  fontColor: "#333333",
};
