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
`;

export const workTitleCss = css`
  font-size: 2.5rem;
  font-weight: 600;
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
  margin: 1vh 0;
  ${mediaQuery.tablet} {
    flex-direction: column;
    height: fit-content;
    align-items: flex-start;
  }
  ${mediaQuery.mobile} {
    flex-direction: column;
    height: fit-content;
    align-items: flex-start;
  }
`;
