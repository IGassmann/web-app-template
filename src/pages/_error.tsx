/**
 * This page is loaded by Next.js:
 *  - on the server, when data-fetching methods throw or reject
 *  - on the client, when `getInitialProps` throws or rejects
 *  - on the client, when a React component throws or rejects, and it's caught by the built-in
 *    Next.js error boundary
 *
 * See:
 *  - https://nextjs.org/docs/basic-features/data-fetching/overview
 *  - https://nextjs.org/docs/api-reference/data-fetching/get-initial-props
 *  - https://reactjs.org/docs/error-boundaries.html
 */

import type { NextPage } from 'next';
import NextErrorComponent, { type ErrorProps } from 'next/error';
import * as Sentry from '@sentry/nextjs';

const CustomErrorComponent: NextPage<ErrorProps> = ({ statusCode }) => (
  <NextErrorComponent statusCode={statusCode} />
);

CustomErrorComponent.getInitialProps = async (contextData) => {
  // Await in order to give Sentry time to send the error before the serverless function exits.
  await Sentry.captureUnderscoreErrorException(contextData);

  Sentry.showReportDialog();

  return NextErrorComponent.getInitialProps(contextData);
};

export default CustomErrorComponent;
