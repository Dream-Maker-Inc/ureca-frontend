import { TypographyOptions } from "@mui/material/styles/createTypography";

const baseTypographyOptions: TypographyOptions = {
  fontFamily: "AppleSDGothicNeo,Noto Sans KR",
  body1: {
    fontWeight: 200,
  },
  body2: {
    fontWeight: 200,
  },
  caption: {
    fontWeight: 100,
    lineHeight: 1.4,
  },
};

export const lightTypographyOptions: TypographyOptions = {
  ...baseTypographyOptions,
};

export const darkTypographyOptions: TypographyOptions = {
  ...baseTypographyOptions,
};
