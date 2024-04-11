import { Metadata } from 'next';

import { getClientConfig } from '@/config/client';
import { getServerConfig } from '@/config/server';
import { OFFICIAL_URL } from '@/const/url';

import pkg from '../../package.json';

const title = 'ChatGPT';
const { description, homepage } = pkg;

const { SITE_URL = OFFICIAL_URL } = getServerConfig();
const { BASE_PATH } = getClientConfig();

// if there is a base path, then we don't need the manifest
const noManifest = !!BASE_PATH;

const metadata: Metadata = {
  appleWebApp: {
    statusBarStyle: 'black-translucent',
    title,
  },
  description,
  icons: {
    apple:
      'https://registry.npmmirror.com/@lobehub/assets-emoji-anim/1.0.0/files/assets/ghost.webp',
    icon: 'https://registry.npmmirror.com/@lobehub/assets-emoji-anim/1.0.0/files/assets/ghost.webp',
    shortcut:
      'https://registry.npmmirror.com/@lobehub/assets-emoji-anim/1.0.0/files/assets/ghost.webp',
  },
  manifest: noManifest ? undefined : '/manifest.json',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    description: description,
    images: [
      {
        alt: title,
        height: 360,
        url: 'https://registry.npmmirror.com/@lobehub/assets-emoji-anim/1.0.0/files/assets/ghost.webp',
        width: 480,
      },
      {
        alt: title,
        height: 720,
        url: 'https://registry.npmmirror.com/@lobehub/assets-emoji-anim/1.0.0/files/assets/ghost.webp',
        width: 960,
      },
    ],
    locale: 'en-US',
    siteName: title,
    title: title,
    type: 'website',
    url: homepage,
  },

  title: {
    default: title,
    template: '%s · ChatGPT',
  },
  twitter: {
    card: 'summary_large_image',
    description,
    images: [
      'https://registry.npmmirror.com/@lobehub/assets-emoji-anim/1.0.0/files/assets/ghost.webp',
    ],
    site: '@lobehub',
    title,
  },
};

export default metadata;
