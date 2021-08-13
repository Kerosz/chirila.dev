// components
import Header from '~components/common/header';
import Footer from '~components/common/footer';
import Banner from '~components/common/banner';
import Newsletter from '~components/common/newsletter';
import HtmlHead, { IHtmlHead } from '~/components/common/html-head';
// data
import config from '~data/config';
//types
import type { ReactNode, ReactElement } from 'react';

export interface ILayout extends IHtmlHead {
  children: ReactNode;
}

function Layout({ children, ...customMeta }: ILayout): ReactElement {
  return (
    <>
      <HtmlHead {...customMeta} />
      <Header
        preHeader={
          <Banner
            link={`/${config.blog.path}/new-space-version`}
            text='Welcome to my new space on the internet'
            cta='Learn more about the new version'
          />
        }
      />
      <main className='bg-gray-100'>{children}</main>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Layout;
