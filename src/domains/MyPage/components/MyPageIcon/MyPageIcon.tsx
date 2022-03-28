import React from "react";
import {
  Typography,
  TypographyProps,
  Stack,
  Avatar,
  AvatarProps,
} from "@mui/material";
import { css } from "@emotion/react";

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
    <Stack direction="row" css={styles.inner}>
      <StyledMyPageIcon src={avatarImage} />
      <div css={styles.container}>
        <BrandName>{brandNameText}</BrandName>
        <BrandInfo>{brandInfoText}</BrandInfo>
      </div>
    </Stack>
  );
};

const StyledMyPageIcon = (p: AvatarProps) => (
  <Avatar alt="Brand Logo" sx={{ width: "100px", height: "100px" }} {...p} />
);

const BrandName = (p: TypographyProps) => (
  <Typography variant={"h5"} fontWeight={500} {...p} />
);
const BrandInfo = (p: TypographyProps) => (
  <Typography
    color={"text.primary"}
    fontWeight={400}
    sx={{ opacity: 0.7, fontSize: "18px" }}
    {...p}
  />
);

const styles = {
  inner: css`
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
