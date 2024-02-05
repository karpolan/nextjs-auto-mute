import { APP_NAME } from '@/config';
import { PictureProps } from '@/utils';

const DEFAULT_SCREENSHOT: PictureProps = {
  src: '/images/screenshot.png',
  width: 338,
  height: 380,
  alt: `Screenshot of the ${APP_NAME} app`,
};

export const SCREENSHOTS = {
  default: DEFAULT_SCREENSHOT,
  windows: {
    ...DEFAULT_SCREENSHOT,
    alt: `Screenshot of the ${APP_NAME} app under Windows`,
  },
  windowsTray: {
    src: '/images/tray-menu.png',
    width: 211,
    height: 155,
  },
  windowsTrayMuted: {
    src: '/images/tray-icon_muted.png',
    width: 198,
    height: 58,
  },
  windowsTrayUnmuted: {
    src: '/images/tray-icon_unmuted.png',
    width: 198,
    height: 58,
  },
  mac: {
    src: '/images/screenshot-mac.png',
    width: 382,
    height: 428,
    alt: `Screenshot of the ${APP_NAME} app under macOS`,
  },
  macTray: {
    src: '/images/tray-menu_mac.png',
    width: 208,
    height: 150,
  },
};
