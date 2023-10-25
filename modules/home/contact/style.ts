import { css } from "@emotion/react";

export const contactCss = css`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const contactSquareCss = css`
  width: 500px;
  aspect-ratio: 1;
  position: relative;
  @media only screen and (max-width: 700px) {
    width: 80%;
  }
`;

export const contactCircleCss = css`
  height: 90%;
  width: 90%;
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
  .contact-text {
    font-family: var(--font-mono);
    transition: all 0.3s ease 0.1s;
    font-size: 2rem;
    z-index: 1;
  }
  &:hover {
    .contact-text {
      color: var(--color-bg-primary);
    }
    .shadow {
      transform: translate(-50%, -50%) scale(1000);
    }
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
