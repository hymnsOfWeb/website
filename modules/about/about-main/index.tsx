import AboutDescription from "@modules/about/about-main/about-description";
import AboutTeam from "@modules/about/about-main/about-team";
import { aboutMainContainerCss } from "@modules/about/about-main/styles";

export default function AboutMain() {
  return (
    <div css={aboutMainContainerCss}>
      <AboutDescription />
      <AboutTeam />
    </div>
  );
}
