import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const navLinkContainerCss = css`
  text-decoration: none;
  text-transform: uppercase;
  width: 50vw;
  text-align: center;
  color: inherit;
  font-weight: 900;
  letter-spacing: 0.5ch;
  display: flex;
  overflow: hidden;
  height: 2.5ch;
  z-index: 999;
  * {
    color: inherit;
  }
  &.active-link {
    transition: border-bottom 0.5s ease-in-out var(--_main-time-delay);
    border-bottom: 1px solid rgba(0, 0, 0, 0);
  }
  &.inactive-link {
    transition: border-bottom 0.5s ease-in-out var(--_main-time-delay);
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  }
  .char-child:nth-of-type(1) {
    transform: translateY(0%) rotateX(0deg);
  }
  .char-child:nth-of-type(2) {
    transform: translateY(-50%) rotateX(90deg);
  }
  &:hover {
    .char-child:nth-of-type(1) {
      transform: translateY(-50%) rotateX(90deg);
    }
    .char-child:nth-of-type(2) {
      transform: translateY(-100%) rotateX(0deg);
    }
  }
  ${mediaQuery.tablet} {
    width: 80vw;
    height: 2ch;
  }
  ${mediaQuery.squeezedScreen} {
    width: 70vw;
    letter-spacing: 0.2ch;
  }
  ${mediaQuery.mobile} {
    width: 90vw;
  }
  ${mediaQuery.mobileLandscape} {
    width: fit-content;
    height: 10vw;
    transform: translateY(50%);
  }
`;

export const charDynamicDelayCss = (delay: number) => css`
  transition: transform 0.5s ease-in-out ${delay}s;
  font-family: var(--font-primary);
  &:nth-of-type(1) {
    color: var(--_col);
    text-shadow: 0 0 2px black, 0 0 1px black, 0 0 1px black;
  }
`;

export const linkCommonCss = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const navLinkDynamicCss = (delay: number) => css`
  transition: transform 0.5s ease-in-out ${delay}s;
  transform: translateY(0%);
  ${linkCommonCss}
`;

export const navLinkInactiveCss = css`
  transition: transform 0.5s ease-in-out;
  transform: translateY(100%);
  ${linkCommonCss}
`;

export const charContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
