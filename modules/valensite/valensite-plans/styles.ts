import { css } from "@emotion/react";
import { mediaQuery } from "@common-styles";

export const valPlanWrapperStyle = css`
  min-height: 100vh;
  background: var(--color-bg-val-radial);
  display: flex;
  padding: 10vh 0;
  padding-left: 6%;
  flex-direction: column;
  justify-content: center;
  gap: 10vh;
  ${mediaQuery.mobile} {
    padding-right: 6%;
  }
`;

export const valPlansTextContainertyle = css`
  color: var(--color-val-white);
  h2 {
    color: inherit;
    font-size: 3.5rem;
    margin-bottom: 2vh;
    font-weight: 600;
  }
  span {
    color: inherit;
    font-size: 1.5rem;
    font-weight: 300;
    ${mediaQuery.mobile} {
      font-size: 1.2rem;
    }
  }
  ${mediaQuery.smallLaptop} {
    width: 100%;
  }
  ${mediaQuery.mobile} {
    width: 100%;
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export const plansContainerStyle = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6vw;
  width: fit-content;
  ${mediaQuery.smallLaptop} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mediaQuery.mobile} {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    place-items: center;
    gap: 75px;
  }
`;
