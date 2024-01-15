import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const mainHomeWrapper = css`
  background-color: var(--color-bg-primary);
  width: 100%;
  & > * {
    z-index: 1;
    position: relative;
    &.canvas-wrapper {
      z-index: 0;
      position: fixed;
    }
    &.valensite-popup {
      ${mediaQuery.desktop} {
        position: fixed;
        z-index: 10;
      }
    }
  }
`;

export const fillerCss = css`
  height: 50vh;
`;
