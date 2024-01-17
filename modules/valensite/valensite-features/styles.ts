import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const valFeaturesContainerCss = css`
  background-color: var(--color-bg-val-secondary);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4vh;
  padding-left: 5.5%;
  position: relative;
  ${mediaQuery.desktop} {
    height: 100vh;
  }
  ${mediaQuery.smallLaptop} {
    padding-left: 6%;
    padding-right: 7.5%;
    gap: 25vh;
  }
  ${mediaQuery.mobile} {
    padding: 5vh 0;
    padding-left: 6%;
    padding-right: 7.5%;
    gap: 0;
    overflow: hidden;
    min-height: 60vh;
  }
`;

export const valFeatTextWrapperCss = css`
  display: flex;
  flex-direction: column;
  width: 50%;
  .val-feat-h2 {
    color: var(--color-bg-val-primary);
    font-size: 3.5rem;
    margin-bottom: 2vh;
    font-weight: 600;
  }
  .val-feat-para {
    color: var(--color-val-black);
    font-size: clamp(1.25rem, 1.25vw, 1.6rem);
    font-weight: 300;
  }
  ${mediaQuery.smallLaptop} {
    width: 100%;
  }
  ${mediaQuery.mobile} {
    width: 100%;
    .val-feat-h2 {
      font-size: 2rem;
    }
    .val-feat-para {
      font-size: 1rem;
    }
  }
`;

export const websiteImgCss = css`
  width: 40%;
  height: 60%;
  bottom: 0;
  right: 2.5%;
  img {
    object-fit: contain;
    object-position: bottom;
  }
  ${mediaQuery.desktop} {
    position: absolute;
  }
  ${mediaQuery.smallLaptop} {
    position: absolute;
  }
  ${mediaQuery.mobile} {
    width: 60vw;
    aspect-ratio: 1;
    margin: 0 auto;
    transform: translateY(20%);
  }
  @media (width < 400px) {
    width: 80vw;
  }
`;

export const quoteCss = css`
  color: var(--color-bg-val-primary);
  font-size: 2rem;
  font-weight: 400;
  font-style: italic;
  display: flex;
  width: 50%;
  line-height: 2em;
  ${mediaQuery.smallLaptop} {
    line-height: 1.75em;
    font-size: 1.5rem;
  }
  ${mediaQuery.mobile} {
    display: none;
  }
`;
