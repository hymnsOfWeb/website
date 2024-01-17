import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const valAboutContainerStyle = css`
  height: 100vh;
  background-color: var(--color-bg-val-secondary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2vh;
  padding-left: 6%;
  position: relative;
  ${mediaQuery.smallLaptop} {
    padding-left: 6%;
    padding-right: 7.5%;
  }
  ${mediaQuery.mobile} {
    height: fit-content;
    padding: 5vh 0;
    padding-left: 6%;
    padding-right: 7.5%;
    gap: 4vh;
  }
`;

export const valAboutTextWrapperStyle = css`
  width: 55%;
  .h2-about-val {
    color: var(--color-bg-val-primary);
    font-size: 3.5rem;
    font-weight: 600;
  }
  .para-about-val {
    color: var(--color-val-black);
    font-size: clamp(1rem, 1.25vw, 1.6rem);
    font-weight: 300;
    margin-bottom: 1vh;
  }
  ${mediaQuery.smallLaptop} {
    width: 100%;
  }
  ${mediaQuery.mobile} {
    width: 100%;
    .h2-about-val {
      font-size: 2rem;
    }
    .para-about-val {
      font-size: 1rem;
    }
  }
`;

export const featuresContainerStyle = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: fit-content;
  column-gap: 3em;
  row-gap: 2vh;
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
  bottom: 8%;
  right: 10%;
  width: 30%;
  aspect-ratio: 1;
  ${mediaQuery.smallLaptop} {
    scale: 1;
    right: 4%;
    width: 40%;
  }
  ${mediaQuery.mobile} {
    position: relative;
    width: 80%;
    aspect-ratio: 1;
    margin: 0 auto;
    margin-top: 4vh;
    margin-bottom: 5vh;
    inset: 0;
  }
`;
