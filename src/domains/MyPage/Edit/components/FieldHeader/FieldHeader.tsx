import { css } from "@emotion/react";
import { Stack, Typography, TypographyProps } from "@mui/material";

export type FieldHeaderProps = {
  title: string;
  desc: string;
  necessary?: boolean;
};

export const FieldHeader = ({
  title,
  desc,
  necessary = false,
}: FieldHeaderProps) => {
  return (
    <Stack gap={"6px"}>
      <Stack direction={"row"} gap={"2px"}>
        <Title>{title}</Title>
        {necessary && <Dot>*</Dot>}
      </Stack>
      <Desc>{desc}</Desc>
    </Stack>
  );
};

const Title = (p: TypographyProps) => (
  <Typography variant={"subtitle1"} lineHeight={1} fontWeight={600} {...p} />
);

const Desc = (p: TypographyProps) => (
  <Typography variant={"body2"} sx={{ opacity: 0.7 }} {...p} />
);

const Dot = (p: TypographyProps) => (
  <Typography variant={"caption"} color="primary" fontWeight={800} {...p} />
);
