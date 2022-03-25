import { atom } from "recoil";

export type SignupFormModel = {
  loginId: string;
  pw: string;
  pwConfirm: string;
  username: string;
  phone: string;
  email: string;

  agreedTerms: {
    id: number;
    agreed: boolean;
  }[];

  validation: {
    isValidLoginId: boolean;
    isValidPw: boolean;
    isMatchedPw: boolean;
    isVerifiedPhone: boolean;
    isValidEmail: boolean;
    isValidRequirementTerms: boolean;
  };
};

export const SignupFormAtom = atom<SignupFormModel>({
  key: "signupFormAtom",
  default: {
    loginId: "",
    pw: "",
    pwConfirm: "",
    username: "",
    phone: "",
    email: "",

    agreedTerms: [],

    validation: {
      isValidLoginId: true,
      isValidPw: false,
      isMatchedPw: false,
      isVerifiedPhone: false,
      isValidEmail: false,
      isValidRequirementTerms: false,
    },
  },
});
