import { SignupViewTemplate } from "@/domains/Signup/common/components/templates/SignupViewTemplate";
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { CorporateUserGuide } from "../../../common/components/CorporateUserGuide";
import { BasicForm } from "../BasicForm";
import { TermsForm } from "../TermsForm";
import { useBasicInfoView } from "./useBasicInfoView";

export const BasicInfoView = () => {
  const { signup } = useBasicInfoView();

  return (
    <SignupViewTemplate>
      <section>
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
    </SignupViewTemplate>
  );
};

const styles = {
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
