import { ChangeEvent, useState } from "react";
import { VerificationCode } from "./VerifyCodeInputs.model";

export const useVerifyCodeInputs = (
  code: VerificationCode,
  setCode: (verificationCode: VerificationCode) => void
) => {
  const codeKeys = Object.keys(code);

  const [focusIndex, setFocusIndex] = useState(0);
  const isFocusIndexMax = focusIndex < codeKeys.length - 1;
  const isFocusIndexMin = focusIndex > 0;

  const updateCode = (name: string, value: string) => {
    const newCode = value.slice(value.length - 1, value.length);
    const newState = { ...code, [name]: newCode };
    setCode(newState);
  };

  const handleCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const isValueNotNull = !!value;

    updateCode(name, value);

    if (isValueNotNull && isFocusIndexMax) return setFocusIndex(focusIndex + 1);

    if (!isValueNotNull && isFocusIndexMin)
      return setFocusIndex(focusIndex - 1);
  };

  // 백 스페이스 처리
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const isValueNull = !(e.nativeEvent.target as HTMLInputElement).value;
    const isKeyBackspace = e.key === "Backspace";

    if (isValueNull && isKeyBackspace) {
      e.preventDefault(); // 이벤트 버블링 막기
      setFocusIndex(focusIndex - 1);
    }
  };

  // 사용자가 직접 인증넘버 박스를 터치 시 포커스 처리
  const handleInputItemClick = (targetIndex: number) =>
    setFocusIndex(targetIndex);

  return {
    codeKeys,
    focusIndex,
    handleKeyDown,
    handleCodeChange,
    handleInputItemClick,
  };
};
