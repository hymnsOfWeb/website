import { css } from "@emotion/react";
import { ImageContainerProps } from "./types";

export const imgContainerWrapper = (
  imgSize: ImageContainerProps["imgSize"]
) => css`
  position: relative;
  img {
    width: ${imgSize?.width ?? "100%"};
    height: ${imgSize?.height ?? "100%"};
    object-fit: cover;
  }
`;
