'use client';
import { useLayoutEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { amplitudeEvent, isAmplitudeInitialized } from '@/lib/amplitude';

/**
 * Adds supporting scripts for Amplitude, also tracks each page view.
 * @injector AmplitudeAnalytics
 */
const AmplitudeAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track each page view with Amplitude
  useLayoutEffect(() => {
    if (!isAmplitudeInitialized()) {
      return; // Do nothing if Amplitude was not initialized
    }

    const eventProperties = {
      location: window.location.href,
      pathname,
    };
    amplitudeEvent('page', eventProperties);
  }, [
    pathname,
    searchParams, // Also track all search params changes even when the page remain the same
  ]);

  return null; // No need to render anything
};

export default AmplitudeAnalytics;
