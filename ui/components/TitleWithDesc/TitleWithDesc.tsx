import { Stack, Typography } from "@mui/material";

export type TitleWithDescProps = {
  title: string;
  desc: string;
};

export const TitleWithDesc = ({ title, desc }: TitleWithDescProps) => {
  return (
    <Stack>
      <Typography variant={"h5"} fontWeight={600}>
        {title}
      </Typography>
      <Typography variant={"body2"} sx={{ opacity: 0.7 }}>
        {desc}
      </Typography>
    </Stack>
  );
};
