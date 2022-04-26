import { lightTheme } from "@/themes/CustomThemes";
import CheckCircleOutlineRounded from "@mui/icons-material/CheckCircleOutlineRounded";
import { Button, Typography } from "@mui/material";

type AgreeAllCheckButtonProps = {
  checked: boolean;
  onToggle: () => void;
};

export const AgreeAllCheckButton = ({
  checked,
  onToggle,
}: AgreeAllCheckButtonProps) => {
  const defaultColor = lightTheme.palette.text.primary;

  const textColor = checked ? "primary" : "text.secondary";
  const fontWeight = checked ? "400" : "100";
  const borderColor = checked ? "primary.main" : "#eee";
  const checkIcon = checked ? (
    <CheckCircleOutlineRounded fontSize={"small"} color={"primary"} />
  ) : (
    <CheckCircleOutlineRounded
      fontSize={"small"}
      htmlColor={defaultColor}
      sx={{ opacity: 0.4 }}
    />
  );

  return (
    <Button
      fullWidth
      disableElevation
      variant="outlined"
      sx={{
        border: `1px solid ${borderColor}`,
        justifyContent: "space-between",
        padding: "12px 24px",
      }}
      endIcon={checkIcon}
      onClick={onToggle}
    >
      <Typography
        color={textColor}
        fontWeight={fontWeight}
        sx={{ opacity: 0.8 }}
      >
        아래 내용에 모두 동의합니다.
      </Typography>
    </Button>
  );
};
