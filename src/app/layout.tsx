import { type Metadata } from 'next';

import '@/styles/globals.css';
import Analytics from '@/features/analytics/Analytics';

export const metadata: Metadata = {
  title: {
    template: '%s - Web App Template',
    default: 'Web App Template - An opinionated template for building web apps.',
  },
  description: 'An opinionated template for building web apps.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-white antialiased">
      <body className="h-full">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
