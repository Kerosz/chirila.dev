// packages
import NextHead from 'next/head';
import Script from 'next/script';
import { NextSeo } from 'next-seo';
// internals
import { isBrowser } from '~/utils/dom';

export interface IHtmlHead {
  title?: string;
  description?: string;
  image?: string;
  publishedTime?: string;
  tags?: string[];
}

export default function HtmlHead({
  title,
  description,
  image,
  publishedTime,
  tags,
}: IHtmlHead) {
  title = title || 'Andrei Chirila';
  image = image || 'https://www.chirila.dev/images/blog/banner.jpg';
  description =
    description ||
    'Persoanl space on the internet to share my work, my thoughts, a bit about myself and my working process, along with get in touch information.';
  const currentLocation = isBrowser ? window.location.href : null;
  const isArticle = currentLocation?.includes('writing');

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
          images: [
            {
              url: image,
              width: 1600,
              height: 900,
              alt: title,
            },
          ],
          article: {
            publishedTime,
            tags,
          },
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

        <meta name='twitter:image' content={image} />

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
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script strategy='lazyOnload'>{`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`}</Script>
    </>
  );
}
