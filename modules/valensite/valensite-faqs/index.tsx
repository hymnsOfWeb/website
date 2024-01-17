import { useEffect, useRef } from "react";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import { faqsData } from "@common/valensite-faq-data";
import { valensiteFaqHeader } from "@common-data";
import {
  articleCarousalCss,
  btnsCarousalCss,
  carousalContainerCss,
  carousalItemCss,
  carousalWrapperCss,
  faqsContainerCss,
} from "@modules/valensite/valensite-faqs/styles";

export default function ValensiteFaqs() {
  const trackRef = useRef<HTMLDivElement>(null);
  const widthRef = useRef<number>(0);
  useEffect(() => {
    const resizeHandler = () => {
      const item = trackRef?.current?.firstChild as HTMLDivElement;
      const itemWidth = item?.getBoundingClientRect().width;
      widthRef.current = itemWidth;
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  function clickHandler(direction: "left" | "right") {
    const slider = () => {
      const track = trackRef.current;
      if (track) {
        switch (direction) {
          case "left":
            track.scrollLeft -= widthRef.current;
            break;
          case "right":
            track.scrollLeft += widthRef.current;
            break;
        }
      }
    };
    return slider;
  }

  const faqMapper = (faq: (typeof faqsData)[0], index: number) => {
    return (
      <div key={`faq-item-${index}`} css={carousalItemCss}>
        <article className="carousal-items" css={articleCarousalCss}>
          <h2 className="article-header">{faq.question}</h2>
          <p className="article-para">{faq.answer}</p>
        </article>
      </div>
    );
  };

  return (
    <div id="valensite-faqs" css={faqsContainerCss}>
      <h2 className="faq-header">{valensiteFaqHeader}</h2>
      <div css={carousalContainerCss}>
        <div css={btnsCarousalCss} className="carousal-btns left-btn">
          <FaCircleChevronLeft onClick={clickHandler("left")} />
        </div>
        <div css={carousalWrapperCss} ref={trackRef}>
          {faqsData.map(faqMapper)}
        </div>
        <div css={btnsCarousalCss} className="carousal-btns right-btn">
          <FaCircleChevronRight onClick={clickHandler("right")} />
        </div>
      </div>
    </div>
  );
}
