import { SegmentAnalyticsProvider } from '@/features/analytics/SegmentAnalyticsContext';
import '@/styles/tailwind.css';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from '@next/font/google';
import 'focus-visible';
import type { AppType } from 'next/app';
import Head from 'next/head';

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
        <SegmentAnalyticsProvider writeKey={process.env.NEXT_PUBLIC_SEGMENT_ANALYTICS_WRITE_KEY}>
          <Component {...pageProps} />
        </SegmentAnalyticsProvider>
      </ClerkProvider>
    </div>
  </>
);

export default MyApp;
