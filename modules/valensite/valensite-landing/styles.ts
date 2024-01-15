import LocalFont from "next/font/local";
import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

const valensiteFont = LocalFont({
  src: [
    {
      path: "../../../public/assets/fonts/macaroni.ttf",
      style: "normal",
      weight: "700",
    },
  ],
  preload: true,
  display: "swap",
  fallback: ["sans-serif"],
});

export const valLandingContainerStyle = css`
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-bg-val-radial);
  ${mediaQuery.mobile} {
    overflow: hidden;
  }
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
  font-size: 1.4rem;
  ${mediaQuery.mobile} {
    font-size: 1.2rem;
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
  padding: 0.75em 1em;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8em;
  transform: translateY(10vh);
  border: none;
  outline: none;
  cursor: pointer;
  span {
    color: var(--color-bg-val-primary);
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: 0.05em;
  }
  ${mediaQuery.desktop} {
    transition: all 0.3s ease;
    &:hover {
      box-shadow: 4px 4px 10px -1px var(--box-shadow-primary);
    }
  }
  ${mediaQuery.mobile} {
    font-size: 1.2rem;
    border-radius: 15px;
    padding: 0.5em 1.25em;
    ${mediaQuery.squeezedScreen} {
      padding: 0.5em 1em;
      span {
        font-size: 1rem;
      }
    }
  }
  ${mediaQuery.squeezedScreen} {
    padding: 0.75em 1em;
    span {
      font-size: 1rem;
    }
  }
`;

export const valLandingIconStyle = css`
  font-size: 1.25rem;
  path {
    color: var(--color-bg-val-primary);
  }
  ${mediaQuery.mobile} {
    font-size: 1rem;
  }
`;

export const decorImagesCss = (
  top: string,
  left: string,
  height: string,
  width: string,
  phoneLeft: string,
  phoneTop: string,
  display?: string
) => css`
  position: absolute;
  height: ${height};
  width: ${width};
  top: ${top};
  left: ${left};
  img {
    object-fit: contain;
  }
  ${mediaQuery.mobile} {
    scale: 0.5;
    top: ${phoneTop};
    left: ${phoneLeft};
    display: ${display};
  }
`;
