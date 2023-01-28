import type { DocumentType } from 'next/dist/shared/lib/utils';
import { Head, Html, Main, NextScript } from 'next/document';

const MyDocument: DocumentType = () => (
  <Html className="h-full bg-white antialiased" lang="en">
    <Head>
      <link rel="icon" type="image/svg+xml" href="/icon.svg" />
      <link rel="icon" sizes="192x192" href="/icon.png" />
      <link rel="apple-touch-icon" href="/icon.png" />
    </Head>
    <body className="h-full">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
