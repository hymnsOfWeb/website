import { useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { contactBubbleData } from "@common-data";
import { ContactBubble } from "@components";
import { BubbleDataProps } from "@components/contact-bubble/types";
import {
  contactCircleCss,
  contactCss,
  contactSquareCss,
  shadowCss,
} from "./styles";

export default function DwebHomeContact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const shadowRef = useRef<HTMLSpanElement>(null);

  const observerOptions = useRef<IntersectionObserverInit>({
    threshold: 1,
  });

  const observerCallback: IntersectionObserverCallback = useCallback(
    (entries) => {
      if (entries) {
        // console.log(entries[0]?.isIntersecting);
      }
    },
    []
  );

  const mouseMoveCallback = useCallback((e: MouseEvent) => {
    const container = containerRef.current;
    if (container) {
      const { left, top, height, width } = container.getBoundingClientRect();
      const xPos = e.clientX - left;
      const yPos = e.clientY - top;
      const xPercentage = 100 - (45 + (xPos * 100) / width / 10);
      const yPercentage = 100 - (45 + (yPos * 100) / height / 10);
      if (linkRef.current) {
        linkRef.current.style.transition = "none";
        linkRef.current.style.transform = `translate(-${xPercentage}%, -${yPercentage}%)`;
      }
    }
  }, []);

  const mouseLeaveCallback = useCallback(() => {
    if (linkRef.current) {
      linkRef.current.style.transition = "transform 3s ease";
      linkRef.current.style.transform = "translate(-50%, -50%)";
    }
  }, []);

  const mouseEnterCallback = useCallback((e: MouseEvent) => {
    const contactLink = linkRef.current;
    const shadow = shadowRef.current;
    if (contactLink) {
      const { clientX, clientY } = e;
      const { left, top } = contactLink.getBoundingClientRect();
      const xPos = clientX - left;
      const yPos = clientY - top;
      if (shadow) {
        shadow.style.top = `${yPos}px`;
        shadow.style.left = `${xPos}px`;
        shadow.style.opacity = "1";
      }
    }
  }, []);

  const contactLeaveCallback = useCallback((e: MouseEvent) => {
    const contactLink = linkRef.current;
    const shadow = shadowRef.current;
    if (contactLink) {
      const { clientX, clientY } = e;
      const { left, top } = contactLink.getBoundingClientRect();
      const xPos = clientX - left;
      const yPos = clientY - top;
      if (shadow) {
        shadow.style.opacity = "0";
        shadow.style.top = `${yPos}px`;
        shadow.style.left = `${xPos}px`;
      }
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const contactLink = linkRef.current;
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions.current
    );
    if (container) {
      container.addEventListener("mousemove", mouseMoveCallback);
      container.addEventListener("mouseleave", mouseLeaveCallback);
      observer.observe(container);
    }
    if (contactLink) {
      contactLink.addEventListener("mouseenter", mouseEnterCallback);
      contactLink.addEventListener("mouseleave", contactLeaveCallback);
    }
    return () => {
      if (container) {
        container.removeEventListener("mouseover", mouseMoveCallback);
        observer.unobserve(container);
      }
    };
  }, [
    mouseMoveCallback,
    mouseLeaveCallback,
    mouseEnterCallback,
    contactLeaveCallback,
    observerCallback,
  ]);
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
    <div css={contactCss}>
      <div css={contactSquareCss} ref={containerRef}>
        <Link
          href="/"
          className="contact-cta"
          css={contactCircleCss}
          ref={linkRef}
        >
          <span className="shadow" css={shadowCss} ref={shadowRef}></span>
          <span className="contact-text">Contact Us</span>
        </Link>
      </div>
      {contactBubbleData.map(bubbleMapper)}
    </div>
  );
}
