import { Fragment } from "react";
import { aboutDescription, aboutServices } from "@common-data";
import {
  aboutDescriptionCss,
  serviceListCss,
  serviceTitleCss,
  servicesHeadingCss,
} from "@modules/about/about-main/about-description/styles";

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
    </div>
  );
}
