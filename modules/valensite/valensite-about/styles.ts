import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const valAboutContainerStyle = css`
  min-height: 100vh;
  background-color: var(--color-bg-val-secondary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20vh;
  padding: 15vh 0;
  padding-left: 6%;
  position: relative;
  ${mediaQuery.smallLaptop} {
    padding-left: 6%;
    padding-right: 7.5%;
    gap: 15vh;
  }
  ${mediaQuery.mobile} {
    padding: 5vh 0;
    padding-left: 6%;
    padding-right: 7.5%;
    gap: 4vh;
  }
`;

export const valAboutTextWrapperStyle = css`
  width: 55%;
  h2 {
    color: var(--color-bg-val-primary);
    font-size: 3.5rem;
    margin-bottom: 2vh;
    font-weight: 600;
  }
  p {
    color: var(--color-val-black);
    font-size: 1.5rem;
    font-weight: 300;
  }
  ${mediaQuery.smallLaptop} {
    width: 100%;
  }
  ${mediaQuery.mobile} {
    width: 100%;
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export const featuresContainerStyle = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: fit-content;
  gap: 3em;
  ${mediaQuery.mobile} {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
  ${mediaQuery.smallLaptop} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const featuresHeadingStyle = css`
  grid-column: 1 / span 5;
  color: var(--color-bg-val-primary);
  font-size: 1.8rem;
  font-weight: 600;
  ${mediaQuery.smallLaptop} {
    grid-column: 1 / span 2;
  }
  ${mediaQuery.mobile} {
    font-size: 1.5rem;
    grid-column: 1 / span 2;
  }
`;

export const featureStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 7vw;
  span {
    font-size: 1.25rem;
    text-align: center;
    color: var(--color-val-black);
    font-weight: 400;
  }
  ${mediaQuery.smallLaptop} {
    width: 17vw;
  }
  ${mediaQuery.mobile} {
    width: 100%;
    span {
      font-size: 1rem;
    }
  }
`;

export const featIconWrapperStyle = css`
  background-color: var(--color-bg-gray);
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  ${mediaQuery.mobile} {
    border-radius: 15px;
  }
`;

export const featureIconStyle = css`
  font-size: 3.5rem;
  path {
    color: var(--color-bg-val-primary);
  }
  ${mediaQuery.mobile} {
    font-size: 2rem;
  }
`;

export const coupleSvgStyle = css`
  position: absolute;
  bottom: 15%;
  right: 10%;
  scale: 1.25;
  ${mediaQuery.smallLaptop} {
    scale: 1;
    right: 4%;
  }
  ${mediaQuery.mobile} {
    position: static;
    margin: 0 auto;
    width: 80%;
    margin-top: 4vh;
    margin-bottom: 5vh;
  }
`;