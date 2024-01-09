import LocalFont from "next/font/local";
import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

const valensiteFont = LocalFont({
  src: [
    {
      path: "../../../public/assets/fonts/macaroni.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../../public/assets/fonts/macaroni.ttf",
      style: "normal",
      weight: "500",
    },
    {
      path: "../../../public/assets/fonts/macaroni.ttf",
      style: "normal",
      weight: "600",
    },
    {
      path: "../../../public/assets/fonts/macaroni.ttf",
      style: "normal",
      weight: "700",
    },
    {
      path: "../../../public/assets/fonts/macaroni.ttf",
      style: "normal",
      weight: "800",
    },
    {
      path: "../../../public/assets/fonts/macaroni.ttf",
      style: "normal",
      weight: "900",
    },
  ],
  display: "swap",
  fallback: ["sans-serif"],
});

export const valLandingContainerStyle = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-bg-val-radial);
`;

export const valensiteHeadingStyle = css`
  font-size: clamp(12rem, 16vw, 18rem);
  font-family: ${valensiteFont.style.fontFamily};
  ${mediaQuery.mobile} {
    font-size: 20vw;
  }
  @media (width < 400px) {
    font-size: 23vw;
  }
`;

export const valLandingSpanStyle = css`
  font-size: 1.8rem;
  ${mediaQuery.mobile} {
    font-size: 1.5rem;
    margin: 0 7%;
    text-align: center;
  }
  @media (width < 400px) {
    font-size: 1rem;
  }
`;

export const valLandingBtnStyle = css`
  background-color: var(--color-val-white);
  text-decoration: none;
  padding: 1em 1.5em;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8em;
  transform: translateY(10vh);
  span {
    color: var(--color-bg-val-primary);
    font-weight: 600;
    font-size: 1.5rem;
    letter-spacing: 0.05em;
  }
  ${mediaQuery.mobile} {
    border-radius: 15px;
    padding: 0.5em 1em;
    span {
      font-size: 1rem;
    }
  }
  ${mediaQuery.squeezedScreen} {
    padding: 1em 1.25em;
    span {
      font-size: 1.2rem;
    }
  }
`;

export const valLandingIconStyle = css`
  font-size: 2rem;
  path {
    color: var(--color-bg-val-primary);
  }
  ${mediaQuery.mobile} {
    font-size: 1.5rem;
  }
`;
