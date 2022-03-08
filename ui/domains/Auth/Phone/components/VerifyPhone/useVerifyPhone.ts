import { SignupPolicy } from "@/ui/domains/Policy";
import { formatToPhoneNumber } from "@/ui/utiles/format/FormatPhone";
import { ChangeEvent, useState } from "react";

export const useVerifyPhone = () => {
  const [phone, setPhone] = useState("");
  const isEmptyPhone = phone === "";
  const isValidPhone = SignupPolicy.validatePhoneNumber(phone);
  const phoneError =
    !isEmptyPhone && !isValidPhone && "유효한 휴대폰 번호가 아니에요.";

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPhone(formatToPhoneNumber(e.target.value));

  const handleSubmit = (callback: () => void) => callback();

  return {
    phoneState: {
      value: phone,
      onChange: handlePhoneChange,
      error: phoneError,
      isValid: isValidPhone,
    },
    handleSubmit,
  };
};
