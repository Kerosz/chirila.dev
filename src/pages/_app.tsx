// packages
import dynamic from 'next/dynamic';
// components
const Cursor = dynamic(() => import('~components/cursor'), {
  ssr: false,
});
import Preloader from '~/components/preloader';
// types
import type { AppProps } from 'next/app';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Preloader />
      <Cursor />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
