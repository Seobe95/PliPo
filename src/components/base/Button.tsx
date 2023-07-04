import { ButtonHTMLAttributes } from "react";
import { button } from "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: "large" | "medium" | "small" | "full";
  color: "primary" | "secondary" | "cancel" | "none";
  children: React.ReactNode;
}

export default function Button({ color, size, children, ...props }: ButtonProps) {
  const {disabled} = props;
  const disableColor = disabled ? "disable" : color
  return <button className={button({
    color : disableColor,
    size
  })} {...props}>{children}</button>;
}
