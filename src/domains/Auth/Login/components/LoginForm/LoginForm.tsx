import { PasswordTextField } from "@/common/components/inputs/PasswordTextField";
import { useThemeHook } from "@/themes/CustomThemes";
import { css } from "@emotion/react";
import { MailOutlineRounded } from "@mui/icons-material";
import {
  Button,
  InputAdornment,
  TextField,
  TextFieldProps,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { SocialLoginGroup } from "../SocialLoginGroup";
import { useLoginForm } from "./useLoginForm";

export type LoginFormProps = {
  onSignup: () => void;
};

const LoginForm = ({ onSignup }: LoginFormProps) => {
  const { emailState, pwState, handlePasswordFind, handleLogin } =
    useLoginForm();

  return (
    <form css={styles.root}>
      <section css={styles.accountSection}>
        <EmailTextField
          value={emailState.value}
          onChange={emailState.onChange}
        />
        <PasswordTextField
          fullWidth
          value={pwState.value}
          onChange={pwState.onChange}
        />
      </section>

      <section css={styles.pwFindSection}>
        <Tooltip title={"비밀번호 찾기"}>
          <Button variant={"text"} onClick={handlePasswordFind}>
            <Typography variant={"caption"}>{"도움이 필요하세요?"}</Typography>
          </Button>
        </Tooltip>
      </section>

      <section css={styles.buttonSection}>
        <Button fullWidth variant={"contained"} onClick={handleLogin}>
          {"로그인"}
        </Button>
      </section>

      <section css={styles.signupSection}>
        <Typography variant={"caption"} color={"grey.400"}>
          {"유레카가 처음이세요?"}
        </Typography>
        <Button variant={"text"} onClick={onSignup}>
          <Typography variant={"caption"}>{"회원가입"}</Typography>
        </Button>
      </section>

      <section css={styles.socialLoginSection}>
        <SocialLoginGroup />
      </section>
    </form>
  );
};

export default React.memo(LoginForm);

const styles = {
  root: css`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,

  accountSection: css`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,

  pwFindSection: css`
    display: flex;
    width: 100%;
    justify-content: flex-end;
  `,

  buttonSection: css`
    margin-top: 24px;
  `,

  signupSection: css`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  `,

  socialLoginSection: css`
    margin-top: 32px;
  `,
};

const EmailTextField = (p: TextFieldProps) => {
  const { palette } = useThemeHook();
  const inputIconColor = palette.grey["400"];

  return (
    <TextField
      fullWidth
      variant={"outlined"}
      placeholder={"이메일"}
      type={"email"}
      InputProps={{
        startAdornment: (
          <InputAdornment position={"start"} sx={{ mt: "-2px" }}>
            <Tooltip title={"이메일을 입력해주세요."}>
              <MailOutlineRounded
                htmlColor={inputIconColor}
                fontSize={"small"}
              />
            </Tooltip>
          </InputAdornment>
        ),
      }}
      {...p}
    />
  );
};
