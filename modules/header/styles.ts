import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const mainTimeDelay = 1.25;

export const headerWrapper = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 999;
  --_main-time-delay: ${mainTimeDelay}s;
`;

export const logoContainer = css`
  aspect-ratio: 1;
  height: 100%;
`;

export const logoWrapper = css`
  z-index: 999;
  height: 70px;
  width: 70px;
  left: 5vw;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--color-text-primary);
  padding: 15px;
  filter: invert(0);
  position: absolute;
  top: 5vh;
  transition: filter 0.3s ease-in-out 0.6s, backdrop-filter 0.5s ease 0.6s,
    scale 0.3s ease-in-out, border-color 0.3s ease;
  backdrop-filter: blur(30px);
  &.active {
    transition: filter 0.3s ease-in-out 0.2s, backdrop-filter 1s ease 0s,
      scale 0.3s ease-in-out;
    filter: invert(1);
    backdrop-filter: none;
  }
  ${mediaQuery.desktop} {
    &:hover {
      border-color: var(--color-text-highlight);
      scale: 1.15;
    }
  }
`;

export const hamBtn = css`
  z-index: 999;
  border-radius: 50%;
  backdrop-filter: blur(30px);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  top: 5vh;
  right: 5vw;
  height: 70px;
  width: 70px;
  padding: 0 20px;
  cursor: pointer;
  --_h: 2px;
  --_t: 0.15s;
  --_e: ease-in-out;
  --_c: var(--color-text-primary);
  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
  }
  &::before {
    content: "";
    height: var(--_h);
    width: 100%;
    background-color: var(--_c);
    margin-bottom: 0px;
    transform: rotate(0deg);
    transition: margin-bottom var(--_t) var(--_e) var(--_t),
      transform var(--_t) var(--_e) 0s,
      background-color var(--_t) var(--_e) 0.4s;
    border-radius: 5px;
  }
  &::after {
    content: "";
    height: var(--_h);
    width: 100%;
    background-color: var(--_c);
    margin-top: 0px;
    transform: rotate(0deg);
    transition: margin-top var(--_t) var(--_e) var(--_t),
      transform var(--_t) var(--_e) 0s,
      background-color var(--_t) var(--_e) 0.4s;
    border-radius: 5px;
  }
  &.active::before {
    transition: margin-bottom var(--_t) var(--_e),
      transform var(--_t) var(--_e) var(--_t),
      background-color var(--_t) var(--_e) 0.75s;
    margin-bottom: -4px;
    transform: rotate(45deg);
    background-color: var(--color-bg-primary);
  }
  &.active::after {
    transition: margin-top var(--_t) var(--_e),
      transform var(--_t) var(--_e) var(--_t),
      background-color var(--_t) var(--_e) 0.75s;
    margin-top: -3px;
    transform: rotate(-45deg);
    background-color: var(--color-bg-primary);
  }
`;

export const nav = css`
  --_col: var(--color-text-highlight);
  --nav-width: 160vw;
  ${mediaQuery.mobile} {
    --nav-width: 220vw;
  }
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: -1;
  }
  position: absolute;
  height: 100vh;
  width: var(--nav-width);
  background-color: var(--_col);
  top: 0;
  left: calc((100vw - var(--nav-width)) / 2);
  transition: transform var(--_main-time-delay) ease-in-out, clip-path 0.3s ease;
  transform: translateX(-100%);
  clip-path: polygon(0 0, 90% 0, 100% 100%, 0% 100%);
  box-shadow: 20px 0 15px 10px rgba(0, 0, 0, 1);
  &.active {
    transform: translateX(0);
    left: calc((100vw - var(--nav-width)) / 2);
    clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%);
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-bg-primary);
  font-size: 4rem;
  ${mediaQuery.squeezedScreen} {
    font-size: 3.5rem;
  }
  ${mediaQuery.mobile} {
    font-size: 2.5rem;
  }
  ${mediaQuery.mobileLandscape} {
    --nav-width: 140vw;
    flex-direction: column;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    font-size: 2.2rem;
    padding: 2em 5em;
    place-items: center;
  }
`;
