import { Link, Typo } from '@/components';
import { APP_NAME } from '@/config';

export const categories = ['news', 'social'];
export const tags = ['website', 'internet', 'facebook', 'social'];
export const title = 'Auto Mute on Facebook';
export const content = (
  <>
    <Typo variant="paragraph">
      <strong>{APP_NAME}</strong> has an official page on <strong>Facebook</strong>. Short link is:{' '}
      <Link href="https://www.facebook.com/automute">http://www.facebook.com/automute</Link>
    </Typo>
    <Typo variant="paragraph">Please visit and "Like" it :)</Typo>
  </>
);
