import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProjectTabs } from "./ProjectTabs";

const Meta: ComponentMeta<typeof ProjectTabs> = {
  title: "MyPage/Export Project Management",
  component: ProjectTabs,
};
export default Meta;

export const Icon: ComponentStory<typeof ProjectTabs> = () => <ProjectTabs />;
