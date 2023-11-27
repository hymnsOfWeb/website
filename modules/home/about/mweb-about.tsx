import { useRef, useCallback, useEffect } from "react";
import { homeAboutTextRibbon } from "@common-data";
import HomeAboutCard from "./about-card";
import { aboutWrapper, mWebRibbonWrapper } from "./styles";

export default function HomeMwebAbout() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardFrontRef = useRef<HTMLDivElement>(null);
  const cardBackRef = useRef<HTMLDivElement>(null);

  const observerCallback = useCallback<IntersectionObserverCallback>(
    (entries) => {
      if (entries[0]?.isIntersecting && window?.innerHeight > 500) {
        cardFrontRef.current?.classList.add("active");
        cardBackRef.current?.classList.add("active");
      } else {
        cardFrontRef.current?.classList.remove("active");
        cardBackRef.current?.classList.remove("active");
      }
    },
    []
  );

  useEffect(() => {
    const observerOption: IntersectionObserverInit = {
      threshold: 0.6,
      root: document,
    };
    const observer: IntersectionObserver = new IntersectionObserver(
      observerCallback,
      observerOption
    );
    const element = wrapperRef?.current;
    if (element) {
      observer.observe(element);
    }
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [observerCallback]);

  const { text } = homeAboutTextRibbon;

  return (
    <div ref={wrapperRef} css={aboutWrapper}>
      <div css={mWebRibbonWrapper}>{text}</div>
      <HomeAboutCard frontRef={cardFrontRef} backRef={cardBackRef} />
    </div>
  );
}
