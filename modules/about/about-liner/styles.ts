import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const aboutLinerCss = css`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 1.2em;
  margin-top: calc(10vh + 70px);
  font-size: 2rem;
  ${mediaQuery.desktop} {
    font-size: 2.5vw;
    padding: 0 1em;
    padding-top: var(--padding-top);
    width: 50%;
    height: 100vh;
    position: sticky;
    top: 0;
    left: 0;
    margin-top: 0;
  }
  ${mediaQuery.mobile} {
    margin-bottom: 50px;
    font-size: 1.4rem;
  }
`;