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
import { getBrowser } from "../utils";

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
    const browser = getBrowser();
    if (browser === "safari") {
      document?.body?.classList.remove("chromium");
      document?.body?.classList.add("safari");
    }
    // eslint-disable-next-line no-console
    return () => console.clear();
  }, []);
  return (
    <AppContexProvider>
      <Head>
        <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TJ387KF9');`}</script>
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TJ387KF9"
          height="0"
          width="0"
          style={{ visibility: "hidden", display: "none" }}
        ></iframe>
      </noscript>

      <Script
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-PWC9JE6P3D"
      ></Script>
      <Script id="ga-analaytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PWC9JE6P3D');`}
      </Script>
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
