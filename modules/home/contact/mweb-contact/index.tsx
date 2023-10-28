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

export default function MwebHomeContact() {
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
      <div css={contactSquareCss}>
        <Link href="/" className="contact-cta" css={contactCircleCss}>
          <span className="shadow" css={shadowCss}></span>
          <span className="contact-text">Contact Us</span>
        </Link>
      </div>
      {contactBubbleData.map(bubbleMapper)}
    </div>
  );
}
