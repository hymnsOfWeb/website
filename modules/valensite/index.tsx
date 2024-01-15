import { useCallback, useEffect, useRef } from "react";
import Head from "next/head";
import { mail, phoneNumber, valensitePageMeta } from "@common-data";
import ValensiteAbout from "@modules/valensite/valensite-about";
import ValensiteContact from "@modules/valensite/valensite-contact";
import ValensiteFaqs from "@modules/valensite/valensite-faqs";
import ValensiteFeatures from "@modules/valensite/valensite-features";
import ValensiteLanding from "@modules/valensite/valensite-landing";
import ValensiteNav from "@modules/valensite/valensite-nav";
import ValensitePlans from "@modules/valensite/valensite-plans";

export default function ValensiteModule() {
  const valensiteRef = useRef<HTMLElement>(null);
  const valNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = document.querySelector("#header");
    header?.classList.add("black");
    return () => header?.classList.remove("black");
  }, []);

  const observerCallback: IntersectionObserverCallback = useCallback(
    (entries) => {
      const anchors = Array.from(
        valNavRef.current?.querySelectorAll(".val-nav-items") ?? []
      );
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const idName = entry.target.getAttribute("id");
          for (const anchor of anchors) {
            if (anchor.classList.contains(`${idName}`)) {
              anchor.classList.add("active");
            } else {
              anchor.classList.remove("active");
            }
          }
        }
        break;
      }
    },
    []
  );
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: document,
      threshold: 0.6,
    };
    const observer: IntersectionObserver = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (valensiteRef.current) {
      const valensiteSections = Array.from(
        valensiteRef.current.childNodes ?? []
      ) as HTMLDivElement[];
      for (const valensiteSection of valensiteSections) {
        if (valensiteSection.getAttribute("id") !== null) {
          observer.observe(valensiteSection);
        }
      }
    }
    return () => {
      observer.disconnect();
    };
  }, [observerCallback]);

  const valensiteSchemaOrg = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Valensite | Hymns Of Web",
    telephone: phoneNumber,
    email: mail,
    url: "https://www.hymnsofweb.com/valensite",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: phoneNumber,
        email: mail,
        contactType: "customer service",
      },
    ],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "399.00",
      priceCurrency: "INR",
    },
    keywords:
      "valensite, valentine, valentine's, gift, gift for him, gift for her, boyfriend gift, husband gift, wife gift",
  };

  function ValensiteHead() {
    const mapper = (key: string) => {
      return (
        <meta
          property={`og:${key}`}
          content={valensitePageMeta.og[key as "title"] ?? ""}
          key={`home-og-meta-${key}`}
        />
      );
    };
    return (
      <Head>
        <title>{valensitePageMeta.title}</title>
        <link rel="canonical" href="https://hymnsofweb.com/valensite" />
        {Object.keys(valensitePageMeta.og).map(mapper)}
        <meta name="description" content={valensitePageMeta.description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(valensiteSchemaOrg),
          }}
        />
      </Head>
    );
  }

  return (
    <section id="valensite" ref={valensiteRef}>
      <ValensiteHead />
      <ValensiteNav ref={valNavRef} />
      <ValensiteLanding />
      <ValensiteAbout />
      <ValensitePlans />
      <ValensiteFeatures />
      <ValensiteContact />
      <ValensiteFaqs />
    </section>
  );
}
