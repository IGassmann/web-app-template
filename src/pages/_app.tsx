import { type AppType } from 'next/app';
import Head from 'next/head';
import { Inter } from '@next/font/google';

import '@/styles/tailwind.css';
import 'focus-visible';

const interFont = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const MyApp: AppType = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Web App Template</title>
    </Head>
    <div className={`${interFont.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  </>
);

export default MyApp;
