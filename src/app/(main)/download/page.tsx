import { APP_NAME, APP_VERSION, PUBLIC_URL } from '@/config';
import { Link, Typo, Wrapper } from '@/components';
import BlockDownloadButtons from './BlockDownloadButtons';
import ListOtherSoftware from './ListOtherSoftware';

/**
 * Content of Download page
 * @page Download
 */
const PageDownload = () => {
  return (
    <Wrapper tag="article">
      <Typo variant="paragraph">
        <strong>{APP_NAME}</strong> is distributed as Freeware. You can download and use our software absolutely free.
        It is created just for fun&trade; by <Link href="https://karpolan.com">KARPOLAN</Link>.
      </Typo>

      <Typo variant="header2">Download {APP_NAME} for Windows</Typo>
      <Typo variant="paragraph">
        <strong>{APP_NAME}</strong> works on any desktop and server version of Windows either 32 or 64 bits. Software is
        tested and compatible with Windows XP/Vista/7/8/10/11. Should work on Win 9x/NT4/2000 except some features.
      </Typo>
      <BlockDownloadButtons variant="windows" />
      <Typo variant="paragraph">
        Simply run the downloaded file and follow the instructions of the installation wizard. You will be able to start{' '}
        <strong>{APP_NAME}</strong> using the Programs menu (Start button) or by clicking the program icon on your
        desktop. Actually, you will not have to do that, because the program automatically runs after the installation
        and on the system start.
      </Typo>

      <Typo variant="header2">Download {APP_NAME} for Mac</Typo>
      <Typo variant="paragraph">
        Mac edition of <strong>{APP_NAME}</strong> software works on Mac OS X v10.5 or later.
      </Typo>
      <BlockDownloadButtons variant="mac" />
      <Typo variant="paragraph">Mac version is not always up to date, but we are working on this :)</Typo>

      <Typo variant="header2">Other useful Software</Typo>
      <Typo variant="paragraph">
        Take a look at other software created by <Link href="https://karpolan.com">KARPOLAN</Link> and his friends,
        maybe you&apos;ll find something interesting for you:
      </Typo>
      <ListOtherSoftware />
    </Wrapper>
  );
};

/**
 * MetaData for the page
 */
export const metadata = {
  title: `Download free software to make computer silent - ${APP_NAME}`,
  alternates: {
    canonical: `${PUBLIC_URL}/download/`,
  },
};

export default PageDownload;
