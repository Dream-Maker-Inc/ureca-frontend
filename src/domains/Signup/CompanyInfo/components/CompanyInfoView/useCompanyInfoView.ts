import { SignupPolicy } from "@/common/policies";
import { CompanyType } from "@/common/policies/Partner/Company.type";
import { ChangeEvent, useState } from "react";
import { CompanyInfoFormModel } from "./CompanyInfo.model";

export const useCompanyInfoView = () => {
  const [formModel, setFormModel] = useState<CompanyInfoFormModel>({
    brandName: "",
    companyType: "private",
    brn: "",
    ownerName: "",
    contactNumber: "",
    homepage: "",
    email: "",
  });
  const {
    brandName,
    companyType,
    brn,
    ownerName,
    contactNumber,
    homepage,
    email,
  } = formModel;

  // 상호명 영역
  const handleBrandNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFormModel((old) => ({ ...old, brandName: e.target.value }));

  // 기업 타입 영역
  const handleCompanyTypeChange = (companyType: CompanyType) =>
    setFormModel((old) => ({ ...old, companyType }));

  // 사업자등록번호 영역 (BRN)
  const [isConfirmedBrn, setIsConfirmedBrn] = useState(false);

  const isValidBrn = SignupPolicy.validateBusinessNum(brn);
  const brnValidErrorText =
    brn && !isValidBrn && "사업자등록번호 형식에 맞지 않아요.";
  const brnValidText = isConfirmedBrn && "인증되었어요.";
  const brnHelperText = brnValidErrorText || brnValidText;
  const brnHelper = {
    color: getHelperTextColor(!isValidBrn),
    text: brnHelperText,
  };
  const brnConfirmBtnDisabled = !isValidBrn;

  const handleBrnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormModel((old) => ({ ...old, brn: e.target.value }));
    setIsConfirmedBrn(false);
  };

  const confirmBrn = () => {
    alert(`brn:${brn} ok`);

    const tempBrnConfirmed = isValidBrn;
    setIsConfirmedBrn(tempBrnConfirmed);
  };

  // 대표자명 영역
  const handleOwnerNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFormModel((old) => ({ ...old, ownerName: e.target.value }));

  // 대표번호 영역
  const handleContactNumberChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFormModel((old) => ({ ...old, contactNumber: e.target.value }));

  const isValidContactNumber = SignupPolicy.validatePhoneNumber(contactNumber);
  const isPassedContactNumber = !contactNumber || isValidContactNumber;
  const contactNumberValidErrorText =
    !isPassedContactNumber && "전화번호 형식에 맞지 않아요.";
  const contactNumberHelper = {
    color: getHelperTextColor(!isValidContactNumber),
    text: contactNumberValidErrorText,
  };

  // 홈페이지 영역
  const handleHomepageChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFormModel((old) => ({ ...old, homepage: e.target.value }));

  const isValidHomepageUrl = SignupPolicy.validateSite(homepage);
  const isPassedHomepage = !homepage || isValidHomepageUrl;
  const homepageValidErrorText =
    !isPassedHomepage &&
    "http:// 또는 https:// 로 시작하는 정보를 입력해 주세요.";
  const homepageHelper = {
    color: getHelperTextColor(!isValidHomepageUrl),
    text: homepageValidErrorText,
  };

  // 이메일 영역
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFormModel((old) => ({ ...old, email: e.target.value }));

  const isValidEmail = SignupPolicy.validateEmail(email);
  const isPassedEmail = !email || isValidEmail;
  const emailValidErrorText = !isPassedEmail && "이메일 형식이 다릅니다.";
  const emailHelper = {
    color: getHelperTextColor(!isValidEmail),
    text: emailValidErrorText,
  };

  // validation
  const isFormValid =
    brandName &&
    companyType &&
    isConfirmedBrn &&
    ownerName &&
    isPassedContactNumber &&
    isPassedHomepage &&
    isPassedEmail;

  const handleFormSubmit = () => {
    alert(JSON.stringify(formModel));
  };

  return {
    brandNameState: {
      value: brandName,
      onChange: handleBrandNameChange,
    },
    companyTypeState: {
      value: companyType,
      onChange: handleCompanyTypeChange,
    },
    brnState: {
      value: brn,
      onChange: handleBrnChange,
      helper: brnHelper,
      confirm: {
        disabled: brnConfirmBtnDisabled,
        request: confirmBrn,
      },
    },
    ownerNameState: {
      value: ownerName,
      onChange: handleOwnerNameChange,
    },
    contactNumberState: {
      value: contactNumber,
      onChange: handleContactNumberChange,
      helper: contactNumberHelper,
    },
    homepageState: {
      value: homepage,
      onChange: handleHomepageChange,
      helper: homepageHelper,
    },
    emailState: {
      value: email,
      onChange: handleEmailChange,
      helper: emailHelper,
    },
    submitState: {
      disabled: !isFormValid,
      confirm: handleFormSubmit,
    },
  };
};

const getHelperTextColor = (isError: boolean): "error" | "primary" =>
  isError ? "error" : "primary";
