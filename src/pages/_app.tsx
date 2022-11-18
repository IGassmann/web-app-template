import requireEnvironmentVariable from '@/features/common/requireEnvironmentVariable';
import { type AppType } from 'next/app';
import Head from 'next/head';
import { Inter } from '@next/font/google';
import { SegmentAnalyticsProvider } from '@/features/analytics/SegmentAnalyticsContext';

import '@/styles/tailwind.css';
import 'focus-visible';

const interFont = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const segmentWriteKey = requireEnvironmentVariable('NEXT_PUBLIC_SEGMENT_ANALYTICS_WRITE_KEY');

const MyApp: AppType = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Web App Template</title>
    </Head>
    <div className={`${interFont.variable} font-sans`}>
      <SegmentAnalyticsProvider writeKey={segmentWriteKey}>
        <Component {...pageProps} />
      </SegmentAnalyticsProvider>
    </div>
  </>
);

export default MyApp;
