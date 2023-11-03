import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const aboutWrapper = css`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  * {
    user-select: none;
  }
  ${mediaQuery.mobile} {
    height: 80vh;
  }
`;

export const ribbonWrapper = css`
  position: absolute;
  width: 120vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-10deg);
  background-color: var(--color-text-primary);
  filter: brightness(85%);
  opacity: 0.95;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5),
    0 0 20px -5px var(--box-shadow-primary),
    0 0 30px -10px rgba(185, 185, 185, 0.4), 0 0 60px rgba(255, 255, 255, 0.25);
`;

export const mWebRibbonWrapper = css`
  width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-text-primary);
  filter: brightness(85%);
  opacity: 0.95;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5),
    0 0 20px -5px var(--box-shadow-primary),
    0 0 30px -10px rgba(185, 185, 185, 0.4), 0 0 60px rgba(255, 255, 255, 0.25);
  & > * {
    background-color: var(--color-bg-secondary);
    color: transparent;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    text-shadow: 4px 4px 3px var(--color-text-shadow);
    font-family: var(--font-mono);
    text-transform: uppercase;
    font-weight: 900;
    font-size: 3rem;
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
  font-family: var(--font-mono);
  text-transform: uppercase;
  font-weight: 900;
  background-color: var(--color-bg-secondary);
  color: transparent;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  text-shadow: 4px 4px 3px var(--color-text-shadow);
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
`;

export const cardWrapper = css`
  height: 60vh;
  aspect-ratio: 3 / 3.5;
  ${mediaQuery.mobile} {
    height: unset;
    width: 80vw;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const cardContainer = css`
  transition: all 0.3s ease;
  height: 100%;
  width: 100%;
`;

export const flipBox = css`
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  cursor: pointer;
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
`;

export const cardButton = css`
  margin-left: auto;
  height: 45px;
  width: 42.5%;
  background-color: var(--color-text-primary);
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: var(--color-bg-primary);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
`;

export const cardText = css`
  text-align: justify;
  height: 100%;
`;
