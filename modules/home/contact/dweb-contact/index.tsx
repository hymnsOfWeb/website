import { useRef } from "react";
import Link from "next/link";
import { contactBubbleData } from "@common-data";
import { ContactBubble } from "@components";
import { BubbleDataProps } from "@components/contact-bubble/types";
import useMasterDwebContact from "@modules/home/contact/dweb-contact/use-master-dweb-contact";
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

  useMasterDwebContact({ containerRef, linkRef, shadowRef });

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
    <section
      css={contactCss}
      className="home-child"
      aria-labelledby="contact-heading"
    >
      <div css={contactSquareCss} ref={containerRef}>
        <Link
          href="/contact"
          className="contact-cta"
          css={contactCircleCss}
          ref={linkRef}
        >
          <span className="shadow" css={shadowCss} ref={shadowRef}></span>
          <h2 className="contact-text" id="contact-heading">
            Contact Us
          </h2>
        </Link>
      </div>
      {contactBubbleData.map(bubbleMapper)}
    </section>
  );
}
