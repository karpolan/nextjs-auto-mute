import { APP_NAME, PUBLIC_URL } from '@/config';
import { Link, Screenshot, SocialMedia, Stack, Typo, Wrapper } from '@/components';
import BlockDownloadButtons from '../download/BlockDownloadButtons';

/**
 * Home page content
 * @page Home
 */
const HomePage = () => {
  const appName = <strong>{APP_NAME}</strong>;

  return (
    <Wrapper tag="article">
      <Typo variant="header2">The problem</Typo>
      <Typo variant="paragraph">
        Are you frequently engaged in conferences, public meetings, or night-time work on your laptop when others are
        asleep? Perhaps you find yourself working in libraries, attending lectures, or needing your laptop in quiet
        environments.
      </Typo>
      <Typo variant="paragraph">
        A shared challenge in all these scenarios is the loud &quot;ta-dam!&quot; or music sound that laptops often make
        when opened or closed. This can be highly disruptive, potentially distracting colleagues, waking up family
        members, or causing a sudden startle for yourself.
      </Typo>

      <Typo variant="header2">Solutions</Typo>
      <Typo variant="paragraph">There are several solutions for this problem:</Typo>
      <Typo variant="list">
        <li>
          You can just turn off the sound on your laptop before closing it. But I bet you will forget about this 9 times
          from 10.
        </li>
        <li>
          You can change sound scheme in your operating system settings and disable annoying sounds. Do you know how to
          do this? It will take some time to find all needed events and turn them off. And what if you need to turn
          these sounds on again? Not a good solution to edit the sound scheme each time you need to switch sounds.
        </li>
        <li>
          You can just <Link href="/download/">download and run</Link> a simple application that mutes your laptop on
          logoff and keeps it quiet on logon. {appName} software does exactly what you need!
        </li>
      </Typo>

      <Typo variant="header1">The {APP_NAME} software</Typo>
      <Typo variant="paragraph">
        Let&apos;s expand the situation further. A lot of applications are started automatically when you turn the
        laptop on. And definitely some of them (Instant messengers, Steam, Discord, etc) produce sounds on start. So if
        you wish your system to start quietly, you would need to turn off sounds or change sound schemes for all
        applications of this kind. And the first thing to do after installing a new application will be turning its
        sounds off. Not a convenient solution. {appName} solves this problem by keeping your laptop quiet until you
        manually enable its sound using some keyboard shortcut or by double clicking {appName} icon in the system tray.
      </Typo>
      <Stack alignItems="center">
        <Screenshot variant="windowsTray" />
        <Screenshot variant="macTray" />
      </Stack>
      <Typo variant="paragraph">
        Even if you work in office and your colleagues have accustomed to sounds produced by your laptop, sometimes it
        is needed to mute it. Imagine that you&apos;ve stepped away from your computer; screen saver started working and
        locked your laptop from access. And then completely out of the blue some application starts playing sounds -
        Skype is calling, system or virus monitor is producing alerts, etc. Does anybody in your office know how to mute
        your particular laptop? Probably no. {appName} will mute your laptop automatically when a screen saver starts,
        so it won&apos;t annoy your colleagues when you are away.
      </Typo>
      <BlockDownloadButtons />
      <Typo variant="paragraph">
        You don&apos;t need to pay anything to use {appName} software, it is free. You can{' '}
        <Link href="/download/">download it right now!</Link>
      </Typo>

      <Typo variant="header2">Social Media</Typo>
      <Typo variant="paragraph">
        Connect with our team through various social media channels. Choose the one that suits you best:
      </Typo>
      <SocialMedia variant="full" />
    </Wrapper>
  );
};

/**
 * MetaData for the page
 */
export const metadata = {
  title: `Free software designed to prevent disturbing others with loud sounds - ${APP_NAME}`,
  alternates: {
    canonical: PUBLIC_URL,
  },
};

export default HomePage;
