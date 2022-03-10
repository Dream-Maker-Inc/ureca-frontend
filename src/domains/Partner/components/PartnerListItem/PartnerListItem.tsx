import { OptionChip } from "@/common/components/chips/OptionChip";
import { PartnerType } from "@/common/policies/Partner";
import { Shape } from "@/themes/Shape";
import { css } from "@emotion/react";
import {
  Avatar,
  AvatarProps,
  Button,
  ButtonProps,
  ChipProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import { PartnerCertificationItem } from "./PartnerCertificationItem";
import { usePartnerListItem } from "./usePartnerListItem";

export type PartnerListItemChipModel = {
  label: string;
  chipProps?: ChipProps;
};

export type PartnerListItemProps = {
  userAvatar: string;
  username: string;
  partnerType: PartnerType;
  chipModels: PartnerListItemChipModel[];
};

export const PartnerListItem = ({
  userAvatar,
  username,
  partnerType,
  chipModels,
}: PartnerListItemProps) => {
  const { onClick } = usePartnerListItem();
  const isCorporate = partnerType === "corporate";

  return (
    <RootButton onClick={onClick}>
      <article css={styles.inner}>
        <section css={styles.left}>
          <div css={styles.partnerWrapper}>
            <StyledAvatar src={userAvatar} />
            <PartnerName>{username}</PartnerName>
          </div>

          <div css={styles.chipsContainer}>
            {chipModels.map((it, index) => (
              <OptionChip
                key={it.label + index}
                {...it.chipProps}
                label={it.label}
              />
            ))}
          </div>
        </section>

        <div css={styles.certificationWrapper(isCorporate)}>
          <PartnerCertificationItem />
        </div>
      </article>
    </RootButton>
  );
};

const styles = {
  inner: css`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
  `,
  left: css`
    display: flex;
    flex-direction: column;
    padding: 16px;
  `,
  partnerWrapper: css`
    display: flex;
    align-items: center;
    gap: 12px;
  `,
  chipsContainer: css`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 12px;
  `,
  certificationWrapper: (isCorporate: boolean) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    visibility: ${!isCorporate && "hidden"};
  `,
};

const RootButton = (p: ButtonProps) => (
  <Button
    sx={{
      padding: 0,
      minWidth: 0,
      height: "140px",
      textAlign: "start",
      borderRadius: Shape.Medium,
      border: "1px solid #eee",
      overflow: "hidden",
    }}
    {...p}
  />
);

const StyledAvatar = (p: AvatarProps) => (
  <Avatar
    sx={{ width: "40px", height: "40px", border: "1px solid #eee" }}
    {...p}
  />
);

const PartnerName = (p: TypographyProps) => (
  <Typography variant={"h6"} color={"text.secondary"} fontWeight={700} {...p} />
);
