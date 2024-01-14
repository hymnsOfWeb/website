import { useEffect, useRef } from "react";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import { faqsData } from "@common/valensite-faq-data";
import { valensiteFaqHeader } from "@common-data";
import {
  btnsCarousalCss,
  carousalContainerCss,
  carousalItemCss,
  carousalTrackCss,
  carousalWrapperCss,
  faqsContainerCss,
} from "@modules/valensite/valensite-faqs/styles";

export default function ValensiteFaqs() {
  const trackRef = useRef<HTMLDivElement>(null);
  const widthRef = useRef<number>(0);
  useEffect(() => {
    const mainFunc = () => {
      const itemWidth = (
        trackRef?.current?.firstChild as HTMLDivElement
      )?.getBoundingClientRect().width;
      widthRef.current = itemWidth;
    };
    mainFunc();
    window.addEventListener("resize", mainFunc);
    return () => {
      window.removeEventListener("resize", mainFunc);
    };
  }, []);
  const clickHandler = (sign: "+" | "-") => {
    return function theRealSlimHandler() {
      const track = trackRef.current;
      const trackNum = Number(
        track?.style?.transform
          ?.replace("translateX(-", "")
          ?.replace("px)", "") || widthRef.current
      );

      if (track && trackNum > 0) {
        switch (sign) {
          case "+":
            track.style.transform = `translateX(-${
              trackNum + widthRef.current
            }px)`;
            break;
          case "-":
            track.style.transform = `translateX(-${
              trackNum - widthRef.current
            }px)`;
            break;
        }
      }
    };
  };

  return (
    <div id="valensite-faqs" css={faqsContainerCss}>
      <h2 className="faq-header">{valensiteFaqHeader}</h2>
      <div css={carousalContainerCss}>
        <div css={btnsCarousalCss} className="carousal-btns left-btn">
          <FaCircleChevronLeft onClick={clickHandler("-")} />
        </div>
        <div css={carousalWrapperCss}>
          <div css={carousalTrackCss} ref={trackRef}>
            {faqsData.map((faq: (typeof faqsData)[0], index: number) => {
              return (
                <article
                  key={index}
                  className="carousal-items"
                  css={carousalItemCss}
                >
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              );
            })}
          </div>
        </div>
        <div css={btnsCarousalCss} className="carousal-btns right-btn">
          <FaCircleChevronRight onClick={clickHandler("+")} />
        </div>
      </div>
    </div>
  );
}
