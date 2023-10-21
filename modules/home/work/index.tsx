import { Ref, forwardRef } from "react";
import { workContainerCss } from "./style";
import WorkCarousel from "./work-carousel";
import WorkDescription from "./work-description";
import WorkHeading from "./work-heading";

function W(_: any, ref: Ref<HTMLDivElement>) {
  return (
    <section id="work-container" ref={ref} css={workContainerCss}>
      <WorkHeading />
      <WorkCarousel />
      <WorkDescription />
    </section>
  );
}

const Work = forwardRef(W);
export default Work;
