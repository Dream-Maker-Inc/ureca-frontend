import { css } from "@emotion/react";

export const signupStyles = {
  formStyle: {
    basicForm: css`
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: flex-start;
      gap: 24px;
    `,
    formFieldWrapper: css`
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 4px;
    `,
    phoneAuthContainer: css`
      display: flex;
      gap: 12px;
    `,
  },
};
