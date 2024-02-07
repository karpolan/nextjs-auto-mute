'use client';
import { FunctionComponent } from 'react';
import { APP_NAME } from '@/config';
import { gaPageView } from '@/lib/ga';
import Button, { ButtonProps } from '../Button/Button';

const LINKS = {
  exe: '/files/auto-mute.exe',
  zip: '/files/auto-mute.zip',
  dmg: '/files/auto-mute.dmg',
};

const FILES = {
  // exe: 'https://_S3_BUCKET_NAME_.s3.us-east-2.amazonaws.com/software/_PRODUCT_INSTALLER_.exe',
  // zip: 'https://_S3_BUCKET_NAME_.s3.us-east-2.amazonaws.com/software/_PRODUCT_INSTALLER_.zip',
  exe: '/files/auto-mute.exe',
  zip: '/files/auto-mute.zip',
  dmg: '/files/auto-mute.dmg',
};

interface Props extends ButtonProps {
  file?: keyof typeof FILES;
}

/**
 * Renders "Download" button
 * @component DownloadButton
 */
const DownloadButton: FunctionComponent<Props> = ({ children, file = 'exe', ...restOfProps }) => {
  const hrefToTrack = LINKS[file];
  const hrefToDownload = FILES[file];
  return (
    <Button
      href={hrefToDownload}
      title={`Download ${APP_NAME} software installation package as ${file.toUpperCase()} file`}
      onClick={
        () => gaPageView(hrefToTrack) // Notify Google Analytics about file download
        // Note: Amplitude event is fired automatically
      }
      {...restOfProps}
    >
      {children || 'Download'}
    </Button>
  );
};

export default DownloadButton;
