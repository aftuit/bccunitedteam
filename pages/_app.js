import { LangProvider } from "../context.js";
import Head from "next/head";
import { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <StrictMode>
      <LangProvider>
        {/* <Navbar /> */}
        <Head>
          <title>BCC United Team - Zamonaviy uylar</title>
          <meta name="name" content="BCC United Team | Zamonaviy uylar" />
          <meta
            name="description"
            content="BCC United Team - Zamonaviy uylar."
          />
          <meta
            property="og:title"
            content="BCC United Team | Zamonaviy uylar"
          />
        </Head>
        <Component {...pageProps} />
      </LangProvider>
    </StrictMode>
  );
}

export default MyApp;
