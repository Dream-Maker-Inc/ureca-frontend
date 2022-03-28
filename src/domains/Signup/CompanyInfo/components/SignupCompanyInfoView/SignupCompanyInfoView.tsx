import { SignupPolicy } from "@/common/policies";
import { CompanySignupFormAtom } from "@/recoil/CompanySignUp";
import { formatToPhoneNumberWithDash } from "@/utils/format/FormatPhoneWithDash/formatToPhoneNumberWithDash";
import { css } from "@emotion/react";
import {
  Button,
  Stack,
  TextField,
  Typography,
  TypographyProps,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { SmallCaption } from "../../../common/components/SmallCaption";
import { FieldHeader } from "../../../common/components/FieldHeader";
import { signupStyles } from "@/domains/Signup/common/styles/Signup.style";

const formatToPhoneNumber = (num: string) => {
  return formatToPhoneNumberWithDash(num);
};

export const SignupCompanyInfoView = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "all",
    reValidateMode: "onChange",
  });

  const onValid = (data: any) => {
    console.log(data);
  };

  const [businessNumValid, setBusinessNumValid] = useRecoilState(
    CompanySignupFormAtom
  );

  const { formStyle } = signupStyles;

  return (
    <div css={styles.root}>
      <div css={styles.inner}>
        <Title>회원가입</Title>

        <form css={formStyle.basicForm} onSubmit={handleSubmit(onValid)}>
          <Typography variant="h6" fontWeight={"400"}>
            부가 정보
          </Typography>

          <div css={formStyle.formFieldWrapper}>
            <FieldHeader
              title={"상호명"}
              description={"사업자등록증상 상호명을 입력해 주세요."}
              requirement
            />

            <TextField
              id="outlined-basic"
              placeholder="상호명을 입력하세요."
              variant="outlined"
              helperText={
                <SmallCaption color={"error"}>
                  {errors?.brandName?.message}
                </SmallCaption>
              }
              {...register("brandName", {
                required: "상호명을 입력하세요",
              })}
            />
          </div>

          <div css={formStyle.formFieldWrapper}>
            <FieldHeader
              title={"기업형태"}
              description={
                "개인과 법인 중 선택해 주세요. 주식회사는 법인을 선택하시면 됩니다."
              }
              requirement
            />

            <Controller
              name="toggle"
              rules={{ required: true }}
              defaultValue=""
              render={() => {
                return (
                  <ToggleButtonGroup
                    color="primary"
                    fullWidth
                    size="large"
                    exclusive
                    value={getValues("toggle")}
                    onChange={(e, value) => {
                      if (value !== null) {
                        setValue("toggle", value);
                      }
                    }}
                  >
                    <ToggleButton value="personal">개인</ToggleButton>
                    <ToggleButton value="business">법인</ToggleButton>
                  </ToggleButtonGroup>
                );
              }}
              control={control}
            />
          </div>

          <Controller
            name="businessNum"
            control={control}
            render={() => (
              <div css={formStyle.formFieldWrapper}>
                <FieldHeader
                  title={"사업자 인증"}
                  description={
                    "사업자등록번호를 입력하신 후 인증 버튼을 클릭해 주세요."
                  }
                  requirement
                />

                <Stack direction="row">
                  <TextField
                    id="outlined-basic"
                    placeholder="사업자등록번호를 입력하세요."
                    variant="outlined"
                    disabled={!businessNumValid}
                    sx={{ width: "100%", marginRight: "12px" }}
                    inputProps={{ maxLength: 12 }}
                    helperText={
                      <Stack direction="row">
                        <SmallCaption color={"error"}>
                          {errors?.businessNum?.message}
                        </SmallCaption>
                        <SmallCaption color={"primary"}>
                          {!businessNumValid ? "인증되었어요" : ""}
                        </SmallCaption>
                      </Stack>
                    }
                    {...register("businessNum", {
                      required: true,

                      validate: {
                        businessNumReg: (value) =>
                          SignupPolicy.validateBusinessNum(value) ||
                          value === ""
                            ? true
                            : "사업자등록번호 형식에 맞지 않아요.",
                      },
                    })}
                  />
                  <Button
                    variant="outlined"
                    disabled={!businessNumValid}
                    onClick={() => {
                      const value = getValues("businessNum");
                      SignupPolicy.validateBusinessNum(value)
                        ? setBusinessNumValid((old) => !old)
                        : false;
                      console.log({ businessNumValid });
                    }}
                    size="large"
                    sx={{ width: "40%", height: "58px" }}
                  >
                    인증하기
                  </Button>
                </Stack>
              </div>
            )}
          />

          <div css={formStyle.formFieldWrapper}>
            <FieldHeader
              title={"대표자명"}
              description={"사업자등록증상 대표자명을 입력해 주세요."}
              requirement
            />

            <TextField
              id="outlined-basic"
              placeholder="대표자명을 입력하세요."
              variant="outlined"
              helperText={
                <SmallCaption color={"error"}>
                  {errors?.repName?.message}
                </SmallCaption>
              }
              {...register("repName", {
                required: "대표자명을 입력하세요",
              })}
            />
          </div>
          <hr css={styles.hr} />
          <div css={styles.subContainer}>
            <SubTitle>추가 정보</SubTitle>
            <Controller
              name="repNum"
              control={control}
              rules={{
                min: {
                  value: 10,
                  message: "전화 번호 형식에 맞지 않아요.",
                },
                max: {
                  value: 11,
                  message: "전화 번호 형식에 맞지 않아요.",
                },
                validate: {
                  repNumReg: (value) =>
                    SignupPolicy.validatePhoneNumber(value) || value === ""
                      ? true
                      : "전화 번호 형식에 맞지 않아요.",
                },
              }}
              render={() => (
                <div css={formStyle.formFieldWrapper}>
                  <FieldHeader
                    title={"대표번호"}
                    description={
                      "전문가 상세 정보에 표시할 회사 대표 번호를 입력해 주세요."
                    }
                  />

                  <TextField
                    id="outlined-basic"
                    placeholder="대표번호를 입력하세요."
                    variant="outlined"
                    inputProps={{ maxLength: 13 }}
                    value={getValues("repNum")}
                    onChange={(e) => {
                      setValue("repNum", formatToPhoneNumber(e.target.value));
                      console.log(formatToPhoneNumber(e.target.value));
                    }}
                    helperText={
                      <SmallCaption color={"error"}>
                        {errors?.repNum?.message}
                      </SmallCaption>
                    }
                  />
                </div>
              )}
            />

            <div css={formStyle.formFieldWrapper}>
              <FieldHeader
                title={"홈페이지 주소"}
                description={
                  "전문가 상세 정보에 표시할 홈페이지 주소를 입력해 주세요."
                }
              />

              <TextField
                id="outlined-basic"
                placeholder="홈페이지 주소를 입력하세요."
                variant="outlined"
                helperText={
                  <SmallCaption color={"error"}>
                    {errors?.siteAddress?.message}
                  </SmallCaption>
                }
                {...register("siteAddress", {
                  validate: {
                    siteReg: (value) =>
                      SignupPolicy.validateSite(value) || value === ""
                        ? true
                        : "http:// 또는 https:// 로 시작하는 정보를 입력해 주세요.",
                  },
                })}
              />
            </div>

            <div css={formStyle.formFieldWrapper}>
              <FieldHeader
                title={"이메일"}
                description={
                  "전문가 상세 정보에 표시할 홈페이지 주소를 입력해 주세요."
                }
              />

              <TextField
                id="outlined-basic"
                placeholder="홈페이지 주소를 입력하세요."
                variant="outlined"
                helperText={
                  <SmallCaption color={"error"}>
                    {errors?.emailAddress?.message}
                  </SmallCaption>
                }
                {...register("emailAddress", {
                  validate: {
                    emailReg: (value) =>
                      SignupPolicy.validateEmail(value) || value === ""
                        ? true
                        : "이메일 형식이 다릅니다.",
                  },
                })}
              />
            </div>

            <Button
              type="submit"
              sx={{
                height: "56px",
                fontSize: "16px",
              }}
              disabled={!isDirty || !isValid || businessNumValid}
              variant="outlined"
            >
              가입하기
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  root: css`
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    padding: 100px 0;
  `,
  inner: css`
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  `,
  subContainer: css`
    display: flex;
    flex-direction: column;
    gap: 40px;
  `,
  hr: css`
    width: 100%;
    color: "black";
    opacity: 0.2;
    margin: 40px 0;
  `,
};

const SubTitle = (p: TypographyProps) => (
  <Typography
    variant={"subtitle1"}
    fontWeight={700}
    color={"text.secondary"}
    fontSize={"18px"}
    {...p}
  />
);

const Title = (p: TypographyProps) => (
  <Typography
    variant={"subtitle1"}
    fontWeight={800}
    color={"text.secondary"}
    fontSize={"24px"}
    sx={{
      alignSelf: "center",
    }}
    {...p}
  />
);

export default SignupCompanyInfoView;
