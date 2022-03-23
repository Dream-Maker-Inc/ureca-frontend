import { Stack, Typography } from "@mui/material";

export type FormSubTitleProps = {
  title: string;
  desc: string;
};

export const FormSubTitle = ({ title, desc }: FormSubTitleProps) => {
  return (
    <Stack>
      <Typography
        variant={"body2"}
        fontWeight={600}
        sx={{ marginBottom: "8px" }}
      >
        {title}
      </Typography>
      <Typography
        variant={"caption"}
        sx={{ opacity: 0.7, marginBottom: "6px" }}
      >
        {desc}
      </Typography>
    </Stack>
  );
};
