import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const planCardContainerStyle = css`
  background-color: var(--color-val-white);
  display: flex;
  flex-direction: column;
  width: clamp(275px, 22vw, 350px);
  border-radius: 30px;
  box-shadow: 10px 10px 20px rgba(35, 35, 35, 0.2);
  position: relative;
  ${mediaQuery.mobile} {
    width: 350px;
  }
  @media (width < 450px) {
    width: 100%;
  }
`;

export const popularStyle = css`
  position: absolute;
  top: -25px;
  right: 0px;
  padding: 0.5em 1.5em;
  border-radius: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: hsla(0, 0%, 95%, 1);
`;

export const popularIconStyle = css`
  fill: var(--color-bg-val-primary);
`;

export const popularTextStyle = css`
  color: var(--color-bg-val-primary);
  display: block;
`;

export const planHeadingStyle = (color: string) => css`
  background-color: ${color};
  text-align: center;
  font-size: 2rem;
  padding: 10px 0;
  color: var(--color-val-black);
  font-weight: 500;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  @media (width < 450px) {
    font-size: 1.6rem;
  }
`;

export const planPriceStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  gap: 10px;
  span {
    font-size: 2.25rem;
    color: var(--color-bg-val-primary);
    font-weight: 700;
  }
  @media (width < 450px) {
    span {
      font-size: 1.4rem;
      padding: 1.25vh 0;
    }
  }
`;

export const booleanFeaturesWrapperStyle = css`
  display: flex;
  flex-direction: column;
  padding: 0 20px 20px 20px;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const booleanFeatureStyle = css`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
  span {
    color: var(--color-val-black);
  }
  @media (width < 450px) {
    font-size: 1rem;
  }
`;

export const checkSvgStyle = css`
  path {
    fill: #52e032;
  }
`;

export const crossSvgStyle = css`
  path {
    fill: var(--color-bg-val-primary);
  }
`;

export const valuedFeaturesContainerStyle = css`
  display: flex;
  flex-direction: column;
  padding: 0 20px 20px 20px;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const valuedFeatureStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  span {
    color: var(--color-val-black);
  }
  .val-feat-name {
    font-weight: 600;
  }
  @media (width < 450px) {
    font-size: 1rem;
  }
`;

export const btnContainerCss = css`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  width: 100%;
  align-items: center;
  margin-top: auto;
`;

export const ctaBtnStyle = css`
  background-color: var(--color-bg-val-primary);
  font-size: 1.4rem;
  padding: 0.25em 1em;
  border-radius: 15px;
  text-decoration: none;
  width: fit-content;
  ${mediaQuery.desktop} {
    transition: all 0.3s ease;
    &:hover {
      box-shadow: 4px 4px 14px -1px var(--box-shadow-primary);
    }
  }
  @media (width < 450px) {
    font-size: 1rem;
  }
`;

export const helperBtnStyle = css`
  font-size: 1.2rem;
  border-radius: 15px;
  text-decoration: none;
  width: fit-content;
  color: var(--color-bg-val-primary);
  margin-bottom: 4vh;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  @media (width < 450px) {
    font-size: 1rem;
  }
`;
