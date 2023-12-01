import Head from "next/head";
import { homePageMeta } from "@common-data";
import useMasterLandingPage from "@hooks/use-master-landing-page";
import usePhone from "@hooks/use-phone";
import { HomeDwebAbout, HomeMwebAbout } from "@modules/home/about";
import { HomeDwebContact, HomeMwebContact } from "@modules/home/contact";
import { HomeDwebLanding, HomeMwebLanding } from "@modules/home/landing";
import { fillerCss, mainHomeWrapper } from "@modules/home/styles";
import { HomeDwebWork, HomeMwebWork } from "@modules/home/work";

function HomeHead() {
  const mapper = (key: string, index: number) => {
    return (
      <meta
        property={`og:${key}`}
        content={homePageMeta.og[key as "title"] ?? ""}
        key={`home-og-meta-${index}`}
      />
    );
  };
  return (
    <Head>
      <title>{homePageMeta.title}</title>
      <meta name="description" content={homePageMeta.description} />
      {Object.keys(homePageMeta.og).map(mapper)}
    </Head>
  );
}

function HomeDweb() {
  const { heroText, aboutSection, workSection, homeRef } =
    useMasterLandingPage();
  const { landingRefBottom, landingRefTop } = heroText;
  const { aboutRef } = aboutSection;
  const { workRef } = workSection;
  return (
    <main id="home" aria-label="home" css={mainHomeWrapper} ref={homeRef}>
      <HomeHead />
      <HomeDwebLanding ref={landingRefTop} />
      <HomeDwebWork ref={workRef} />
      <HomeDwebAbout ref={aboutRef} />
      <HomeDwebContact />
      <HomeDwebLanding ref={landingRefBottom} atBottom className="infi-clone" />
      <div className="filler" aria-disabled css={fillerCss}></div>
    </main>
  );
}

function HomeMweb() {
  return (
    <main id="home" aria-label="home" css={mainHomeWrapper}>
      <HomeHead />
      <HomeMwebLanding />
      <HomeMwebWork />
      <HomeMwebAbout />
      <HomeMwebContact />
    </main>
  );
}

export default function HomeModule() {
  const isPhone = usePhone();
  return isPhone ? <HomeMweb /> : <HomeDweb />;
}
