import { useEffect } from "react";
import type { AppProps } from "next/app";
import { Nova_Mono as NovaMono, DM_Sans as DmSans } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import { Global } from "@emotion/react";
import { AppContexProvider } from "@/context";
import Header from "@/modules/header";
import { globalCss, globalFontVarsCss } from "@/styles/globals";
import { consoleMessage } from "@common-data";
import { getClass } from "../utils";

const primary = DmSans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
  preload: false,
});

const mono = NovaMono({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["monospace"],
  preload: false,
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
            mono: mono.style.fontFamily,
          }),
        ]}
      />
      <Header />
      <Component {...pageProps} />
    </AppContexProvider>
  );
}
