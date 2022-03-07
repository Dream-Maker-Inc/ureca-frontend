import { css } from "@emotion/react";
import { ArrowForwardRounded } from "@mui/icons-material";
import {
  IconButton,
  IconButtonProps,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { useVerifyPhone } from "./useVerifyPhone";

export type VerifyPhoneProps = {
  onSubmit: () => void;
};

export const VerifyPhone = ({ onSubmit }: VerifyPhoneProps) => {
  const { phoneState, handleSubmit } = useVerifyPhone();

  return (
    <article css={styles.root}>
      <section css={styles.titleContainer}>
        <Typography variant={"h4"} fontWeight={600}>
          {"휴대폰 인증"}
        </Typography>

        <Typography
          variant={"subtitle2"}
          css={css`
            opacity: 0.7;
          `}
        >
          {"인증번호를 받을 휴대폰 번호를 입력해주세요."}
        </Typography>
      </section>

      <section css={styles.inputContainer}>
        <PhoneField
          error={!!phoneState.error}
          helperText={phoneState.error}
          value={phoneState.value}
          onChange={phoneState.onChange}
          InputProps={{
            endAdornment: phoneState.isValid && (
              <NextIconBtn onClick={() => handleSubmit(onSubmit)} />
            ),
            sx: { px: 1 },
          }}
        />
      </section>
    </article>
  );
};

const styles = {
  root: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-top: 48px;
  `,
  titleContainer: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  inputContainer: css`
    display: flex;
    width: 100%;
    gap: 8px;
    margin-top: 48px;
  `,
};

const PhoneField = (p: TextFieldProps) => (
  <TextField
    fullWidth
    variant={"outlined"}
    type="tel"
    autoComplete="off"
    placeholder={"010 1234 1234"}
    css={css`
      letter-spacing: 1.5px;
    `}
    {...p}
  />
);

const NextIconBtn = (p: IconButtonProps) => (
  <IconButton color={"primary"} size={"small"} {...p}>
    <ArrowForwardRounded />
  </IconButton>
);
