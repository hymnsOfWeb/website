import { useCallback } from "react";
import { workData, type WorkData } from "@common-data";
import { ImageComp } from "@components";
import { carousalMidContainer, carousalWrapperCss } from "./style";

export default function WorkCarousel() {
  const mainMapper = useCallback((singleWork: WorkData, index: number) => {
    const { alt, src } = singleWork.img;
    return (
      <div key={"work-carousal-" + index} className="work-carousal-container">
        <ImageComp
          alt={alt}
          src={src}
          containerClassName="work-img-container"
          placeholder="blur"
          quality={37.5}
        />
      </div>
    );
  }, []);
  return (
    <div css={carousalWrapperCss} className="work-carousal-wrapper">
      <div className="carousal-mid-container" css={carousalMidContainer}>
        {workData.map(mainMapper)}
      </div>
    </div>
  );
}
