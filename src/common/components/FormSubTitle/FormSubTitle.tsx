import { Stack, Typography } from "@mui/material";
import { css } from "@emotion/react";

export type FormSubTitleProps = {
  title: string;
  desc: string;
  required: boolean;
};

export const FormSubTitle = ({
  title,
  desc,
  required = false,
}: FormSubTitleProps) => {
  return (
    <Stack>
      <Stack direction="row">
        <Typography
          variant={"body2"}
          fontWeight={600}
          sx={{ marginBottom: "8px" }}
        >
          {title}
        </Typography>
        {required ? <p css={styles.required}>*</p> : null}
      </Stack>
      <Typography
        variant={"caption"}
        sx={{ opacity: 0.7, marginBottom: "6px" }}
      >
        {desc}
      </Typography>
    </Stack>
  );
};

const styles = {
  required: css`
    color: "#2d82ff";
  `,
};
