import { css } from "@emotion/react";

export const aboutWrapper = css`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const ribbonWrapper = css`
  position: relative;
  padding: 4vh 0;
  rotate: -15deg;
  width: 120%;
  transform: translate(-10%, 27.5vh);
  background-color: var(--color-text-primary);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5),
    0 0 20px -5px var(--box-shadow-primary),
    0 0 30px -10px rgba(185, 185, 185, 0.4), 0 0 60px rgba(255, 255, 255, 0.25);
`;

export const ribbonContainer = css`
  width: 3000px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ribbonSpan = css`
  font-size: 8rem;
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

export const aboutCardContainer = css`
  aspect-ratio: 3.25 / 4;
  width: 32.5vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: all 0.5s ease;
  border-radius: 15px;
  &:hover {
    .about-card {
      transform: perspective(900px) rotateX(30deg) translateZ(0)
        translateY(-10%);
      box-shadow: 0px 50px 50px -25px rgba(125, 125, 125, 0.35);
      .about-bg {
        filter: blur(2px) grayscale(1);
      }
      .text-shadow {
        opacity: 0.85;
        filter: blur(3.5px);
        transform: scaleY(1.5) translateY(-5%);
      }
    }
    .about-text-container {
      transform: perspective(900px) rotateX(-5deg) translateZ(0)
        translateY(-10%) scale(1.1);
      opacity: 1;
    }
  }
`;

export const aboutCard = css`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  transition: all 0.5s ease;
`;

export const aboutBgImg = css`
  height: 100%;
  width: 100%;
  aspect-ratio: 1;
  position: absolute;
  transition: all 0.5s ease;
  border-radius: 15px;
  overflow: hidden;
`;

export const commonCardContent = css`
  display: grid;
  place-items: center;
  text-align: justify;
  font-size: 1.6rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  opacity: 0;
  height: 100%;
  width: 90%;
  transform: perspective(900px) rotateX(25deg) translateZ(0) translateY(-5%);
`;

export const shadow = css`
  z-index: 1;
  transition: all 0.5s ease;
  ${commonCardContent}
`;

export const cardButton = css`
  position: absolute;
  bottom: 20%;
  right: 5%;
  background-color: var(--color-bg-secondary);
  color: var(--color-text-primary);
  padding: 1em 2em;
  border: none;
  border-radius: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  text-shadow: none;
  &:hover {
    scale: 1.1;
  }
`;

export const shadowButton = css`
  ${cardButton}
  bottom: 25%;
  opacity: 0.65;
  filter: blur(5px) saturate(0.75);
`;

export const textContainer = css`
  left: 5%;
  z-index: 2;
  position: absolute;
  transition: opacity 0.5s ease, transform 0.5s ease;

  text-shadow: 0 0 15px rgba(0, 0, 0, 0.75), 0 0 7px rgba(0, 0, 0, 0.75),
    0 0 5px var(--color-bg-secondary), 0 0 2px var(--color-bg-secondary);
  ${commonCardContent}
`;
