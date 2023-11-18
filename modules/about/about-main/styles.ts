import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const aboutMainContainerCss = css`
  font-size: 1.2rem;
  ${mediaQuery.desktop} {
    padding-top: var(--padding-top);
    width: 50%;
    padding-bottom: 20vh;
  }
  ${mediaQuery.mobile} {
    font-size: 1rem;
  }
`;
