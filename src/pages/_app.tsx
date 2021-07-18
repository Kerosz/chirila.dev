// components
import Cursor from '~/components/cursor';
import CursorManager from '~components/cursor/cursor-manager';
// types
import type { AppProps } from 'next/app';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CursorManager>
      <Cursor />
      <Component {...pageProps} />
    </CursorManager>
  );
}
export default MyApp;
