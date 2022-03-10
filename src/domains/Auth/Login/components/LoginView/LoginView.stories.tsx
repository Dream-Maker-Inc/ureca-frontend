import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LoginView } from ".";

const Meta: ComponentMeta<typeof LoginView> = {
  title: "Login/LoginView",
  component: LoginView,
};
export default Meta;

export const Basic: ComponentStory<typeof LoginView> = () => (
  <LoginView formProps={{ onSignup: () => alert("signup") }} />
);
