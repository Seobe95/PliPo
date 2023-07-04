import { ChangeEvent, useState } from "react";

export type AuthInputType = "id" | "nickname" | "password";

export default function useAuthInput() {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validateUserId = (value: string) => {
    const regex = /^(?!(?:[0-9]+)$)([a-zA-Z]|[0-9a-zA-Z]){4,15}$/;
    setIsValid(regex.test(value));
  };

  const validateUserPassword = (value: string) => {
    const regex = /^(?=.*[a-z])(?=.*\d)[a-z\d!@#$%^&*()]+$/i;
    setIsValid(regex.test(value));
  };

  const validateUserNickname = (value: string) => {
    setIsValid(value.length > 1);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: AuthInputType
  ) => {
    const { value } = e.target;

    switch (type) {
      case "password":
        validateUserPassword(value);
        break;
      case "nickname":
        validateUserNickname(value);
        break;
      default:
        validateUserId(value);
        break;
    }
    setInputValue(value);
  };

  return {
    inputValue,
    handleInputChange,
    isValid,
  };
}
