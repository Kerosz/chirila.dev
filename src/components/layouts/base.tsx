// components
import HtmlHead from '~/components/common/html-head';
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
      <HtmlHead {...customMeta} />
      <Header
        preHeader={
          <Banner
            link='/writing/new-space-version'
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
