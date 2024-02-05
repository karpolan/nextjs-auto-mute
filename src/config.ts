import { envRequired, getCurrentEnvironment } from '@/utils/environment';

export const IS_DEBUG = process.env.NEXT_PUBLIC_DEBUG === 'true'; // Enables logging, etc.

export const IS_PRODUCTION = getCurrentEnvironment() === 'production'; // Enables analytics, etc.
// export const IS_PRODUCTION =  process.env.NEXT_PUBLIC_ENV === 'production'; // Enables analytics, etc.

export const PUBLIC_URL = envRequired(process.env.NEXT_PUBLIC_PUBLIC_URL);

export const APP_NAME = 'Auto Mute';
export const APP_SHORT_NAME = 'AutoMute';
export const APP_VERSION = '4.5.0.71';
export const APP_VER = '4.5';
