import CertificationIcon2 from "@/common/components/icons/CertificationIcon2";
import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Tooltip } from "@mui/material";

export const PartnerCertificationItem = () => {
  return (
    <div css={styles.root}>
      <div css={styles.topRightTriangle} />

      <div css={styles.iconWrapper}>
        <Tooltip title={"유레카 파트너"}>
          <CertificationIcon2 htmlColor={"#fff"} />
        </Tooltip>
      </div>
    </div>
  );
};

const styles = {
  root: css`
    display: flex;
    flex-direction: column;
    position: relative;
  `,
  topRightTriangle: css`
    width: 0;
    height: 0;
    border-top: 80px solid ${LightColor.Primary};
    border-left: 80px solid transparent;
    opacity: 0.8;
  `,
  iconWrapper: css`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 12px;
    right: 12px;
  `,
};
