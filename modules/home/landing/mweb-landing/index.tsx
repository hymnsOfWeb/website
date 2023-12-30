import {
  useRef,
  useCallback,
  useEffect,
  forwardRef,
  Ref,
  RefObject,
} from "react";
import { homeLandingTexts } from "@common-data";
import { landingWrapper } from "./styles";
import SubText from "@modules/home/landing/sub-text";

const HML = (_: unknown, ref: Ref<HTMLDivElement>) => {
  const landingRef = ref as RefObject<HTMLDivElement>;
  const height = useRef<number>(0.1);
  const allSpans = useRef<HTMLSpanElement[]>([]);
  const arrLength = useRef<number>(0);
  const arrayHalfNum = useRef<number>(0);
  const scrollCallback = useCallback(() => {
    const scrollPos = window.scrollY;
    for (let i = 0; i < arrayHalfNum.current; i++) {
      const span = allSpans.current[i];
      if (span) {
        span.style.transform = `translateX(-${scrollPos / (1 + i)}px)`;
      }
    }
    for (let i = Math.ceil(arrLength.current / 2); i < arrLength.current; i++) {
      const span = allSpans.current[i];
      if (span) {
        span.style.transform = `translateX(${
          scrollPos / (arrLength.current - i)
        }px)`;
      }
    }
  }, []);

  const obvCallback = useCallback<IntersectionObserverCallback>(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        window.addEventListener("scroll", scrollCallback);
      } else {
        window.removeEventListener("scroll", scrollCallback);
      }
      for (const span of allSpans.current) {
        span.style.transform = "translateX(0px)";
      }
    },
    [scrollCallback]
  );

  useEffect(() => {
    const spanArr = Array.from(
      landingRef.current?.children[0]?.children ?? []
    ) as HTMLSpanElement[];
    allSpans.current = spanArr;
    arrLength.current = spanArr.length;

    height.current = landingRef.current?.getBoundingClientRect().height ?? 0.1;
    arrayHalfNum.current = Math.floor(arrLength.current / 2);
    const obvOpts: IntersectionObserverInit = {
      threshold: 0.01,
      root: document,
    };

    const observer = new IntersectionObserver(obvCallback, obvOpts);

    if (landingRef.current) {
      observer.observe(landingRef.current);
    }
    return () => observer.disconnect();
  }, [obvCallback]);

  const joinedHomeLandingText = homeLandingTexts.join(" ").replace(/&/g, "and");

  const words = joinedHomeLandingText.split(" ");

  const mapper = (word: string, index: number) => {
    return <span key={"landing-span-" + index}>{word + " "}</span>;
  };

  return (
    <div css={landingWrapper} ref={landingRef}>
      <h1
        title={joinedHomeLandingText}
        aria-label={joinedHomeLandingText}
        className="landing-heading"
      >
        {words.map(mapper)}
      </h1>
      <SubText />
    </div>
  );
};
const HomeMwebLanding = forwardRef(HML);
export default HomeMwebLanding;
