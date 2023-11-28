import { useEffect } from "react";
import type { AppProps } from "next/app";
import { Nova_Mono as NovaMono, DM_Sans as DmSans } from "next/font/google";
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
