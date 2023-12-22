import { type Ref, forwardRef, useEffect, RefObject } from "react";
import dynamic from "next/dynamic";
import { homeLandingTexts } from "@common-data";
import { hiddenMainHeading, landingHeading, landingWrapper } from "./styles";

const TsParticles = dynamic(() => import("@components/ts-particles"), {
  ssr: false,
});

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
      <TsParticles />
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
