import { css } from "@emotion/react";
import { Typography, TypographyProps } from "@mui/material";
export type MyPageInfoProps = {
  title: string;
  desc: string;
};

export const MyPageInfo = ({ title, desc }: MyPageInfoProps) => {
  return (
    <div css={styles.container}>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </div>
  );
};

const Title = (p: TypographyProps) => (
  <Typography variant={"body1"} fontWeight={500} sx={{ opacity: 0.7 }} {...p} />
);
const Desc = (p: TypographyProps) => (
  <Typography variant={"body1"} fontWeight={700} {...p} />
);

const styles = {
  container: css`
    max-width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
};
