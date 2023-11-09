import type { MouseEventHandler, Ref } from "react";
import type { ImageProps } from "next/image";
import { SerializedStyles } from "@emotion/react";
export interface ImageContainerProps extends ImageProps {
  containerClassName?: string;
  containerCss?: SerializedStyles | SerializedStyles[];
  imgSize?: {
    height: string;
    width: string;
  };
  containerRef?: Ref<HTMLDivElement> | undefined;
  containerOnClick?: MouseEventHandler<HTMLDivElement>;
}
