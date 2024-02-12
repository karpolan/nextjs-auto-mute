import { Link, Typo } from '@/components';
import { APP_NAME } from '@/config';

export const categories = ['news', 'software'];
export const tags = ['software', 'version', 'mac', 'osx', 'pc', 'feature'];
export const title = 'New version for Mac OS X';
export const content = (
  <>
    <Typo variant="paragraph">
      In this release of <strong>{APP_NAME} for Mac</strong> software we&apos;ve changed a layout of user controls, so
      the Windows and Mac editions have the same look. People who use our program on both platforms should be happy :)
    </Typo>
    <Typo variant="paragraph">
      You can download the <strong>{APP_NAME} for Mac</strong> from{' '}
      <Link href="/download/">https://auto-mute.com/download/</Link>
    </Typo>
    <Typo variant="paragraph">
      Please let us know if there are any issues with it. All your comments and ideas are welcome. Thank you!
    </Typo>
  </>
);
