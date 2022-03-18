import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProjectCard } from ".";

const Meta: ComponentMeta<typeof ProjectCard> = {
  title: "Projects/Project Card",
  component: ProjectCard,
};
export default Meta;

export const DeadlineActive: ComponentStory<typeof ProjectCard> = () => (
  <ProjectCard
    cardImage={"/images/temp/projectCardImage-1.jpg"}
    title={"영카트 기반 홈페이지 리뉴얼 프로젝트"}
    priceCount={100}
    deadlineCount={1}
  />
);
