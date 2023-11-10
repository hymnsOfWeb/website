import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const aboutMainContainerCss = css`
  padding: 0 2em;
  padding-bottom: 20vh;
  font-size: 1.2rem;
  ${mediaQuery.desktop} {
    padding-top: var(--padding-top);
    width: 50%;
  }
  ${mediaQuery.mobile} {
    padding: 0 1em;
    font-size: 1rem;
  }
`;
