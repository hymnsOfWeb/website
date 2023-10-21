import { css } from "@emotion/react";

export const workContainerCss = css`
  display: flex;
  padding: 0 100px;
  background-color: pink;
  justify-content: center;

  & > div {
    border: 1px solid white;
  }
`;
