import { useEffect } from "react";
import type { AppProps } from "next/app";
import LocalFont from "next/font/local";
import Head from "next/head";
import Script from "next/script";
import { Global } from "@emotion/react";
import { AppContexProvider } from "@/context";
import Header from "@/modules/header";
import { globalCss, globalFontVarsCss } from "@/styles/globals";
import { consoleMessage } from "@common-data";
import { getClass } from "../utils";

const primary = LocalFont({
  src: [
    {
      path: "../public/assets/fonts/outfit.ttf",
      style: "normal",
      weight: "200",
    },
    {
      path: "../public/assets/fonts/outfit.ttf",
      style: "normal",
      weight: "300",
    },
    {
      path: "../public/assets/fonts/outfit.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../public/assets/fonts/outfit.ttf",
      style: "normal",
      weight: "500",
    },
    {
      path: "../public/assets/fonts/outfit.ttf",
      style: "normal",
      weight: "600",
    },
    {
      path: "../public/assets/fonts/outfit.ttf",
      style: "normal",
      weight: "700",
    },
  ],
  display: "swap",
  fallback: ["sans-serif"],
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(consoleMessage);
    const bodyClass = getClass();
    document?.body?.classList.remove("chromium");
    document?.body?.classList.add(bodyClass);
    // eslint-disable-next-line no-console
    return () => console.clear();
  }, []);
  return (
    <AppContexProvider>
      <Head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TJ387KF9"
          height="0"
          width="0"
          style={{ visibility: "hidden", display: "none" }}
        ></iframe>
      </noscript>
      <Script src="/gtm-script.js" async defer id="gtm-script" />
      <Script
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-PWC9JE6P3D"
        defer
        id="gtm-manager"
      />
      <Script
        async
        defer
        id="ga-analaytics"
        strategy="afterInteractive"
        src="/ga-analytics-script.js"
      />
      <Global
        styles={[
          globalCss,
          globalFontVarsCss({
            primary: primary.style.fontFamily,
          }),
        ]}
      />
      <Header />
      <Component {...pageProps} />
    </AppContexProvider>
  );
}
