import { valensiteAbout, valensiteFeatures } from "@common-data";
import { ImageComp } from "@components";
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

  const paraMapper = (para: string, index: number) => {
    return (
      <p className="para-about-val" key={index}>
        {para}
      </p>
    );
  };
  return (
    <div css={valAboutContainerStyle} id="valensite-about">
      <div css={valAboutTextWrapperStyle}>
        <h2
          className="h2-about-val
h2-about-val"
        >
          {valensiteAbout.heading}
        </h2>
        {valensiteAbout.description.map(paraMapper)}
      </div>
      <div css={featuresContainerStyle}>
        <h3 css={featuresHeadingStyle}>Key Features</h3>
        {valensiteFeatures.map(featuresMapper)}
      </div>
      <ImageComp
        alt="Couple holding hands| Digital Valentine's Gift | Valensite | Hymns Of Web"
        src="/assets/images/valensite/love-couple.png"
        containerCss={coupleSvgStyle}
      />
    </div>
  );
}
