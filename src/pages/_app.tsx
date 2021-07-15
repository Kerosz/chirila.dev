// components
import Cursor from '../components/cursor';
// types
import type { AppProps } from 'next/app';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Cursor />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
