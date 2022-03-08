import { TextFieldProps } from "@mui/material";

export type VerificationCode = {
  [index: string]: string;
};

export type VerifyCodeInputsProps = {
  code: VerificationCode;
  setCode: (verificationCode: VerificationCode) => void;
  textFieldProps?: TextFieldProps;
};
