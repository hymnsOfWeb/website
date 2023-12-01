import {
  forwardRef,
  useRef,
  useCallback,
  useEffect,
  Ref,
  RefObject,
} from "react";
import { homeAboutTextRibbon } from "@common-data";
import { DwebAboutProps } from "@modules/home/about/types";
import HomeAboutCard from "./about-card";
import {
  aboutWrapper,
  ribbonContainer,
  ribbonSpan,
  ribbonWrapper,
} from "./styles";

function A(props: DwebAboutProps, ref: Ref<HTMLDivElement>) {
  const { className } = props;
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
    // const screenWidth = window.innerWidth;
    const observer: IntersectionObserver = new IntersectionObserver(
      observerCallback,
      observerOption
    );
    const element = (ref as RefObject<HTMLDivElement>)?.current;
    if (element) {
      observer.observe(element);
    }
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [observerCallback, ref]);

  const { count, text } = homeAboutTextRibbon;
  const ribbonSpans = Array(count)
    .fill(text)
    .map((text, index) => {
      return (
        <span key={index} css={ribbonSpan} aria-disabled>
          {text}
        </span>
      );
    });

  return (
    <section
      ref={ref}
      css={aboutWrapper}
      className={`home-child ${className ?? ""}`}
    >
      <div className="text-ribbon-wrapper" css={ribbonWrapper}>
        <div
          className="text-ribbon-container"
          css={ribbonContainer}
          title="about"
        >
          {ribbonSpans}
        </div>
      </div>
      <HomeAboutCard frontRef={cardFrontRef} backRef={cardBackRef} />
    </section>
  );
}
const About = forwardRef(A);
export default About;
