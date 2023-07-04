import { ChangeEvent, InputHTMLAttributes } from "react";
import { authInputContainer } from "./Input.css";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange : (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  valueCheck: "correct" | "incorrect"
};

export default function AuthInput({ onChange, value, valueCheck,...props }: AuthInputProps) {

  return <input className={authInputContainer({
    check: valueCheck
  })} onChange={onChange} value={value} {...props} />;
}

