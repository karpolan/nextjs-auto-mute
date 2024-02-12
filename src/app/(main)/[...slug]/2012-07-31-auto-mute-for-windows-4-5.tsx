import { Link, Typo } from '@/components';
import { APP_NAME } from '@/config';

export const categories = ['news', 'software', 'feature'];
export const tags = ['software', 'pc', 'version', 'windows'];
export const title = 'Auto Mute for Windows 4.5';
export const content = (
  <>
    <Typo variant="paragraph">
      <strong>{APP_NAME}</strong> 4.5 for Windows has been released.
    </Typo>
    <Typo variant="list">
      <li>
        Added new option to disable Internet features (Check for updates,{' '}
        <Link href="https://karpolan.com/services/ping-notify/">PingNotify&trade; statistics</Link> , etc.)
      </li>
      <li>The memory consumption has been improved.</li>
    </Typo>
    <Typo variant="paragraph">
      Please <Link href="/download/">download the latest version</Link> of software.
    </Typo>
  </>
);
