import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TestMaterialButton } from ".";

const Meta: ComponentMeta<typeof TestMaterialButton> = {
  title: "Example/TestMaterialButton",
  component: TestMaterialButton,
};
export default Meta;

export const Primary: ComponentStory<typeof TestMaterialButton> = () => (
  <TestMaterialButton>Test</TestMaterialButton>
);
