import { TitleWithDesc } from "@/common/components/TitleWithDesc";
import { verticalScrollable } from "@/common/styles/Scrollable";
import { css } from "@emotion/react";
import { ProjectListItem } from "../ProjectListItem";
import { useProjectsView } from "./useProjectsView";

export const ProjectsView = () => {
  const { projects } = useProjectsView();

  return (
    <main css={styles.root}>
      <section css={styles.contentSection}>
        <header css={styles.contentHeader}>
          <TitleWithDesc
            title={"프로젝트 찾기"}
            desc={"새로운 프로젝트를 찾아보세요."}
          />
        </header>

        <section css={styles.projectListContainer}>
          {projects.map((it) => (
            <ProjectListItem key={it.title} {...it} />
          ))}
        </section>
      </section>
    </main>
  );
};

const styles = {
  root: css`
    ${verticalScrollable}
    display: flex;
    width: 100%;
    height: 100%;
  `,
  contentSection: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 16px;
  `,
  contentHeader: css`
    margin-top: 16px;
    margin-bottom: 32px;
  `,
  projectListContainer: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 8px;
  `,
};
