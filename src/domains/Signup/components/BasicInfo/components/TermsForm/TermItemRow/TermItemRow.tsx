import CheckCircleOutlineRounded from "@mui/icons-material/CheckCircleOutlineRounded";
import { Button, Stack, Typography } from "@mui/material";

export type TermItemRowProps = {
  checked: boolean;
  toggle: () => void;
  label: string;
  onShowTerm: () => void;
  requirement?: boolean;
};

export const TermItemRow = ({
  checked,
  toggle,
  label,
  onShowTerm,
  requirement = false,
}: TermItemRowProps) => {
  const uncheckedIcon = (
    <CheckCircleOutlineRounded fontSize={"small"} sx={{ opacity: 0.4 }} />
  );

  const checkedIcon = (
    <CheckCircleOutlineRounded fontSize={"small"} color={"primary"} />
  );

  return (
    <Stack
      direction={"row"}
      color={"text.primary"}
      width={"100%"}
      padding={"2px 12px"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Button fullWidth sx={{ p: "8px" }} onClick={toggle}>
        <Stack
          color={"text.primary"}
          width={"100%"}
          direction={"row"}
          gap={"8px"}
        >
          {checked ? checkedIcon : uncheckedIcon}

          <Stack direction={"row"} gap={"4px"}>
            <Typography
              variant="body2"
              color={"inherit"}
              width={"100%"}
              textAlign={"start"}
            >
              {label}
            </Typography>

            {requirement && (
              <Typography variant="body2" color={"primary"}>
                *
              </Typography>
            )}
          </Stack>
        </Stack>
      </Button>

      <Button onClick={onShowTerm}>
        <Typography
          variant="caption"
          color={"text.primary"}
          whiteSpace={"nowrap"}
          sx={{ opacity: 0.6 }}
        >
          약관 보기
        </Typography>
      </Button>
    </Stack>
  );
};
