import NextHead from 'next/head';
import { NextSeo } from 'next-seo';
import { isBrowser } from '~/utils/dom';

export interface IHtmlHead {
  title?: string;
  description?: string;
}

export default function HtmlHead({ title, description }: IHtmlHead) {
  title = title || 'Andrei Chirila';
  description =
    description ||
    'Persoanl space on the internet to share my work, my thoughts, a bit about myself and my working process, along with get in touch information.';
  const currentLocation = isBrowser ? window.location.href : null;
  const isArticle = currentLocation?.includes('blog');

  return (
    <>
      <NextSeo
        title={title}
        titleTemplate='%s – Developer, writer.'
        description={description}
        canonical='https://www.chirila.dev/'
        openGraph={{
          type: isArticle ? 'article' : 'website',
          locale: 'en_US',
          title,
          description,
          site_name: 'Chirila Andrei',
        }}
        twitter={{
          handle: '@chirila_',
          site: '@chirila_',
          cardType: 'summary_large_image',
        }}
      />
      <NextHead>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#171923' />
        <meta name='msapplication-TileColor' content='#171923' />
        <meta name='msapplication-starturl' content='/' />
        <meta name='msapplication-config' content='/browserconfig.xml' />

        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='manifest' href='/manifest.webmanifest' />

        <link
          rel='apple-touch-icon'
          href='images/apple-touch-icon.png'
          sizes='76x76'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/images/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/images/favicon-16x16.png'
        />
        <link
          rel='mask-icon'
          href='/images/safari-pinned-tab.svg'
          color='#171923'
        />
      </NextHead>
    </>
  );
}
