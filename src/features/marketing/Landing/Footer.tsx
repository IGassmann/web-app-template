import React from 'react';

import FacebookIcon from '@/features/common/images/social-icons/facebook.svg';
import GithubIcon from '@/features/common/images/social-icons/github.svg';
import InstagramIcon from '@/features/common/images/social-icons/instagram.svg';
import TwitterIcon from '@/features/common/images/social-icons/twitter.svg';
import YoutubeIcon from '@/features/common/images/social-icons/youtube.svg';

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
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/i.gassmann',
    icon: InstagramIcon,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@IGassmann',
    icon: YoutubeIcon,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/igassmann',
    icon: FacebookIcon,
  },
] as const;

const Footer: React.FC = () => (
  <footer>
    <div className="mx-auto max-w-7xl py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
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
          Made by <a href="https://www.igassmann.com">Igor Gassmann</a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
