import { ExternalPath } from "@/ui/constants/Path";
import { AuthPhonePolicy } from "@/ui/domains/Policy";
import { useState } from "react";
import { VerificationCode } from "../VerifyCodeInputs";

const RealVerificationCode = 1111;

export const initialVerificationCode: VerificationCode = {
  first: "",
  second: "",
  third: "",
  fourth: "",
};

export const verificationCodeMaxLength = Object.keys(
  initialVerificationCode
).length;

export const useVerifyPhoneCode = (onSubmit: () => void) => {
  const [time, setTime] = useState(AuthPhonePolicy.maxTime);
  const [verificationCodes, setVerificationCodes] = useState<VerificationCode>(
    initialVerificationCode
  );
  const code = parseInt(Object.values(verificationCodes).join(""));

  const isTimeOver = time <= 0;
  const isMaxLengthCode = code.toString().length === verificationCodeMaxLength;

  const isValidCode = !isTimeOver && code === RealVerificationCode;
  const isError = isTimeOver || (isMaxLengthCode && !isValidCode);

  const verificationCodesError = isTimeOver
    ? "인증 시간이 만료되었어요."
    : isError
    ? "인증에 실패했어요."
    : "";

  const handleRetry = () => setTime(AuthPhonePolicy.maxTime);
  const handleHelp = () => window.open(ExternalPath.PhoneAuthHelp);

  if (isValidCode) onSubmit();

  return {
    timerState: {
      value: time,
      setValue: setTime,
      timeOver: isTimeOver,
    },
    verifyState: {
      value: verificationCodes,
      setValue: setVerificationCodes,
      error: {
        isError: isError,
        text: verificationCodesError,
      },
    },
    onRetry: handleRetry,
    onHelp: handleHelp,
  };
};
