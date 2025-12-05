import { type Metadata } from 'next';
import Script from 'next/script';
import { ClerkProvider } from '@clerk/nextjs';

import '@/styles/globals.css';

import Analytics from '@/app/(analytics)/Analytics';

export const metadata: Metadata = {
  title: {
    template: '%s - Web App Template',
    default: 'Web App Template - An opinionated template for building web apps.',
  },
  description: 'An opinionated template for building web apps.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-white antialiased">
      <head>
        {process.env.NODE_ENV === 'development' && (
          <>
            <Script
              src="//unpkg.com/react-grab/dist/index.global.js"
              strategy="beforeInteractive"
            />
            <Script
              src="//unpkg.com/@react-grab/claude-code/dist/client.global.js"
              strategy="lazyOnload"
            />
          </>
        )}
      </head>
      <body className="h-full">
        <ClerkProvider>
          {children}
          <Analytics />
        </ClerkProvider>
      </body>
    </html>
  );
}
