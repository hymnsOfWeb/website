import { css } from "@emotion/react";

export const descriptionContainer = css`
  background-color: blue;
  display: flex;
  flex-direction: column;
`;

export const workCardsCss = css`
  width: 600px;
  border: 1px solid black;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const workTitleCss = css`
  font-size: 2.5rem;
  font-weight: 600;
`;

export const linksContainerCss = css`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 2vh;
  margin: 1vh 0;
`;

export const workLinkCss = css`
  text-decoration: none;
  background-color: red;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0.5em 1.5em;
  border-radius: 100px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
