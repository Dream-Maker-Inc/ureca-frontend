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
  const { myPageInfos, events } = useMyPageView();

  const myPageIconData = {
    avatarImage:
      "https://images.unsplash.com/photo-1601158935942-52255782d322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80/",
    brandName: "드림메이커",
    brandInfo: "등록된 한 줄 소개가 없습니다.",
  };

  const basicInfoData = {
    username: "한*현",
    phone: "010 **** 7642",
    email: "***@dremaker.biz",
    bankname: "IBK기업은행",
    accountNum: "12116958001010",
    accountHolder: "주식회사 드림메이커",
  };

  const introduceSelfData = `
  Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
  `;

  const notificationData = {
    projectRegistrationInfo: "받기",
    projectProgressInfo: "받기",
    noticeInfo: "받기",
    marketingInfo: "받기",
  };

  return (
    <div css={styles.root}>
      <div css={styles.container}>
        <section css={styles.rootTitle}>
          <MyPageTitle>마이페이지</MyPageTitle>
        </section>

        <section css={styles.topContainer}>
          <div css={styles.topWrapper}>
            <TopTitle>프로필 관리</TopTitle>
            <InfoEditBtn onClick={handleEditInfo}>정보 수정하기</InfoEditBtn>
          </div>

          <MyPageIcon
            avatarImage={myPageIconData.avatarImage}
            brandNameText={myPageIconData.brandName}
            brandInfoText={myPageIconData.brandInfo}
          />
        </section>

        <div css={styles.bottomContainer}>
          <section css={styles.innerTopContainer}>
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

          <section css={styles.innerTopContainer}>
            <InnerTitle>상세 소개</InnerTitle>
            <ContentText>{introduceSelfData}</ContentText>
          </section>

          <hr css={styles.hr} />

          <section css={styles.innerTopContainer}>
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
    </div>
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
  topContainer: css`
    width: 100%;
  `,
  bottomContainer: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 100px;
    padding: 0 40px;
  `,
  topWrapper: css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  `,
  innerTopContainer: css`
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
