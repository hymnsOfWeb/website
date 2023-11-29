import Head from "next/head";
import { aboutPageMeta } from "@common-data";
import AboutLiner from "@modules/about/about-liner";
import AboutMain from "@modules/about/about-main";
import { aboutSectionCss } from "@modules/about/styles";

function AboutHead() {
  const mapper = (key: string, index: number) => {
    return (
      <meta
        property={`og:${key}`}
        content={aboutPageMeta.og[key as "title"] ?? ""}
        key={`about-og-meta-${index}`}
      />
    );
  };
  return (
    <Head>
      <title>{aboutPageMeta.title}</title>
      <meta name="description" content={aboutPageMeta.description} />
      {Object.keys(aboutPageMeta.og).map(mapper)}
    </Head>
  );
}

export default function AboutModule() {
  return (
    <section id="about" aria-label="about" css={aboutSectionCss}>
      <AboutHead />
      <AboutLiner />
      <AboutMain />
    </section>
  );
}
