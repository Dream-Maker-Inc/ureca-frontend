import { css } from "@emotion/react";
import {
  Avatar,
  AvatarProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import React from "react";

export type MyPageIconProps = {
  avatarImage: string;
  brandNameText: string;
  brandInfoText: string;
};

export const MyPageIcon = ({
  avatarImage,
  brandNameText,
  brandInfoText,
}: MyPageIconProps) => {
  return (
    <article css={styles.root}>
      <StyledMyPageIcon src={avatarImage} />
      <dl css={styles.container}>
        <BrandName>{brandNameText}</BrandName>
        <BrandInfo>{brandInfoText}</BrandInfo>
      </dl>
    </article>
  );
};

const StyledMyPageIcon = (p: AvatarProps) => (
  <Avatar alt="Brand Logo" sx={{ width: "100px", height: "100px" }} {...p} />
);

const BrandName = (p: TypographyProps) => (
  <Typography component={"dt"} variant={"h6"} {...p} />
);
const BrandInfo = (p: TypographyProps) => (
  <Typography
    component={"dd"}
    variant="subtitle1"
    color={"text.primary"}
    sx={{ opacity: 0.4 }}
    {...p}
  />
);

const styles = {
  root: css`
    display: flex;
    align-items: center;
  `,

  container: css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 40px;
  `,
};
