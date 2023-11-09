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
  return (
    <section id="contact" aria-label="contact" css={contactContainerCss}>
      <h1 css={contactHeadingCss}>Contact Us</h1>
      <div css={contactCardsContainerCss}>
        {contactPageData.map((elem, index: number) => {
          const { icon: Icon, title, href, text } = elem;
          return (
            <Link href={href} key={index} css={contactCardCss}>
              <Icon css={contactIconCss} />
              <h3 css={contactCardTitleCss} className="text">
                {title}
              </h3>
              <p css={contactParaCss} className="text">
                {text}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
