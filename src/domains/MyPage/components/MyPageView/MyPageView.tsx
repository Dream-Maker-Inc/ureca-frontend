import { css } from "@emotion/react";
import {
  Typography,
  TypographyProps,
  Button,
  ButtonProps,
} from "@mui/material";
import { MyPageIcon } from "../MyPageIcon";
import { MyPageInfo } from "../MyPageInfo";
import { useMyPageView } from "./useMyPageView";

export const MyPageView = () => {
  const {
    myPageIconData,
    basicInfoData,
    introduceSelfData,
    notificationData,
    infoEditClick,
  } = useMyPageView();

  return (
    <main css={styles.root}>
      <div css={styles.container}>
        <section css={styles.rootTitle}>
          <MyPageTitle>마이페이지</MyPageTitle>
        </section>

        <section css={styles.categorySection}>
          <div css={styles.topWrapper}>
            <TopTitle>프로필 관리</TopTitle>
            <InfoEditBtn onClick={infoEditClick}>정보 수정하기</InfoEditBtn>
          </div>

          <MyPageIcon
            avatarImage={myPageIconData.avatarImage}
            brandNameText={myPageIconData.brandNameText}
            brandInfoText={myPageIconData.brandInfoText}
          />
        </section>

        <div css={styles.bottomContainer}>
          <section css={styles.contentSection}>
            <InnerTitle>기본 정보</InnerTitle>

            <div css={styles.innerContainer}>
              <div css={styles.innerLeftWrapper}>
                <MyPageInfo title="실명" desc={basicInfoData.username} />
                <MyPageInfo title="휴대폰 번호" desc={basicInfoData.phone} />
                <MyPageInfo title="이메일" desc={basicInfoData.email} />
              </div>
              <div css={styles.innerRightWrapper}>
                <MyPageInfo title="은행명" desc={basicInfoData.bankname} />
                <MyPageInfo title="계좌 번호" desc={basicInfoData.accountNum} />
                <MyPageInfo title="예금주" desc={basicInfoData.accountHolder} />
              </div>
            </div>
          </section>

          <hr css={styles.hr} />

          <section css={styles.contentSection}>
            <InnerTitle>상세 소개</InnerTitle>
            <ContentText>{introduceSelfData}</ContentText>
          </section>

          <hr css={styles.hr} />

          <section css={styles.contentSection}>
            <InnerTitle>알림 정보 (알림톡)</InnerTitle>
            <div css={styles.innerContainer}>
              <div css={styles.innerLeftWrapper}>
                <MyPageInfo
                  title="프로젝트 등록 정보"
                  desc={notificationData.projectRegistrationInfo}
                />
                <MyPageInfo
                  title="프로젝트 진행 및 계약 정보"
                  desc={notificationData.projectProgressInfo}
                />
              </div>
              <div css={styles.innerRightWrapper}>
                <MyPageInfo
                  title="공지사항 및 주요 정보"
                  desc={notificationData.noticeInfo}
                />
                <MyPageInfo
                  title="마케팅 및 홍보 메시지"
                  desc={notificationData.marketingInfo}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

const styles = {
  root: css`
    width: 1024px;
    min-height: 100%;
    margin: 0 auto;
  `,
  container: css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 100px;
    padding: 100px 0;
  `,
  rootTitle: css`
    margin: 0 auto;
  `,
  categorySection: css`
    width: 100%;
  `,
  topWrapper: css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  `,
  bottomContainer: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 100px;
    padding: 0 40px;
  `,

  contentSection: css`
    width: 100%;
  `,
  innerLeftWrapper: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-right: 1px solid #ddd;
    padding-right: 40px;
  `,
  innerRightWrapper: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 40px;
  `,
  innerContainer: css`
    width: 100%;
    display: flex;
  `,

  hr: css`
    width: 100%;
    opacity: 0.3;
  `,
};

const MyPageTitle = (p: TypographyProps) => (
  <Typography variant="h4" fontWeight={700} {...p} />
);

const TopTitle = (p: TypographyProps) => (
  <Typography variant="h5" fontWeight={600} {...p} />
);

const InfoEditBtn = (p: ButtonProps) => (
  <Button variant="outlined" color={"primary"} size={"small"} {...p} />
);

const InnerTitle = (p: TypographyProps) => (
  <Typography variant="h6" sx={{ marginBottom: "40px" }} {...p} />
);

const ContentText = (p: TypographyProps) => (
  <Typography fontSize={"subtitle1"} sx={{ opacity: 0.7 }} {...p} />
);
