import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const aboutDescriptionCss = css`
  text-align: justify;
  line-height: 2em;
`;

export const servicesHeadingCss = css`
  font-size: 2rem;
  margin: 10vh 0 2vh 0;
  letter-spacing: 0.07em;
  color: var(--color-text-highlight);
  ${mediaQuery.mobile} {
    font-size: 1.5rem;
  }
`;

export const serviceListCss = css`
  line-height: 2em;
  text-align: justify;
  margin: 4vh 0;
  font-weight: 200;
`;

export const serviceTitleCss = css`
  font-weight: 500;
`;

export const serviceCardsWrapperCss = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  ${mediaQuery.mobilePortrait} {
    grid-template-columns: repeat(1, 1fr);
  }
  ${mediaQuery.mobileLandscape} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const serviceCardCss = css`
  height: 20vw;
  @media (1000px < width < 1250px) {
    height: 27.5vw;
  }
  ${mediaQuery.tablet} {
    height: 30vh;
  }
  ${mediaQuery.mobilePortrait} {
    height: 40vh;
    position: relative;
    &:nth-of-type(n) {
      text-align: right;
    }
  }
  ${mediaQuery.squeezedScreen} {
    height: 35vh;
  }
  ${mediaQuery.mobileLandscape} {
    height: 70vh;
  }
  border: 2px solid #1bbb8b;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  ${mediaQuery.desktop} {
    &:nth-of-type(even) {
      text-align: right;
    }
    &._1 {
      .service-img {
        float: right;
        justify-content: flex-end;
        shape-outside: circle(70% at 100% 100%);
        img {
          border-radius: 100% 00 00 00;
        }
      }
    }
    &._2 {
      .service-img {
        float: left;
        justify-content: flex-end;
        shape-outside: circle(70% at 0% 100%);
        img {
          border-radius: 00 100% 00 00;
        }
      }
    }
    &._3 {
      .service-img {
        float: right;
        shape-outside: circle(70% at 100% 0%);
        img {
          border-radius: 00 00 00 100%;
        }
      }
    }
    &._4 {
      .service-img {
        float: left;
        shape-outside: circle(70% at 0% 0%);
        img {
          border-radius: 00 00 100% 00;
        }
      }
    }
  }
  @media (900px <= width <= 1000px) {
    &:nth-of-type(even) {
      text-align: right;
    }
    &._1 {
      .service-img {
        float: right;
        justify-content: flex-end;
        shape-outside: circle(20vw at 100% 100%);
        img {
          border-radius: 100% 00 00 00;
        }
      }
    }
    &._2 {
      .service-img {
        float: left;
        justify-content: flex-end;
        shape-outside: circle(20vw at 0% 100%);
        img {
          border-radius: 00 100% 00 00;
        }
      }
    }
    &._3 {
      .service-img {
        float: right;
        shape-outside: circle(20vw at 100% 0%);
        img {
          border-radius: 00 00 00 100%;
        }
      }
    }
    &._4 {
      .service-img {
        float: left;
        shape-outside: circle(20vw at 0% 0%);
        img {
          border-radius: 00 00 100% 00;
        }
      }
    }
  }
  ${mediaQuery.mobileLandscape} {
    &:nth-of-type(n) {
      text-align: right;
    }
    &._1,
    &._2,
    &._3,
    &._4 {
      .service-img {
        float: left;
        justify-content: flex-end;
        shape-outside: circle(40vw at 0% 100%);
        img {
          border-radius: 0 100% 00 00;
        }
      }
    }
  }
`;

export const serviceTextWrapperCss = css`
  position: relative;
  img {
    object-fit: cover;
    ${mediaQuery.desktop} {
      width: 10vw;
      height: 10vw;
    }
    ${mediaQuery.tablet} {
      width: 20vw;
      height: 20vw;
    }
  }
`;

