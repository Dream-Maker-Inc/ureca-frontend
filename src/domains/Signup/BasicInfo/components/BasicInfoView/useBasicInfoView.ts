import { SignupFormAtom, SignupFormModel } from "@/recoil/Signup";
import { useRecoilValue } from "recoil";

export const useBasicInfoView = () => {
  const signupForm = useRecoilValue(SignupFormAtom);
  const validationPassed = validateForm(signupForm);

  const handleSignup = () => {
    alert(JSON.stringify(signupForm));
  };

  return {
    signup: {
      disabled: !validationPassed,
      confirm: handleSignup,
    },
  };
};

const validateForm = (signupForm: SignupFormModel) => {
  const { username, email, validation } = signupForm;
  const {
    isValidLoginId,
    isValidPw,
    isMatchedPw,
    isVerifiedPhone,
    isValidEmail,
    isValidRequirementTerms,
  } = validation;

  const valid =
    !!username &&
    isValidLoginId &&
    isValidPw &&
    isMatchedPw &&
    isVerifiedPhone &&
    (!email || isValidEmail) &&
    isValidRequirementTerms;

  return valid;
};
