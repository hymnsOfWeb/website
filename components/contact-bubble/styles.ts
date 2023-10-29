import { css, keyframes } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const bubbleLinkCss = css`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const bubbleFloat = keyframes`
  0%{
      offset-distance: 0%;
  }
  100%{
      offset-distance: 100%;
  }
`;

const bubbleFloatReverse = keyframes`
  0%{
    offset-distance: 100%;
  }
  100%{
    offset-distance: 0%;
  }
`;

const paths = [
  // eslint-disable-next-line max-len
  "M12.7698 27.8925C-3.05939 29.156 0.433781 46.4147 4.15901 54.8862C7.02928 60.3902 13.7225 74.0976 17.5332 84.8951C22.2966 98.3919 56.1901 90.3513 56.1901 79.8697C56.1901 69.3881 56.1901 67.6651 81.4729 59.6244C101.699 53.1919 88.1905 34.0666 78.908 25.308C78.4805 20.3304 73.3384 8.681 56.1901 1.90387C37.5762 -2.46107 34.0219 10.0403 34.5716 16.8365C33.8998 19.9954 28.599 26.6289 12.7698 27.8925Z",
  // eslint-disable-next-line max-len
  "M9.19674 33.1313C4.40908 36.5517 2.21473 43.6943 1.71602 46.838C-0.133764 57.8035 2.03338 64.8203 3.34817 66.9581C6.24979 74.4192 14.7733 89.6434 25.6543 90.8506C36.5354 92.0578 40.3438 85.6529 40.8878 82.2996C43.2454 75.2576 50.3544 60.5197 59.9297 57.904C71.8989 54.6345 82.6439 48.9758 88.0844 43.4428C93.525 37.9098 90.9407 21.5623 83.732 23.4485C77.965 24.9575 69.7226 22.8198 66.3223 21.5623C63.8741 20.179 58.2431 15.5011 55.3052 7.85548C52.3674 0.209873 46.1017 0.478139 43.3361 1.56797C40.2078 3.45423 33.8423 7.67943 33.4071 9.49023C32.8631 11.7537 24.4302 20.682 23.4781 21.5623C22.526 22.4425 15.1813 28.8558 9.19674 33.1313Z",
  // eslint-disable-next-line max-len
  "M6.08806 12.9988C1.34118 22.1566 8.56039 30.2385 12.7634 33.1348C22.1088 47.6162 2.37956 57.4083 1.0445 62.6492C-0.0235497 81.1853 18.4003 87.8421 27.7457 88.8535C44.2609 92.3475 79.368 94.122 87.6751 73.2688C95.9821 52.4157 86.785 44.9038 81.1481 43.7545C77.6374 43.2028 70.0226 41.2444 67.6492 37.824C64.6824 33.5486 68.5392 27.4802 70.0226 24.3081C71.6544 16.4468 69.1326 11.6197 62.9023 8.0338C57.9181 5.16511 51.134 9.22909 48.365 11.6197C46.1893 12.0794 40.948 12.723 37.3878 11.6197C30.8608 3.12393 23.79 1 21.0704 1C18.0542 1.18389 10.8349 3.8411 6.08806 12.9988Z",
  // eslint-disable-next-line max-len
  "M26.0128 4.31181C-1.95899 6.87902 -0.90695 38.1848 3.11554 53.5167C9.55153 90.8269 24.672 93.3085 31.4277 89.8856C37.0489 84.8225 49.3433 72.6425 53.5514 64.4274C57.7596 56.2123 62.009 55.87 63.6077 56.7257L75.8299 62.0741C81.7605 64.2848 93.0338 60.8333 90.6821 29.3421C87.7426 -10.0218 73.1998 3.0282 71.8074 3.24214C70.6934 3.41328 65.8768 11.443 63.6077 15.4364C61.3386 17.6471 55.934 20.742 52.4685 15.4364C48.1365 8.80443 40.0916 5.38148 26.0128 4.31181Z",
];

function nthTypeGenerator() {
  let forReturn = "";
  for (let i = 0; i < paths.length; i++) {
    forReturn += `&:nth-of-type(${i + 2}){
      offset-path: path('${paths[i]}');
      ;
    }`;
  }
  return forReturn;
}

export const bubbleWrapperCss = css`
  position: absolute;
  border: 2px solid var(--color-text-primary);
  border-radius: 50%;
  font-size: 3rem;
  height: 2em;
  width: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-bg-primary);
  transition: background-color 0.3s ease 0.2s, scale 0.4s ease;
  text-decoration: none;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-delay: 0;
  animation-direction: normal;
  animation-fill-mode: forwards;
  offset-rotate: 0deg;
  ${nthTypeGenerator()}
  &:nth-of-type(2),&:nth-of-type(4) {
    animation-name: ${bubbleFloat};
    ${mediaQuery.mobilePortrait} {
      offset-path: none;
    }
    ${mediaQuery.mobileLandscape} {
      offset-path: none;
    }
  }
  &:nth-of-type(3),
  &:nth-of-type(5) {
    animation-name: ${bubbleFloatReverse};
    ${mediaQuery.mobilePortrait} {
      offset-path: none;
    }
    ${mediaQuery.mobileLandscape} {
      offset-path: none;
    }
  }
  &:hover {
    animation-play-state: paused;
  }
  ${mediaQuery.mobilePortrait} {
    position: static;
    animation: none;
    transform: none;
    width: 12.5vw;
    height: 12.5vw;
  }
  ${mediaQuery.mobileLandscape} {
    position: static;
    animation: none;
    width: 10vw;
    height: 10vw;
  }
`;

export const bubbleWrapperPosition = (top: number, left: number) => css`
  top: ${top}vh;
  left: ${left}vw;
  ${mediaQuery.mobilePortrait} {
    top: 0;
    left: 0;
  }
  ${mediaQuery.mobileLandscape} {
    top: 0;
    left: 0;
  }
`;

export const bubbleWrapperScale = (scale: number) => css`
  ${mediaQuery.desktop} {
    &:hover {
      scale: ${scale};
      background-color: var(--color-text-primary);
      .bubble-text {
        color: var(--color-bg-primary);
        transform: scale(calc(1 / ${scale}));
        opacity: 1;
      }
      .bubble-icon {
        filter: blur(10px);
        opacity: 0;
      }
    }
  }
`;

export const bubbleText = css`
  font-size: 1rem;
  opacity: 0;
  text-align: center;
  width: fit-content;
  position: absolute;
  color: var(--color-text-primary);
  transition: color 0.2s ease 0.4s, transform 0.4s ease;
  ${mediaQuery.mobilePortrait} {
    display: none;
  }
  ${mediaQuery.mobileLandscape} {
    display: none;
  }
`;

export const bubbleSvgCss = css`
  height: 1em;
  width: 1em;
  opacity: 1;
  position: absolute;
  transition: filter 0.3s ease, opacity 0.2s ease 0.2s;
  ${mediaQuery.mobilePortrait} {
    position: static;
    height: 50%;
    width: 50%;
  }
  ${mediaQuery.mobileLandscape} {
    position: static;
    height: 50%;
    width: 50%;
  }
`;
