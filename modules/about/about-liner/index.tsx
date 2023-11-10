import { aboutPageHeading } from "@common-data";
import { aboutLinerCss } from "@modules/about/about-liner/styles";

export default function AboutLiner() {
  return <h1 css={aboutLinerCss}>{aboutPageHeading}</h1>;
}
