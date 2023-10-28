import { css } from "@emotion/react";

export const carousalWrapperCss = css`
  --_cf: 7.5;
  width: calc(4vw * var(--_cf));
  height: 100vh;
  position: sticky;
  top: 0;
`;

export const carousalMidContainer = css`
  height: 70vh;
  width: 100%;
  border-radius: 25px;
  overflow: hidden;
  transform: translateY(25%);
  & > div {
    height: 100%;
    width: 100%;
    .work-img-container {
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
  }
`;
