import Link from "next/link";
import { contactPageData } from "@common-data";
import {
  contactCardCss,
  contactCardTitleCss,
  contactCardsContainerCss,
  contactContainerCss,
  contactHeadingCss,
  contactIconCss,
  contactParaCss,
} from "@modules/contact/contact-main/style";

export default function ContactMain() {
  const contactMapper = (elem: (typeof contactPageData)[0], index: number) => {
    const { icon: Icon, title, href, text } = elem;
    return (
      <Link href={href} key={index} css={contactCardCss}>
        <Icon css={contactIconCss} />
        <h2 css={contactCardTitleCss} className="text">
          {title}
        </h2>
        <p css={contactParaCss} className="text">
          {text}
        </p>
      </Link>
    );
  };
  return (
    <section id="contact" aria-label="contact" css={contactContainerCss}>
      <h1 css={contactHeadingCss}>Contact Us</h1>
      <div css={contactCardsContainerCss}>
        {contactPageData.map(contactMapper)}
      </div>
    </section>
  );
}
