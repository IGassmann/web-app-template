// @ts-check
const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },

  // Optional build-time configuration for Sentry.
  // See https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#extend-nextjs-configuration
  sentry: {
    // Tunnel sentry events to help circumvent ad-blockers.
    tunnelRoute: '/api/sentry',
  },
  webpack(config, { webpack, dev }) {
    // Configures webpack to handle SVG files with SVGR. SVGR optimizes and transforms SVG files
    // into React components. See https://react-svgr.com/docs/next/

    // Grab the existing rule that handles SVG imports
    // @ts-ignore - this is a private property that is not typed
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    // Tree-shake optional Sentry debug code in production builds.
    // See https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/tree-shaking/#tree-shaking-optional-code
    config.plugins.push(
      new webpack.DefinePlugin({
        __SENTRY_DEBUG__: dev,
      })
    );

    return config;
  },
};

/**
 * Additional config options for the Sentry Webpack plugin. Keep in mind that
 * the following options are set automatically, and overriding them is not
 * recommended:
 *   release, url, org, project, authToken, configFile, stripPrefix,
 *   urlPrefix, include, ignore
 *
 * For all available options:
 * @see {@link https://github.com/getsentry/sentry-webpack-plugin#options}
 */
const sentryWebpackPluginOptions = {
  silent: true,
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
