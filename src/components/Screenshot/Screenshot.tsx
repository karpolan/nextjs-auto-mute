'use client';
import { FunctionComponent } from 'react';
import Image, { ImageProps } from 'next/image';
import { APP_NAME } from '@/config';
import { useOnMobile } from '@/hooks';
import { PictureProps } from '@/utils';
import Link from '../Link';
import { SCREENSHOTS } from './config';

const DESKTOP_MULTIPLIER = 1.5;

interface Props extends Partial<ImageProps> {
  href?: string;
  variant?: keyof typeof SCREENSHOTS;
}

/**
 * Renders specific screenshot by given variant
 * @component Screenshot
 * @param {string} [href] - Link to the page with screenshots, default is '/screenshots/'
 * @param {string} [variant] - Variant of the screenshot, default is 'default'
 */
const Screenshot: FunctionComponent<Props> = ({
  alt,
  href = '/screenshots/',
  src,
  title,
  variant = 'default',
  ...restOfProps
}) => {
  const onMobile = useOnMobile();
  const sizeMultiplier = onMobile ? 1 : DESKTOP_MULTIPLIER;

  const screenshot: PictureProps = SCREENSHOTS[variant] ?? SCREENSHOTS.default;
  const altToRender: string = alt ?? String(screenshot.alt);
  const srcToRender = src ?? screenshot.src ?? `Screenshot of the ${APP_NAME} app`;
  const titleToRender = title ?? screenshot.title ?? `Screenshot of ${APP_NAME} software`;
  const propsToRender: Props = {
    width: Number(screenshot.width) * sizeMultiplier,
    height: Number(screenshot.height) * sizeMultiplier,
    ...restOfProps, // Override with incoming props
  };

  return (
    <Link href={href}>
      <Image alt={altToRender} src={srcToRender} title={titleToRender} {...propsToRender} />
    </Link>
  );
};

export default Screenshot;
