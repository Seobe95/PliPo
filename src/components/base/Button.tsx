import { button } from "./Button.css";

interface ButtonProps {
  size: "large" | "medium" | "small" | "full";
  color: "primary" | "secondary" | "cancel" | "none";
  fontColor: string;
  children: React.ReactNode;
}

export default function Button({ color, size, children }: ButtonProps) {
  return <button className={button({
    color,
    size
  })}>{children}</button>;
}
