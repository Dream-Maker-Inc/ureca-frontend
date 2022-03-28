import { lightTheme } from "@/themes/CustomThemes";
import CheckCircleOutlineRounded from "@mui/icons-material/CheckCircleOutlineRounded";
import { Button, Typography } from "@mui/material";

export type AgreeAllButtonProps = {
  checked: boolean;
  toggle: () => void;
};

export const AgreeAllButton = ({ checked, toggle }: AgreeAllButtonProps) => {
  const defaultColor = lightTheme.palette.text.primary;

  const uncheckedIcon = (
    <CheckCircleOutlineRounded
      fontSize={"small"}
      htmlColor={defaultColor}
      sx={{ opacity: 0.4 }}
    />
  );

  const checkedIcon = (
    <CheckCircleOutlineRounded fontSize={"small"} color={"primary"} />
  );

  return (
    <Button
      fullWidth
      disableElevation
      startIcon={checked ? checkedIcon : uncheckedIcon}
      sx={{
        boxShadow: "0px 1px 6px #ddd !important",
        padding: "12px 24px",
        justifyContent: "flex-start",
      }}
      onClick={toggle}
    >
      <Typography
        variant="body2"
        color={defaultColor}
        width={"100%"}
        textAlign={"start"}
      >
        모든 약관에 동의합니다.
      </Typography>
    </Button>
  );
};
