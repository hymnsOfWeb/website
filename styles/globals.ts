import { css } from "@emotion/react";

export const globalFontVarsCss = ({
  primary,
  mono,
}: {
  primary: string;
  mono: string;
}) => css`
  :root {
    --font-primary: ${primary};
    --font-mono: ${mono};
  }
`;

export const globalCss = css`
  :root {
    --color-bg-primary: hsl(270, 33%, 11%);
    --color-bg-secondary: rgba(46, 72, 159, 1);

    --color-text-primary: rgb(245, 235, 255);
    --color-text-secondary: hsl(227, 16%, 60%);

    --box-shadow-primary: rgba(133, 133, 133, 0.6);
    --color-text-shadow: rgba(255, 255, 255, 0.5);

    --color-bg-tertiary: hsl(227, 16%, 50%);
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 1rem;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: var(--color-text-primary);
    font-family: var(--font-primary);
  }
  body {
    overflow-x: hidden;
    scroll-snap-align: unset;
    scroll-snap-stop: unset;
    background-color: var(--color-bg-primary);
  }

  * {
    scroll-behavior: smooth;
  }

  h1,
  h2,
  h3 {
    font-family: var(--font-mono);
  }
`;
