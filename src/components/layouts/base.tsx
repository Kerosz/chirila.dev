// components
import Head from '~components/common/head';
import Header from '~components/common/header';
import Footer from '~components/common/footer';
import Banner from '~components/common/banner';
//types
import type { ReactNode, ReactElement } from 'react';

export interface ILayout {
  children: ReactNode;
  title?: string;
  description?: string;
}

function Layout({ children, ...customMeta }: ILayout): ReactElement {
  return (
    <>
      <Head {...customMeta} />
      <Header
        preHeader={
          <Banner
            link='/writting/new-space-version'
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
