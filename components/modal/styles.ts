import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const dialogWrapperCss = css`
  height: 80vh;
  width: 80%;
  margin: auto;
  border: none;
  background-color: var(--color-bg-val-primary);
  border-radius: 20px;
  outline: none;
  &::backdrop {
    background-color: rgba(0, 0, 0, 0.6);
  }
  ${mediaQuery.mobile} {
    height: 95vh;
    width: 95%;
    border-radius: 5px;
    overflow: hidden;
  }
`;

export const dialogHeadingContainerCss = (col: string) => css`
  --card-col: ${col};
  width: 100%;
  height: 17.5%;
  display: flex;
  justify-content: space-between;
  padding: 1em 1.5em;
  border-bottom: 2px solid ${col};
  ${mediaQuery.mobile} {
    height: fit-content;
  }
`;

export const headerTextCss = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const dialogHeaderCss = css`
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--color-val-black);
  ${mediaQuery.mobile} {
    font-size: 1.6rem;
  }
`;

export const dialogBtnContainerCss = css`
  display: flex;
  gap: 20px;
  width: fit-content;
  align-items: center;
  justify-content: center;
  ${mediaQuery.mobile} {
    flex-wrap: wrap;
    width: 100%;
    justify-content: flex-start;
    margin-top: 2vh;
    gap: 10px;
  }
`;

export const demoBtnCss = css`
  text-decoration: none;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  outline: none;
  svg {
    transform: translateY(1px);
  }
  &:hover {
    transform: translateY(1px);
    border-bottom: 2px solid var(--card-col);
  }
  ${mediaQuery.mobile} {
    flex-shrink: 0;
  }
`;

export const buyBtnCss = css`
  color: var(--color-bg-val-primary);
  background-color: var(--card-col);
  padding: 0.25em 1em;
  border-radius: 500px;
  text-decoration: none;
  outline: none;
  font-weight: 600;
  ${mediaQuery.mobile} {
    flex-shrink: 0;
  }
`;

export const closeIconCss = css`
  font-size: 2rem;
  cursor: pointer;
`;

export const descContainerCss = (col: string) => css`
  height: 82.5%;
  width: 100%;
  padding: 2em;
  overflow-y: scroll;
  li {
    font-size: 1.4rem;
    margin: 2vh 0;
    margin-left: 2vh;
  }
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${col};
  }
  ${mediaQuery.mobile} {
    padding: 1em;
    li {
      font-size: 1rem;
      margin: 1.5vh 0;
      text-align: justify;
      hyphens: auto;
      margin-left: 2vh;
    }
    @media (width < 340px) {
      padding: 0.5em;
      li {
        margin-left: 2vh;
      }
    }
  }
`;
