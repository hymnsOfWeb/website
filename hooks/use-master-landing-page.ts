import { useCallback, useEffect, useRef } from "react";

export default function useMasterLandingPage() {
  const landingRefTop = useRef<HTMLDivElement>(null);
  const landingRefBottom = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);

  const getLandingSpans = useCallback((elem: HTMLDivElement) => {
    const spans: HTMLSpanElement[] = Array.from(
      elem?.querySelectorAll(".landing-heading > .main-span-wrapper") ?? []
    );
    return spans as [HTMLSpanElement, HTMLSpanElement];
  }, []);

  const landingTopCallback = useCallback(
    (scrollPos: number) => {
      const [spanOne, spanTwo] = getLandingSpans(
        landingRefTop.current as HTMLDivElement
      );
      if (spanOne && spanTwo) {
        spanOne.style.transform = `translateX(${scrollPos * 0.5}px)`;
        spanTwo.style.transform = `translateX(-${scrollPos * 0.5}px)`;
      }
    },
    [getLandingSpans]
  );

  const landingBottomCallback = useCallback(
    (scrollPos: number) => {
      const [spanOne, spanTwo] = getLandingSpans(
        landingRefBottom.current as HTMLDivElement
      );
      const winHeight = window.innerHeight;
      const docHeight = document.body.offsetHeight;
      const scrollTop = scrollPos;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      const percentMove = 100 - scrollPercent * 100;
      if (spanOne && spanTwo) {
        spanOne.style.transform = `translateX(-${percentMove}%)`;
        spanTwo.style.transform = `translateX(${percentMove}%)`;
      }
    },
    [getLandingSpans]
  );

  const aboutRibbonCallback = useCallback((scrollPos: number) => {
    const ribbonElem = aboutRef.current?.querySelector(
      ".text-ribbon-container"
    );
    const winHeight = window.innerHeight;
    const docHeight = document.body.offsetHeight;
    const scrollPercent = scrollPos / (docHeight - winHeight);
    const percentMove = scrollPercent * 100;
    if (ribbonElem) {
      (
        ribbonElem as HTMLDivElement
      ).style.transform = `translate(-${percentMove}%, 0)`;
    }
  }, []);

  const worksCallback = useCallback(() => {
    const workElement = workRef.current;
    const screenHeight = screen.height;
    const { top = -1, bottom = -1 } =
      workElement?.getBoundingClientRect() ?? {};
    if (workElement && top <= screenHeight && bottom >= screenHeight) {
      const workElemHeight = workElement.offsetHeight;
      const scrollPercent =
        ((-1 * (bottom - workElemHeight - screenHeight)) / workElemHeight) *
        100;
    }
    const numberOfElem = workElement?.querySelector(
      ".work-description-container"
    )?.childElementCount;
  }, []);

  const scrollCallback = useCallback<EventListener>(() => {
    const scrollPos = window.scrollY;
    landingTopCallback(scrollPos);
    landingBottomCallback(scrollPos);
    aboutRibbonCallback(scrollPos);
    worksCallback();
  }, [
    landingTopCallback,
    landingBottomCallback,
    aboutRibbonCallback,
    worksCallback,
  ]);

  const wheelCallback = useCallback((e: WheelEvent) => {
    const bodyHeight = document.body.scrollHeight;
    const delta = e.deltaY;
    const currentScrollPos = Math.round(window.scrollY);
    if (currentScrollPos < 3 && delta < 0) {
      window.scrollTo({ top: bodyHeight, behavior: "instant" });
      // window.scrollTo({ top: bodyHeight + delta, behavior: "smooth" });
      return;
    }
    if (currentScrollPos > bodyHeight - window.innerHeight - 3 && delta > 0) {
      window.scrollTo({ top: 0, behavior: "instant" });
      // window.scrollTo({ top: Math.abs(delta), behavior: "smooth" });
      return;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollCallback);
    window.addEventListener("wheel", wheelCallback);
    return () => {
      window.removeEventListener("scroll", scrollCallback);
      window.removeEventListener("wheel", wheelCallback);
    };
  }, [scrollCallback, wheelCallback]);

  return {
    heroText: {
      landingRefTop,
      landingRefBottom,
    },
    aboutSection: {
      aboutRef,
    },
    workSection: {
      workRef,
    },
  };
}
