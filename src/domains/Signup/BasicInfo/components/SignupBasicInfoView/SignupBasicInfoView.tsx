import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import { BasicForm } from "../BasicForm";
import { CorporateUserGuide } from "../../../common/components/CorporateUserGuide";
import { TermsForm } from "../TermsForm";
import { useSignupBasicInfoView } from "./useSignupBasicInfoView";

export const SignupBasicInfoView = () => {
  const { signup } = useSignupBasicInfoView();

  return (
    <main css={styles.root}>
      <article css={styles.inner}>
        <Typography variant="h4">회원가입</Typography>

        <section css={styles.corporateUserGuideWrapper}>
          <CorporateUserGuide />
        </section>

        <section css={styles.basicFormWrapper}>
          <BasicForm />
        </section>

        <section css={styles.termsFormWrapper}>
          <TermsForm />
        </section>

        <section css={styles.buttonWrapper}>
          <Button
            fullWidth
            variant="outlined"
            size={"large"}
            disabled={signup.disabled}
            onClick={signup.confirm}
          >
            가입하기
          </Button>
        </section>
      </article>
    </main>
  );
};

const styles = {
  root: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  `,
  inner: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;

    margin: 100px 0;
  `,
  corporateUserGuideWrapper: css`
    margin-top: 80px;
  `,
  basicFormWrapper: css`
    width: 100%;
    margin-top: 40px;
  `,
  termsFormWrapper: css`
    width: 100%;
    margin-top: 80px;
  `,
  buttonWrapper: css`
    width: 100%;
    margin-top: 60px;
  `,
};
