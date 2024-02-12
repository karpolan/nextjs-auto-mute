import { Link, Typo } from '@/components';
import { APP_NAME } from '@/config';

export const categories = ['news', 'software'];
export const tags = ['software', 'version', 'website', 'windows', 'pc'];
export const title = 'Auto Mute 3.0 released';
export const content = (
  <>
    <Typo variant="paragraph">{APP_NAME} 3.0 released on June 18, 2010.</Typo>
    <Typo variant="paragraph">
      New sound control core with callback notifications. Installer and uninstaller added. Only single instance allowed.
      New icons and images.
    </Typo>
    <Typo variant="paragraph">
      Distributed from <Link href="/">AUTO-MUTE.COM</Link> website.
    </Typo>
  </>
);
