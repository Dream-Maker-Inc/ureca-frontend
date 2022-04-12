import { Typography, TypographyProps } from "@mui/material";

export const SmallCaption = (p: TypographyProps) => (
  <Typography variant="caption" fontSize={"10px"} fontWeight={100} {...p} />
);
