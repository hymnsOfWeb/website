import { useRef } from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { BsCheck2 } from "react-icons/bs";
import { RiFireFill } from "react-icons/ri";
import { phoneNumber, valensitePlans } from "@common-data";
import Modal from "@components/modal";
import {
  booleanFeatureStyle,
  booleanFeaturesWrapperStyle,
  checkSvgStyle,
  crossSvgStyle,
  helperBtnStyle,
  ctaBtnStyle,
  planCardContainerStyle,
  planHeadingStyle,
  planPriceStyle,
  popularIconStyle,
  popularStyle,
  popularTextStyle,
  valuedFeatureStyle,
  valuedFeaturesContainerStyle,
  btnContainerCss,
} from "@components/valensite-plan-card/styles";

export default function ValensitePlanCard({
  planData,
}: {
  planData: (typeof valensitePlans)[0];
}) {
  const {
    booleanFeatures,
    color,
    name,
    price,
    valuedFeatures,
    primaryBtn,
    secondaryBtn,
    popular,
    dialogList,
  } = planData;
  const modalRef = useRef<HTMLDialogElement>(null);
  const messageRef = useRef<string>("");
  messageRef.current = encodeURIComponent(
    `Hey! I would like to buy your ${name} plan for Valensite. Thank you.`
  );

  const clickHandler = () => {
    const modal = modalRef.current;
    if (modal) {
      modal.showModal();
      document.body.style.setProperty("overflow-y", "hidden");
    }
  };

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

  const spanMapper = (elem: string, index: number) => {
    return <span key={index}>{elem}</span>;
  };

  const valuedFeatMapper = (
    feat: (typeof valuedFeatures)[0],
    index: number
  ) => {
    return (
      <div key={index} css={valuedFeatureStyle}>
        <span className="val-feat-name">{feat.featName} :</span>
        <span>{feat.values}</span>
        {feat.multipleValues?.map(spanMapper)}
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
      <div css={btnContainerCss}>
        <Link
          href={`https://wa.me/${phoneNumber}?text=${messageRef?.current}`}
          css={ctaBtnStyle}
        >
          {primaryBtn.text}
        </Link>
        <button css={helperBtnStyle} onClick={clickHandler}>
          {secondaryBtn.text}
        </button>

        <Modal ref={modalRef} name={name} color={color} list={dialogList} />
      </div>
    </div>
  );
}
