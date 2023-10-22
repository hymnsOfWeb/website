import { css } from "@emotion/react";

export const carousalWrapperCss = css`
  width: 400px;
  height: 600px;
  border-radius: 25px;
  background-color: brown;
  position: sticky;
  top: 20vh;
  margin: 20vh 0;
  overflow: hidden;
  * {
    transition: all 0.1s ease;
  }
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
