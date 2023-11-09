import Head from "next/head";
import { aboutPageMeta } from "@common-data";

function AboutHead() {
  return (
    <Head>
      <title>{aboutPageMeta.title}</title>
      <meta name="description" content={aboutPageMeta.description} />
    </Head>
  );
}

export default function AboutModule() {
  return (
    <section id="about" aria-label="about">
      <AboutHead />
    </section>
  );
}
