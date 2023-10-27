import useMasterLandingPage from "@hooks/use-master-landing-page";
import { HomeLanding, HomeAbout, HomeWork, HomeContact } from "@modules/home";
import { mainHomeWrapper } from "@modules/home/styles";

export default function Home() {
  const { heroText, aboutSection, workSection } = useMasterLandingPage();
  const { landingRefBottom, landingRefTop } = heroText;
  const { aboutRef } = aboutSection;
  const { workRef } = workSection;

  return (
    <section id="home" aria-label="home" css={mainHomeWrapper}>
      <HomeLanding ref={landingRefTop} />
      <HomeAbout ref={aboutRef} />
      <HomeWork ref={workRef} />
      <HomeContact />
      <HomeLanding ref={landingRefBottom} atBottom />
    </section>
  );
}
