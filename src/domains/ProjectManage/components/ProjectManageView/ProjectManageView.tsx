import { SearchBar } from "@/common/components/SearchBar";
import { css } from "@emotion/react";
import {
  MenuItem,
  Select,
  Stack,
  Typography,
  TypographyProps,
  TextFieldProps,
} from "@mui/material";
import { FilterType } from "../../type/FilterType";
import { ProjectType } from "../../type/ProjectType";
import { ProjectListItem } from "../ProjectListItem";
import { useProjectManageView } from "./useProjectManageView";

export const ProjectManageView = () => {
  const { projects, filterState, projectState, keywordState, selectState } =
    useProjectManageView();

  type SearchBarProps = {
    textFieldProps?: TextFieldProps;
  };

  return (
    <main css={styles.root}>
      <div css={styles.container}>
        <section css={styles.rootTitle}>
          <MyPageTitle>마이페이지</MyPageTitle>
        </section>
        <section css={styles.categorySection}>
          <div css={styles.subtitleWrapper}>
            <TopTitle>프로필 관리</TopTitle>
          </div>
          <div css={styles.contentWrapper}>
            <Select
              value={projectState.value}
              onChange={projectState.onChange}
              displayEmpty
              sx={{ width: "25%" }}
            >
              <MenuItem value={ProjectType.ALL}>모든 프로젝트</MenuItem>
              <MenuItem value={ProjectType.PROCESSING}>
                진행중인 프로젝트
              </MenuItem>
              <MenuItem value={ProjectType.COMPLETED}>완료된 프로젝트</MenuItem>
            </Select>
            <Select
              value={filterState.value}
              onChange={filterState.onChange}
              displayEmpty
              sx={{ width: "25%" }}
            >
              <MenuItem value={FilterType.NICKNAME}>닉네임</MenuItem>
              <MenuItem value={FilterType.PRICE}>가격</MenuItem>
              <MenuItem value={FilterType.CONTENT}>내용</MenuItem>
            </Select>
            <SearchBar
              textFieldProps={{
                value: keywordState.value,
                onChange: (e) => keywordState.onChange(e.target.value),
                sx: { width: "50%" },
              }}
              onEndIconClick={selectState.onClick}
            />
          </div>
        </section>
        <section css={styles.projectSection}>
          {projects.map((it, index) => (
            <ProjectListItem key={index} {...it} />
          ))}
        </section>
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
    padding: 100px 0;
  `,
  categorySection: css`
    width: 100%;
    margin-bottom: 40px;
  `,
  subtitleWrapper: css`
    width: 100%;
    margin-bottom: 40px;
  `,
  contentWrapper: css`
    width: 100%;
    display: flex;
    gap: 20px;
  `,

  projectSection: css`
    width: 100%;
    height: 100%;
  `,
  rootTitle: css`
    margin: 0 auto;
    margin-bottom: 100px;
  `,
};

const MyPageTitle = (p: TypographyProps) => (
  <Typography variant="h4" fontWeight={700} {...p} />
);

const TopTitle = (p: TypographyProps) => (
  <Typography variant="h5" fontWeight={600} {...p} />
);
