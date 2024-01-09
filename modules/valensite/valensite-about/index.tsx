import { HeartCouple } from "@assets/illustrations";
import { valensiteAbout, valensiteFeatures } from "@common-data";
import {
  coupleSvgStyle,
  featIconWrapperStyle,
  featureIconStyle,
  featureStyle,
  featuresContainerStyle,
  featuresHeadingStyle,
  valAboutContainerStyle,
  valAboutTextWrapperStyle,
} from "@modules/valensite/valensite-about/styles";

export default function ValensiteAbout() {
  const featuresMapper = (
    feature: (typeof valensiteFeatures)[0],
    index: number
  ) => {
    const { Icon, text } = feature;
    return (
      <div key={index} css={featureStyle}>
        <span css={featIconWrapperStyle}>
          <Icon css={featureIconStyle} />
        </span>
        <span>{text}</span>
      </div>
    );
  };
  return (
    <div css={valAboutContainerStyle} id="valensite-about">
      <div css={valAboutTextWrapperStyle}>
        <h2>{valensiteAbout.heading}</h2>
        <p>{valensiteAbout.description}</p>
      </div>
      <div css={featuresContainerStyle}>
        <h3 css={featuresHeadingStyle}>Key Features</h3>
        {valensiteFeatures.map(featuresMapper)}
      </div>
      <HeartCouple cssVal={coupleSvgStyle} />
    </div>
  );
}
