import { css } from "@emotion/react";

export const TestButton = () => <button css={button}>ok</button>;

const button = css`
  width: 120px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #eee;
  background-color: #fff;
`;
