import { css } from "@emotion/react";
import { Typography, TypographyProps } from "@mui/material";
export type MyPageInfoProps = {
  title: string;
  desc: string;
};

export const MyPageInfo = ({ title, desc }: MyPageInfoProps) => {
  return (
    <dl css={styles.container}>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </dl>
  );
};

const Title = (p: TypographyProps) => (
  <Typography component={"dt"} variant={"body1"} sx={{ opacity: 0.7 }} {...p} />
);
const Desc = (p: TypographyProps) => (
  <Typography component={"dd"} variant={"body1"} fontWeight={400} {...p} />
);

const styles = {
  container: css`
    max-width: 800px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
};
