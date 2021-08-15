// components
import Cursor from '~/components/common/cursor';
import Preloader from '~/components/common/preloader';
import ErrorBoundary from '~/components/common/error-boundary';
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
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </>
  );
}
export default MyApp;
