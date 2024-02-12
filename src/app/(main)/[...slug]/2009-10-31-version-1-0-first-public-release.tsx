import { Link, Typo } from '@/components';
import { APP_NAME } from '../../../config';

export const categories = ['news', 'website'];
export const tags = ['software', 'version'];
export const title = 'First public release';
export const content = (
  <>
    <Typo variant="paragraph">{APP_NAME} software has been released!</Typo>
  </>
);
