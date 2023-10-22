import { forwardRef, useRef } from "react";
import type { Ref } from "react";
import { workContainerCss } from "./style";
import WorkCarousel from "./work-carousel";
import WorkDescription from "./work-description";
import WorkHeading from "./work-heading";

function W(_: unknown, ref: Ref<HTMLDivElement>) {
  const descriptionRef = useRef<HTMLDivElement>(null);
  return (
    <div id="work-container" ref={ref} css={workContainerCss}>
      <WorkHeading />
      <WorkCarousel />
      <WorkDescription ref={descriptionRef} />
    </div>
  );
}

const Work = forwardRef(W);
export default Work;
