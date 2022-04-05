import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MyPageInfo } from "./MyPageInfo";

const Meta: ComponentMeta<typeof MyPageInfo> = {
  title: "MyPage/My Page Info",
  component: MyPageInfo,
};
export default Meta;

export const Icon: ComponentStory<typeof MyPageInfo> = () => (
  <MyPageInfo title="휴대폰 번호" desc="010 **** 7642" />
);
