import { css } from "@emotion/react";

export const subTextWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  z-index: 1;
  .text {
    font-size: 1.5rem;
  }
  .cta {
    color: var(--color-bg-primary);
    background-color: var(--color-primary-300);
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5em 1.25em;
    border: none;
    border-radius: 10px;
  }
`;
