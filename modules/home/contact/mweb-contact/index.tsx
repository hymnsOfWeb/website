import { useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { contactBubbleData } from "@common-data";
import { ContactBubble } from "@components";
import { BubbleDataProps } from "@components/contact-bubble/types";
import {
  contactCircleCss,
  contactCss,
  contactSquareCss,
  contactTextCss,
  iconsContainerStyle,
} from "./styles";

export default function MwebHomeContact() {
  const circleRef = useRef<HTMLAnchorElement>(null);
  const egRef = useRef<HTMLDivElement>(null);
  const observerCallback = useCallback<IntersectionObserverCallback>(
    (entries) => {
      const circle = circleRef.current;
      if (entries[0]?.isIntersecting) {
        circle?.classList.add("in-view");
      } else {
        circle?.classList.remove("in-view");
      }
    },
    []
  );
  useEffect(() => {
    const container = egRef.current;
    const observerOptions = {
      threshold: 0.98,
      root: document,
    };
    const observer: IntersectionObserver = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    if (container) {
      observer.observe(container);
    }
    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, [observerCallback]);
  const bubbleMapper = (data: BubbleDataProps, index: number) => {
    return (
      <ContactBubble
        {...data}
        key={"contact-bubble-" + index}
        className="contact-bubble-name"
      />
    );
  };
  return (
    <section css={contactCss} ref={egRef} aria-labelledby="contact-heading">
      <div css={contactSquareCss}>
        <Link
          href="/contact"
          className="contact-cta"
          css={contactCircleCss}
          ref={circleRef}
        >
          <h2
            className="contact-text"
            css={contactTextCss}
            id="contact-heading"
          >
            Contact Us
          </h2>
        </Link>
      </div>
      <div className="icons-container" css={iconsContainerStyle}>
        {contactBubbleData.map(bubbleMapper)}
      </div>
    </section>
  );
}
