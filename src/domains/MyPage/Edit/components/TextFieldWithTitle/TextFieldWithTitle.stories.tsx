import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextFieldWithTitle } from "./TextFieldWithTitle";

const Meta: ComponentMeta<typeof TextFieldWithTitle> = {
  title: "MyPage/Edit TextField",
  component: TextFieldWithTitle,
};
export default Meta;

export const Icon: ComponentStory<typeof TextFieldWithTitle> = () => (
  <TextFieldWithTitle
    title="닉네임"
    desc="전문가 리스트에 표시되는 닉네임을 입력해 주세요."
    textfieldProps={{ placeholder: "한 줄 소개를 입력하세요." }}
  />
);
