import { css } from "@emotion/react";

export const dialogContainerCss = css`
  display: grid;
  place-items: center;
  height: 80vh;
  width: 80%;
  margin: auto;
  border: none;
  background-color: var(--color-bg-val-primary);
  border-radius: 20px;
  &::backdrop {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
