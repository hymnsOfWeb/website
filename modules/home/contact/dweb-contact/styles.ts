import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const contactCss = css`
  height: 110vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:has(.bubble-wrapper:hover) .bubble-wrapper:not(:hover) {
    opacity: 0.2;
    animation-play-state: paused;
  }
`;

export const contactSquareCss = css`
  height: 100%;
  width: 100%;
  max-height: 90vw;
  position: relative;
  ${mediaQuery.mobileLandscape} {
    height: 80vh;
    width: unset;
  }
`;

export const contactCircleCss = css`
  --_s: 50%;
  height: var(--_s);
  aspect-ratio: 1;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  color: var(--color-text-primary);
  top: 50%;
  border: 2px solid var(--color-text-primary);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  left: 50%;
  font-size: 4rem;
  transition: all 0.3s ease 0.1s;
  ${mediaQuery.smallLaptop} {
    --_s: 40%;
    font-size: clamp(0rem, 3vw, 3.2rem);
  }
  .contact-text {
    font-family: var(--font-primary);
    transition: all 0.3s ease 0.1s;
    font-weight: 500;
    z-index: 1;
    color: var(--color-text-primary);
    font-size: inherit;
    text-align: center;
  }
  &:hover {
    border: 2px solid var(--color-text-highlight);
    .contact-text {
      color: var(--color-bg-primary);
    }
    .shadow {
      transform: translate(-50%, -50%) scale(1500);
    }
  }
`;

export const shadowCss = css`
  height: 1px;
  width: 1px;
  border-radius: 50%;
  background-color: var(--color-text-highlight);
  position: absolute;
  transform: translate(-50%, -50%) scale(1);
  opacity: 0;
  transition: transform 0.4s ease, opacity 0.5s ease;
`;
