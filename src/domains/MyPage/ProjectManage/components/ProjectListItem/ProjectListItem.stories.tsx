import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProjectListItem } from "./ProjectListItem";

const Meta: ComponentMeta<typeof ProjectListItem> = {
  title: "MyPage/Project Management",
  component: ProjectListItem,
};
export default Meta;

export const Icon: ComponentStory<typeof ProjectListItem> = () => (
  <ProjectListItem
    avatar={{
      imgUrl:
        "https://images.unsplash.com/photo-1601158935942-52255782d322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80/",
      brandName: "드림메이커",
    }}
    project={{
      id: "213456789",
      title:
        "운영 중 반응형 홈페이지 리뉴얼 개발 운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발",
      transactionDate: "22.03.14 ~",
      price: "100,000원",
      state: "진행중 ●",
    }}
  />
);
