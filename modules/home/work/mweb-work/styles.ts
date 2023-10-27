import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const workContainerCss = css`
  display: flex;
  gap: 50px;
  padding: 0 5vw;
  flex-direction: column;
  width: 100%;
`;

export const mwebCardCss = css`
  margin: 20px 0;
  ${mediaQuery.squeezedScreen} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const workDescCss = css`
  ${mediaQuery.squeezedScreen} {
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
  ${mediaQuery.squeezedScreen} {
    width: 37.5%;
    height: 300px;
    margin: 0;
  }
`;
