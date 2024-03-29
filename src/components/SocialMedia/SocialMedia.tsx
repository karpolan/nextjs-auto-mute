import { FunctionComponent } from 'react';
import { APP_NAME } from '@/config';
import { ObjectPropByName } from '@/utils';
import { Button } from '@/components';
import Stack, { StackProps } from '../Stack/Stack';

export const SOCIAL_MEDIA: ObjectPropByName = {
  facebook: {
    href: 'https://www.facebook.com/automute/',
    title: `Follow ${APP_NAME} on Facebook`,
  },
  twitter: {
    href: 'https://twitter.com/AutoMute/',
    title: `Follow ${APP_NAME} on Twitter`,
  },
  linkedin: {
    href: 'https://www.linkedin.com/in/karpolan/',
    title: `Follow Author of ${APP_NAME} on LinkedIn`,
  },
  instagram: {
    href: 'https://www.instagram.com/karpolan/',
    title: `Follow Author of ${APP_NAME} on Instagram`,
  },
  youtube: {
    href: 'https://www.youtube.com/user/karpolan',
    title: `Follow Author of ${APP_NAME} on YouTube`,
  },
};

interface Props extends StackProps {
  variant?: 'full' | 'footer';
}

/**
 * Renders list of social media links as icons
 * @component SocialMedia
 */
const SocialMedia: FunctionComponent<Props> = ({ variant = 'full', ...restOfProps }) => {
  const iconsToRender = variant === 'footer' ? ['facebook', 'twitter', 'linkedin'] : Object.keys(SOCIAL_MEDIA);
  return (
    <Stack direction="row" justifyContent="center" {...restOfProps}>
      {iconsToRender.map((key) => (
        <Button key={key} icon={key} href={SOCIAL_MEDIA[key].href} title={SOCIAL_MEDIA[key].title} variant="icon" />
      ))}
    </Stack>
  );
};

export default SocialMedia;
