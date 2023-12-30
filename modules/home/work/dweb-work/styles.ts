import { css } from "@emotion/react";

export const workContainerCss = css`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  & > div {
    &:nth-of-type(1) {
      flex: 1.5;
      margin-left: 5%;
    }
    &:nth-of-type(2) {
      flex: 1;
    }
  }
`;
