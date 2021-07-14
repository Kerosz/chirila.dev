// packages
import Head from 'next/head';
// components
import Header from './header';
import Footer from './footer';
//types
import type { ReactNode, ReactElement } from 'react';
import Banner from './banner';

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

      <Header
        preHeader={
          <Banner
            link='#'
            text='Welcome to my new space on the internet'
            cta='Learn more about the new version'
          />
        }
      />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
