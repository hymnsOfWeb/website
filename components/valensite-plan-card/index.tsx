import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { BsCheck2 } from "react-icons/bs";
import { RiFireFill } from "react-icons/ri";
import { valensitePlans } from "@common-data";
import {
  booleanFeatureStyle,
  booleanFeaturesWrapperStyle,
  checkSvgStyle,
  crossSvgStyle,
  planCardBtnStyle,
  planCardContainerStyle,
  planHeadingStyle,
  planPriceStyle,
  popularIconStyle,
  popularStyle,
  popularTextStyle,
  valuedFeatureStyle,
  valuedFeaturesContainerStyle,
} from "@components/valensite-plan-card/styles";

export default function ValensitePlanCard({
  planData,
}: {
  planData: (typeof valensitePlans)[0];
}) {
  const { booleanFeatures, color, name, price, valuedFeatures, btn, popular } =
    planData;

  const booleanFeatMapper = (
    feat: (typeof booleanFeatures)[0],
    index: number
  ) => {
    return (
      <div key={index} css={booleanFeatureStyle}>
        {feat.approval ? (
          <BsCheck2 css={checkSvgStyle} />
        ) : (
          <AiOutlineClose css={crossSvgStyle} />
        )}
        <span>{feat.featName}</span>
      </div>
    );
  };

  const valuedFeatMapper = (
    feat: (typeof valuedFeatures)[0],
    index: number
  ) => {
    return (
      <div key={index} css={valuedFeatureStyle}>
        <span className="val-feat-name">{feat.featName} :</span>
        <span>{feat.values}</span>
      </div>
    );
  };

  return (
    <div css={planCardContainerStyle}>
      {popular && (
        <div css={popularStyle}>
          <RiFireFill css={popularIconStyle} />
          <span css={popularTextStyle}>Most Popular</span>
        </div>
      )}
      <h3 css={planHeadingStyle(color)}>{name}</h3>
      <div css={planPriceStyle}>
        <span>₹</span>
        <span>{price}</span>
      </div>
      <div css={booleanFeaturesWrapperStyle}>
        {booleanFeatures.map(booleanFeatMapper)}
      </div>
      <div css={valuedFeaturesContainerStyle}>
        {valuedFeatures.map(valuedFeatMapper)}
      </div>
      <Link href={btn.link} css={planCardBtnStyle}>
        {btn.text}
      </Link>
    </div>
  );
}
