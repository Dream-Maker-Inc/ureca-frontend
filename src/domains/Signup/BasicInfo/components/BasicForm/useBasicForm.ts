import { SignupPolicy } from "@/common/policies";
import { SignupFormAtom } from "@/recoil/Signup";
import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export const useBasicForm = () => {
  const [signupForm, setSignupForm] = useRecoilState(SignupFormAtom);
  const { loginId, pw, pwConfirm, username, email, phone, validation } =
    signupForm;

  // 로그인 아이디 영역
  const [notValidLoginId, setNotValidLoginId] = useState(false);

  const handleLoginIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignupForm((old) => ({ ...old, loginId: e.target.value }));
    setNotValidLoginId(false);
  };

  // 비밀번호 영역
  const handlePwChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignupForm((old) => ({ ...old, pw: e.target.value }));
  };
  const isValidPw = SignupPolicy.validatePassword(pw);

  const handlePwConfirmChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSignupForm((old) => ({ ...old, pwConfirm: e.target.value }));

  const isComparablePassword = !!pw && !!pwConfirm;
  const isMatchedPw = isComparablePassword && pw === pwConfirm;

  // 유저 이름 영역
  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSignupForm((old) => ({ ...old, username: e.target.value }));

  // 휴대폰 번호 검증 영역
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSignupForm((old) => ({ ...old, phone: e.target.value }));

  const handleVerifiedPhoneChange = (isVerifiedPhone: boolean) =>
    setSignupForm((old) => ({
      ...old,
      validation: { ...old.validation, isVerifiedPhone },
    }));

  // 이메일 영역
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSignupForm((old) => ({ ...old, email: e.target.value }));

  const isValidEmail = SignupPolicy.validateEmail(email);

  // side effect
  useEffect(() => {
    setSignupForm((old) => ({
      ...old,
      validation: {
        ...old.validation,
        isValidPw,
        isMatchedPw,
        isValidEmail,
      },
    }));
  }, [isValidPw, isMatchedPw, isValidEmail, setSignupForm]);

  return {
    loginState: {
      value: loginId,
      onChange: handleLoginIdChange,
      helper: {
        error: notValidLoginId,
        text: "사용 할 수 없는 아이디 입니다.",
      },
    },
    pwState: {
      value: pw,
      onChange: handlePwChange,
      helper: {
        visible: !!pw && !isValidPw,
        errorColor: !isValidPw ? "error" : "primary",
        text: !isValidPw && "사용 할 수 없는 비밀번호 입니다.",
      },
    },
    pwConfirmState: {
      value: pwConfirm,
      onChange: handlePwConfirmChange,
      helper: {
        visible: isComparablePassword,
        errorColor: !isMatchedPw ? "error" : "primary",
        text: isMatchedPw
          ? "비밀번호가 일치해요."
          : "비밀번호가 일치하지 않아요.",
      },
    },
    usernameState: {
      value: username,
      onChange: handleUsernameChange,
    },
    phoneState: {
      value: phone,
      onChange: handlePhoneChange,
    },
    verifiedPhoneState: {
      value: validation.isVerifiedPhone,
      onChange: handleVerifiedPhoneChange,
    },
    emailState: {
      value: email,
      onChange: handleEmailChange,
      helper: {
        visible: !!email && !isValidEmail,
        errorColor: !isValidEmail ? "error" : "primary",
        text: "이메일 형식이 다릅니다.",
      },
    },
  };
};
