import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const valensiteNavContainer = css`
  position: fixed;
  top: 50%;
  right: 6.5%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 4vh;
  z-index: 10;
  ${mediaQuery.mobile} {
    display: none;
  }
`;

export const valNavLinkStyle = css`
  text-decoration: none;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  opacity: 0.6;
  color: var(--color-val-black);
  &:hover {
    opacity: 1;
  }
  &.active {
    opacity: 1;
    & > span {
      &::after {
        content: "";
        position: absolute;
        height: 160%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        aspect-ratio: 1;
        border-radius: 50%;
        border: 2px solid var(--color-val-black);
      }
    }
  }
`;

export const valNavDotStyle = css`
  height: 10px;
  aspect-ratio: 1;
  background-color: var(--color-val-black);
  border-radius: 50%;
  display: flex;
  position: relative;
`;
