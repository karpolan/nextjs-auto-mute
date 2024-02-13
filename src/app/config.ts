import { APP_NAME, PUBLIC_URL } from '@/config';

export const OPEN_GRAPH_DEFAULT = {
  url: PUBLIC_URL,

  siteName: `${APP_NAME} Software`,
  title: APP_NAME,
  description: `Free software utility to make PC and Mac silent when it's turning on or is waking up.`,

  images: [
    {
      url: `${PUBLIC_URL}/img/social/icon-256x256.png`,
      width: 256,
      height: 256,
    },
    {
      url: `${PUBLIC_URL}/img/social/screenshot-338x380.png`,
      width: 338,
      height: 380,
    },
  ],
};