export const serviceImgCompCss = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  shape-margin: 0.625rem;
  position: relative;
  ${mediaQuery.mobilePortrait} {
    float: left;
    justify-content: flex-end;
    shape-margin: 25px;
    shape-outside: circle(50vw at 0% 100%);
    img {
      border-radius: 00 100% 00 00;
      width: 50vw;
      height: 50vw;
    }
  }
  ${mediaQuery.squeezedScreen} {
    shape-margin: 1.5rem;
    shape-outside: circle(40vw at 0% 100%);
    position: static;
    img {
      width: 40vw;
      height: 40vw;
    }
  }
  @media (900px <= width <= 1000px) {
    shape-outside: circle(20vw at 0% 100%);
    shape-margin: 1rem;
    img {
      width: 20vw;
      height: 20vw;
    }
  }
`;

export const serviceCardHeadingCss = css`
  color: var(--color-text-highlight);
  font-size: clamp(1rem, 1.8vw, 3rem);
  margin-bottom: 20px;
  margin-top: 0.5em;
  padding: 0 20px;
  ${mediaQuery.tablet} {
    font-size: clamp(1rem, 4vw, 3rem);
  }
  ${mediaQuery.mobilePortrait} {
    font-size: clamp(1rem, 8vw, 3rem);
    margin-bottom: 1.5vh;
    margin-top: 10px;
  }
  ${mediaQuery.squeezedScreen} {
    font-size: 3rem;
  }
  ${mediaQuery.mobileLandscape} {
    font-size: 4vw;
  }
  @media (900px <= width <= 1000px) {
    font-size: clamp(1rem, 3vw, 3rem);
  }
`;

export const serviceCardParaCss = css`
  padding: 0 20px;
  font-size: clamp(0.75rem, 1vw, 2rem);
  line-height: 1.625em;
  ${mediaQuery.tablet} {
    font-size: clamp(0.75rem, 2vw, 2rem);
  }
  ${mediaQuery.mobilePortrait} {
    line-height: 1.5em;
    font-size: clamp(0.8rem, 3.5vw, 3rem);
  }
  ${mediaQuery.squeezedScreen} {
    font-size: clamp(1rem, 2vw, 2rem);
  }
  ${mediaQuery.mobileLandscape} {
    font-size: 2vw;
  }
  @media (900px <= width <= 1000px) {
    font-size: 1rem;
  }
`;

export const serviceIconContainerCss = css`
  padding: 15px;
  background-color: var(--color-text-highlight);
  position: absolute;
  width: fit-content;
  border-radius: 50%;
  display: grid;
  place-items: center;
  svg {
    font-size: clamp(1rem, 1.75vw, 2rem);
    ${mediaQuery.tablet} {
      font-size: clamp(0rem, 3vw, 2.5rem);
    }
  }
  ${mediaQuery.desktop} {
    &.icon-0 {
      top: 70%;
      left: -5%;
    }
    &.icon-1 {
      top: 70%;
      right: -5%;
    }
    &.icon-2 {
      bottom: 70%;
      left: -5%;
    }
    &.icon-3 {
      bottom: 70%;
      right: -5%;
    }
  }

  ${mediaQuery.mobilePortrait} {
    &.icon-0,
    &.icon-1,
    &.icon-2,
    &.icon-3 {
      top: 16px;
      left: 20px;
      padding: 0;
      svg {
        padding: 25%;
        font-size: clamp(1rem, 8vw, 3rem);
      }
    }
  }
  ${mediaQuery.squeezedScreen} {
    &.icon-0,
    &.icon-1,
    &.icon-2,
    &.icon-3 {
      top: unset;
      left: unset;
      bottom: 20px;
      right: 20px;
    }
  }
  ${mediaQuery.mobileLandscape} {
    &.icon-0,
    &.icon-1,
    &.icon-2,
    &.icon-3 {
      top: unset;
      left: unset;
      bottom: 20px;
      left: 40%;
    }
  }
  @media (900px <= width <= 1000px) {
    svg {
      font-size: 1rem;
    }
    &.icon-0 {
      inset: unset;
      right: 20px;
      top: 90px;
    }
    &.icon-1 {
      inset: unset;
      left: 20px;
      top: 90px;
    }
    &.icon-2 {
      inset: unset;
      right: 20px;
      bottom: 90px;
    }
    &.icon-3 {
      inset: unset;
      left: 20px;
      bottom: 90px;
    }
  }
`;
