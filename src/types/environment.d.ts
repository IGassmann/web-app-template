declare namespace NodeJS {
  // eslint-disable-next-line unicorn/prevent-abbreviations -- This is a standard Node.js interface, so we can't change its name.
  interface ProcessEnv {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
    NEXT_PUBLIC_SEGMENT_ANALYTICS_WRITE_KEY: string;
    CLERK_SECRET_KEY: string;
  }
}
