import { useCallback, useEffect, useState } from "react";
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
  serviceTextWrapperCss,
  servicesHeadingCss,
} from "@modules/about/about-main/about-description/styles";

export const ServiceCards = ({
  accessProperty = "mainImgSrc",
}: {
  accessProperty: "imgSrc" | "mainImgSrc";
}) => {
  const servicesDataMapper = (
    data: (typeof aboutServices)[0],
    index: number
  ) => {
    const { icon: Icon, title, description } = data;
    return (
      <div
        key={"service-card-" + index}
        css={serviceCardCss}
        className={`_${index + 1}`}
      >
        <div css={serviceTextWrapperCss}>
          <ImageComp
            alt="-"
            src={data[accessProperty]}
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
              <Icon />
            </span>
          </ImageComp>
          <h3 css={serviceCardHeadingCss}>{title}</h3>
          <p css={serviceCardParaCss}>{description}</p>
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
  const [accessPropState, setAccessPropState] = useState<
    "imgSrc" | "mainImgSrc"
  >("mainImgSrc");
  const resizeCallback = useCallback(() => {
    if (innerWidth > 900) {
      setAccessPropState("imgSrc");
    } else {
      setAccessPropState("mainImgSrc");
    }
  }, []);
  useEffect(() => {
    if (innerWidth > 900) {
      setAccessPropState("imgSrc");
    }
    window.addEventListener("resize", resizeCallback);
    return () => window.removeEventListener("resize", resizeCallback);
  }, [resizeCallback]);
  return (
    <div>
      <p css={aboutDescriptionCss}>{aboutDescription}</p>
      <h2 css={servicesHeadingCss}>Our Services</h2>
      <ServiceCards accessProperty={accessPropState} />
    </div>
  );
}
