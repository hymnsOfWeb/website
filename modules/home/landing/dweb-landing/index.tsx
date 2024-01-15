import { type Ref, forwardRef } from "react";
import { homeLandingTexts } from "@common-data";
import SubText from "@modules/home/landing/sub-text";
import { hiddenMainHeading, landingHeading, landingWrapper } from "./styles";

interface HomeLandingProps {
  atBottom?: boolean;
  className?: string;
}

function HL(props: HomeLandingProps, ref: Ref<HTMLDivElement>) {
  const { atBottom = false, className } = props;
  const joinedHomeLandingText = homeLandingTexts.join(" ");

  const commonJsx = (
    <>
      <span className="main-span-wrapper">{homeLandingTexts[0]}</span>
      <span className="main-span-wrapper">{homeLandingTexts[1]}</span>
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
      <SubText />
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
      <SubText />
    </div>
  );
  return atBottom ? bottomJsx : topJsx;
}
const HomeDwebLanding = forwardRef<HTMLDivElement, HomeLandingProps>(HL);
export default HomeDwebLanding;
