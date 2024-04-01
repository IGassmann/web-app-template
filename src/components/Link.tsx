import React from 'react';
import NextLink, { type LinkProps } from 'next/link';
import { DataInteractive as HeadlessDataInteractive } from '@headlessui/react';

const Link = React.forwardRef(
  (
    props: LinkProps & React.ComponentPropsWithoutRef<'a'>,
    reference: React.ForwardedRef<HTMLAnchorElement>,
  ) => (
    <HeadlessDataInteractive>
      <NextLink {...props} ref={reference} />
    </HeadlessDataInteractive>
  ),
);

Link.displayName = 'Link';

export default Link;
