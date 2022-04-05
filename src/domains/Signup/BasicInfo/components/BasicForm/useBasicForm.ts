import { SignupPolicy } from "@/common/policies";
import { SignupFormAtom } from "@/recoil/Signup";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export const useBasicForm = () => {
  const [signupForm, setSignupForm] = useRecoilState(SignupFormAtom);
  const { loginId, pw, pwConfirm, username, email, phone, validation } =
    signupForm;

  // 로그인 아이디 영역
  const handleLoginIdChange = (value: string) => {
    setSignupForm((old) => ({ ...old, loginId: value }));
  };

  const loginIdHelper = {
    color: getHelperTextColor(false),
    text: "",
  };

  // 비밀번호 영역
  const handlePwChange = (value: string) => {
    setSignupForm((old) => ({ ...old, pw: value }));
  };

  const isValidPw = SignupPolicy.validatePassword(pw);
  const isPassedPw = !pw || isValidPw;
  const pwValidErrorText = !isPassedPw && "사용 할 수 없는 비밀번호 입니다.";
  const pwHelper = {
    color: getHelperTextColor(!isValidPw),
    text: pwValidErrorText,
  };

  // 비밀번호 확인 영역
  const handlePwConfirmChange = (value: string) =>
    setSignupForm((old) => ({ ...old, pwConfirm: value }));

  const isComparablePassword = !!pw && !!pwConfirm;
  const isMatchedPw = isComparablePassword && pw === pwConfirm;
  const getPwConfirmValidErrorText = () => {
    if (!pwConfirm) return "";
    return !isMatchedPw
      ? "비밀번호가 일치하지 않아요."
      : "비밀번호가 일치해요.";
  };
  const pwConfirmHelper = {
    color: getHelperTextColor(!isMatchedPw),
    text: getPwConfirmValidErrorText(),
  };

  // 유저 이름 영역
  const handleUsernameChange = (value: string) =>
    setSignupForm((old) => ({ ...old, username: value }));

  // 휴대폰 번호 검증 영역
  const handlePhoneChange = (value: string) =>
    setSignupForm((old) => ({ ...old, phone: value }));

  const handleVerifiedPhoneChange = (isVerifiedPhone: boolean) =>
    setSignupForm((old) => ({
      ...old,
      validation: { ...old.validation, isVerifiedPhone },
    }));

  // 이메일 영역
  const handleEmailChange = (value: string) =>
    setSignupForm((old) => ({ ...old, email: value }));

  const isValidEmail = SignupPolicy.validateEmail(email);
  const isPassedEmail = !email || isValidEmail;
  const emailValidErrorText = !isPassedEmail && "이메일 형식이 다릅니다.";
  const emailHelper = {
    color: getHelperTextColor(!isValidEmail),
    text: emailValidErrorText,
  };

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
      helper: loginIdHelper,
    },
    pwState: {
      value: pw,
      onChange: handlePwChange,
      helper: pwHelper,
    },
    pwConfirmState: {
      value: pwConfirm,
      onChange: handlePwConfirmChange,
      helper: pwConfirmHelper,
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
      helper: emailHelper,
    },
  };
};

const getHelperTextColor = (isError: boolean): "error" | "primary" =>
  isError ? "error" : "primary";
