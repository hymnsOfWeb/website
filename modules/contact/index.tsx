import { Fragment } from "react";
import Head from "next/head";
import { contactPageMeta } from "@common-data";
import ContactMain from "@modules/contact/contact-main";

function ContactHead() {
  return (
    <Head>
      <title>{contactPageMeta.title}</title>
      <meta name="description" content={contactPageMeta.description} />
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
