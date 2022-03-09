import { MobileAppbarTemplate } from "@/common/components/appbar/MobileAppbar";
import { Logo } from "@/common/components/logo/UrecaLogo";
import { css } from "@emotion/react";
import {
  CloseRounded,
  FilterListRounded,
  SearchRounded,
} from "@mui/icons-material";
import {
  Divider,
  IconButton,
  IconButtonProps,
  InputBase,
  Tooltip,
} from "@mui/material";
import Link from "next/link";
import { usePortfolioMobileAppbar } from "./usePortfolioMobileAppbar";

export type PortfolioMobileAppbarProps = {
  onBack: () => void;
  onSearch: (keyword: string) => void;
};

export const PortfolioMobileAppbar = ({
  onBack,
  onSearch,
}: PortfolioMobileAppbarProps) => {
  const { searchMode, searchState } = usePortfolioMobileAppbar(onSearch);

  return (
    <MobileAppbarTemplate
      title={
        searchMode.value ? (
          <InputBase
            fullWidth
            sx={{ ml: 1 }}
            autoFocus
            placeholder="포트폴리오 검색"
            value={searchState.value}
            onChange={searchState.onChange}
            onKeyUp={searchState.onKeyUp}
          />
        ) : (
          <UrecaLogo />
        )
      }
      right={
        <section css={styles.right}>
          {searchMode.value ? (
            <CloseIconButton onClick={searchMode.toggle} />
          ) : (
            <SearchIconButton onClick={searchMode.toggle} />
          )}

          <VerticalDivider />

          <FilterIconButton />
        </section>
      }
      onBack={onBack}
    />
  );
};

const styles = {
  right: css`
    display: flex;
    flex-direction: row;
    height: fit-content;
  `,
};

const UrecaLogo = () => (
  <Link href={"/"} passHref>
    <div
      css={css`
        position: relative;
        width: 60px;
        height: 28px;
        cursor: pointer;
      `}
    >
      <Logo />
    </div>
  </Link>
);

const VerticalDivider = () => (
  <div
    css={css`
      margin: 8px 4px;
    `}
  >
    <Divider orientation={"vertical"} />
  </div>
);

const CloseIconButton = (p: IconButtonProps) => (
  <IconButton {...p}>
    <CloseRounded />
  </IconButton>
);

const SearchIconButton = (p: IconButtonProps) => (
  <Tooltip title={"검색"}>
    <IconButton {...p}>
      <SearchRounded />
    </IconButton>
  </Tooltip>
);

const FilterIconButton = (p: IconButtonProps) => (
  <Tooltip title={"필터링"}>
    <IconButton edge={"end"} {...p}>
      <FilterListRounded />
    </IconButton>
  </Tooltip>
);
