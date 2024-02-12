import { Link, Typo } from '@/components';
import { APP_NAME } from '@/config';

export const categories = ['news', 'software'];
export const tags = ['software', 'version', 'mac', 'osx'];
export const title = 'Auto Mute for Mac OS X';
export const content = (
  <>
    <Typo variant="paragraph">
      The beta of <strong>{APP_NAME}</strong> software for <strong>Apple Mac OS</strong> is ready.{' '}
      <strong>
        <Link href="https://www.facebook.com/nikolay.tiushkov">Nikolay Tiushkov</Link>
      </strong>{' '}
      did this great work :)
    </Typo>
    <Typo variant="paragraph">
      You can download <strong>{APP_NAME} for Mac</strong> here:{' '}
      <Link href="/download/">https://auto-mute.com/download/</Link>
    </Typo>
    <Typo variant="paragraph">Please test it, and inform us about any problems or bugs. Thank you!</Typo>
  </>
);
