import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

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
    --color-bg-primary: hsl(255, 45%, 7.5%);
    --color-bg-secondary: rgba(46, 72, 159, 1);
    --color-bg-tertiary: hsl(227, 16%, 45%);

    --color-text-primary: rgb(245, 235, 255);
    --color-text-secondary: hsl(227, 16%, 60%);
    --color-text-highlight: rgb(27, 187, 139);

    --box-shadow-primary: rgba(133, 133, 133, 0.6);
    --color-text-shadow: rgba(255, 255, 255, 0.5);
  }

  .chromium,
  .Android {
    --text-stroke-width: 1px;
    ${mediaQuery.mobile} {
      --text-stroke-width: 2px;
    }
  }
  .iOS {
    --text-stroke-width: 1px;
  }
  .safari {
    --text-stroke-width: 2px;
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

  :has(#home) {
    ::-webkit-scrollbar {
      width: 0px;
    }
    ::-webkit-scrollbar-thumb {
      background: transparent;
      border-radius: 1rem;
      width: 0;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: var(--color-text-primary);
    font-family: var(--font-primary);
    -webkit-tap-highlight-color: transparent;
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
