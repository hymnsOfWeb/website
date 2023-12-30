import { Fragment } from "react";
import { aboutPageHeading } from "@common-data";
import { aboutLinerCss } from "@modules/about/about-liner/styles";

export default function AboutLiner() {
  const mapper = (line: string, index: number) => {
    return (
      <Fragment key={index + "_about_main_line"}>
        {line}
        <br />
      </Fragment>
    );
  };
  return (
    <h1 css={aboutLinerCss}>{aboutPageHeading.split("\n").map(mapper)}</h1>
  );
}
