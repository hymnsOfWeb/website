import { type Ref, forwardRef } from "react";
import Link from "next/link";
import { ImageComp } from "@/components";
import { aboutTextRibbon } from "@common-data";
import {
  aboutBgImg,
  aboutCard,
  aboutCardContainer,
  aboutWrapper,
  cardButton,
  ribbonContainer,
  ribbonSpan,
  ribbonWrapper,
  shadow,
  shadowButton,
  textContainer,
} from "./styles";

const CommonCardContent = ({ disabled }: { disabled?: boolean }) => (
  <>
    <span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
      asperiores eligendi nulla optio magni, deserunt, ex sunt minima quisquam
      at illum exercitationem, culpa provident quod nihil veritatis rem
      molestiae? Inventore.
    </span>
    {disabled ? (
      <div css={shadowButton}>Know More</div>
    ) : (
      <Link href="/about" css={cardButton}>
        Know More
      </Link>
    )}
  </>
);

function A(_: unknown, ref: Ref<HTMLDivElement>) {
  const { count, text } = aboutTextRibbon;

  const ribbonSpans = Array(count)
    .fill(text)
    .map((text, index) => {
      return (
        <span key={index} css={ribbonSpan}>
          {text}
        </span>
      );
    });

  return (
    <div ref={ref} css={aboutWrapper}>
      <div className="text-ribbon-wrapper" css={ribbonWrapper}>
        <div className="text-ribbon-container" css={ribbonContainer}>
          {ribbonSpans}
        </div>
      </div>
      <div className="about-card-container" css={aboutCardContainer}>
        <div className="about-card" css={aboutCard}>
          <ImageComp
            src="/assets/images/about-bg.png"
            alt="Hymns of web | Logo"
            containerClassName="about-bg"
            containerCss={aboutBgImg}
          />
          <div className="text-shadow" css={shadow}>
            <CommonCardContent disabled />
          </div>
        </div>
        <div className="about-text-container" css={textContainer}>
          <CommonCardContent />
        </div>
      </div>
    </div>
  );
}
const About = forwardRef(A);
export default About;
