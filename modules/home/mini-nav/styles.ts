import { css } from "@emotion/react";

export const miniNavContainerCss = css`
  position: fixed;
  left: 0;
  bottom: 5vh;
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

export const miniNavButtonCss = css`
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.2rem;
  font-family: var(--font-mono);
  display: flex;
  gap: 10px;
  align-items: center;
  opacity: 0.5;
  &.active {
    opacity: 1;
  }
  &::before {
    content: "";
    height: 2px;
    width: 2em;
    background-color: var(--color-text-primary);
  }
`;
