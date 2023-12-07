import { type Ref, forwardRef, useCallback, useMemo } from "react";
import getid from "@common/getid";
import { homeLandingTexts } from "@common-data";
import {
  charContainer,
  hiddenMainHeading,
  landingHeading,
  landingWrapper,
  lowerChar,
  upperChar,
} from "./styles";

interface HomeLandingProps {
  atBottom?: boolean;
  className?: string;
}

function HL(props: HomeLandingProps, ref: Ref<HTMLDivElement>) {
  const { atBottom = false, className } = props;
  const firstSplit = homeLandingTexts[0].split("");
  const secondSplit = homeLandingTexts[1].split("");
  const joinedHomeLandingText = homeLandingTexts.join(" ");

  const ids = useMemo<string[]>(() => {
    const arr = [];
    const length = Math.max(firstSplit.length, secondSplit.length);
    for (let i = 0; i < length; i++) {
      arr.push(getid());
    }
    return arr;
  }, [firstSplit, secondSplit]);

  const mapper = useCallback(
    (char: string, index: number, arr: string[]) => {
      return (
        <span
          key={arr === firstSplit ? "ar1" + ids[index] : "ar2" + ids[index]}
          css={charContainer}
          className="char-container"
        >
          <span css={upperChar} className="upper-char">
            {char}
          </span>
          <span css={lowerChar} className="lower-char">
            {char}
          </span>
        </span>
      );
    },
    [ids, firstSplit]
  );

  const commonJsx = (
    <>
      <span className="main-span-wrapper">{firstSplit.map(mapper)}</span>
      <span className="main-span-wrapper">{secondSplit.map(mapper)}</span>
    </>
  );

  const topJsx = (
    <div
      css={landingWrapper}
      ref={atBottom ? undefined : ref}
      className={`home-child ${className ?? ""}`}
    >
      <h1
        css={hiddenMainHeading}
        title={joinedHomeLandingText}
        aria-label={joinedHomeLandingText}
      >
        {joinedHomeLandingText}
      </h1>
      <span
        css={landingHeading}
        title={joinedHomeLandingText}
        aria-label={joinedHomeLandingText}
        className="landing-heading"
        aria-hidden
        aria-disabled
      >
        {commonJsx}
      </span>
    </div>
  );
  const bottomJsx = (
    <div
      css={landingWrapper}
      ref={atBottom ? ref : undefined}
      className={`home-child-last ${className ?? ""}`}
    >
      <span
        css={landingHeading}
        title={homeLandingTexts.join(" ")}
        aria-label={homeLandingTexts.join(" ")}
        className="landing-heading"
      >
        {commonJsx}
      </span>
    </div>
  );
  return atBottom ? bottomJsx : topJsx;
}
const HomeDwebLanding = forwardRef<HTMLDivElement, HomeLandingProps>(HL);
export default HomeDwebLanding;
