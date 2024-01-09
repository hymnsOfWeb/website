import { useCallback, useEffect, useRef } from "react";
import ValensiteAbout from "@modules/valensite/valensite-about";
import ValensiteContact from "@modules/valensite/valensite-contact";
import ValensiteFeatures from "@modules/valensite/valensite-features";
import ValensiteLanding from "@modules/valensite/valensite-landing";
import ValensiteNav from "@modules/valensite/valensite-nav";
import ValensitePlans from "@modules/valensite/valensite-plans";

export default function ValensiteModule() {
  const valensiteRef = useRef<HTMLElement>(null);
  const valNavRef = useRef<HTMLDivElement>(null);

  const observerCallback: IntersectionObserverCallback = useCallback(
    (entries) => {
      const anchors = Array.from(
        valNavRef.current?.querySelectorAll(".val-nav-items") ?? []
      );
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const idName = entry.target.getAttribute("id");
          for (const anchor of anchors) {
            if (anchor.classList.contains(`${idName}`)) {
              anchor.classList.add("active");
            } else {
              anchor.classList.remove("active");
            }
          }
        }
        break;
      }
    },
    []
  );
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: document,
      threshold: 0.6,
    };
    const observer: IntersectionObserver = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (valensiteRef.current) {
      const valensiteSections = Array.from(
        valensiteRef.current.childNodes ?? []
      ) as HTMLDivElement[];
      for (const valensiteSection of valensiteSections) {
        if (valensiteSection.getAttribute("id") !== null) {
          observer.observe(valensiteSection);
        }
      }
    }
    return () => {
      observer.disconnect();
    };
  }, [observerCallback]);
  return (
    <section id="valensite" ref={valensiteRef}>
      <ValensiteNav ref={valNavRef} />
      <ValensiteLanding />
      <ValensiteAbout />
      <ValensitePlans />
      <ValensiteFeatures />
      <ValensiteContact />
    </section>
  );
}
