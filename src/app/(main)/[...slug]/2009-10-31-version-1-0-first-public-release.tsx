import { Typo } from '@/components';
import { APP_NAME } from '@/config';

export const categories = ['news', 'software'];
export const tags = ['software', 'version', 'windows', 'pc'];
export const title = 'First public release';
export const content = (
  <>
    <Typo variant="paragraph">{APP_NAME} software has been released!</Typo>
  </>
);
