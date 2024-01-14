import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const faqsContainerCss = css`
  height: 100vh;
  background-color: var(--color-val-white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5vh;
  padding: 0 5%;
  width: 100%;
  .faq-header {
    font-size: 3.5rem;
    color: var(--color-bg-val-primary);
    ${mediaQuery.mobile} {
      font-size: 2rem;
    }
  }
`;

export const carousalContainerCss = css`
  display: flex;
  gap: 2vw;
  align-items: center;
  width: 100%;
  justify-content: center;
  ${mediaQuery.mobile} {
    display: grid;
    place-items: center;
    width: 95%;
    grid-template-columns: 50% 50%;
    row-gap: 2vh;
  }
`;

export const btnsCarousalCss = css`
  font-size: 4rem;
  display: grid;
  place-items: center;
  gap: 1.5rem;
  height: fit-content;
  svg {
    cursor: pointer;
    fill: var(--color-bg-val-primary);
  }
  ${mediaQuery.mobile} {
    font-size: 3rem;
    &.right-btn {
      grid-column: -2 / -1;
      grid-row: 2 / 3;
    }
    &.left-btn {
      grid-row: 2 / 3;
    }
  }
`;

export const carousalWrapperCss = css`
  --width: 60vw;
  height: 50vh;
  width: var(--width);
  background: var(--color-bg-val-radial);
  overflow: hidden;
  border-radius: 25px;
  ${mediaQuery.mobile} {
    grid-column: 1 / span 2;
    --width: 90.25vw;
    height: fit-content;
    padding: 2vh 0;
  }
`;

export const carousalTrackCss = css`
  height: 100%;
  display: flex;
  width: fit-content;
`;

export const carousalItemCss = css`
  height: 100%;
  width: var(--width);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2em;
  gap: 5vh;
  h3 {
    font-size: 2rem;
  }
  p {
    line-height: 4vh;
    font-size: 1.4rem;
  }
  ${mediaQuery.mobile} {
    h3 {
      font-size: 1.2rem;
    }
    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;
