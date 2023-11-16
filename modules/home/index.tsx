import Head from "next/head";
import { homePageMeta } from "@common-data";
import useMasterLandingPage from "@hooks/use-master-landing-page";
import usePhone from "@hooks/use-phone";
import { HomeDwebAbout, HomeMwebAbout } from "@modules/home/about";
import { HomeDwebContact, HomeMwebContact } from "@modules/home/contact";
import { HomeDwebLanding, HomeMwebLanding } from "@modules/home/landing";
import MiniNav from "@modules/home/mini-nav";
import { mainHomeWrapper } from "@modules/home/styles";
import { HomeDwebWork, HomeMwebWork } from "@modules/home/work";

function HomeHead() {
  return (
    <Head>
      <title>{homePageMeta.title}</title>
      <meta name="description" content={homePageMeta.description} />
    </Head>
  );
}

function HomeDweb() {
  const { heroText, aboutSection, workSection, homeRef, miniNavRef } =
    useMasterLandingPage();
  const { landingRefBottom, landingRefTop } = heroText;
  const { aboutRef } = aboutSection;
  const { workRef } = workSection;
  return (
    <section id="home" aria-label="home" css={mainHomeWrapper} ref={homeRef}>
      <HomeHead />
      <HomeDwebLanding ref={landingRefTop} />
      <HomeDwebAbout ref={aboutRef} />
      <HomeDwebWork ref={workRef} />
      <HomeDwebContact />
      <HomeDwebLanding ref={landingRefBottom} atBottom className="infi-clone" />
      <HomeDwebAbout className="infi-clone" />
      <MiniNav ref={miniNavRef} />
    </section>
  );
}

function HomeMweb() {
  return (
    <section id="home" aria-label="home" css={mainHomeWrapper}>
      <HomeHead />
      <HomeMwebLanding />
      <HomeMwebAbout />
      <HomeMwebWork />
      <HomeMwebContact />
    </section>
  );
}

export default function HomeModule() {
  const isPhone = usePhone();
  return isPhone ? <HomeMweb /> : <HomeDweb />;
}
