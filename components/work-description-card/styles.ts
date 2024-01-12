import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const btnsContainerCss = css`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
`;

const commonBtnsCss = css`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5em 1em;
  border-radius: 100px;
  display: flex;
  align-items: center;
  margin-right: 10px;
  ${mediaQuery.mobile} {
    font-size: clamp(0.8rem, 4.25vw, 1.25rem);
  }
`;

export const ctaContainerCss = css`
  display: flex;
`;

export const secBtnsContainerCss = css`
  display: flex;
`;

export const secBtnsCss = css`
  ${commonBtnsCss}
  border: 2px solid var(--color-primary-400);
  color: var(--color-primary-400);
`;

export const buttonCss = css`
  ${commonBtnsCss}
  background-color: var(--color-primary-400);
  transition: all 0.2s ease;
  gap: 10px;
  color: var(--color-bg-primary);
  svg {
    fill: var(--color-bg-primary);
    transition: all 0.2s ease;
  }

  ${mediaQuery.desktop} {
    &:hover {
      background-color: var(--color-text-primary);
    }
  }
`;

export const workHeadingCss = css`
  display: none;
  ${mediaQuery.desktop} {
    display: block;
    width: fit-content;
    font-size: 1.2rem;
    color: var(--color-secondary-500);
  }
`;

export const workTitleCss = css`
  font-size: clamp(0rem, 5vw, 3rem);
  font-weight: 600;
  color: var(--color-primary-400);
  ${mediaQuery.mobile} {
    font-size: clamp(0rem, 10vw, 3rem);
  }
`;

export const linksContainerCss = css`
  * {
    color: inherit;
  }
  width: 100%;
  color: var(--color-bg-primary);
  height: 60px;
  display: flex;
  align-items: center;
  gap: 20px;
  ${mediaQuery.tablet} {
    flex-direction: column;
    height: fit-content;
    align-items: flex-start;
  }
  ${mediaQuery.mobile} {
    margin: 1rem 0;
    height: fit-content;
    align-items: flex-start;
  }
`;

export const workDescriptionCss = css`
  font-size: 1.2rem;
  line-height: 2em;
  text-align: justify;
  ${mediaQuery.mobileLandscape} {
    font-size: 1rem;
  }
`;
