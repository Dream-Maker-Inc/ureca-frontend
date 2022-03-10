import { css } from "@emotion/react";
import { LoginForm } from "../LoginForm";
import { LoginFormProps } from "../LoginForm/LoginForm";
import { LoginHeader } from "../LoginHeader";

export type LoginViewProps = {
  formProps: LoginFormProps;
};

export const LoginView = ({ formProps }: LoginViewProps) => {
  return (
    <div css={root}>
      <LoginHeader />
      <LoginForm {...formProps} />
    </div>
  );
};

const root = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 380px;
  align-items: center;
  padding: 16px;
  gap: 48px;
`;
