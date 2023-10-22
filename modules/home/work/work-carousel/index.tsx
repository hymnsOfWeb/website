import { useCallback } from "react";
import { ImageComp } from "@/components";
import { workData, type WorkData } from "@common-data";
import { carousalWrapperCss } from "./style";

export default function WorkCarousel() {
  const mainMapper = useCallback((singleWork: WorkData, index: number) => {
    const { alt, src } = singleWork.img;
    return (
      <div key={"work-carousal-" + index} className="work-carousal-container">
        <ImageComp
          alt={alt}
          src={src}
          containerClassName="work-img-container"
        />
      </div>
    );
  }, []);
  return (
    <div css={carousalWrapperCss} className="work-carousal-wrapper">
      {workData.map(mainMapper)}
    </div>
  );
}
