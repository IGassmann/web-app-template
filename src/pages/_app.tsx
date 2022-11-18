import { type AppType } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Web App Template</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
