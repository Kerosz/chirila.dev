// packages
import Head from 'next/head';
// components
import Header from '~components/common/header';
import Footer from '~components/common/footer';
import Banner from '~components/common/banner';
//types
import type { ReactNode, ReactElement } from 'react';

export interface ILayout {
  children: ReactNode;
  title?: string;
}

function Layout({ children, title }: ILayout): ReactElement {
  title = title || 'Andrei Chirila – Developer, writer.';

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
