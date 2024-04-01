import React from 'react';

import GithubIcon from './social-icons/github.svg';
import TwitterIcon from './social-icons/twitter.svg';

const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/i_gassmann',
    icon: TwitterIcon,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/igassmann',
    icon: GithubIcon,
  },
] as const;

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {socialLinks.map((socialLink) => (
            <a
              key={socialLink.name}
              href={socialLink.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{socialLink.name}</span>
              <socialLink.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            Made by <a href="https://igassmann.me/">Igor Gassmann</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
