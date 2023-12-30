import { css } from "@emotion/react";
import { mediaQuery, textOutlineShadow } from "@common-styles";

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
  opacity: 0.9;
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
  color: var(--color-bg-primary);
  font-size: 4.5rem;
  font-family: var(--font-primary);
  text-shadow: ${textOutlineShadow("var(--color-secondary-400)")};
  ${commonMobile}
  ${mediaQuery.mobile} {
    font-size: 3rem;
  }
`;

export const workMainSubHeadingCss = css`
  text-align: center;
  width: 35ch;
  font-size: 1em;
  display: block;
  color: var(--color-text-shadow);
  ${commonMobile};
  ${mediaQuery.mobile} {
    font-size: 1rem;
  }
`;
