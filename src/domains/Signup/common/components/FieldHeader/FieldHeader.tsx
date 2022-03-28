import { css } from "@emotion/react";
import { Typography, TypographyProps } from "@mui/material";

export type FieldHeaderProps = {
  title: string;
  description: string;
  requirement?: boolean;
};

export const FieldHeader = ({
  title,
  description,
  requirement = false,
}: FieldHeaderProps) => {
  return (
    <dl>
      <div css={styles.titleWrapper}>
        <Typography component={"dt"} variant="body2" fontWeight={200}>
          {title}
        </Typography>

        {requirement && <Dot />}
      </div>

      <Description>{description}</Description>
    </dl>
  );
};

const styles = {
  titleWrapper: css`
    display: flex;
    gap: 4px;
  `,
};

const Dot = () => (
  <Typography variant="body2" color={"primary"}>
    *
  </Typography>
);

const Description = (p: TypographyProps) => (
  <Typography
    component={"dd"}
    variant="caption"
    fontWeight={200}
    fontSize={"10px"}
    sx={{ opacity: 0.6 }}
    {...p}
  />
);
