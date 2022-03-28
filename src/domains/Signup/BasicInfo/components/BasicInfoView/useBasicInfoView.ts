import { SignupApi } from "@/domains/Signup/services/SignupApi";
import { SignupFormAtom, SignupFormModel } from "@/recoil/Signup";
import { useRecoilValue } from "recoil";
import { useMutation } from "react-query";
import { useEffect, useState } from "react";
import { CorporationRoutePopupProps } from "@/domains/Signup/common/components/CorporationRoutePopup/CorporationRoutePopup";
import { useRouter } from "next/router";
import { RoutePath } from "@/constants/Path";

export const useBasicInfoView = () => {
  const router = useRouter();

  const signupForm = useRecoilValue(SignupFormAtom);
  const validationPassed = validateForm(signupForm);

  // 기업여부 체크 팝업
  const [corporateRoutePopupOpen, setCorporateRoutePopupOpen] = useState(false);

  const corporateRoutePopupProps: CorporationRoutePopupProps = {
    popup: { open: corporateRoutePopupOpen },
    events: {
      onNegative: () => router.replace("/"),
      onPositive: () => router.replace(RoutePath.SignupCompanyInfo),
    },
  };

  // join
  const { mutate, isSuccess, isError, error } = useMutation(() =>
    SignupApi.join()
  );
  const handleSignup = () => mutate();

  useEffect(() => {
    if (isSuccess) {
      alert("회원가입에 성공했어요.");
      return setCorporateRoutePopupOpen(true);
    }
    if (isError) {
      console.log(error);
      return alert("회원가입에 실패했어요.");
    }
  }, [isSuccess, isError, error]);

  return {
    signup: {
      disabled: !validationPassed,
      confirm: handleSignup,
    },
    corporateRoutePopupProps,
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
