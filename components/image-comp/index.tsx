/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { imgContainerWrapper } from "./styles";
import type { ImageContainerProps } from "./types";

export default function ImageComp(props: ImageContainerProps) {
  const {
    containerClassName,
    containerCss,
    containerRef,
    containerOnClick,
    height,
    width,
    ...allOtherProps
  } = props;
  const contCss = [imgContainerWrapper];
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
      />
    </div>
  );
}
