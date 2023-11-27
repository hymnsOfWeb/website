import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const teamContainerCss = css`
  width: 100%;
`;

export const teamCardsContainerCss = css`
  --card-cols: 2;
  display: grid;
  grid-template-columns: repeat(var(--card-cols), 1fr);
  gap: 4vw;
  ${mediaQuery.mobile} {
    --card-cols: 1;
    padding-bottom: 50px;
  }
  ${mediaQuery.squeezedScreen} {
    --card-cols: 2;
  }
  ${mediaQuery.mobileLandscape} {
    --card-cols: 1;
  }
`;

export const teamCardCss = css`
  text-decoration: none;
  border: 2px solid hsl(227, 16%, 20%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  border-radius: 25px;
  ${mediaQuery.desktop} {
    transition: border-color 0.3s ease;
    &:hover {
      border-color: var(--color-text-highlight);
    }
  }
  ${mediaQuery.mobile} {
    border-radius: 15px;
    padding: 15px;
  }
  ${mediaQuery.mobileLandscape} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const teamHeadingCss = css`
  font-size: 2rem;
  margin: 10vh 0 5vh 0;
  letter-spacing: 0.15em;
  color: var(--color-text-highlight);
  ${mediaQuery.mobile} {
    font-size: 1.25rem;
  }
`;

export const profileImgCss = css`
  border-radius: 50%;
  width: 12.5vw;
  aspect-ratio: 1;
  overflow: hidden;
  ${mediaQuery.mobile} {
    width: 200px;
  }
  ${mediaQuery.mobileLandscape} {
    width: 200px;
  }
`;

export const nameCss = css`
  font-family: var(--font-mono);
  font-size: clamp(0rem, 2vw, 4rem);
  font-weight: 700;
  text-align: center;
  margin: 20px 0;
  ${mediaQuery.mobile} {
    font-size: 1.5rem;
  }
  ${mediaQuery.mobileLandscape} {
    padding-left: 50px;
  }
`;

export const aboutBriefCss = css`
  text-align: center;
  color: var(--color-text-secondary);
  font-size: clamp(0.5rem, 1.25vw, 2rem);
  font-weight: 200;
  ${mediaQuery.mobile} {
    font-size: 1rem;
  }
  ${mediaQuery.mobileLandscape} {
    width: 40%;
  }
`;
