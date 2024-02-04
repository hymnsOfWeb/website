import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const globalFontVarsCss = ({ primary }: { primary: string }) => css`
  :root {
    --font-primary: ${primary};
  }
`;

export const globalCss = css`
  :root {
    --color-primary-000: #f1f7fc;
    --color-primary-100: #c1e7f4;
    --color-primary-200: #91d8ed;
    --color-primary-300: #60c8e5;
    --color-primary-400: #30b8dd;
    --color-primary-500: #2a98b6;
    --color-primary-600: #24788f;
    --color-primary-700: #1f5768;
    --color-primary-800: #193741;
    --color-primary-900: #0d1c23;

    --color-secondary-000: #ffedcc;
    --color-secondary-100: #ffdb99;
    --color-secondary-200: #ffc966;
    --color-secondary-300: #ffb633;
    --color-secondary-400: #ffa400;
    --color-secondary-500: #d58803;
    --color-secondary-600: #aa6c06;
    --color-secondary-700: #804f08;
    --color-secondary-800: #55330b;
    --color-secondary-900: #2b170e;

    --color-text-primary: rgb(245, 235, 255);

    --color-bg-primary: #151515; //var(--color-primary-900);
    --color-bg-tertiary: var(--color-primary-000);
    --color-bg-bright: var(--color-secondary-400);

    --color-text-secondary: hsl(227, 16%, 60%);
    --color-text-highlight: var(--color-secondary-400);

    --box-shadow-primary: hsla(195, 50%, 20%, 50%);
    --color-text-shadow: rgba(255, 255, 255, 0.5);

    //valensite colors

    --color-bg-val-primary: #e0325b;
    --color-bg-val-secondary: hsla(0, 0%, 95%, 1);
    --color-val-black: #000000;
    --color-bg-gray: #e0e0e0;
    --color-val-white: #ffffff;
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
    font-family: var(--font-primary);
  }
  #tsparticles {
    transition: all 0.3s ease;
  }
`;
