import { SignupPolicy } from "@/ui/domains/Policy";
import { ChangeEvent, useState } from "react";

export const useBasicInfoForm = () => {
  const [nickname, setNickname] = useState("");
  const handleChangeNickname = (e: ChangeEvent<HTMLInputElement>) =>
    setNickname(e.target.value);

  const [email, setEmail] = useState("");
  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const [password, setPassword] = useState("");
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const [passwordConfirm, setPasswordConfirm] = useState("");
  const handleChangePasswordConfirm = (e: ChangeEvent<HTMLInputElement>) =>
    setPasswordConfirm(e.target.value);

  const emailError =
    email !== "" &&
    !SignupPolicy.validateEmail(email) &&
    "이메일을 확인해 주세요.";

  const passwordError =
    password !== "" &&
    !SignupPolicy.validatePassword(password) &&
    "비밀번호 형식을 확인해 주세요.";

  const visiblePasswordConfirm = !SignupPolicy.validatePassword(password);

  const isMatchedPassword = password === passwordConfirm;

  const passwordConfirmError =
    !isMatchedPassword && "비밀번호가 일치하지 않아요.";

  const visibleSubmitBtn =
    SignupPolicy.validateEmail(email) &&
    SignupPolicy.validatePassword(password) &&
    isMatchedPassword;

  const handleSubmit = (callback: () => void) => callback();

  return {
    nicknameState: {
      value: nickname,
      onChange: handleChangeNickname,
    },
    emailState: {
      value: email,
      onChange: handleChangeEmail,
      error: emailError,
    },
    pwState: {
      value: password,
      onChange: handleChangePassword,
      error: passwordError,
    },
    pwConfirmState: {
      value: passwordConfirm,
      onChange: handleChangePasswordConfirm,
      error: passwordConfirmError,
      visible: visiblePasswordConfirm,
    },
    submitState: {
      onClick: handleSubmit,
      visible: visibleSubmitBtn,
    },
  };
};
