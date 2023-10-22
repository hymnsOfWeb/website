import { css } from "@emotion/react";

export const workHeadingCss = css`
  background-color: red;
  position: sticky;
  top: 20vh;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20vh 0;
  h2 {
    font-size: 7rem;
    font-family: var(--font-mono);
  }
  span {
    text-align: center;
    width: 90%;
    display: block;
  }
`;
