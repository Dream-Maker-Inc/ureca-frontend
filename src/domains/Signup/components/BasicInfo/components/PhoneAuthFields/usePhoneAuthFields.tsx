import { SignupPolicy } from "@/common/policies";
import { SignupFormAtom } from "@/recoil/Signup";
import { ChangeEvent, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useVerifyCode } from "./useVerifyCode";

export const usePhoneAuthFields = () => {
  const [basicForm, setBasicForm] = useRecoilState(SignupFormAtom);
  const { phone } = basicForm;

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
    setBasicForm((old) => ({ ...old, phone: e.target.value }));
    invalideSendedVerifyState();
  };
  const isValidPhone = SignupPolicy.validatePhoneNumber(phone);

  const visiblePhoneHelperText =
    !!phone && (!isValidPhone || isSendedVerifyCode);

  useEffect(() => {
    setBasicForm((old) => ({
      ...old,
      validation: { ...old.validation, isVerifiedPhone: isVerifiedCode },
    }));
  }, [isVerifiedCode, setBasicForm]);

  return {
    phoneState: {
      value: phone,
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
