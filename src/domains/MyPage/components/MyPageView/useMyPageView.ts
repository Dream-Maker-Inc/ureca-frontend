import { MyPageIconProps } from "../MyPageIcon";

export const useMyPageView = () => {
  const myPageIconData: MyPageIconProps = {
    avatarImage:
      "https://images.unsplash.com/photo-1601158935942-52255782d322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80/",
    brandNameText: "드림메이커",
    brandInfoText: "등록된 한 줄 소개가 없습니다.",
  };

  const basicInfoData = {
    username: "한*현",
    phone: "010 **** 7642",
    email: "***@dremaker.biz",
    bankname: "IBK기업은행",
    accountNum: "12116958001010",
    accountHolder: "주식회사 드림메이커",
  };

  const introduceSelfData = `
    Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
    `;
  const notificationData = {
    projectRegistrationInfo: "받기",
    projectProgressInfo: "받기",
    noticeInfo: "받기",
    marketingInfo: "받기",
  };

  const infoEditClick = () => {
    alert("edit");
  };
  return {
    myPageIconData,
    basicInfoData,
    introduceSelfData,
    notificationData,
    infoEditClick,
  };
};
