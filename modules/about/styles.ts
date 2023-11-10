import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const aboutSectionCss = css`
  min-height: 100vh;
  width: 100%;
  --padding-top: 35vh;
  ${mediaQuery.desktop} {
    display: flex;
  }
`;
