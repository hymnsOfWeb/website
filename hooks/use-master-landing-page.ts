import { useCallback, useEffect, useRef } from "react";
import { workData } from "@/common/common-data";

export default function useMasterLandingPage() {
  const landingRefTop = useRef<HTMLDivElement>(null);
  const landingRefBottom = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const miniNavRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  const workPortionSize = useRef<number>(100 / workData.length);
  const outOfGutter = useRef<boolean>(false);

  const worksReverseWheelCallback = useCallback(() => {
    const works = workRef.current;
    const imgContainers: HTMLDivElement[] = Array.from(
      works?.querySelectorAll(".work-carousal-container") ?? []
    );
    for (let i = 1; i < imgContainers.length; i++) {
      const imgContainer = imgContainers[i] as HTMLDivElement;
      imgContainer.style.transform = `translateY(-${i}00%)`;
      const image = imgContainer?.querySelector("img");
      if (image) {
        image.style.transform = `translateY(0%)`;
      }
    }
  }, []);

  const allScrollCallbacks = useCallback(
    (scrollPos: number) => {
      const getLandingSpans = (elem: HTMLDivElement) => {
        const spans: HTMLSpanElement[] = Array.from(
          elem?.querySelectorAll(".landing-heading > .main-span-wrapper") ?? []
        );
        return spans as [HTMLSpanElement, HTMLSpanElement];
      };

      const landingTopCallback = () => {
        const [spanOne, spanTwo] = getLandingSpans(
          landingRefTop.current as HTMLDivElement
        );
        if (spanOne && spanTwo) {
          const calc = scrollPos * 0.5;
          spanOne.style.transform = `translateX(${calc}px)`;
          spanTwo.style.transform = `translateX(-${calc}px)`;
        }
      };

      const aboutRibbonCallback = () => {
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
      };

      const landingBottomCallback = () => {
        const [spanOne, spanTwo] = getLandingSpans(
          landingRefBottom.current as HTMLDivElement
        );
        if (spanOne && spanTwo) {
          const ownTop = landingRefBottom.current?.offsetTop ?? 0;
          const temp = (scrollPos - ownTop) * 0.5;
          const calc = Math.abs(temp);
          if (temp > 0) {
            spanOne.style.transform = `translateX(${calc}px)`;
            spanTwo.style.transform = `translateX(-${calc}px)`;
          } else {
            spanOne.style.transform = `translateX(-${calc}px)`;
            spanTwo.style.transform = `translateX(${calc}px)`;
          }
        }
      };

      const worksCallback = () => {
        const workElement = workRef.current;
        const screenHeight = window?.innerHeight ?? 0;
        const { top = Infinity, bottom = -1 } =
          workElement?.getBoundingClientRect?.() ?? {};
        if (workElement && top <= screenHeight && bottom >= screenHeight) {
          const workElemHeight = workElement.offsetHeight;
          const scrollPercentBig =
            ((-1 * (bottom - workElemHeight - screenHeight)) / workElemHeight) *
            100;
          const scrollPercent = scrollPercentBig;
          const imgWrappers: HTMLDivElement[] = Array.from(
            workElement.querySelectorAll(".work-carousal-container")
          );
          for (let i = 1; i < imgWrappers.length; i++) {
            const imgWrapper = imgWrappers[i];
            const newI = i * workPortionSize.current;
            const transform = i * scrollPercent - newI;
            const tempPercent = (transform * 100) / newI;
            if (imgWrapper) {
              const tempI = 100 * i;
              imgWrapper.style.zIndex = (2 + i).toString();
              if (tempPercent <= tempI) {
                imgWrapper.style.transform = `translateY(-${tempPercent}%)`;
              } else {
                imgWrapper.style.transform = `translateY(-${tempI}%)`;
              }
              const imgContainer: HTMLDivElement | null =
                imgWrapper.querySelector(".work-img-container");
              const img = imgContainer?.querySelector("img");
              if (img) {
                img.style.transform = `translateY(-${tempI - tempPercent}%)`;
              }
            }
          }
          if (imgWrappers?.[0]) {
            if (scrollPercent > workPortionSize.current * 2) {
              imgWrappers[0].style.opacity = "0";
            } else {
              imgWrappers[0].style.opacity = "1";
            }
          }
        }
      };

      const infiCallback = () => {
        const offsetTop = landingRefBottom.current?.offsetTop ?? 0;
        const gutter = 100;
        if (scrollPos < gutter && outOfGutter.current) {
          window.scrollTo({
            top: offsetTop + gutter,
            behavior: "instant",
          });
          worksReverseWheelCallback();
        }
        if (scrollPos > offsetTop + gutter) {
          window.scrollTo({
            top: gutter,
            behavior: "instant",
          });
        }
        if (scrollPos > gutter) {
          outOfGutter.current = true;
        }
      };

      landingTopCallback();
      landingBottomCallback();
      aboutRibbonCallback();
      worksCallback();
      infiCallback();
    },
    [worksReverseWheelCallback]
  );

  const scrollCallback = useCallback<EventListener>(() => {
    const scrollPos = window.scrollY;
    allScrollCallbacks(scrollPos);
  }, [allScrollCallbacks]);

  const wheelCallback = useCallback((e: WheelEvent) => {
    const delta = e.deltaY;
    if (!outOfGutter.current && delta < 0) {
      outOfGutter.current = true;
      window.scrollTo({
        top: landingRefBottom.current?.offsetTop ?? 0,
        behavior: "instant",
      });
      window.scrollTo({
        top: (landingRefBottom.current?.offsetTop ?? 0) + delta,
        behavior: "smooth",
      });
      return;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollCallback);
    window.addEventListener("wheel", wheelCallback, { once: true });
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
    homeRef,
    miniNavRef,
  };
}
