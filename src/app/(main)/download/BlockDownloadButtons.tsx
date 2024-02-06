'use client';
import { useOnMobile } from '@/hooks';
import { Stack } from '@/components';
import DownloadButton from '@/components/DownloadButton';
import { FunctionComponent } from 'react';

interface Props {
  variant?: 'windows' | 'mac';
}

/**
 * Renders 2 "Download" buttons in column on mobile and in row on desktop
 * @component BlockDownloadButtons
 */
const BlockDownloadButtons: FunctionComponent<Props> = ({ variant = 'windows' }) => {
  const onMobile = useOnMobile();
  const direction = onMobile ? 'column' : 'row';
  return (
    <Stack direction={direction} padding="1rem" gap="1rem">
      {variant === 'windows' && <DownloadButton file="exe">Download EXE</DownloadButton>}
      {variant === 'windows' && (
        <DownloadButton file="zip" variant="outlined">
          Download ZIP
        </DownloadButton>
      )}
      {variant === 'mac' && <DownloadButton file="dmg">Download DMG</DownloadButton>}
    </Stack>
  );
};

export default BlockDownloadButtons;
