import { Link, Typo } from '@/components';
import { APP_NAME } from '@/config';

export const categories = ['news', 'software'];
export const tags = ['software', 'pc', 'windows'];
export const title = 'Auto Mute passed official "Windows 7 Logo" test';
export const content = (
  <>
    <Typo variant="paragraph">
      The <strong>{APP_NAME}</strong> software passed official <strong>Windows 7 Logo</strong> test.
    </Typo>
    <Typo variant="paragraph">
      Also we&apos;ve found and fixed a strange bug on Aero desktops when all controls disappear if press the Alt key.
    </Typo>
  </>
);
