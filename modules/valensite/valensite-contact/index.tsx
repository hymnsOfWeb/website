import Link from "next/link";
import { contactPageData, valContactHeading } from "@common-data";
import {
  valContactContainerStyle,
  valContactGridStyle,
  valContactIconStyle,
  valContactItemStyle,
  valItemSpanCss,
  valItemTitleCss,
} from "@modules/valensite/valensite-contact/style";
import { valPlansTextContainertyle } from "@modules/valensite/valensite-plans/styles";

export default function ValensiteContact() {
  const contactMapper = (elem: (typeof contactPageData)[0], index: number) => {
    const { icon: Icon, title, href, text } = elem;
    return (
      <Link href={href} key={index} css={valContactItemStyle}>
        <Icon css={valContactIconStyle} />
        <span className="text" css={valItemTitleCss}>
          {title}
        </span>
        <span className="text" css={valItemSpanCss}>
          {text}
        </span>
      </Link>
    );
  };
  return (
    <div css={valContactContainerStyle} id="valensite-contact">
      <div css={valPlansTextContainertyle}>
        <h2>{valContactHeading.heading}</h2>
        <span>{valContactHeading.subheading}</span>
      </div>
      <div css={valContactGridStyle}>{contactPageData.map(contactMapper)}</div>
    </div>
  );
}
