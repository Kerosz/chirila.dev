// packages
import { useState } from 'react';
// components
import BlogCard from '~/components/blog/card';
import Layout from '~/components/layouts/base';
import Newsletter from '~/components/common/newsletter';
import FadeIntoView from '~/components/animations/fade-into-view';
import { Container, Typography } from '~/components/ui';
import { FrontMatterWithoutMeta, getAllFilesMeta } from '~/services/mdx';
// types
import type { GetStaticProps, GetStaticPropsResult } from 'next';

interface IStaticProps {
  snippets: FrontMatterWithoutMeta[];
  total: number;
}

export default function SnippetsPage({ snippets, total }: IStaticProps) {
  return (
    <Layout title='Snippets | Andrei Chirila'>
      <FadeIntoView
        as={Container}
        className='text-black-tone pt-28 pb-20 min-h-screen'>
        <div className='flex md:flex-row flex-col justify-between pb-20'>
          <Typography
            as='h1'
            className='text-7xl font-bold md:mr-14 mb-10 md:mb-0'
            resetStyles>
            Snippets
          </Typography>
        </div>

        {snippets.map((s) => (
          <p>{s.slug}</p>
        ))}
      </FadeIntoView>
      <Newsletter />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<IStaticProps> = async (): Promise<
  GetStaticPropsResult<IStaticProps>
> => {
  const snippets = await getAllFilesMeta('snippets');

  return { props: { snippets, total: snippets.length } };
};
