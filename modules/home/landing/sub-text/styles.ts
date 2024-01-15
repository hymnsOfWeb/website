import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

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
    font-size: 1.2rem;
    padding: 0.5em 1.25em;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    letter-spacing: 0.75px;
    text-decoration: none;
    ${mediaQuery.desktop} {
      transition: all 0.3s ease;
      &:hover {
        box-shadow: 5px 7.5px 10px -2px rgba(96, 200, 229, 0.3);
      }
    }
  }
  ${mediaQuery.mobile} {
    flex-direction: column;
    position: absolute;
    bottom: 10vh;
    .text {
      font-size: 1.4rem;
      @media (max-width: 350px) {
        font-size: 1rem;
      }
    }
    .cta {
      font-size: 1rem;
      padding: 0.5em 1.25em;
      border-radius: 10px;
      @media (max-width: 350px) {
        font-size: 0.8rem;
      }
    }
  }
`;
