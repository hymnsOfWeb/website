import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const valContactContainerStyle = css`
  height: 100vh;
  padding: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5vw;
  padding-left: 5%;
  background: var(--color-bg-val-radial);
  ${mediaQuery.mobile} {
    padding-left: 6.5%;
    padding-right: 7%;
  }
`;

export const valContactGridStyle = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2em;
  width: fit-content;
  ${mediaQuery.smallLaptop} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mediaQuery.mobile} {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (width < 600px) {
    grid-template-columns: repeat(1, 1fr);
    place-items: center;
  }
`;

export const valContactItemStyle = css`
  padding: 20px;
  border-radius: 25px;
  background-color: var(--color-bg-val-secondary);
  text-decoration: none;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  @media (width < 600px) {
    width: 60%;
  }
  @media (width < 400px) {
    width: 100%;
  }
`;

export const valContactIconStyle = css`
  font-size: 3.5rem;
  fill: var(--color-bg-val-primary);
  margin-bottom: 2vh;
  ${mediaQuery.mobile} {
    font-size: clamp(1rem, 10vw, 6rem);
  }
`;

export const valItemTitleCss = css`
  font-size: 1.2rem;
  color: var(--color-val-black);
  ${mediaQuery.mobile} {
    font-size: clamp(1rem, 3vw, 6rem);
  }
`;

export const valItemSpanCss = css`
  font-size: clamp(1rem, 1.05vw, 1.2rem);
  color: var(--color-val-black);
  font-weight: 700;
  ${mediaQuery.mobile} {
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;
