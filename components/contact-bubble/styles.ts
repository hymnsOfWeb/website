import { css } from "@emotion/react";

export const bubbleLinkCss = css`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const bubbleWrapperCss = css`
  position: absolute;
  border: 2px solid var(--color-text-primary);
  border-radius: 50%;
  font-size: 3rem;
  height: 2em;
  width: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-bg-primary);
  transition: background-color 0.3s ease 0.2s, scale 0.4s ease;
  text-decoration: none;
`;

export const bubbleWrapperPosition = (top: number, left: number) => css`
  top: ${top}%;
  left: ${left}%;
`;

export const bubbleWrapperScale = (scale: number) => css`
  &:hover {
    /* transform: scale(${scale}); */
    scale: ${scale};
    background-color: var(--color-text-primary);
    .bubble-text {
      color: var(--color-bg-primary);
      transform: scale(calc(1 / ${scale}));
      opacity: 1;
    }
    .bubble-icon {
      filter: blur(10px);
      opacity: 0;
    }
  }
`;

export const bubbleText = css`
  font-size: 1rem;
  opacity: 0;
  text-align: center;
  width: fit-content;
  position: absolute;
  color: var(--color-text-primary);
  transition: color 0.2s ease 0.4s, transform 0.4s ease;
`;

export const bubbleSvgCss = css`
  height: 1em;
  width: 1em;
  opacity: 1;
  position: absolute;
  transition: filter 0.3s ease, opacity 0.2s ease 0.2s;
`;
