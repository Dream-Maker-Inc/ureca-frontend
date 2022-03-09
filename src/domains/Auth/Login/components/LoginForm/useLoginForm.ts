import { ChangeEvent, useState } from "react";

export const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordFind = () => {
    // TODO route password find
  };

  const handleLogin = () => {
    // TODO action signup
  };

  return {
    emailState: {
      value: email,
      onChange: handleChangeEmail,
    },
    pwState: {
      value: password,
      onChange: handleChangePassword,
    },
    handlePasswordFind,
    handleLogin,
  };
};
