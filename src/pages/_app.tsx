// components
import Preloader from '~/components/preloader';
import Cursor from '~/components/cursor';
import useRouterControl from '~/hooks/use-router-control';
// types
import type { AppProps } from 'next/app';

import '~/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useRouterControl();

  return (
    <>
      <Preloader />
      <Cursor />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
