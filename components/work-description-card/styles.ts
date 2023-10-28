import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const buttonCss = css`
  text-decoration: none;
  background-color: var(--color-text-primary);
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5em 1em;
  border-radius: 100px;
  display: flex;
  align-items: center;
  gap: 10px;
  ${mediaQuery.mobile} {
    font-size: clamp(0.8rem, 4vw, 1rem);
  }
`;

export const workTitleCss = css`
  font-size: 4rem;
  font-weight: 600;
  ${mediaQuery.mobile} {
    font-size: 3rem;
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
`;
