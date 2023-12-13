/* eslint-disable jsx-a11y/alt-text */
import { PropsWithChildren } from "react";
import Image from "next/image";
import { imgContainerWrapper } from "./styles";
import type { ImageContainerProps } from "./types";

export default function ImageComp(
  props: PropsWithChildren<ImageContainerProps>
) {
  const {
    children,
    containerClassName,
    containerCss,
    containerRef,
    containerOnClick,
    height,
    width,
    imgSize = {
      height: "100%",
      width: "100%",
    },
    ...allOtherProps
  } = props;
  const contCss = [imgContainerWrapper(imgSize)];
  if (typeof (containerCss as [])?.length === "number") {
    contCss.push(...((containerCss ?? []) as []));
  } else {
    contCss.push(containerCss as never);
  }

  return (
    <div
      className={
        "img-container" + (containerClassName ? " " + containerClassName : "")
      }
      css={contCss}
      ref={containerRef}
      onClick={containerOnClick}
    >
      <Image
        {...allOtherProps}
        height={height}
        width={width}
        fill={!(height || width)}
        sizes="100%"
        className="img"
      />
      {children}
    </div>
  );
}
