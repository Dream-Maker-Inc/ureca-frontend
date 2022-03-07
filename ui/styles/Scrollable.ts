import { css } from "@emotion/react";
import { ScreenType } from "../themes/Limit";

export const horizontalScrollable = css`
  overflow-x: scroll;
  padding-bottom: 1rem;

  @media (max-width: ${ScreenType.md}px) {
    padding-bottom: 0;

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const verticalScrollable = css`
  overflow-y: scroll;

  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */

  &::-webkit-scrollbar {
    display: none;
  }
`;
