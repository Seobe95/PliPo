import { ChangeEvent, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange : (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export default function Input({ onChange, value, ...props }: InputProps) {
  return <input onChange={onChange} value={value} {...props} />;
}
