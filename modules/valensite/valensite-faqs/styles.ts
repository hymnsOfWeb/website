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
  display: grid;
  place-items: center;
  width: 95%;
  grid-template-columns: 50% 50%;
  row-gap: 2vh;
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
  &.right-btn {
    grid-column: -2 / -1;
    grid-row: 2 / 3;
    place-self: flex-start;
    margin-left: 2vw;
  }
  &.left-btn {
    grid-row: 2 / 3;
    place-self: flex-end;
    margin-right: 2vw;
  }
  ${mediaQuery.mobile} {
    font-size: 3rem;
    &.right-btn {
      place-self: center;
    }
    &.left-btn {
      place-self: center;
    }
  }
`;

export const carousalWrapperCss = css`
  ---carousal-width: 65vw;
  height: 60vh;
  width: var(---carousal-width);
  overflow-x: auto;
  grid-column: 1 / span 2;
  display: flex;
  scroll-snap-type: x mandatory;
  ::-webkit-scrollbar {
    height: 0px;
  }
  ${mediaQuery.mobile} {
    padding: 2vh 0;
    width: 100%;
    height: 100%;
  }
`;

export const carousalItemCss = css`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  padding: 1em;
  scroll-snap-align: center;
  @media (width < 450px) {
    padding: 0.5em;
  }
`;

export const articleCarousalCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-radius: 25px;
  background: var(--color-bg-val-radial);
  padding: 2em;
  gap: 5vh;
  .article-header {
    font-size: 2rem;
    width: 100%;
  }
  .article-para {
    line-height: 4vh;
    font-size: 1.4rem;
  }
  ${mediaQuery.mobile} {
    padding: 1em;
    gap: 2vh;
    border-radius: 10px;
    .article-header {
      font-size: 1.2rem;
    }
    .article-para {
      font-size: 1rem;
      line-height: 1rem;
    }
  }
`;
