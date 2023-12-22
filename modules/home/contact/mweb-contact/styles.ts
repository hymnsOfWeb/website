import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const contactCss = css`
  height: 110vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  ${mediaQuery.mobilePortrait} {
    display: flex;
    flex-direction: column;
    height: fit-content;
    margin: 10vh 0;
  }
  ${mediaQuery.mobileLandscape} {
    height: 80vh;
    position: static;
    display: flex;
    margin: 20vh 0 10vh 0;
  }
`;

export const contactSquareCss = css`
  height: 100%;
  width: 100%;
  max-height: 90vw;
  position: relative;
  ${mediaQuery.mobilePortrait} {
    height: 50vh;
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
  ${mediaQuery.desktop} {
    &:hover {
      .contact-text {
        color: var(--color-bg-primary);
      }
      .shadow {
        transform: translate(-50%, -50%) scale(1500);
      }
    }
  }
  ${mediaQuery.mobilePortrait} {
    --_s: 85%;
    transition: all 0.3s ease;
    &.in-view {
      background-color: var(--color-text-highlight);
      border-color: var(--color-text-highlight);
      .contact-text {
        color: var(--color-bg-primary);
      }
    }
  }
  ${mediaQuery.mobileLandscape} {
    --_s: 70vh;
    transition: all 0.3s ease;
    &.in-view {
      background-color: var(--color-text-primary);
      .contact-text {
        color: var(--color-bg-primary);
      }
    }
  }
`;

export const contactTextCss = css`
  font-family: var(--font-primary);
  transition: all 0.3s ease 0.1s;
  font-size: 4rem;
  font-weight: 500;
  z-index: 1;
  ${mediaQuery.mobilePortrait} {
    font-size: 7.5vw;
  }
  ${mediaQuery.mobileLandscape} {
    font-size: 2rem;
  }
`;

export const shadowCss = css`
  height: 1px;
  width: 1px;
  border-radius: 50%;
  background-color: var(--color-text-primary);
  position: absolute;
  transform: translate(-50%, -50%) scale(1);
  opacity: 0;
  transition: transform 0.4s ease, opacity 0.5s ease;
`;

export const iconsContainerStyle = css`
  height: 20vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  ${mediaQuery.mobileLandscape} {
    display: grid;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    place-items: center;
  }
`;
