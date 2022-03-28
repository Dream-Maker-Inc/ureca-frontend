import { companyType } from "@/common/policies/Partner/Company.type";
import { FormTitle } from "@/domains/Signup/common/components/FormTitle";
import { FieldHeaderWithContent } from "@/domains/Signup/common/components/templates/FieldHeaderWithContent";
import { SignupViewTemplate } from "@/domains/Signup/common/components/templates/SignupViewTemplate";
import { signupStyles } from "@/domains/Signup/common/styles/Signup.style";
import { css } from "@emotion/react";
import { Button, Divider, Stack, TextField } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React from "react";
import { SmallCaption } from "../../../common/components/SmallCaption";
import { useCompanyInfoView } from "./useCompanyInfoView";

export const CompanyInfoView = () => {
  const {
    brandNameState,
    companyTypeState,
    brnState,
    ownerNameState,
    contactNumberState,
    homepageState,
    emailState,
    submitState,
  } = useCompanyInfoView();

  const { formStyle } = signupStyles;

  return (
    <SignupViewTemplate>
      <section css={styles.root}>
        <form css={formStyle.basicForm}>
          <FormTitle>부가 정보</FormTitle>

          <FieldHeaderWithContent
            fieldHeaderProps={{
              title: "상호명",
              description: "사업자등록증상 상호명을 입력해 주세요.",
              requirement: true,
            }}
          >
            <TextField
              placeholder="상호명을 입력하세요."
              variant="outlined"
              value={brandNameState.value}
              onChange={brandNameState.onChange}
            />
          </FieldHeaderWithContent>

          <FieldHeaderWithContent
            fieldHeaderProps={{
              title: "기업형태",
              description:
                "개인과 법인 중 선택해 주세요. 주식회사는 법인을 선택하시면 됩니다.",
              requirement: true,
            }}
          >
            <ToggleButtonGroup
              color="primary"
              fullWidth
              exclusive
              value={companyTypeState.value}
              onChange={(_, value) => companyTypeState.onChange(value)}
            >
              <ToggleButton value={companyType.private}>개인</ToggleButton>
              <ToggleButton value={companyType.corporate}>법인</ToggleButton>
            </ToggleButtonGroup>
          </FieldHeaderWithContent>

          <FieldHeaderWithContent
            fieldHeaderProps={{
              title: "사업자 인증",
              description:
                "사업자등록번호를 입력하신 후 인증 버튼을 클릭해 주세요.",
              requirement: true,
            }}
          >
            <Stack direction="row" gap={"12px"} whiteSpace={"nowrap"}>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="사업자등록번호를 입력하세요."
                inputProps={{ maxLength: 12 }}
                helperText={
                  <SmallCaption color={brnState.helper.color}>
                    {brnState.helper.text}
                  </SmallCaption>
                }
                value={brnState.value}
                onChange={brnState.onChange}
              />
              <Button
                variant="outlined"
                disabled={brnState.confirm.disabled}
                onClick={brnState.confirm.request}
                sx={{ height: "56px" }}
              >
                인증하기
              </Button>
            </Stack>
          </FieldHeaderWithContent>

          <FieldHeaderWithContent
            fieldHeaderProps={{
              title: "대표자명",
              description: "사업자등록증상 대표자명을 입력해 주세요.",
              requirement: true,
            }}
          >
            <TextField
              placeholder="대표자명을 입력하세요."
              variant="outlined"
              value={ownerNameState.value}
              onChange={ownerNameState.onChange}
            />
          </FieldHeaderWithContent>

          <Divider sx={{ width: "100%", my: "20px" }} />

          <section css={styles.optionalInfoContainer}>
            <FormTitle>추가 정보</FormTitle>

            <FieldHeaderWithContent
              fieldHeaderProps={{
                title: "대표번호",
                description:
                  "전문가 상세 정보에 표시할 회사 대표 번호를 입력해 주세요.",
              }}
            >
              <TextField
                variant="outlined"
                placeholder="대표번호를 입력하세요."
                inputProps={{ maxLength: 13 }}
                helperText={
                  <SmallCaption color={contactNumberState.helper.color}>
                    {contactNumberState.helper.text}
                  </SmallCaption>
                }
                value={contactNumberState.value}
                onChange={contactNumberState.onChange}
              />
            </FieldHeaderWithContent>

            <FieldHeaderWithContent
              fieldHeaderProps={{
                title: "홈페이지 주소",
                description:
                  "전문가 상세 정보에 표시할 홈페이지 주소를 입력해 주세요.",
              }}
            >
              <TextField
                variant="outlined"
                placeholder="홈페이지 주소를 입력하세요."
                helperText={
                  <SmallCaption color={homepageState.helper.color}>
                    {homepageState.helper.text}
                  </SmallCaption>
                }
                value={homepageState.value}
                onChange={homepageState.onChange}
              />
            </FieldHeaderWithContent>

            <FieldHeaderWithContent
              fieldHeaderProps={{
                title: "이메일",
                description:
                  "전문가 상세 정보에 표시할 이메일 주소를 입력해 주세요.",
              }}
            >
              <TextField
                variant="outlined"
                placeholder="이메일을 입력하세요."
                helperText={
                  <SmallCaption color={emailState.helper.color}>
                    {emailState.helper.text}
                  </SmallCaption>
                }
                value={emailState.value}
                onChange={emailState.onChange}
              />
            </FieldHeaderWithContent>

            <Button
              variant="contained"
              size={"large"}
              disabled={submitState.disabled}
              onClick={submitState.confirm}
            >
              등록하기
            </Button>
          </section>
        </form>
      </section>
    </SignupViewTemplate>
  );
};

const styles = {
  root: css`
    width: 100%;
  `,
  optionalInfoContainer: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 40px;
  `,
};
