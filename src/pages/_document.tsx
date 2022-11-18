import { DocumentType } from 'next/dist/shared/lib/utils';
import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument: DocumentType = () => (
  <Html className="bg-white antialiased" lang="en">
    <Head>
      <link rel="icon" type="image/svg+xml" href="/icon.svg" />
      <link rel="icon" sizes="192x192" href="/icon.png" />
      <link rel="apple-touch-icon" href="/icon.png" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
