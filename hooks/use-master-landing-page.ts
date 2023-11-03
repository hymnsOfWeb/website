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

  const allScrollCallbacks = useCallback((scrollPos: number) => {
    const getLandingSpans = (elem: HTMLDivElement) => {
      const spans: HTMLSpanElement[] = Array.from(
        elem?.querySelectorAll(".landing-heading > .main-span-wrapper") ?? []
      );
      return spans as [HTMLSpanElement, HTMLSpanElement];
    };
    const landingTopCallback = (scrollPos: number) => {
      const [spanOne, spanTwo] = getLandingSpans(
        landingRefTop.current as HTMLDivElement
      );
      if (spanOne && spanTwo) {
        spanOne.style.transform = `translateX(${scrollPos * 0.5}px)`;
        spanTwo.style.transform = `translateX(-${scrollPos * 0.5}px)`;
      }
    };

    const aboutRibbonCallback = (scrollPos: number) => {
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

    const landingBottomCallback = (scrollPos: number) => {
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
    };
    landingTopCallback(scrollPos);
    landingBottomCallback(scrollPos);
    aboutRibbonCallback(scrollPos);
  }, []);

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

  const scrollCallback = useCallback<EventListener>(() => {
    const scrollPos = window.scrollY;
    allScrollCallbacks(scrollPos);
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

    if (window.innerWidth > 900) {
      worksCallback();
    }
  }, [allScrollCallbacks]);

  const wheelCallback = useCallback(
    (e: WheelEvent) => {
      const bodyHeight = document.body.scrollHeight;
      const delta = e.deltaY;
      const currentScrollPos = Math.round(window.scrollY);
      if (currentScrollPos < 3 && delta < 0) {
        window.scrollTo({ top: bodyHeight, behavior: "instant" });
        worksReverseWheelCallback();
        return;
      }
      if (currentScrollPos > bodyHeight - window.innerHeight - 3 && delta > 0) {
        window.scrollTo({ top: 0, behavior: "instant" });
        return;
      }
    },
    [worksReverseWheelCallback]
  );

  useEffect(() => {
    window.addEventListener("scroll", scrollCallback);
    window.addEventListener("wheel", wheelCallback);
    const children = Array.from(
      homeRef.current?.querySelectorAll(".home-child") ?? []
    ) as HTMLDivElement[];
    const lastChild = homeRef.current?.querySelector(".home-child-last");
    const lastLand = landingRefBottom.current;
    const miniNavElem = miniNavRef.current;
    const miniNavChildren = Array.from(
      miniNavElem?.children ?? []
    ) as HTMLButtonElement[];

    const miniNavClickHandler: EventListener = (e) => {
      const index = miniNavChildren.indexOf(e.target as HTMLButtonElement);
      if (index > -1) {
        const target = children[index];
        if (target) {
          target.scrollIntoView();
        }
      }
    };

    for (const miniNavChild of miniNavChildren) {
      miniNavChild.addEventListener("click", miniNavClickHandler);
    }

    const miniNavObsvOpts: IntersectionObserverInit = {
      threshold: 0.51,
      root: document,
    };

    const miniNavCallback: IntersectionObserverCallback = (entries) => {
      for (const miniNavChild of miniNavChildren) {
        miniNavChild.classList.remove("active");
      }
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const index = children.indexOf(entry.target as HTMLDivElement);
          let target = miniNavChildren[index];
          if (entry.target === lastLand) {
            target = miniNavChildren[0];
          }
          if (target) {
            target.classList.add("active");
          }
        }
      }
    };

    const miniNavObserver: IntersectionObserver = new IntersectionObserver(
      miniNavCallback,
      miniNavObsvOpts
    );

    for (const homeSection of children) {
      miniNavObserver.observe(homeSection);
    }

    if (lastChild) {
      miniNavObserver.observe(lastChild);
    }

    return () => {
      miniNavObserver.disconnect();
      for (const miniNavChild of miniNavChildren) {
        miniNavChild.removeEventListener("click", miniNavClickHandler);
      }
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
