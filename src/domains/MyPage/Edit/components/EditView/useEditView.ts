import { MyPageIconProps } from "@/domains/MyPage/components/MyPageIcon";
import { useState } from "react";

export const useEditView = () => {
  type FormModel = {
    nickname: string;
    selfDesc: string;
    email: string;
  };

  const [formModel, setFormModel] = useState<FormModel>({
    nickname: "",
    selfDesc: "",
    email: "",
  });

  const { nickname, selfDesc, email } = formModel;

  const handleNicknameChange = (value: string) =>
    setFormModel((old) => ({ ...old, nickname: value }));

  const handleSelfDescChange = (value: string) =>
    setFormModel((old) => ({ ...old, selfDesc: value }));

  const handleEmailChange = (value: string) =>
    setFormModel((old) => ({ ...old, email: value }));

  const myPageIconData: MyPageIconProps = {
    avatarImage:
      "https://images.unsplash.com/photo-1601158935942-52255782d322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80/",
    brandNameText: "드림메이커",
    brandInfoText: "등록된 한 줄 소개가 없습니다.",
  };

  const handleEditClick = () => {
    alert(JSON.stringify(formModel));
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
    },
  };
};
