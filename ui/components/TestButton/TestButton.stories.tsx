import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TestButton } from ".";

const Meta: ComponentMeta<typeof TestButton> = {
  title: "Example/TestButton",
  component: TestButton,
};
export default Meta;

export const Primary: ComponentStory<typeof TestButton> = () => <TestButton />;
