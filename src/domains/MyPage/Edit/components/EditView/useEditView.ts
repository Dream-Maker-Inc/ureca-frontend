import { SignupPolicy } from "@/common/policies";
import { MyPageIconProps } from "@/domains/MyPage/components/MyPageIcon";
import { useState } from "react";

export const useEditView = () => {
  type FormModel = {
    nickname: string;
    selfDesc: string;
    email: string;
    phone: string;
    verifiedPhone: boolean;
  };

  const [formModel, setFormModel] = useState<FormModel>({
    nickname: "",
    selfDesc: "",
    email: "",
    phone: "",
    verifiedPhone: false,
  });

  const { nickname, selfDesc, email, phone, verifiedPhone } = formModel;

  // 닉네임 영역
  const handleNicknameChange = (value: string) =>
    setFormModel((old) => ({ ...old, nickname: value }));

  // 한 줄 소개 영역
  const handleSelfDescChange = (value: string) =>
    setFormModel((old) => ({ ...old, selfDesc: value }));

  // 이메일 영역
  const handleEmailChange = (value: string) =>
    setFormModel((old) => ({ ...old, email: value }));

  const isValidEmail = SignupPolicy.validateEmail(email);

  // 핸드폰 인증 영역
  const handlePhoneChange = (value: string) =>
    setFormModel((old) => ({ ...old, phone: value }));

  const handleVerifiedPhoneChange = (isVerifiedPhone: boolean) =>
    setFormModel((old) => ({ ...old, verifiedPhone: isVerifiedPhone }));

  // 수정하기 버튼 영역
  const handleEditClick = () => {
    alert(JSON.stringify(formModel));
  };

  // 데이터 영역
  const myPageIconData: MyPageIconProps = {
    avatarImage:
      "https://images.unsplash.com/photo-1601158935942-52255782d322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80/",
    brandNameText: "드림메이커",
    brandInfoText: "등록된 한 줄 소개가 없습니다.",
  };

  return {
    myPageIconData,
    handleEditClick,

    nicknameState: {
      value: nickname,
      onChange: handleNicknameChange,
    },

    selfDescState: {
      value: selfDesc,
      onChange: handleSelfDescChange,
    },

    emailState: {
      value: email,
      onChange: handleEmailChange,
      helper: {
        error: !!isValidEmail ? "" : "error",
        text: !!isValidEmail ? "" : "이메일 형식이 다릅니다.",
        visible: !!email && !isValidEmail,
      },
    },

    phoneState: {
      value: phone,
      onChange: handlePhoneChange,
    },

    verifiedPhoneState: {
      value: verifiedPhone,
      onChange: handleVerifiedPhoneChange,
    },

    validationState: {
      disabled: verifiedPhone && isValidEmail ? false : true,
    },
  };
};
