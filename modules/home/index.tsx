import Head from "next/head";
import { homePageMeta } from "@common-data";
import useMasterLandingPage from "@hooks/use-master-landing-page";
import usePhone from "@hooks/use-phone";
import HomeAbout from "@modules/home/about";
import { HomeDwebContact, HomeMwebContact } from "@modules/home/contact";
import HomeLanding from "@modules/home/landing";
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
  const { heroText, aboutSection, workSection } = useMasterLandingPage();
  const { landingRefBottom, landingRefTop } = heroText;
  const { aboutRef } = aboutSection;
  const { workRef } = workSection;
  return (
    <section id="home" aria-label="home" css={mainHomeWrapper}>
      <HomeHead />
      <HomeLanding ref={landingRefTop} />
      <HomeAbout ref={aboutRef} />
      <HomeDwebWork ref={workRef} />
      <HomeDwebContact />
      <HomeLanding ref={landingRefBottom} atBottom />
    </section>
  );
}

function HomeMweb() {
  return (
    <section id="home" aria-label="home" css={mainHomeWrapper}>
      <HomeHead />
      <HomeLanding />
      <HomeAbout />
      <HomeMwebWork />
      <HomeMwebContact />
    </section>
  );
}

export default function HomeModule() {
  const isPhone = usePhone();
  return isPhone ? <HomeMweb /> : <HomeDweb />;
}
