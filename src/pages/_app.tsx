// components
import Preloader from '~/components/preloader';
import Cursor from '~/components/cursor';
import useScrollToTop from '~/hooks/use-scroll-to-top';
// types
import type { AppProps } from 'next/app';

import '~/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useScrollToTop();

  return (
    <>
      <Preloader />
      <Cursor />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
