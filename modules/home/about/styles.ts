import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const aboutWrapper = css`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  ${mediaQuery.mobileLandscape} {
    height: 150vh;
    padding: 0;
  }
  @media only screen and (width < 400px) {
    height: 100vh;
  }
  * {
    user-select: none;
  }
`;

export const ribbonWrapper = css`
  position: absolute;
  /* padding: 4vh 0; */
  width: 120vw;
  /* height: 20vh; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-10deg);
  background-color: var(--color-text-primary);
  filter: brightness(85%);
  opacity: 0.95;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5),
    0 0 20px -5px var(--box-shadow-primary),
    0 0 30px -10px rgba(185, 185, 185, 0.4), 0 0 60px rgba(255, 255, 255, 0.25);
  ${mediaQuery.mobile} {
    position: static;
    transform: translate(0, 0) rotate(0);
    padding: 0;
  }
`;

export const ribbonContainer = css`
  width: 300vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding-left: 125px; */
  ${mediaQuery.mobile} {
    width: 400vw;
  }
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
  ${mediaQuery.mobilePortrait} {
    font-size: 12.5vw;
  }
  ${mediaQuery.mobileLandscape} {
    font-size: 2.5rem;
  }
`;

const commonSpan = css`
  width: 100%;
  opacity: 1;
  height: 60%;
  transform: none;
  right: 0;
  span {
    width: 40%;
    display: block;
    padding: 0;
    height: 100%;
    transform: translateX(57.5%);
  }
  a {
    right: 7%;
  }
`;

const cardHovered = css`
  .about-card {
    transform: perspective(900px) rotateX(30deg) translateZ(0) translateY(-10%);
    box-shadow: 0px 50px 50px -50px rgba(125, 125, 125, 0.35);
    width: 95%;
    .about-bg {
      filter: blur(2px) grayscale(1);
    }
    .text-shadow {
      opacity: 0.85;
      filter: blur(3.5px);
      transform: scaleY(1.5) translateY(-5%);
    }
    ${mediaQuery.mobileLandscape} {
      transform: none;
      box-shadow: none;
      .about-bg {
        filter: none;
      }
    }
  }
  .about-text-container {
    transform: perspective(900px) rotateX(-5deg) translateZ(0) translateY(-10%)
      scale(1.1);
    opacity: 1;
  }
  ${mediaQuery.mobilePortrait} {
    .about-card {
      .text-shadow {
        width: 90%;
        transform: scaleY(1) translateY(-5%);
      }
    }
    .about-text-container {
      width: 90%;
      transform: perspective(900px) rotateX(-5deg) translateZ(0)
        translateY(-10%) scale(0.95);
      opacity: 1;
    }
  }
  ${mediaQuery.mobileLandscape} {
    ${commonSpan}
    a {
      padding: 5px 15px;
      bottom: 70px;
    }
  }
`;

export const aboutCardContainer = css`
  aspect-ratio: 3.25 / 4;
  height: 70vh;
  max-width: 90vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: all 0.5s ease;
  border-radius: 15px;
  font-size: 1.6rem;

  ${mediaQuery.desktop} {
    &:hover {
      ${cardHovered};
    }
  }
  ${mediaQuery.mobilePortrait} {
    max-height: 500px;
    width: 90vw; //??
    transform: translate(-50%, -38.5%);
    font-size: 1rem;
    &.hovered {
      ${cardHovered}
    }
  }
  ${mediaQuery.mobileLandscape} {
    max-width: 100%;
    width: 100%;
    height: 100%;
    transform: none;
    top: 0;
    left: 0;
  }
`;

export const aboutCard = css`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  transition: all 0.5s ease;
  ${mediaQuery.mobileLandscape} {
    height: 60%;
    width: 80%;
    position: relative;
  }
`;

export const aboutBgImg = css`
  height: 100%;
  width: 100%;
  position: absolute;
  transition: all 0.5s ease;
  border-radius: 15px;
  overflow: hidden;
  ${mediaQuery.mobilePortrait} {
    width: 95%;
    height: 100%;
  }
  ${mediaQuery.mobileLandscape} {
    left: 0;
    width: 50%;
    height: 100%;
  }
`;

export const commonCardContent = css`
  display: grid;
  place-items: center;
  text-align: justify;
  font-size: inherit;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  opacity: 0;
  height: 100%;
  width: 90%;
  transform: perspective(900px) rotateX(25deg) translateZ(0) translateY(-5%);
  ${mediaQuery.mobilePortrait} {
    width: 100%;
  }
  ${mediaQuery.mobileLandscape} {
    ${commonSpan}
    width: 100%;
    a {
      padding: 5px 15px;
      bottom: 20vh;
    }
  }
`;

export const shadow = css`
  z-index: 1;
  transition: all 0.5s ease;
  ${commonCardContent}
  ${mediaQuery.mobileLandscape} {
    display: none;
  }
`;

export const cardButton = css`
  position: absolute;
  bottom: 20%;
  right: 5%;
  background-color: var(--color-bg-secondary);
  color: var(--color-text-primary);
  padding: 0.75em 1.5em;
  border: none;
  border-radius: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  text-shadow: none;
  transform: translateY(50px);
  &:hover {
    scale: 1.1;
  }
  ${mediaQuery.mobile} {
    scale: 1;
  }
  @media only screen and (width < 300px) {
    bottom: 12.5%;
    right: -5%;
    scale: 0.65;
  }
`;

export const shadowButton = css`
  ${cardButton}
  bottom: 25%;
  opacity: 0.65;
  filter: blur(5px) saturate(0.75);
  ${mediaQuery.mobileLandscape} {
    display: none;
  }
`;

export const textContainer = css`
  ${mediaQuery.desktop} {
    left: 5%;
  }
  z-index: 2;
  position: absolute;
  transition: opacity 0.5s ease, transform 0.5s ease;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.75), 0 0 7px rgba(0, 0, 0, 0.75),
    0 0 5px var(--color-bg-secondary), 0 0 2px var(--color-bg-secondary);
  ${commonCardContent}
`;
