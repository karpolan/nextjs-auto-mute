import { Link, Typo } from '@/components';
import { APP_NAME } from '@/config';

export const categories = ['news', 'software', 'feature'];
export const tags = ['software', 'version', 'feature', 'pc', 'windows'];
export const title = 'Auto Mute 4.0';
export const content = (
  <>
    <Typo variant="paragraph">
      On our second anniversary we&apos;ve released new major update of <strong>{APP_NAME}</strong> software for
      Windows. There are following changes in <strong>{APP_NAME}</strong> 4.0:
    </Typo>
    <Typo variant="list">
      <li>New option to hide the Tray Icon.</li>
      <li>Software frees unused memory more frequently.</li>
      <li>New program icon and design elements have been added</li>
      <li>
        Added <Link href="https://karpolan.com/services/ping-notify/">PingNotify&trade;</Link> statistics for start,
        stop, openlink and about events
      </li>
    </Typo>
    <Typo variant="paragraph">
      <strong>{APP_NAME}</strong> is compatible with Windows XP/Vista/7, also it may work on Windows 98/Me/2000 with
      some restrictions.
    </Typo>
    <Typo variant="paragraph">
      Software is free, you can download it from: <Link href="/download/">https://auto-mute.com/download/</Link>
    </Typo>
  </>
);
