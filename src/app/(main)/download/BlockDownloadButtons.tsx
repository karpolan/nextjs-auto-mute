'use client';
import { useOnMobile } from '@/hooks';
import { Stack } from '@/components';
import DownloadButton from '@/components/DownloadButton';
import { FunctionComponent } from 'react';

interface Props {
  variant?: 'all' | 'windows' | 'mac';
}

/**
 * Renders 2 "Download" buttons in column on mobile and in row on desktop
 * @component BlockDownloadButtons
 */
const BlockDownloadButtons: FunctionComponent<Props> = ({ variant = 'all' }) => {
  const onMobile = useOnMobile();
  const direction = onMobile ? 'column' : 'row';
  return (
    <Stack direction={direction} padding="1rem" gap="1rem">
      {['all', 'windows'].includes(variant) && <DownloadButton file="exe">Download EXE</DownloadButton>}
      {['all', 'windows'].includes(variant) && (
        <DownloadButton file="zip" variant="outlined">
          Download ZIP
        </DownloadButton>
      )}
      {['all', 'mac'].includes(variant) && <DownloadButton file="dmg">Download DMG</DownloadButton>}
    </Stack>
  );
};

export default BlockDownloadButtons;
