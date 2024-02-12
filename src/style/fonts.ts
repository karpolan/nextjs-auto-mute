import { Inter, Poppins } from 'next/font/google';

// Typography from: https://www.figma.com/file/ab4AHDtL6zrf6VsIAejzbm/SaaS-%26-App-Website-I-Saasto-(Community)?node-id=1707%3A7833&mode=dev
const fontPoppins = Poppins({
  weight: ['600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const fontInter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const FONTS = {
  default: fontPoppins,
  poppins: fontPoppins,
  inter: fontInter,
};

export default FONTS;
