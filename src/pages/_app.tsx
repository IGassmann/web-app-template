import type { AppType } from 'next/app';
import Head from 'next/head';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from '@next/font/google';

import Analytics from '@/features/analytics/Analytics';
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
      <ClerkProvider {...pageProps}>
        <Analytics>
          <Component {...pageProps} />
        </Analytics>
      </ClerkProvider>
    </div>
  </>
);

export default MyApp;
