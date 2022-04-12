import { SignupPolicy } from "@/common/policies";
import { ChangeEvent, useEffect } from "react";
import { PhoneAuthFieldsProps } from "./PhoneAuthFields";
import { useVerifyCode } from "./useVerifyCode";

export const usePhoneAuthFields = ({
  phoneState,
  verifiedPhoneState,
}: PhoneAuthFieldsProps) => {
  const { value: phone, onChange: onPhoneChange } = phoneState;

  // 휴대폰 번호 검증 영역
  const {
    verifyCode,
    handleVerifyCodeChange,
    isSendedVerifyCode,
    invalideSendedVerifyState,
    sendVerifyCode,
    isVerifiedCode,
    confirmVerifyCode,
    verifyTime,
    handleVerifyTimeChange,
    verifyTimeOver,
    verifyHelperText,
  } = useVerifyCode();

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    onPhoneChange(e.target.value);
    invalideSendedVerifyState();
  };
  const isValidPhone = SignupPolicy.validatePhoneNumber(phone);

  const visiblePhoneHelperText =
    !!phone && (!isValidPhone || isSendedVerifyCode);

  useEffect(() => {
    verifiedPhoneState.onChange(isVerifiedCode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVerifiedCode]);

  return {
    phoneState: {
      value: phoneState.value,
      onChange: handlePhoneChange,
      helper: {
        visible: visiblePhoneHelperText,
        error: !!phone && !isValidPhone,
        text: !isValidPhone
          ? "휴대폰 번호 형식에 맞지 않아요."
          : isSendedVerifyCode && "인증 번호가 발송되었어요.",
      },
      disabled: isVerifiedCode,
      verify: {
        disabled: !isValidPhone || isVerifiedCode,
        sendVerifyCode,
      },
    },
    verifyCodeState: {
      value: verifyCode,
      onChange: handleVerifyCodeChange,
      helper: {
        error: !isVerifiedCode || verifyTimeOver,
        text: verifyHelperText,
      },
      timer: {
        value: verifyTime,
        onChange: handleVerifyTimeChange,
        timeOver: verifyTimeOver,
      },
      confirm: {
        disabled: isVerifiedCode,
        confirmVerifyCode,
      },
      visible: isSendedVerifyCode,
      disabled: isVerifiedCode,
      label: verifyTimeOver ? "다시받기" : "확인",
      send: sendVerifyCode,
    },
  };
};
