import { Fragment } from "react";
import Head from "next/head";
import { contactPageMeta } from "@common-data";
import ContactMain from "@modules/contact/contact-main";

function ContactHead() {
  const mapper = (key: string, index: number) => {
    return (
      <meta
        property={`og:${key}`}
        content={contactPageMeta.og[key as "title"] ?? ""}
        key={`contact-og-meta-${index}`}
      />
    );
  };
  return (
    <Head>
      <title>{contactPageMeta.title}</title>
      <meta name="description" content={contactPageMeta.description} />
      {Object.keys(contactPageMeta.og).map(mapper)}
      <link rel="canonical" href="https://hymnsofweb.com/contact" />
    </Head>
  );
}

export default function ContactModule() {
  return (
    <Fragment>
      <ContactHead />
      <ContactMain />
    </Fragment>
  );
}
