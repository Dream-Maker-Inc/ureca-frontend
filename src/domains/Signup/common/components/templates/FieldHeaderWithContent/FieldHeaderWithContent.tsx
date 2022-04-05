import { css } from "@emotion/react";
import { FieldHeader, FieldHeaderProps } from "../../FieldHeader";

export type FieldHeaderWithContentProps = {
  fieldHeaderProps: FieldHeaderProps;
  children: JSX.Element;
};

export const FieldHeaderWithContent = ({
  fieldHeaderProps,
  children,
}: FieldHeaderWithContentProps) => {
  return (
    <div css={root}>
      <FieldHeader {...fieldHeaderProps} />

      {children}
    </div>
  );
};

const root = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
`;
