import Link from "next/link";
import { valensiteLandingData } from "@common-data";
import {
  valLandingBtnStyle,
  valLandingContainerStyle,
  valLandingIconStyle,
  valLandingSpanStyle,
  valensiteHeadingStyle,
} from "@modules/valensite/valensite-landing/styles";

export default function ValensiteLanding() {
  const { heading, subtext, btn } = valensiteLandingData;
  const { Icon, link, text } = btn;
  return (
    <div css={valLandingContainerStyle} id="valensite-landing">
      <h1 css={valensiteHeadingStyle}>{heading}</h1>
      <span css={valLandingSpanStyle}>{subtext}</span>
      <Link href={link} css={valLandingBtnStyle}>
        <span>{text}</span>
        <Icon css={valLandingIconStyle} />
      </Link>
    </div>
  );
}
