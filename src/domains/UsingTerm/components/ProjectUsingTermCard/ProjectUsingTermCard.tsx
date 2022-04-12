import { css } from "@emotion/react";
import { Card, Typography } from "@mui/material";
import { AgreeAllCheckButton } from "../AgreeAllCheckButton/AgreeAllCheckButton";

const descriptions = [
  "· 작성하신 프로젝트 관련 내용이 미비할 경우 관리자의 판단에 따라 프로젝트 내용 수정을 요청할 수 있습니다.",
  "· 플랫폼 성격에 무관하거나 위법한 내용 등이 포함될 경우 임의로 프로젝트가 삭제될 수 있습니다.",
  "· 등록하신 프로젝트는 유레카 메인 혹은 프로젝트 리스트에 노출될 수 있습니다.",
];

export type ProjectUsingTermCardProps = {
  checked: boolean;
  onToggle: () => void;
};

export const ProjectUsingTermCard = ({
  checked,
  onToggle,
}: ProjectUsingTermCardProps) => {
  return (
    <Card component={"article"} css={styles.root}>
      <AgreeAllCheckButton checked={checked} onToggle={onToggle} />

      <ul css={styles.descContainer}>
        {descriptions.map((it, index) => (
          <li key={index}>
            <Typography variant="body2">{it}</Typography>
          </li>
        ))}
      </ul>
    </Card>
  );
};

const styles = {
  root: css`
    padding: 12px;
  `,
  descContainer: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    opacity: 0.5;
  `,
};
