import {
  forwardRef,
  Fragment,
  useRef,
  useCallback,
  useEffect,
  Ref,
  RefObject,
} from "react";
import Link from "next/link";
import { aboutTextRibbon } from "@common-data";
import { ImageComp } from "@components";
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
  <Fragment>
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
  </Fragment>
);

function A(_: unknown, ref: Ref<HTMLDivElement>) {
  const aboutCardRef = useRef<HTMLDivElement>(null);

  const observerCallback = useCallback<IntersectionObserverCallback>(
    (entries) => {
      if (entries[0]?.isIntersecting && window?.innerHeight > 500) {
        aboutCardRef.current?.classList.add("hovered");
      } else {
        aboutCardRef.current?.classList.remove("hovered");
      }
    },
    []
  );

  useEffect(() => {
    const observerOption = {
      threshold: 0.9,
      root: null,
    };
    // const screenWidth = window.innerWidth;
    const observer: IntersectionObserver = new IntersectionObserver(
      observerCallback,
      observerOption
    );
    const element = (ref as RefObject<HTMLDivElement>)?.current;
    if (element) {
      observer.observe(element);
    }
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [observerCallback, ref]);

  const { count, text } = aboutTextRibbon;
  const ribbonSpans = Array(count)
    .fill(text)
    .map((text, index) => {
      return (
        <span key={index} css={ribbonSpan} aria-disabled>
          {text}
        </span>
      );
    });

  return (
    <div ref={ref} css={aboutWrapper}>
      <div className="text-ribbon-wrapper" css={ribbonWrapper}>
        <div
          className="text-ribbon-container"
          css={ribbonContainer}
          title="about"
        >
          {ribbonSpans}
        </div>
      </div>
      <div
        className="about-card-container hovered"
        css={aboutCardContainer}
        ref={aboutCardRef}
      >
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
