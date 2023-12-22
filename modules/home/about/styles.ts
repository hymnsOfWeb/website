import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const aboutWrapper = css`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  * {
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
  ${mediaQuery.mobile} {
    height: clamp(85vh, 150vw, 100vh);
    margin-top: 40px;
  }
  ${mediaQuery.mobileLandscape} {
    height: fit-content;
  }
`;

export const ribbonWrapper = css`
  position: absolute;
  width: 120vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-10deg);
  background-color: var(--color-text-highlight);
  filter: brightness(85%);
  opacity: 0.95;
  box-shadow: 0 0 30px var(--color-secondary-800);
`;

export const mWebRibbonWrapper = css`
  width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-text-highlight);
  filter: brightness(85%);
  opacity: 0.95;
  box-shadow: 0 0 30px var(--color-secondary-800);
  flex: 1;
  user-select: none;
  font-family: var(--font-primary);
  text-transform: uppercase;
  font-weight: 900;
  background-color: var(--color-text-highlight);
  color: var(--color-bg-primary);
  font-size: 16vw;
  ${mediaQuery.mobileLandscape} {
    font-size: 4rem;
  }
`;

export const ribbonContainer = css`
  width: 300vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ribbonSpan = css`
  font-size: 8vw;
  flex: 1;
  user-select: none;
  font-family: var(--font-primary);
  text-transform: uppercase;
  font-weight: 600;
  background-color: var(--color-text-highlight);
  color: var(--color-secondary-900);
`;

export const commonBoxStyle = css`
  transform-style: preserve-3d;
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-in-out;
  border-radius: 10px;
  overflow: hidden;
  ${mediaQuery.mobileLandscape} {
    width: 45%;
  }
`;

export const cardWrapper = css`
  height: 60vh;
  aspect-ratio: 3 / 3.5;
  ${mediaQuery.mobile} {
    height: 65%;
    width: 80vw;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${mediaQuery.mobile} {
    transform: translate(-50%, -40%);
  }
  ${mediaQuery.mobileLandscape} {
    width: 100%;
    height: 100vh;
    position: static;
    transform: none;
  }
`;

export const cardContainer = css`
  transition: all 0.3s ease;
  height: 100%;
  width: 100%;
  ${mediaQuery.mobileLandscape} {
    width: 90%;
    height: 80%;
    display: grid;
    place-items: center;
  }
`;

export const flipBox = css`
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  cursor: pointer;
  ${mediaQuery.mobileLandscape} {
    position: static;
    display: flex;
    align-items: center;
    justify-content: space-between;
    perspective: none;
  }
`;

export const cardFront = css`
  transform: none;
  z-index: 1;
  &.active {
    transform: rotateX(0) rotateY(180deg);
  }
`;

export const cardBack = css`
  width: 100%;
  height: 100%;
  transform: rotateX(0) rotateY(-180deg);
  background: var(--color-bg-tertiary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10%;
  &.active {
    transform: none;
  }

  ${mediaQuery.mobileLandscape} {
    transform: none;
    z-index: 2;
    padding: 0px;
    background: none;
    right: 0;
    font-size: 0.8rem;
  }
  ${mediaQuery.tablet} {
    font-size: 1.5rem;
  }
`;

export const cardButton = css`
  transition: all 0.3s ease;
  margin-left: auto;
  background-color: var(--color-primary-700);
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: var(--color-primary-000);
  text-decoration: none;
  font-weight: 600;
  font-size: clamp(1rem, 1.1vw, 1.75rem);
  /* height: 44px; */
  padding: 0.85vw 2.25vw;
  ${mediaQuery.desktop} {
    &:hover {
      background-color: var(--color-text-highlight);
    }
  }
  ${mediaQuery.mobilePortrait} {
    padding: 0.5em 1.75em;
  }
  ${mediaQuery.mobileLandscape} {
    padding: 0.5em 1.75em;
  }
`;

export const cardButtonHeading = css`
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  font-family: var(--font-primary);
`;

export const cardText = css`
  text-align: justify;
  height: 100%;
  color: var(--color-primary-900);
  font-size: clamp(1rem, 1.25vw, 1.25rem);
  @media screen and (width > 2000px) {
    font-size: 1.25rem;
  }
  ${mediaQuery.desktop} {
    line-height: 1.5em;
  }
  ${mediaQuery.mobilePortrait} {
    font-size: clamp(0rem, 4vw, 1.5rem);
  }
  ${mediaQuery.mobileLandscape} {
    font-size: clamp(0rem, 2vw, 1.5rem);
  }
`;
