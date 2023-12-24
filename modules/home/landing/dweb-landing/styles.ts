import { css } from "@emotion/react";

export const landingWrapper = css`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  scroll-snap-align: center;
  flex-direction: column;
  gap: 30px;
  * {
    user-select: none;
    cursor: default;
    text-transform: capitalize;
  }
`;

export const landingHeading = css`
  display: flex;
  word-spacing: 20px;
  letter-spacing: 5px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-weight: 500;
  margin: 0;
  font-size: 7vw;
`;

export const hiddenMainHeading = css`
  position: absolute;
  left: -9999px;
  color: rgba(0, 0, 0, 0);
  font-size: 1px;
  height: 1px;
  width: 1px;
  display: block;
  opacity: 0.01;
`;
