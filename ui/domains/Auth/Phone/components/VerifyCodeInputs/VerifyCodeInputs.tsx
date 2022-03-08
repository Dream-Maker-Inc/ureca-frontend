import { css } from "@emotion/react";
import { TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { useVerifyCodeInputs } from "./useVerifyCodeInputs";

export type VerificationCode = {
  [index: string]: string;
};

export type VerifyCodeInputsProps = {
  code: VerificationCode;
  setCode: (verificationCode: VerificationCode) => void;
  textFieldProps?: TextFieldProps;
};

const VerifyCodeInputs = ({
  code,
  setCode,
  textFieldProps,
}: VerifyCodeInputsProps) => {
  const {
    codeKeys,
    focusIndex,
    handleKeyDown,
    handleCodeChange,
    handleInputItemClick,
  } = useVerifyCodeInputs(code, setCode);

  return (
    <div css={styles.container}>
      {codeKeys.map((key, index) => (
        <CodeInput
          key={key}
          name={key}
          css={styles.codeInput}
          inputRef={(input) => (index === focusIndex ? input?.focus() : null)}
          value={code[key] ?? ""}
          onKeyDown={handleKeyDown}
          onChange={handleCodeChange}
          onClick={() => handleInputItemClick(index)}
          {...textFieldProps}
        />
      ))}
    </div>
  );
};

export default React.memo(VerifyCodeInputs);

const styles = {
  container: css`
    display: flex;
    gap: 8px;
  `,
  codeInput: css`
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
  `,
};

const CodeInput = (p: TextFieldProps) => (
  <TextField
    css={styles.codeInput}
    size={"small"}
    type="tel"
    variant="outlined"
    autoComplete="off"
    {...p}
  />
);
