import useMasterLandingPage from "@/hooks/use-master-landing-page";
import { HomeLanding, HomeAbout, HomeWork } from "@/modules/home";
import HomeContact from "@/modules/home/contact";
import { mainHomeWrapper } from "@/modules/home/styles";

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
      <div css={{ height: "300vh" }}></div>
      <HomeLanding ref={landingRefBottom} atBottom />
    </section>
  );
}
