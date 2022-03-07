import { css } from "@emotion/react";
import { IconButton, Typography, TypographyProps } from "@mui/material";
import React from "react";

export const SocialLoginGroup = () => {
  return (
    <section css={styles.root}>
      <IconButton css={styles.iconBtn}>
        <Text>{"N"}</Text>
      </IconButton>
      <IconButton css={styles.iconBtn}>
        <Text>{"K"}</Text>
      </IconButton>
      <IconButton css={styles.iconBtn}>
        <Text>{"A"}</Text>
      </IconButton>
    </section>
  );
};

const styles = {
  root: css`
    display: flex;
    justify-content: center;
    gap: 16px;
  `,

  iconBtn: css`
    width: 48px;
    height: 48px;
    border: 1px solid #eee;
  `,
};

const Text = (p: TypographyProps) => (
  <Typography fontWeight={800} color={"#000"} {...p} />
);
