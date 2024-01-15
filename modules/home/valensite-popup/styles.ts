import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const valensiteDialogWrapperCss = css`
  position: fixed;
  top: 15vh;
  ${mediaQuery.desktop} {
    right: 2vw;
    width: 17.5vw;
  }
  height: fit-content;
  border-radius: 15px;
  background-color: var(--color-bg-val-primary);
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 2vh;
  z-index: 2;
  ${mediaQuery.mobile} {
    h2 {
      font-size: 1.25rem;
    }
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80vw;
    z-index: 10;
    box-shadow: 0 0 0 200vh rgba(0, 0, 0, 0.75);
    touch-action: none;
  }
`;

export const closeBtnCss = css`
  position: absolute;
  font-size: 2rem;
  right: 10px;
  top: 10px;
  cursor: pointer;
  path {
    fill: rgba(1, 1, 1, 1);
  }
`;

export const dialogBtnCss = css`
  background-color: white;
  color: black;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.5em 1.5em;
  border-radius: 500px;
  width: fit-content;
  margin: 0 auto;
  ${mediaQuery.mobile} {
    font-size: 1rem;
  }
`;
