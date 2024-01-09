import { valensiteFeaturesData } from "@common-data";
import { ImageComp } from "@components";
import {
  quoteCss,
  valFeatTextWrapperCss,
  valFeaturesContainerCss,
  websiteImgCss,
} from "@modules/valensite/valensite-features/styles";

export default function ValensiteFeatures() {
  const { desc, heading, quote } = valensiteFeaturesData;
  return (
    <div id="valensite-features" css={valFeaturesContainerCss}>
      <div css={valFeatTextWrapperCss}>
        <h2>{heading}</h2>
        <p>{desc}</p>
      </div>
      <ImageComp
        alt="Valensite Website | Hymns Of Web | HOW"
        src="/assets/images/website.png"
        containerCss={websiteImgCss}
      />
      <blockquote css={quoteCss}>{quote}</blockquote>
    </div>
  );
}
