import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const contactContainerCss = css`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mediaQuery.desktop} {
    justify-content: center;
  }
`;

export const contactHeadingCss = css`
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.5em;
  margin-bottom: 5vh;
  text-align: center;
  color: var(--color-text-highlight);
  ${mediaQuery.mobile} {
    margin-top: calc(10vh + 70px);
    font-size: 7.5vw;
  }
`;

export const contactCardsContainerCss = css`
  --cols: 4;
  padding: 5vw;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(var(--cols), 1fr);
  ${mediaQuery.mobile} {
    --cols: 2;
    row-gap: 5vh;
    padding: 5vw 2.5vw;
  }
  @media only screen and (max-width: 350px) {
    --cols: 1;
    row-gap: 0;
    .text {
      font-size: 1rem;
    }
  }
`;

const contactCardPsudo = css`
  &::before {
    position: absolute;
    content: "";
    height: 70%;
    width: 2px;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--color-bg-tertiary);
    right: calc(100% + 1px);
  }
`;

export const contactCardCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  position: relative;
  height: 200px;
  width: 100%;
  ${mediaQuery.desktop} {
    &:nth-of-type(n + 2) {
      ${contactCardPsudo}
    }
  }
  ${mediaQuery.mobile} {
    padding: 0;
    &:nth-of-type(2n) {
      ${contactCardPsudo}
    }
  }
  @media only screen and (max-width: 350px) {
    &:nth-of-type(n + 2) {
      ${contactCardPsudo}
      &::before {
        height: 2px;
        width: 50%;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`;

export const contactIconCss = css`
  font-size: clamp(2rem, 3vw, 5rem);
  fill: var(--color-text-secondary);
  margin-bottom: 30px;
  ${mediaQuery.mobile} {
    font-size: clamp(0rem, 12.5vw, 2.5rem);
  }
`;

export const contactCardTitleCss = css`
  font-size: clamp(0.8rem, 1vw, 1.4rem);
  font-family: var(--font-primary);
  color: var(--color-text-secondary);
  font-weight: 500;
  ${mediaQuery.mobile} {
    font-size: 3vw;
  }
`;

export const contactParaCss = css`
  font-size: clamp(0.8rem, 1.5vw, 1.8rem);
  font-family: var(--font-mono);
  margin: 16px 0;
  ${mediaQuery.mobile} {
    font-size: 3.25vw;
  }
`;
