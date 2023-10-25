import { css } from "@emotion/react";

export const workHeadingCss = css`
  position: sticky;
  display: flex;
  top: 0;
  left: 0;
  height: 100vh;
  width: fit-content;
  /* transform: translate(0, -50%); */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 5rem;
    font-family: var(--font-mono);
  }
  span {
    text-align: center;
    width: 15em;
    font-size: 1.25em;
    display: block;
  }
  @media only screen and (max-width: 900px) {
    position: static;
    height: fit-content;
    display: block;
    margin: 0;

    h2,
    span {
      text-align: center;
      width: 100%;
    }
  }
`;
