import { Link, Typo, Wrapper } from '@/components';
import { APP_NAME, PUBLIC_URL } from '@/config';
import { getSoftwareList } from './utils';
import SoftwareListItem from './SoftwareListItem';
import styles from './software.module.css';

/**
 * Renders a page with a list of all Software
 * @page AllSoftware
 */
const AllSoftwarePage = async () => {
  const list = await getSoftwareList();
  return (
    <Wrapper tag="section">
      <Typo variant="header1">{APP_NAME} Alternative Software</Typo>
      <Typo variant="paragraph">
        A plethora of software products similar to <strong>{APP_NAME}</strong> can be found in the market, spanning from
        free programs to commercial utilities. The AUTO-MUTE.COM website offers comprehensive information about these
        alternative software options.
      </Typo>
      <Typo variant="paragraph">
        Investigate the following list of reputable alternatives to the <strong>{APP_NAME}</strong> product:
      </Typo>
      <Typo variant="list" className={styles.list}>
        {list.map((name) => (
          <SoftwareListItem key={name} name={name} />
        ))}
      </Typo>
      <Typo variant="paragraph">
        Moreover, contemplate exploring the <strong>{APP_NAME}</strong> program - an authentic substitute for various
        shareware and freeware solutions. You can <Link href="/download/">download {APP_NAME}</Link> directly from the
        AUTO-MUTE.COM website.
      </Typo>
    </Wrapper>
  );
};

/**
 * MetaData for the page
 */
export const metadata = {
  title: `Software relative to mute the audio and turn off the sound - ${APP_NAME}`,
  alternates: {
    canonical: `${PUBLIC_URL}/software/`,
  },
};

export default AllSoftwarePage;
