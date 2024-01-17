import { valensiteLandingData } from "@common-data";
import { ImageComp } from "@components";
import { decorImagesData } from "@modules/valensite/valensite-landing/data";
import {
  decorImagesCss,
  valLandingBtnStyle,
  valLandingContainerStyle,
  valLandingIconStyle,
  valLandingSpanStyle,
  valensiteHeadingStyle,
} from "@modules/valensite/valensite-landing/styles";

export default function ValensiteLanding() {
  const clickHandler = () => {
    document.querySelector("#valensite-plans")?.scrollIntoView();
  };
  const { heading, subtext, btn } = valensiteLandingData;
  const { Icon, text } = btn;
  return (
    <div css={valLandingContainerStyle} id="valensite-landing">
      <h1 css={valensiteHeadingStyle}>{heading}</h1>
      <h2 css={valLandingSpanStyle}>{subtext}</h2>
      <button css={valLandingBtnStyle} onClick={clickHandler}>
        <span>{text}</span>
        <Icon css={valLandingIconStyle} />
      </button>
      {decorImagesData.map((data, index: number) => {
        const { height, display, left, name, top, width, phoneLeft, phoneTop } =
          data;
        return (
          <ImageComp
            key={index}
            alt="-"
            src={`/assets/images/valensite/landing-images/${name}.png`}
            containerCss={decorImagesCss(
              top,
              left,
              height,
              width,
              phoneLeft,
              phoneTop,
              display
            )}
          />
        );
      })}
    </div>
  );
}
