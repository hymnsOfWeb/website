import type { Ref, RefObject } from "react";
import Link from "next/link";
import { homeAboutCard } from "@common-data";
import { ImageComp } from "@components";
import {
  cardBack,
  cardButton,
  cardButtonHeading,
  cardContainer,
  cardFront,
  cardText,
  cardWrapper,
  commonBoxStyle,
  flipBox,
} from "@modules/home/about/styles";

const HomeAboutCard = ({
  frontRef,
  backRef,
}: {
  frontRef?: Ref<HTMLDivElement>;
  backRef?: Ref<HTMLDivElement>;
}) => {
  const clickHandler = () => {
    const frontElement = (frontRef as RefObject<HTMLDivElement>)?.current;
    const backElement = (backRef as RefObject<HTMLDivElement>)?.current;
    if (frontElement && backElement) {
      frontElement.classList.toggle("active");
      backElement.classList.toggle("active");
    }
  };
  return (
    <div css={cardWrapper}>
      <div css={cardContainer}>
        <div css={flipBox}>
          <ImageComp
            containerRef={frontRef}
            containerCss={[cardFront, commonBoxStyle]}
            containerOnClick={clickHandler}
            src={homeAboutCard.img.src}
            alt={homeAboutCard.img.alt}
          />
          <div
            ref={backRef}
            css={[cardBack, commonBoxStyle]}
            onClick={clickHandler}
          >
            <p css={cardText}>{homeAboutCard.text}</p>
            <Link css={cardButton} href={homeAboutCard.href}>
              <h2 css={cardButtonHeading}>{homeAboutCard.buttonText}</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeAboutCard;
