import Image from 'next/image';
import { APP_NAME, PUBLIC_URL } from '@/config';
import { Screenshot, Stack, Typo, Wrapper } from '@/components';

/**
 * Screenshots page content
 * @page Screenshots
 */
const ScreenshotsPage = () => {
  return (
    <Wrapper tag="article">
      <Typo variant="header2">{APP_NAME} for Windows</Typo>
      <Stack alignItems="center" padding="1rem 0">
        <Screenshot variant="windows" />
        <Screenshot variant="windowsTray" />
        <Screenshot variant="windowsTrayMuted" />
      </Stack>

      <Typo variant="header2">{APP_NAME} for Mac</Typo>
      <Stack alignItems="center" padding="1rem 0">
        <Screenshot variant="mac" />
        <Screenshot variant="macTray" />
      </Stack>

      <Typo variant="header2">Program icon</Typo>
      <Stack alignItems="center" padding="1rem 0">
        <Image alt={`${APP_NAME} icon 256 pixels`} src="/images/icon-256x256.png" width={256} height={256} />
        <Stack alignItems="center" direction="row" gap="1rem" justifyContent="center">
          <Image alt={`${APP_NAME} icon 96 pixels`} src="/images/icon-96x96.png" width={96} height={96} />
          <Image alt={`${APP_NAME} icon 48 pixels`} src="/images/icon-48x48.gif" width={48} height={48} />
          <Image alt={`${APP_NAME} icon 32 pixels`} src="/images/icon-32x32.gif" width={32} height={32} />
          <Image alt={`${APP_NAME} icon 24 pixels`} src="/images/icon-24x24.gif" width={24} height={24} />
          <Image alt={`${APP_NAME} icon 16 pixels`} src="/images/icon-16x16.gif" width={16} height={16} />
        </Stack>
      </Stack>
    </Wrapper>
  );
};

/**
 * MetaData for the page
 */
export const metadata = {
  title: `Screenshots showcasing the features of free sound muting software - ${APP_NAME}`,
  alternates: {
    canonical: `${PUBLIC_URL}/screenshots/`,
  },
};

export default ScreenshotsPage;
