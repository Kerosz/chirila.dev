// components
import dynamic from 'next/dynamic';
// components
import CursorManager from '~components/cursor/cursor-manager';
const Cursor = dynamic(() => import('~/components/cursor'), {
  ssr: false,
});
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
