import { Stack, TextField, TextFieldProps } from "@mui/material";
import styled from "@emotion/styled";
import React, { ChangeEvent, useState } from "react";

// TODO Refactoring

export type VerificationCode = {
  [index: string]: string;
};

export const initialVerificationCode: VerificationCode = {
  first: "",
  second: "",
  third: "",
  fourth: "",
};

export const verificationCodeMaxLength = Object.keys(
  initialVerificationCode
).length;

//

export type VerificationCodeInputGroupProps = {
  verificationCode: VerificationCode;
  setVerificationCode: (verificationCode: VerificationCode) => void;
  textFieldProps?: TextFieldProps;
};

const VerificationCodeInputGroup = ({
  verificationCode,
  setVerificationCode,
  textFieldProps,
}: VerificationCodeInputGroupProps) => {
  const codeKeys = Object.keys(verificationCode);

  const [focusIndex, setFocusIndex] = useState(0);
  const isFocusIndexMaxLength = focusIndex < codeKeys.length - 1;
  const isFocusIndexMinLength = focusIndex > 0;

  const updateVerificationCode = (name: string, value: string) => {
    const code = value.slice(value.length - 1, value.length);
    const newState = { ...verificationCode, [name]: code };
    setVerificationCode(newState);
  };

  const handleVerificationCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const isValueNotNull = !!value;

    updateVerificationCode(name, value);

    if (isValueNotNull && isFocusIndexMaxLength) {
      setFocusIndex(focusIndex + 1);
      return;
    }

    if (!isValueNotNull && isFocusIndexMinLength) {
      setFocusIndex(focusIndex - 1);
      return;
    }
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
  const handleClickInputItem = (targetIndex: number) => {
    setFocusIndex(targetIndex);
  };

  //

  return (
    <>
      <Stack direction={"row"} spacing={1}>
        {codeKeys.map((key, index) => (
          <StyledTextField
            key={key}
            inputRef={(input) => (index === focusIndex ? input?.focus() : null)}
            name={key}
            size={"small"}
            type="tel"
            variant="outlined"
            autoComplete="off"
            value={verificationCode[key] ?? ""}
            onKeyDown={handleKeyDown}
            onChange={handleVerificationCodeChange}
            onClick={() => handleClickInputItem(index)}
            {...textFieldProps}
          />
        ))}
      </Stack>
    </>
  );
};

export default React.memo(VerificationCodeInputGroup);

//

const StyledTextField = styled(TextField)`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  & .MuiInputBase-input {
    width: 3rem;
    height: 3rem;

    text-align: center;

    line-height: 18px;
    letter-spacing: -0.92px;
    font-size: 24px;
    padding: 0;
  }
`;
