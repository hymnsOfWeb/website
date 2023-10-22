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
  & > div {
    height: 100%;
    width: 100%;
    /* transition: all 0.25s ease; */
    .work-img-container {
      /* transition: all 0s ease; */
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
  }
`;
