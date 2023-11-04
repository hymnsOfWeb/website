import { useRef, useCallback, useEffect } from "react";
import { homeLandingTexts } from "@common-data";
import { landingHeading, landingWrapper, spanCss } from "./styles";

const HomeMwebLanding = () => {
  const landingRef = useRef<HTMLElement>(null);
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

  const words = homeLandingTexts.join(" ").split(" ");

  return (
    <main css={landingWrapper} ref={landingRef}>
      <h1
        css={landingHeading}
        title={homeLandingTexts.join(" ")}
        aria-label={homeLandingTexts.join(" ")}
        className="landing-heading"
      >
        {words.map((word: string, index: number) => {
          return (
            <span key={index} css={spanCss}>
              {word}
            </span>
          );
        })}
      </h1>
    </main>
  );
};
export default HomeMwebLanding;
