import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { ReactNode } from "react";

export type SignupViewTemplateProps = {
  children: ReactNode;
};

export const SignupViewTemplate = ({ children }: SignupViewTemplateProps) => {
  return (
    <main css={styles.root}>
      <article css={styles.inner}>
        <Typography variant="h4" sx={{ mb: "80px" }}>
          회원가입
        </Typography>

        {children}
      </article>
    </main>
  );
};

const styles = {
  root: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  `,
  inner: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;

    margin: 100px 0;
  `,
};
