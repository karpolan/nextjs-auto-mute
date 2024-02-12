import { Typo } from '@/components';
import { APP_NAME } from '@/config';

export const categories = ['news', 'software'];
export const tags = ['software', 'pc', 'intel', 'windows'];
export const title = 'Intel® Software Partner';
export const content = (
  <>
    <Typo variant="paragraph">
      <strong>{APP_NAME}</strong> has been listed in{' '}
      {/* <Link href="http://software.intel.com/swfinder/productpage/tabid/85/language/en-us/p-8525-auto-mute.aspx"> */}
      <strong>Intel&reg; Software Partner Program</strong>
      {/* </Link> */}!
    </Typo>
  </>
);
