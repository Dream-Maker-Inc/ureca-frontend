import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LoginSection } from ".";

const Meta: ComponentMeta<typeof LoginSection> = {
  title: "Login/LoginSection",
  component: LoginSection,
};
export default Meta;

export const Basic: ComponentStory<typeof LoginSection> = () => (
  <LoginSection formProps={{ onSignup: () => alert("signup") }} />
);
