import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const aboutDescriptionCss = css`
  text-align: justify;
  line-height: 2em;
`;

export const servicesHeadingCss = css`
  font-size: 2rem;
  margin: 10vh 0 2vh 0;
  letter-spacing: 0.5em;
  ${mediaQuery.mobile} {
    font-size: 1.2rem;
  }
`;

export const serviceListCss = css`
  line-height: 2em;
  text-align: justify;
  margin: 4vh 0;
`;

export const serviceTitleCss = css`
  font-weight: 700;
`;
