import { Ref, forwardRef, useRef } from "react";
import { workContainerCss } from "./styles";
import WorkCarousel from "../work-carousel";
import WorkDescription from "../work-description";
import WorkHeading from "../work-heading";

function DW(_: unknown, ref: Ref<HTMLDivElement>) {
  const descriptionRef = useRef<HTMLDivElement>(null);
  return (
    <section id="work" ref={ref} css={workContainerCss} className="home-child">
      <WorkHeading />
      <WorkCarousel />
      <WorkDescription ref={descriptionRef} />
    </section>
  );
}

const DwebWork = forwardRef(DW);
export default DwebWork;
