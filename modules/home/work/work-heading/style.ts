import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const workHeadingCss = css`
  position: sticky;
  display: flex;
  top: 0;
  left: 0;
  height: 100vh;
  width: fit-content;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mediaQuery.mobile} {
    position: static;
    height: fit-content;
    display: block;
    margin: 0;
    width: 100%;
  }
`;

const commonMobile = css`
  ${mediaQuery.mobile} {
    text-align: center;
    width: 100%;
  }
`;

export const workMainHeadingCss = css`
  color: transparent;
  font-size: 5rem;
  font-family: var(--font-mono);
  -webkit-text-stroke: 1px var(--color-text-primary);
  ${commonMobile}
`;

export const workMainSubHeadingCss = css`
  text-align: center;
  width: 15em;
  font-size: 1.25em;
  display: block;
  ${commonMobile}
`;
