// packages
import Head from 'next/head';
// components
import Header from './header';
import Footer from './footer';
//types
import type { ReactNode, ReactElement } from 'react';

export interface ILayout {
  children: ReactNode;
  title: string;
}

function Layout({ children, title }: ILayout): ReactElement {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
