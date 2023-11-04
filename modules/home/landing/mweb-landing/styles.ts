import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const landingWrapper = css`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  * {
    user-select: none;
    cursor: default;
  }
`;

export const landingHeading = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-weight: 600;
  margin: 0;
  font-size: 10vw;
  gap: 2vh;
  text-transform: uppercase;
  font-family: var(--font-mono);
  letter-spacing: 0.25em;
  ${mediaQuery.mobileLandscape} {
    font-size: 4vw;
  }
`;

export const spanCss = css`
  font-family: inherit;
  transition: transform 0.05s ease;
`;