import { useState } from "react";

export const usePasswordTextField = (value: string) => {
  const [isVisible, setVisible] = useState(false);
  const toggleVisiblity = () => setVisible((old) => !old);

  const isNotValidValue = !value;
  const inputType = isVisible ? "text" : "password";
  const tooltip = isVisible ? "비밀번호 숨기기" : "비밀번호 보이기";

  return {
    isVisible,
    toggleVisiblity,
    isNotValidValue,
    inputType,
    tooltip,
  };
};
