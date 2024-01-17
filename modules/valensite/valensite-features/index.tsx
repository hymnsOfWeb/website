import { useEffect, useRef } from "react";
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
  const quoteRef = useRef<HTMLQuoteElement>(null);
  useEffect(() => {
    const quoteElem = quoteRef.current;
    const randomNum = Math.floor(
      Math.random() * valensiteFeaturesData.quote.length
    );
    if (quoteElem) {
      quoteElem.innerText = quote[randomNum] ?? "";
    }
  }, [quote]);
  return (
    <div id="valensite-features" css={valFeaturesContainerCss}>
      <div css={valFeatTextWrapperCss}>
        <h2 className="val-feat-h2">{heading}</h2>
        <p className="val-feat-para">{desc}</p>
      </div>
      <ImageComp
        alt="Valensite Website | Hymns Of Web | HOW"
        src="/assets/images/valensite/website.png"
        containerCss={websiteImgCss}
      />
      <blockquote css={quoteCss} ref={quoteRef}></blockquote>
    </div>
  );
}
