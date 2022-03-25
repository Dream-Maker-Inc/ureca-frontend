
import { css } from "@emotion/react";
import Chip, { ChipProps } from "@mui/material/Chip";
import Typography, { TypographyProps } from "@mui/material/Typography";
import Image from "next/image";

export type ProjectCardModel = {
  thumbnail: string;
  title: string;
  contents: string[];
  options: {
    icon: JSX.Element;
    label: string;
  }[];
};

export type ProjectCardProps = {
  model: ProjectCardModel;
  minWidth?: string;
};

export const ProjectCard = ({
  model,
  minWidth = "300px",
}: ProjectCardProps) => {
  const { thumbnail, title, contents, options } = model;

  return (
    <article css={styles.root(minWidth)}>
      <section css={styles.thumbnail}>
        <Image layout={"fill"} src={thumbnail} alt={"thumbnail"} />
      </section>

      <section css={styles.contents}>
        <dl>
          <MetaDataTitle>{title}</MetaDataTitle>

          <div css={styles.metaData}>
            {contents.map((it, index) => (
              <MetaData key={index}>{it}</MetaData>
            ))}
          </div>
        </dl>

        <ul css={styles.chips}>
          {options.map((it, index) => (
            <li key={index}>
              <StyledChip avatar={it.icon} label={it.label} />
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

const styles = {

  root: (minWidth: string) => css`
    width: ${minWidth};

    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 4px #ddd;
    overflow: hidden;
  `,
  thumbnail: css`
    position: relative;
    width: 100%;
    aspect-ratio: 1/1;
  `,
  contents: css`
    display: flex;
    flex-direction: column;
    padding: 16px;
    border-top: 1px solid #eee;
  `,
  metaData: css`
    margin-top: 4px;
    opacity: 0.6;
  `,
  chips: css`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 16px;
  `,
};

const MetaDataTitle = (p: TypographyProps) => (
  <Typography component={"dt"} {...p} />
);

const MetaData = (p: TypographyProps) => (
  <Typography component={"dd"} variant="body2" {...p} />
);

const StyledChip = (p: ChipProps) => (
  <Chip size={"small"} sx={{ opacity: 0.8 }} {...p} />
);
