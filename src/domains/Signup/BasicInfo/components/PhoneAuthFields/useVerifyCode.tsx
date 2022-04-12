import { AuthPhonePolicy } from "@/common/policies";
import { ChangeEvent, useMemo, useState } from "react";

const TestVerifyCode = "9999";

export const useVerifyCode = () => {
  const [verifyCode, setVerifyCode] = useState("");
  const handleVerifyCodeChange = (e: ChangeEvent<HTMLInputElement>) =>
    setVerifyCode(e.target.value);

  // 인증번호 발송 여부
  const [isSendedVerifyCode, setIsSendedVerifyCode] = useState(false);
  const invalideSendedVerifyState = () => setIsSendedVerifyCode(false);

  // 인증 제한시간
  const [verifyTime, setVerifyTime] = useState(0);
  const handleVerifyTimeChange = useMemo(
    () => (time: number) => setVerifyTime(time),
    [setVerifyTime]
  );
  const verifyTimeOver = verifyTime <= 0;

  // 인증번호 발송
  const sendVerifyCode = () => {
    setIsSendedVerifyCode(true);
    setVerifyTime(AuthPhonePolicy.maxTime);
  };

  // 인증이 완료 됬는지
  const [isVerifiedCode, setIsVerifiedCode] = useState(false);

  // 인증번호 검증
  const confirmVerifyCode = () => {
    setIsVerifiedCode(verifyCode === TestVerifyCode);
  };

  const getVerifyHelperText = () => {
    if (verifyTimeOver) return "인증 시간이 만료 되었습니다.";

    return !isVerifiedCode
      ? "인증 번호를 확인해 주세요."
      : "인증이 완료되었어요.";
  };

  return {
    verifyCode,
    handleVerifyCodeChange,

    isSendedVerifyCode,
    invalideSendedVerifyState,

    isVerifiedCode,

    sendVerifyCode,
    confirmVerifyCode,

    verifyTime,
    handleVerifyTimeChange,
    verifyTimeOver,

    verifyHelperText: getVerifyHelperText(),
  };
};
