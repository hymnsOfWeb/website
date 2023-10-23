import { css } from "@emotion/react";

export const workContainerCss = css`
  display: flex;
  gap: 50px;
  padding: 0 5vw;
  flex-direction: column;
`;

export const mwebCardCss = css`
  margin: 20px 0;
  @media only screen and (600px <= width <= 900px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const workDescCss = css`
  @media only screen and (600px <= width <= 900px) {
    width: 57.5%;
  }
`;

export const mwebWorkImgCss = css`
  height: 400px;
  width: 100%;
  margin: auto;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 20px;
  @media only screen and (600px <= width <= 900px) {
    width: 37.5%;
    height: 300px;
    margin: 0;
  }
`;
