import InfoRounded from "@mui/icons-material/InfoRounded";
import { Stack, Typography } from "@mui/material";

export const CorporateUserGuide = () => {
  return (
    <Stack
      component={"article"}
      direction={"row"}
      color={"text.primary"}
      gap={"12px"}
    >
      <InfoRounded fontSize="small" />

      <dl>
        <Typography component={"dt"} variant={"body2"}>
          기업 회원이신가요?
        </Typography>

        <Typography
          component={"dd"}
          variant={"caption"}
          mt={"8px"}
          sx={{ opacity: 0.8 }}
        >
          기업 회원의 경우 기본 정보 입력 후 추가 정보 입력 란에 기업 정보를
          입력하시면 기업 회원 활동이 가능합니다.
        </Typography>
      </dl>
    </Stack>
  );
};
