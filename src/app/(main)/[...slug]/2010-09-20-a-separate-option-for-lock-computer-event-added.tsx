import { Link, Typo } from '@/components';
import { APP_NAME } from '@/config';

export const categories = ['news', 'software', 'feature'];
export const tags = ['software', 'pc', 'windows', 'sound'];
export const title = 'A separate option for Lock Computer event added';
export const content = (
  <>
    <Typo variant="paragraph">
      The <strong>{APP_NAME}</strong> settings became more flexible in version 3.5.0.55. <strong>Lock Computer</strong>{' '}
      event is handled by a separate option now (it was joined with logoff, suspend and shutdown previously).
    </Typo>
    <Typo variant="paragraph">
      You can download the latest version of <strong>{APP_NAME}</strong> at{' '}
      <Link href="/download/">https://auto-mute.com/download/</Link>
    </Typo>
  </>
);
