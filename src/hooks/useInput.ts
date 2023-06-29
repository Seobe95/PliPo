import { ChangeEvent, useState } from "react";

export default function useAuthInput() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return {
    inputValue,
    handleInputChange,
  };
}
