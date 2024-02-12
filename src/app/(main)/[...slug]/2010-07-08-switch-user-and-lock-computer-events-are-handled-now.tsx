import { Typo } from '@/components';
import { APP_NAME } from '@/config';

export const categories = ['news', 'software', 'feature'];
export const tags = ['software', 'pc', 'windows', 'sound'];
export const title = 'Switch User and Lock Computer are handled now!';
export const content = (
  <>
    <Typo variant="paragraph">
      <strong>{APP_NAME}</strong> software starting version 3.3.0.33 additionally mutes the sound on{' '}
      <strong>Lock Computer</strong> and <strong>Switch User</strong> events.
    </Typo>
  </>
);
