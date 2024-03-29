import { useEffect, useRef } from "react";
import Head from "next/head";
import { homePageMeta, phoneNumber, mail } from "@common-data";
import { ThreeD } from "@components";
import useMasterLandingPage from "@hooks/use-master-landing-page";
import usePhone from "@hooks/use-phone";
import { HomeDwebAbout, HomeMwebAbout } from "@modules/home/about";
import { HomeDwebContact, HomeMwebContact } from "@modules/home/contact";
import { HomeDwebLanding, HomeMwebLanding } from "@modules/home/landing";
import { fillerCss, mainHomeWrapper } from "@modules/home/styles";
import { HomeDwebWork, HomeMwebWork } from "@modules/home/work";

const homeSchemaOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hymns of Web",
  telephone: phoneNumber,
  email: mail,
  url: "https://www.hymnsofweb.com",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: phoneNumber,
      email: mail,
      contactType: "customer service",
    },
  ],
  keywords:
    "hymns,web,web development,web design,web development company,website,\
website development,website design, website development company,website design\
company,web development company in india",
};
function HomeHead() {
  const mapper = (key: string) => {
    return (
      <meta
        property={`og:${key}`}
        content={homePageMeta.og[key as "title"] ?? ""}
        key={`home-og-meta-${key}`}
      />
    );
  };
  return (
    <Head>
      <title>{homePageMeta.title}</title>
      <meta name="description" content={homePageMeta.description} />
      {Object.keys(homePageMeta.og).map(mapper)}
      <link rel="canonical" href="https://hymnsofweb.com" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchemaOrg) }}
      />
    </Head>
  );
}

function HomeDweb() {
  const { heroText, aboutSection, workSection, homeRef } =
    useMasterLandingPage();
  const { landingRefBottom, landingRefTop } = heroText;
  const { aboutRef } = aboutSection;
  const { workRef } = workSection;

  useEffect(() => {
    const homeRefObj = homeRef?.current as HTMLDivElement;
    const targetObjOne = landingRefTop?.current as HTMLDivElement;
    const targetObjTwo = landingRefBottom?.current as HTMLDivElement;

    const obvOptions: IntersectionObserverInit = {
      root: document,
      threshold: 0.75,
    };
    const obvCallback: IntersectionObserverCallback = (entries) => {
      const particles = homeRefObj?.querySelector(
        "#tsparticles"
      ) as HTMLDivElement;
      if (particles) {
        if (entries[0]?.isIntersecting || entries?.[1]?.isIntersecting) {
          particles.style.opacity = "1";
        } else {
          particles.style.opacity = "0";
        }
      }
    };

    const obv: IntersectionObserver = new IntersectionObserver(
      obvCallback,
      obvOptions
    );

    if (targetObjOne && targetObjTwo) {
      obv.observe(targetObjOne);
      obv.observe(targetObjTwo);
      return () => {
        obv.disconnect();
      };
    }
    return;
  });

  return (
    <main id="home" aria-label="home" css={mainHomeWrapper} ref={homeRef}>
      <ThreeD />
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
  const homeRef = useRef<HTMLDivElement>(null);
  const landingRefTop = useRef<HTMLDivElement>(null);

  return (
    <main id="home" aria-label="home" css={mainHomeWrapper} ref={homeRef}>
      <HomeHead />
      <HomeMwebLanding ref={landingRefTop} />
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
