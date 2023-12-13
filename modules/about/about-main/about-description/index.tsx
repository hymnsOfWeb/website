import { Fragment } from "react";
import { BsInstagram } from "react-icons/bs";
import { aboutDescription, aboutServices } from "@common-data";
import { ImageComp } from "@components";
import {
  aboutDescriptionCss,
  serviceCardCss,
  serviceCardHeadingCss,
  serviceCardParaCss,
  serviceCardsWrapperCss,
  serviceIconContainerCss,
  serviceImgCompCss,
  serviceListCss,
  serviceTextWrapperCss,
  serviceTitleCss,
  servicesHeadingCss,
} from "@modules/about/about-main/about-description/styles";

export const ServiceCards = () => {
  const servicesDataMapper = (
    data: (typeof aboutServices)[0],
    index: number
  ) => {
    return (
      <div
        key={"service-card-" + index}
        css={serviceCardCss}
        className={`_${index + 1}`}
      >
        <div css={serviceTextWrapperCss}>
          <ImageComp
            alt="-"
            src="/assets/images/about-bg.png"
            width={200}
            height={200}
            containerCss={serviceImgCompCss}
            containerClassName="service-img"
            imgSize={{ height: "11vw", width: "11vw" }}
          >
            <span
              css={serviceIconContainerCss}
              className={"service-icon icon-" + index}
            >
              <BsInstagram />
            </span>
          </ImageComp>
          <h3 css={serviceCardHeadingCss}>{data.title}</h3>
          <p css={serviceCardParaCss}>{data.description}</p>
        </div>
      </div>
    );
  };
  return (
    <div css={serviceCardsWrapperCss}>
      {aboutServices.map(servicesDataMapper)}
    </div>
  );
};

export default function AboutDescription() {
  const mapper = (elem: (typeof aboutServices)[0], index: number) => {
    return (
      <p key={index} css={serviceListCss}>
        <span css={serviceTitleCss}>{elem.title}</span>
        <span> : </span>
        <span>{elem.description}</span>
      </p>
    );
  };
  return (
    <div>
      <p css={aboutDescriptionCss}>{aboutDescription}</p>
      <h2 css={servicesHeadingCss}>Our Services</h2>
      <Fragment>{aboutServices.map(mapper)}</Fragment>
      <ServiceCards />
    </div>
  );
}
