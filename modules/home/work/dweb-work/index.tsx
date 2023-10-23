import { Ref, forwardRef, useRef } from "react";
import { workContainerCss } from "./styles";
import WorkCarousel from "../work-carousel";
import WorkDescription from "../work-description";
import WorkHeading from "../work-heading";

function DW(_: unknown, ref: Ref<HTMLDivElement>) {
  const descriptionRef = useRef<HTMLDivElement>(null);
  return (
    <div id="work-container" ref={ref} css={workContainerCss}>
      <WorkHeading />
      <WorkCarousel />
      <WorkDescription ref={descriptionRef} />
    </div>
  );
}

const DwebWork = forwardRef(DW);
export default DwebWork;
