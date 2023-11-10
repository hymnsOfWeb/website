import { useCallback, useEffect, useRef } from "react";
import { WorkData, workData } from "@common-data";
import { ImageComp, WorkDescriptionCard } from "@components";
import {
  mwebCardCss,
  mwebWorkImgCss,
  workContainerCss,
  workDescCss,
} from "./styles";
import WorkHeading from "../work-heading";

const MwebWorkCard = ({ data }: { data: WorkData }) => {
  return (
    <div css={mwebCardCss}>
      <ImageComp
        src={data.img.src}
        alt={data.img.alt}
        containerCss={mwebWorkImgCss}
        id="work-img-container"
      />
      <WorkDescriptionCard data={data} css={workDescCss} />
    </div>
  );
};

export default function MwebWork() {
  const workRef = useRef<HTMLDivElement>(null);

  const obvCallback: IntersectionObserverCallback = useCallback((entries) => {
    for (const entry of entries) {
      const scrollCallback = () => {
        const elem = entry.target;
        const { innerHeight } = window;
        const { height, bottom } = elem.getBoundingClientRect();
        const percentage = (bottom * 20) / (height + innerHeight);
        const img = elem.children[0];
        if (img) {
          (
            img as HTMLDivElement
          ).style.transform = `translateY(-${percentage}%)`;
        }
      };
      if (entry.isIntersecting) {
        window.addEventListener("scroll", scrollCallback);
      } else {
        window.removeEventListener("scroll", scrollCallback);
      }
    }
  }, []);

  useEffect(() => {
    const obvOptions: IntersectionObserverInit = {
      threshold: 0.01,
      root: document,
    };
    const observer = new IntersectionObserver(obvCallback, obvOptions);
    if (workRef.current) {
      Array.from(workRef.current.querySelectorAll(".img-container")).forEach(
        (elem) => {
          observer.observe(elem);
        }
      );
    }
  }, [obvCallback]);

  const mapper = (elem: WorkData, index: number) => {
    return <MwebWorkCard key={index} data={elem} />;
  };

  return (
    <div id="work" css={workContainerCss} ref={workRef}>
      <WorkHeading />
      {workData.map(mapper)}
    </div>
  );
}
