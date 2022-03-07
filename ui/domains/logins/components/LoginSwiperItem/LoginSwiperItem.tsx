import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";
import React, { ReactNode } from "react";

export type LoginSwiperItemProps = {
  icon: ReactNode;
  title: string;
  subtitle: string;
};

export const LoginSwiperItem = ({
  icon,
  title,
  subtitle,
}: LoginSwiperItemProps) => {
  return (
    <article css={styles.root}>
      <div css={styles.iconWrapper}>{icon}</div>

      <section css={styles.textContainer}>
        <Typography variant={"h5"} fontWeight={700}>
          {title}
        </Typography>
        <Typography variant={"subtitle1"}>{subtitle}</Typography>
      </section>
    </article>
  );
};

const styles = {
  root: css`
    display: flex;
    flex-direction: column;
    gap: 24px;

    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: white;
  `,

  iconWrapper: css`
    border-radius: 360px;
    background-color: #fff;
    padding: 16px;
  `,

  textContainer: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  `,
};
