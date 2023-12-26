import { css } from "@emotion/react";

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
  }
`;

export const fillerCss = css`
  height: 50vh;
`;
