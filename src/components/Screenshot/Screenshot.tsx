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
  variant?: keyof typeof SCREENSHOTS;
}

/**
 * Renders specific screenshot by given variant
 * @component Screenshot
 * @param {string} [variant] - Variant of the screenshot, default is 'default'
 */
const Screenshot: FunctionComponent<Props> = ({ alt, src, variant = 'default', ...restOfProps }) => {
  const onMobile = useOnMobile();
  const screenshot: PictureProps = SCREENSHOTS[variant] ?? SCREENSHOTS.default;
  const altToRender: string = alt ?? String(screenshot.alt);
  const srcToRender = src ?? screenshot.src;

  const sizeMultiplier = onMobile ? 1 : DESKTOP_MULTIPLIER;
  const propsToRender: Props = {
    title: screenshot.title ?? `Screenshot of ${APP_NAME} software`,
    width: Number(screenshot.width) * sizeMultiplier,
    height: Number(screenshot.height) * sizeMultiplier,
    ...restOfProps, // Override with incoming props
  };

  return (
    <Link href="/screenshots/">
      <Image alt={altToRender} src={srcToRender} {...propsToRender} />
    </Link>
  );
};

export default Screenshot;
