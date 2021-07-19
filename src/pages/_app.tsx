// components
import Preloader from '~/components/preloader';
import Cursor from '~/components/cursor';
// types
import type { AppProps } from 'next/app';

import '~/styles/globals.css';

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
